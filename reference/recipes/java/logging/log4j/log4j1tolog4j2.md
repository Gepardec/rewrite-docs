# Migrate Log4j 1.x to Log4j 2.x

**org.openrewrite.java.logging.log4j.Log4j1ToLog4j2**
_Migrates Log4j 1.x to Log4j 2.x._

### Tags

* logging
* log4j

## Source

[Github](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/log4j.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/1.18.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 1.18.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-logging-frameworks:1.18.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.37.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.log4j.Log4j1ToLog4j2")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:1.18.0")
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
        <version>4.41.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.log4j.Log4j1ToLog4j2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>1.18.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:LATEST \
  -DactiveRecipes=org.openrewrite.java.logging.log4j.Log4j1ToLog4j2
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.logging.log4j.Log4j1ToLog4j2`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `org.apache.log4j`
  * newPackageName: `org.apache.logging.log4j`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.apache.logging.log4j.Logger getLogger(..)`
  * fullyQualifiedTargetTypeName: `org.apache.logging.log4j.LogManager`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.apache.logging.log4j.Logger getRootLogger()`
  * fullyQualifiedTargetTypeName: `org.apache.logging.log4j.LogManager`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.apache.logging.log4j.Category getEffectiveLevel()`
  * newMethodName: `getLevel`
* [Parameterize Log4j 2.x logging statements](../../../java/logging/log4j/parameterizedlogging.md)
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-api`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.log4j.*`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-core`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.log4j.*`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `log4j`
  * artifactId: `log4j`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `ch.qos.reload4j`
  * artifactId: `reload4j`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-api`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-core`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.slf4j`
  * oldArtifactId: `slf4j-log4j12`
  * newGroupId: `org.apache.logging.log4j`
  * newArtifactId: `log4j-slf4j-impl`
  * newVersion: `latest.release`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.slf4j`
  * oldArtifactId: `slf4j-reload4j`
  * newGroupId: `org.apache.logging.log4j`
  * newArtifactId: `log4j-slf4j-impl`
  * newVersion: `latest.release`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.log4j.Log4j1ToLog4j2
displayName: Migrate Log4j 1.x to Log4j 2.x
description: Migrates Log4j 1.x to Log4j 2.x.
tags:
  - logging
  - log4j
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.log4j
      newPackageName: org.apache.logging.log4j
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.apache.logging.log4j.Logger getLogger(..)
      fullyQualifiedTargetTypeName: org.apache.logging.log4j.LogManager
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.apache.logging.log4j.Logger getRootLogger()
      fullyQualifiedTargetTypeName: org.apache.logging.log4j.LogManager
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.logging.log4j.Category getEffectiveLevel()
      newMethodName: getLevel
  - org.openrewrite.java.logging.log4j.ParameterizedLogging
  - org.openrewrite.maven.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-api
      version: latest.release
      onlyIfUsing: org.apache.log4j.*
  - org.openrewrite.maven.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-core
      version: latest.release
      onlyIfUsing: org.apache.log4j.*
  - org.openrewrite.maven.RemoveDependency:
      groupId: log4j
      artifactId: log4j
  - org.openrewrite.maven.RemoveDependency:
      groupId: ch.qos.reload4j
      artifactId: reload4j
  - org.openrewrite.maven.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-api
      version: latest.release
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.maven.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-core
      version: latest.release
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.slf4j
      oldArtifactId: slf4j-log4j12
      newGroupId: org.apache.logging.log4j
      newArtifactId: log4j-slf4j-impl
      newVersion: latest.release
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.slf4j
      oldArtifactId: slf4j-reload4j
      newGroupId: org.apache.logging.log4j
      newArtifactId: log4j-slf4j-impl
      newVersion: latest.release

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.logging.log4j.Log4j1ToLog4j2)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
