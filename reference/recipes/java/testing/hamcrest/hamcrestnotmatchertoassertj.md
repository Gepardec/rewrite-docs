# Migrate Hamcrest `not(Matcher)` to AssertJ

**org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ**

_Migrate from Hamcrest `not(Matcher)` to AssertJ assertions._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/hamcrest/HamcrestNotMatcherToAssertJ.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.7

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | notMatcher | *Optional*. The Hamcrest `not(Matcher)` to migrate to JUnit5. |
| `String` | assertion | *Optional*. The AssertJ method to migrate to. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|notMatcher|`equalTo`|
|assertion|`isNotEqualTo`|


{% tabs %}
{% tab title="ATest.java" %}

###### Before
{% code title="ATest.java" %}
```java
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.equalTo;

class ATest {
    @Test
    void test() {
        String str1 = "Hello world!";
        String str2 = "Hello world!";
        assertThat(str1, not(equalTo(str2)));
    }
}
```
{% endcode %}

###### After
{% code title="ATest.java" %}
```java
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class ATest {
    @Test
    void test() {
        String str1 = "Hello world!";
        String str2 = "Hello world!";
        assertThat(str1).isNotEqualTo(str2);
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- ATest.java
+++ ATest.java
@@ -3,3 +3,1 @@
import org.junit.jupiter.api.Test;

-import static org.hamcrest.MatcherAssert.assertThat;
-import static org.hamcrest.Matchers.not;
-import static org.hamcrest.Matchers.equalTo;
+import static org.assertj.core.api.Assertions.assertThat;

@@ -12,1 +10,1 @@
        String str1 = "Hello world!";
        String str2 = "Hello world!";
-       assertThat(str1, not(equalTo(str2)));
+       assertThat(str1).isNotEqualTo(str2);
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.7")
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
        <version>5.3.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.7</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Tim te Beek](mailto:tim@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
