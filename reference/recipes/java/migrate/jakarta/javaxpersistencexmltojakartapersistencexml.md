# migrate persistence.xml files

**org.openrewrite.java.migrate.jakarta.JavaxPersistenceXmlToJakartaPersistenceXml**

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
    activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxPersistenceXmlToJakartaPersistenceXml")
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
            <recipe>org.openrewrite.java.migrate.jakarta.JavaxPersistenceXmlToJakartaPersistenceXml</recipe>
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
  -DactiveRecipes=org.openrewrite.java.migrate.jakarta.JavaxPersistenceXmlToJakartaPersistenceXml
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxPersistenceXmlToJakartaPersistenceXml`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change XML Attribute](../../../xml/changetagattribute.md)
  * elementName: `//property`
  * attributeName: `name`
  * newValue: `jakarta.persistence`
  * oldValue: `javax.persistence`
  * fileMatcher: `**/persistence.xml`
* [Change XML Attribute](../../../xml/changetagattribute.md)
  * elementName: `persistence`
  * attributeName: `version`
  * newValue: `3.0`
  * fileMatcher: `**/persistence.xml`
* [Change XML Attribute](../../../xml/changetagattribute.md)
  * elementName: `persistence`
  * attributeName: `xmlns`
  * newValue: `https://jakarta.ee`
  * oldValue: `http://xmlns.jcp.org`
  * fileMatcher: `**/persistence.xml`
* [Change XML Attribute](../../../xml/changetagattribute.md)
  * elementName: `persistence`
  * attributeName: `xsi:schemaLocation`
  * newValue: `https://jakarta.ee/xml/ns/persistence https://jakarta.ee/xml/ns/persistence/persistence_3_0.xsd`
  * fileMatcher: `**/persistence.xml`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxPersistenceXmlToJakartaPersistenceXml
displayName: migrate persistence.xml files
description: null
recipeList:
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: //property
      attributeName: name
      newValue: jakarta.persistence
      oldValue: javax.persistence
      fileMatcher: **/persistence.xml
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: persistence
      attributeName: version
      newValue: 3.0
      fileMatcher: **/persistence.xml
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: persistence
      attributeName: xmlns
      newValue: https://jakarta.ee
      oldValue: http://xmlns.jcp.org
      fileMatcher: **/persistence.xml
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: persistence
      attributeName: xsi:schemaLocation
      newValue: https://jakarta.ee/xml/ns/persistence https://jakarta.ee/xml/ns/persistence/persistence_3_0.xsd
      fileMatcher: **/persistence.xml

```
{% endtab %}
{% endtabs %}
