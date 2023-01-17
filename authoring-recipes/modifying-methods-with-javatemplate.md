# Modifying methods with JavaTemplate

This tutorial will demonstrate how the `JavaTemplate` can be used to manipulate and change a method declaration using rewrite's refactoring capabilities. You will build a recipe that modifies the `setCustomerInfo()` method in the following class:

```java
package com.yourorg;

public abstract class Customer {
    private Date dateOfBirth;
    private String firstName;
    private String lastName;

    public abstract void setCustomerInfo(String lastName);
}
```

The recipe and associated visitor will:

* Define a method body and remove the abstract modifier
* Add two additional parameters to the method declaration
* Add two additional statements to the method declaration's body

The resulting refactored class will look like this:

```java
package com.yourorg;

import java.util.Date;

public abstract class Customer {
    private Date dateOfBirth;
    private String firstName;
    private String lastName;

    public void setCustomerInfo(Date dateOfBirth, String firstName, String lastName){
        this.dateOfBirth = dateOfBirth;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

This guide assumes you've already set up your [Recipe Development Environment](recipe-development-environment.md).

## Define a recipe & visitor

Create a new class that extends `org.openrewrite.Recipe`. This recipe will act as a wrapper around a visitor we will build to target the method `com.yourorg.Customer.setCustomerInfo()`and this recipe does not require any additional configuration properties. 
The visitor is defined as an inner class to the recipe because it is not intended to be used outside the context of the recipe.

```java
package org.openrewrite.samples;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.tree.J.MethodDeclaration;

public class ExpandCustomerInfo extends Recipe {
    @Override
    public String getDisplayName() {
        return "Expand Customer Info";
    }

    @Override
    public String getDescription() {
        return "Expand the `CustomerInfo` class with new fields.";
    }

    @Override
    public JavaIsoVisitor<ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {

            // Used to identify the method declaration that will be refactored
            private final MethodMatcher methodMatcher = new MethodMatcher("com.yourorg.Customer setCustomerInfo(String)");

            @Override
            public MethodDeclaration visitMethodDeclaration(MethodDeclaration m, ExecutionContext c) {
                if (!methodMatcher.matches(m.getMethodType())) {
                    return m;
                }
                //TODO - Implement Refactoring operations on the matching "setCustomerInfo()" method declaration.
                return m;
            }
        };
    }
}

```

## Add a method body to `setCustomerInfo()`

Within the visitor implementation, we will add logic to remove the abstract modifier from the method and use the `JavaTemplate` to add a method body to declaration. This is accomplished by defining a `JavaTemplate` that represents the method body as an instance variable within the `ExpandCustomerInfoVisitor`:

```java
    return new JavaIsoVisitor<ExecutionContext>() {
        ...
        // Template used to add a method body to "setCustomerInfo()" method declaration.
        private final JavaTemplate addMethodBodyTemplate = JavaTemplate.builder(this::getCursor, "")
                .build();
         ...
    }
```

{% hint style="info" %}
When using a template to replace a method's body, the template must include the open and closing curly braces.
{% endhint %}

The method is then replaced with a copy that removes the abstract modifier and the template is then used within the visitMethodDeclaration() method to replace the method body:

```java
public MethodDeclaration visitMethodDeclaration(MethodDeclaration method, P p) {
    ...
    // Remove the abstract modifier from the method.
    m = m.withModifiers(m.getModifiers().stream()
            .filter(mod -> mod.getType() != Type.Abstract)
            .collect(Collectors.toList()));

    // Add a method body
    m = m.withTemplate(addMethodBodyTemplate, m.getCoordinates().replaceBody());

    return m;
}
```

## Add parameters to `setCustomerInfo()`

Next, we will use `JavaTemplate` to add two additional parameters to the method declaration. Here we use an interpolation signifier `#{}` to leave a space for the existing argument so that it is preserved when we replace the method's argument list.

```java
private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
    ...
    // Template used to insert two additional parameters into the "setCustomerInfo()" method declaration.
    private final JavaTemplate addMethodParametersTemplate = JavaTemplate.builder(this::getCursor, "Date dateOfBirth, String firstName, #{}")
            .imports("java.util.Date")
            .build();
    ...
}
```

{% hint style="info" %}
NOTE: Because a new type, `java.util.Date`, is being introduced to the template, the type must be added when building the template. This ensures that any generated elements will have the correct type attribution.
{% endhint %}

The template is used to replace the method declaration using `withTemplate()`. Our code must also ensure that `java.util.Date` is added as an import to the compilation unit.

```java
public MethodDeclaration visitMethodDeclaration(MethodDeclaration method, P p) {
    ...
    // Add two parameters to the method declaration by inserting them in from of the first argument.
    m = m.withTemplate(addMethodParametersTemplate,
            m.getCoordinates().replaceParameters(),
            m.getParameters().get(0));

    // Add an import for java.util.Date to this compilation unit's list of imports.
    maybeAddImport("java.util.Date");

    return m;
}
```

