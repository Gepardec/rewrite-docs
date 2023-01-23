# Use `Character#isJavaIdentifierPart(char)`

**org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart**
_Use `Character#isJavaIdentifierPart(char)` instead of the deprecated `Character#isJavaLetterOrDigit(char)` in Java 1.1 or higher._

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
    activeRecipe("org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart")
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
            <recipe>org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart</recipe>
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
  -DactiveRecipes=org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `java.lang.Character isJavaLetterOrDigit(char)`
  * newMethodName: `isJavaIdentifierPart`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart
displayName: Use `Character#isJavaIdentifierPart(char)`
description: Use `Character#isJavaIdentifierPart(char)` instead of the deprecated `Character#isJavaLetterOrDigit(char)` in Java 1.1 or higher.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.lang.Character isJavaLetterOrDigit(char)
      newMethodName: isJavaIdentifierPart

```
{% endtab %}
{% endtabs %}
