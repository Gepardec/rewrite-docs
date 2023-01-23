# Cucumber to Junit Test Suites

**org.openrewrite.java.testing.cucumber.CucumberToJunitPlatformSuite**
_Migrates Cucumber tests to Junit Test Suites._

### Tags

* cucumber
* testing

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.32.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.32.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.32.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.cucumber.CucumberToJunitPlatformSuite")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.32.0")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.cucumber.CucumberToJunitPlatformSuite</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.32.0</version>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.2:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:1.32.0 \
  -DactiveRecipes=org.openrewrite.java.testing.cucumber.CucumberToJunitPlatformSuite
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.testing.cucumber.CucumberToJunitPlatformSuite`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace @Cucumber with @Suite](../../../java/testing/cucumber/cucumberannotationtosuite.md)
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.junit.platform`
  * artifactId: `junit-platform-suite`
  * version: `1.9.x`
  * onlyIfUsing: `org.junit.platform.suite.api.*`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.cucumber.CucumberToJunitPlatformSuite
displayName: Cucumber to Junit Test Suites
description: Migrates Cucumber tests to Junit Test Suites.
tags:
  - cucumber
  - testing
recipeList:
  - org.openrewrite.java.testing.cucumber.CucumberAnnotationToSuite
  - org.openrewrite.maven.AddDependency:
      groupId: org.junit.platform
      artifactId: junit-platform-suite
      version: 1.9.x
      onlyIfUsing: org.junit.platform.suite.api.*

```
{% endtab %}
{% endtabs %}
