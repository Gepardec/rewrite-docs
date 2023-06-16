# Clean Up Assertions

**org.openrewrite.java.testing.junit5.CleanupAssertions**

_Simplifies JUnit Jupiter assertions to their most-direct equivalents_

### Tags

* junit
* testing

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.1

## Examples
##### Example 1


{% tabs %}
{% tab title="ExampleTest.java" %}

###### Before
{% code title="ExampleTest.java" %}
```java
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class ExampleTest {
    @Test
    void test() {
        Assertions.assertTrue("" == null);
    }
}
```
{% endcode %}

###### After
{% code title="ExampleTest.java" %}
```java
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class ExampleTest {
    @Test
    void test() {
        Assertions.assertNull("");
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- ExampleTest.java
+++ ExampleTest.java
@@ -7,1 +7,1 @@
-        Assertions.assertTrue("" == null);
+        Assertions.assertNull("");
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="ExampleTest.java" %}

###### Before
{% code title="ExampleTest.java" %}
```java
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class ExampleTest {
    @Test
    void test() {
        Assertions.assertTrue("" == null);
    }
}
```
{% endcode %}

###### After
{% code title="ExampleTest.java" %}
```java
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class ExampleTest {
    @Test
    void test() {
        Assertions.assertNull("");
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- ExampleTest.java
+++ ExampleTest.java
@@ -7,1 +7,1 @@
-        Assertions.assertTrue("" == null);
+        Assertions.assertNull("");
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
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.CleanupAssertions")
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
            <recipe>org.openrewrite.java.testing.junit5.CleanupAssertions</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.CleanupAssertions
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace JUnit `assertTrue(!<boolean>)` to `assertFalse(<boolean>)`](../../../java/testing/cleanup/asserttruenegationtoassertfalse.md)
* [Replace JUnit `assertFalse(!<boolean>)` to `assertTrue(<boolean>)`](../../../java/testing/cleanup/assertfalsenegationtoasserttrue.md)
* [Replace JUnit `assertTrue(a.equals(b))` to `assertEquals(a,b)`](../../../java/testing/cleanup/asserttrueequalstoassertequals.md)
* [Junit `assertTrue(a == b)` to `assertEquals(a,b)`](../../../java/testing/cleanup/asserttruecomparisontoassertequals.md)
* [Replace JUnit `assertFalse(a.equals(b))` to `assertNotEquals(a,b)`](../../../java/testing/cleanup/assertfalseequalstoassertnotequals.md)
* [`assertEquals(a, null)` to `assertNull(a)`](../../../java/testing/cleanup/assertequalsnulltoassertnull.md)
* [Replace JUnit `assertFalse(a == null)` to `assertNotNull(a)`](../../../java/testing/cleanup/assertfalsenulltoassertnotnull.md)
* [Assertion arguments should be passed in the correct order](../../../java/testing/cleanup/assertionsargumentorder.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.CleanupAssertions
displayName: Clean Up Assertions
description: Simplifies JUnit Jupiter assertions to their most-direct equivalents
tags:
  - junit
  - testing
recipeList:
  - org.openrewrite.java.testing.cleanup.AssertTrueNegationToAssertFalse
  - org.openrewrite.java.testing.cleanup.AssertFalseNegationToAssertTrue
  - org.openrewrite.java.testing.cleanup.AssertTrueEqualsToAssertEquals
  - org.openrewrite.java.testing.cleanup.AssertTrueComparisonToAssertEquals
  - org.openrewrite.java.testing.cleanup.AssertFalseEqualsToAssertNotEquals
  - org.openrewrite.java.testing.cleanup.AssertEqualsNullToAssertNull
  - org.openrewrite.java.testing.cleanup.AssertFalseNullToAssertNotNull
  - org.openrewrite.java.testing.cleanup.AssertionsArgumentOrder

```
{% endtab %}
{% endtabs %}
## Contributors
* [Yeikel](yeikel@users.noreply.github.com)
* [Patrick](patway99@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Patrick Way](pway99@users.noreply.github.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Ties van de Ven](1215166+vandeven@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.junit5.CleanupAssertions)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
