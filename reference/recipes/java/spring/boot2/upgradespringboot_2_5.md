# Upgrade to Spring Boot 2.5

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_5**
_Upgrade to Spring Boot 2.5 from any prior 2.x version._

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
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")
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
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5</recipe>
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
  -DactiveRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Boot 2.4 from Spring Boot 2.0 through 2.3](../../../java/spring/boot2/upgradespringboot_2_4.md)
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.5.x`
  * overrideManagedVersion: `true`
  * retainVersions: `[]`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.5.x`
  * retainVersions: `[]`
* [Migrate flyway and liquibase credentials](../../../java/spring/boot2/migratedatabasecredentials.md)
* [Migrate deprecated ActuatorMediaType to ApiVersion#getProducedMimeType](../../../java/spring/boot2/migrateactuatormediatypetoapiversion.md)
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.data.jpa.EntityManagerFactoryDependsOnPostProcessor`
  * newFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.orm.jpa.EntityManagerFactoryDependsOnPostProcessor`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.web.ResourceProperties`
  * newFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.web.WebProperties$Resources`
* [Migrate Spring Boot properties to 2.5](../../../java/spring/boot2/springbootproperties_2_5.md)
* [Adds @DependsOnDatabaseInitialization to Spring Beans and Components depending on javax.sql.DataSource](../../../java/spring/boot2/databasecomponentandbeaninitializationordering.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
displayName: Upgrade to Spring Boot 2.5
description: Upgrade to Spring Boot 2.5 from any prior 2.x version.
recipeList:
  - org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.5.x
      overrideManagedVersion: true
      retainVersions: []
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.5.x
      retainVersions: []
  - org.openrewrite.java.spring.boot2.MigrateDatabaseCredentials
  - org.openrewrite.java.spring.boot2.MigrateActuatorMediaTypeToApiVersion
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.data.jpa.EntityManagerFactoryDependsOnPostProcessor
      newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.orm.jpa.EntityManagerFactoryDependsOnPostProcessor
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.web.ResourceProperties
      newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.web.WebProperties$Resources
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_5
  - org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrdering

```
{% endtab %}
{% endtabs %}
