# Migrate to Spring Boot 2.2 from Spring Boot 2.0 through 2.1

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_2**
_Migrate applications built on Spring Boot 2.0 through 2.1 to the latest Spring Boot 2.2 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.2.
_

### Tags

* spring
* boot

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
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2")
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
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2</recipe>
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
  -DactiveRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Boot 2.1 from Spring Boot 2.0](../../../java/spring/boot2/upgradespringboot_2_1.md)
* [Migrate to Spring Framework 5.2 from Spring Framework 5.0 through 5.1](../../../java/spring/framework/upgradespringframework_5_2.md)
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.2.x`
  * overrideManagedVersion: `true`
  * retainVersions: `[]`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.2.x`
  * retainVersions: `[]`
* [Use `PingHealthIndicator`](../../../java/spring/boot2/migrateabstracthealthindicatortopinghealthindicator.md)
* [Use `WebTestClientBuilderCustomizer`](../../../java/spring/boot2/migratewebtestclientbuildercustomizerpackagename.md)
* [Use `EnableConfigurationProperties#VALIDATOR_BEAN_NAME`](../../../java/spring/boot2/migrateconfigurationpropertiesbindingpostprocessorvalidatorbeanname.md)
* [Use `spring-boot.run.agents` configuration key in `spring-boot-maven-plugin`](../../../java/spring/boot2/springbootmavenpluginmigrateagenttoagents.md)
* [Migrate Spring Boot properties to 2.2](../../../java/spring/boot2/springbootproperties_2_2.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
displayName: Migrate to Spring Boot 2.2 from Spring Boot 2.0 through 2.1
description: Migrate applications built on Spring Boot 2.0 through 2.1 to the latest Spring Boot 2.2 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.2.

tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.2.x
      overrideManagedVersion: true
      retainVersions: []
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.2.x
      retainVersions: []
  - org.openrewrite.java.spring.boot2.MigrateAbstractHealthIndicatorToPingHealthIndicator
  - org.openrewrite.java.spring.boot2.MigrateWebTestClientBuilderCustomizerPackageName
  - org.openrewrite.java.spring.boot2.MigrateConfigurationPropertiesBindingPostProcessorValidatorBeanName
  - org.openrewrite.java.spring.boot2.SpringBootMavenPluginMigrateAgentToAgents
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_2

```
{% endtab %}
{% endtabs %}
