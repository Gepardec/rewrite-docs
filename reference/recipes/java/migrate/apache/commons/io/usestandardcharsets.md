# Prefer `java.nio.charset.StandardCharsets`

**org.openrewrite.java.migrate.apache.commons.io.UseStandardCharsets**
_Prefer the Java standard library's `java.nio.charset.StandardCharsets` over third-party usage of apache's `org.apache.commons.io.Charsets`._

### Tags

* apache
* commons

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.15.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.15.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.15.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.apache.commons.io.UseStandardCharsets")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.15.0")
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
            <recipe>org.openrewrite.java.migrate.apache.commons.io.UseStandardCharsets</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.15.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.15.0 \
  -DactiveRecipes=org.openrewrite.java.migrate.apache.commons.io.UseStandardCharsets
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.apache.commons.io.UseStandardCharsets`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.io.Charsets.ISO_8859_1`
  * newFullyQualifiedTypeName: `java.nio.charset.StandardCharsets.ISO_8859_1`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.io.Charsets.US_ASCII`
  * newFullyQualifiedTypeName: `java.nio.charset.StandardCharsets.US_ASCII`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.io.Charsets.UTF_8`
  * newFullyQualifiedTypeName: `java.nio.charset.StandardCharsets.UTF_8`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.io.Charsets.UTF_16`
  * newFullyQualifiedTypeName: `java.nio.charset.StandardCharsets.UTF_16`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.io.Charsets.UTF_16BE`
  * newFullyQualifiedTypeName: `java.nio.charset.StandardCharsets.UTF_16BE`
* [Change type](../../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.io.Charsets.UTF_16LE`
  * newFullyQualifiedTypeName: `java.nio.charset.StandardCharsets.UTF_16LE`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.apache.commons.io.UseStandardCharsets
displayName: Prefer `java.nio.charset.StandardCharsets`
description: Prefer the Java standard library's `java.nio.charset.StandardCharsets` over third-party usage of apache's `org.apache.commons.io.Charsets`.
tags:
  - apache
  - commons
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.io.Charsets.ISO_8859_1
      newFullyQualifiedTypeName: java.nio.charset.StandardCharsets.ISO_8859_1
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.io.Charsets.US_ASCII
      newFullyQualifiedTypeName: java.nio.charset.StandardCharsets.US_ASCII
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.io.Charsets.UTF_8
      newFullyQualifiedTypeName: java.nio.charset.StandardCharsets.UTF_8
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.io.Charsets.UTF_16
      newFullyQualifiedTypeName: java.nio.charset.StandardCharsets.UTF_16
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.io.Charsets.UTF_16BE
      newFullyQualifiedTypeName: java.nio.charset.StandardCharsets.UTF_16BE
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.io.Charsets.UTF_16LE
      newFullyQualifiedTypeName: java.nio.charset.StandardCharsets.UTF_16LE

```
{% endtab %}
{% endtabs %}
