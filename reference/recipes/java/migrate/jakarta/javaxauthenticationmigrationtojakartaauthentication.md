# Migrate deprecated `javax.security.auth.message` packages to `jakarta.security.auth.message`

**org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* security
* javax
* jakarta
* authentication

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.16.0-SNAPSHOT/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.16.0-SNAPSHOT


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.16.0-SNAPSHOT in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.16.0-SNAPSHOT")
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
            <recipe>org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.16.0-SNAPSHOT</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.16.0-SNAPSHOT \
  -DactiveRecipes=org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.authentication`
  * artifactId: `jakarta.authentication-api`
  * version: `2.x`
  * onlyIfUsing: `javax.security.auth.message..*`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.authentication`
  * artifactId: `jakarta.authentication-api`
  * newVersion: `2.x`
  * retainVersions: `[]`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `javax.security.auth.message`
  * newPackageName: `jakarta.security.auth.message`
  * recursive: `true`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `javax.security.auth.message`
  * artifactId: `javax.security.auth.message-api`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication
displayName: Migrate deprecated `javax.security.auth.message` packages to `jakarta.security.auth.message`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - security
  - javax
  - jakarta
  - authentication
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.authentication
      artifactId: jakarta.authentication-api
      version: 2.x
      onlyIfUsing: javax.security.auth.message..*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.authentication
      artifactId: jakarta.authentication-api
      newVersion: 2.x
      retainVersions: []
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.security.auth.message
      newPackageName: jakarta.security.auth.message
      recursive: true
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.security.auth.message
      artifactId: javax.security.auth.message-api

```
{% endtab %}
{% endtabs %}
