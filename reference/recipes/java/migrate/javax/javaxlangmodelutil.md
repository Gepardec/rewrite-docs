# Use modernized `javax.lang.model.util` APIs

**org.openrewrite.java.migrate.javax.JavaxLangModelUtil**
_Certain `javax.lang.model.util` APIs have become deprecated and their usages changed, necessitating usage changes._

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
    activeRecipe("org.openrewrite.java.migrate.javax.JavaxLangModelUtil")
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
            <recipe>org.openrewrite.java.migrate.javax.JavaxLangModelUtil</recipe>
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
  -DactiveRecipes=org.openrewrite.java.migrate.javax.JavaxLangModelUtil
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.JavaxLangModelUtil`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `javax.lang.model.util.AbstractAnnotationValueVisitor9`](../../../java/migrate/javax/migrateabstractannotationvaluevisitor6to9.md)
* [Use `javax.lang.model.util.AbstractElementVisitor9`](../../../java/migrate/javax/migrateabstractelementvisitor6to9.md)
* [Use `javax.lang.model.util.AbstractTypeVisitor9`](../../../java/migrate/javax/migrateabstracttypevisitor6to9.md)
* [Use `javax.lang.model.util.ElementKindVisitor9`](../../../java/migrate/javax/migrateelementkindvisitor6to9.md)
* [Use `javax.lang.model.util.ElementScanner9`](../../../java/migrate/javax/migrateelementscanner6to9.md)
* [Use `javax.lang.model.util.SimpleAnnotationValueVisitor9`](../../../java/migrate/javax/migratesimpleannotationvaluevisitor6to9.md)
* [Use `javax.lang.model.util.SimpleElementVisitor9`](../../../java/migrate/javax/migratesimpleelementvisitor6to9.md)
* [Use `javax.lang.model.util.SimpleTypeVisitor9`](../../../java/migrate/javax/migratesimpletypevisitor6to9.md)
* [Use `javax.lang.model.util.TypeKindVisitor9`](../../../java/migrate/javax/migratetypekindvisitor6to9.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.JavaxLangModelUtil
displayName: Use modernized `javax.lang.model.util` APIs
description: Certain `javax.lang.model.util` APIs have become deprecated and their usages changed, necessitating usage changes.
recipeList:
  - org.openrewrite.java.migrate.javax.MigrateAbstractAnnotationValueVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateAbstractElementVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateAbstractTypeVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateElementKindVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateElementScanner6To9
  - org.openrewrite.java.migrate.javax.MigrateSimpleAnnotationValueVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateSimpleElementVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateSimpleTypeVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateTypeKindVisitor6To9

```
{% endtab %}
{% endtabs %}
