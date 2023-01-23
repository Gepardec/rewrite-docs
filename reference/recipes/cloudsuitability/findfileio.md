# Find uses of Java file IO

**org.openrewrite.cloudsuitability.FindFileIo**
_Move to cloud friendly alternative or TKG._

### Tags

* java-fileIO

## Source

[Github](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer), [Issue Tracker](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-cloud-suitability-analyzer/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cloud-suitability-analyzer
* version: 1.1.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.cloudsuitability.FindFileIo")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.1.0")
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
            <recipe>org.openrewrite.cloudsuitability.FindFileIo</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-cloud-suitability-analyzer</artifactId>
            <version>1.1.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.1.0 \
  -DactiveRecipes=org.openrewrite.cloudsuitability.FindFileIo
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.cloudsuitability.FindFileIo`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find method usages](../java/search/findmethods.md)
  * methodPattern: `java.io.File *(..)`
  * matchOverrides: `true`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `java.io.LineNumber*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `java.io.*File*`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.cloudsuitability.FindFileIo
displayName: Find uses of Java file IO
description: Move to cloud friendly alternative or TKG.
tags:
  - java-fileIO
recipeList:
  - org.openrewrite.java.search.FindMethods:
      methodPattern: java.io.File *(..)
      matchOverrides: true
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: java.io.LineNumber*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: java.io.*File*

```
{% endtab %}
{% endtabs %}
