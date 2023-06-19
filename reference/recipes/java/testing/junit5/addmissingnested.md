# JUnit 5 inner test classes should be annotated with `@Nested`

**org.openrewrite.java.testing.junit5.AddMissingNested**

_Adds `@Nested` to inner classes that contain JUnit 5 tests._

### Tags

* RSPEC-5790

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/AddMissingNested.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.1

## Example


{% tabs %}
{% tab title="RootTest.java" %}

###### Before
{% code title="RootTest.java" %}
```java
import org.junit.jupiter.api.Test;

public class RootTest {
    public class InnerTest {
        @Test
        public void test() {}
    }
}
```
{% endcode %}

###### After
{% code title="RootTest.java" %}
```java
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

public class RootTest {
    @Nested
    public class InnerTest {
        @Test
        public void test() {}
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- RootTest.java
+++ RootTest.java
@@ -1,0 +1,1 @@
+import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
@@ -4,0 +5,1 @@

public class RootTest {
+   @Nested
    public class InnerTest {
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.AddMissingNested")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.1")
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.AddMissingNested</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.AddMissingNested
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Tim te Beek](tim.te.beek@jdriven.com)
* [Knut Wannheden](knut@moderne.io)
* [Sam Snyder](sam@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Michael Keppler](bananeweizen@gmx.de)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.AddMissingNested)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