## Add additional statements to `setCustomerInfo()`

We'll use another template to add the assignment statements to the method body.

```java
    private class ExpandCustomerInfoVisitor extends JavaIsoVisitor<ExecutionContext> {
        ...
        // Template used to add initializing statements to the method body
        private final JavaTemplate addStatementsTemplate = JavaTemplate.builder(this::getCursor, 
                "this.dateOfBirth = dateOfBirth;\n" +
                        "this.firstName = firstName;\n" +
                        "this.lastName = lastName;\n")
                .build();
         ...
    }
```

And this template is used to insert those statements into the method declaration's body:

```java
public MethodDeclaration visitMethodDeclaration(MethodDeclaration method, P p) {
    ...
    // Safe to assert since we just added a body to the method
    assert m.getBody() != null;

    // Add the assignment statements to the method body
    m = m.withTemplate(addStatementsTemplate, m.getBody().getCoordinates().lastStatement());

    return m;
}
```

## Testing the recipe

After following the steps above, the final recipe will look like the following:

```java
package org.openrewrite.samples;

import java.util.stream.Collectors;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.tree.J.MethodDeclaration;
import org.openrewrite.java.tree.J.Modifier.Type;

public class ExpandCustomerInfo extends Recipe {
    @Override
    public String getDisplayName() {
        return "Expand Customer Info";
    }

    @Override
    public String getDescription() {
        return "Expand the `CustomerInfo` class with new fields.";
    }

    @Override
    public JavaIsoVisitor<ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {

            // Used to identify the method declaration that will be refactored
            private final MethodMatcher methodMatcher = new MethodMatcher("com.yourorg.Customer setCustomerInfo(String)");

            // Template used to add a method body to "setCustomerInfo()" method declaration.
            private final JavaTemplate addMethodBodyTemplate = JavaTemplate.builder(this::getCursor, "")
                    .build();

            // Template used to insert two additional parameters into the "setCustomerInfo()" method declaration.
            private final JavaTemplate addMethodParametersTemplate = JavaTemplate.builder(this::getCursor, "Date dateOfBirth, String firstName, #{}")
                    .imports("java.util.Date")
                    .build();

            // Template used to add initializing statements to the method body
            private final JavaTemplate addStatementsTemplate = JavaTemplate.builder(this::getCursor,
                            "this.dateOfBirth = dateOfBirth;\n" +
                                    "this.firstName = firstName;\n" +
                                    "this.lastName = lastName;\n")
                    .build();

            @Override
            public MethodDeclaration visitMethodDeclaration(MethodDeclaration m, ExecutionContext c) {
                if (!methodMatcher.matches(m.getMethodType())) {
                    return m;
                }
                // Remove the abstract modifier from the method.
                m = m.withModifiers(m.getModifiers().stream()
                        .filter(mod -> mod.getType() != Type.Abstract)
                        .collect(Collectors.toList()));

                // Add a method body
                m = m.withTemplate(addMethodBodyTemplate, m.getCoordinates().replaceBody());

                // Add two parameters to the method declaration by inserting them in from of the first argument.
                m = m.withTemplate(addMethodParametersTemplate,
                        m.getCoordinates().replaceParameters(),
                        m.getParameters().get(0));

                // Add an import for java.util.Date to this compilation unit's list of imports.
                maybeAddImport("java.util.Date");

                // Safe to assert since we just added a body to the method
                assert m.getBody() != null;

                // Add the assignment statements to the method body
                m = m.withTemplate(addStatementsTemplate, m.getBody().getCoordinates().lastStatement());

                return m;
            }
        };
    }
}

```

OpenRewrite provides testing infrastructure for recipes via the rewrite-test module.
To assert that the recipe makes the expected changes to our test class, we will create a new test class that implements the `RewriteTest` interface and use `rewriteRun` to ensure the recipe is making the expected changes to the source.

```java
package org.openrewrite.samples;

import org.junit.jupiter.api.Test;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;

class ExpandCustomerInfoTest implements RewriteTest {

    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(new ExpandCustomerInfo());
    }

    @Test
    void testExpandCustomerInfo() {
        rewriteRun(
            java("""
                package com.yourorg;
                
                import java.util.Date;
                
                public abstract class Customer {
                    private Date dateOfBirth;
                    private String firstName;
                    private String lastName;
                
                    public abstract void setCustomerInfo(String lastName);
                }
            """,
            """
                package com.yourorg;
                
                import java.util.Date;
                
                public abstract class Customer {
                    private Date dateOfBirth;
                    private String firstName;
                    private String lastName;
                
                    public void setCustomerInfo(Date dateOfBirth, String firstName, String lastName){
                        this.dateOfBirth = dateOfBirth;
                        this.firstName = firstName;
                        this.lastName = lastName;
                    }
                }
            """)
        );
    }
}

```
