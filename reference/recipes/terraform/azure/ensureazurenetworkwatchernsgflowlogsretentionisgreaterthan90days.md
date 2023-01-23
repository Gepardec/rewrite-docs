# Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days

**org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days**
_Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days._

### Tags

* Azure
* terraform
* CKV_AZURE_12

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.16.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.16.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.16.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.34.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.16.0")
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
        <version>4.39.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.16.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.39.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:1.16.0 \
  -DactiveRecipes=org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_network_watcher_flow_log`
  * content: `days = 90`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days
displayName: Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days
description: Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days.
tags:
  - Azure
  - terraform
  - CKV_AZURE_12
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_network_watcher_flow_log
      content: days = 90

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
