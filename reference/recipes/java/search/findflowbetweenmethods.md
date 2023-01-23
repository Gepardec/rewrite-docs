# Finds flow between two methods

**org.openrewrite.java.search.FindFlowBetweenMethods**
_Takes two patterns for the start/end methods to find flow between._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.34.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.34.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | startMethodPattern | A [method pattern](/reference/method-patterns.md) that is used to find matching the start point's method invocations. |
| `Boolean` | startMatchOverrides | *Optional*. When enabled, find methods that are overrides of the [method pattern](/reference/method-patterns.md). |
| `String` | endMethodPattern | A [method pattern](/reference/method-patterns.md) that is used to find matching the end point's method invocations. |
| `Boolean` | endMatchOverrides | *Optional*. When enabled, find methods that are overrides of the [method pattern](/reference/method-patterns.md). |
| `String` | target | The part of the method flow should traverse to |
| `String` | flow | When enabled, show the data or taint flow of the method invocation. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FindFlowBetweenMethodsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindFlowBetweenMethodsExample
displayName: Finds flow between two methods example
recipeList:
  - org.openrewrite.java.search.FindFlowBetweenMethods:
      startMethodPattern: java.util.List add(..)
      startMatchOverrides: null
      endMethodPattern: java.util.List add(..)
      endMatchOverrides: null
      target: null
      flow: null
```
{% endcode %}


Now that `com.yourorg.FindFlowBetweenMethodsExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("com.yourorg.FindFlowBetweenMethodsExample")
}

repositories {
    mavenCentral()
}

```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindFlowBetweenMethodsExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.FindFlowBetweenMethodsExample`
