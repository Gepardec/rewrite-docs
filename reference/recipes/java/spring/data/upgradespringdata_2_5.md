# Migrate to Spring Data 2.5 from Spring Data 2.0 through 2.4

**org.openrewrite.java.spring.data.UpgradeSpringData\_2\_5**
_Migrate applications built on Spring Data (2.0 through 2.4) to the latest Spring Data 2.5 release._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.31.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.31.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.31.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.data.UpgradeSpringData_2_5")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.31.0")
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
            <recipe>org.openrewrite.java.spring.data.UpgradeSpringData_2_5</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.31.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.31.0 \
  -DactiveRecipes=org.openrewrite.java.spring.data.UpgradeSpringData_2_5
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.data.UpgradeSpringData_2_5`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Data 2.3 from Spring Data 2.0 through 2.2](../../../java/spring/data/upgradespringdata_2_3.md)
* [Use `JpaRepository#getById(ID id)`](../../../java/spring/data/usejparepositorygetbyid.md)
* [Use `JpaRepository#deleteAllInBatch(Iterable<T> entities)`](../../../java/spring/data/usejparepositorydeleteallinbatch.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.data.UpgradeSpringData_2_5
displayName: Migrate to Spring Data 2.5 from Spring Data 2.0 through 2.4
description: Migrate applications built on Spring Data (2.0 through 2.4) to the latest Spring Data 2.5 release.
recipeList:
  - org.openrewrite.java.spring.data.UpgradeSpringData_2_3
  - org.openrewrite.java.spring.data.UseJpaRepositoryGetById
  - org.openrewrite.java.spring.data.UseJpaRepositoryDeleteAllInBatch

```
{% endtab %}
{% endtabs %}
