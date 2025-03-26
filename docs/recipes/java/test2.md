---
sidebar_label: "Test2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Test2

**com.gepardec.java.test2**

_This is the second Test Recipe_

### Tags

* oss


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add license header](../java/addlicenseheader)
  * licenseText: `Copyright 2023 the original author or authors. < p > Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at < p > https://www.apache.org/licenses/LICENSE-2.0 < p > Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.gepardec.java.test2
displayName: Test2
description: |
  This is the second Test Recipe
tags:
  - oss
recipeList:
  - org.openrewrite.java.AddLicenseHeader:
      licenseText: Copyright 2023 the original author or authors.
<p>
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
<p>
https://www.apache.org/licenses/LICENSE-2.0
<p>
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `com.gepardec.openrewrite:OpenRewrite-Collection` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("com.gepardec.java.test2")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("com.gepardec.openrewrite:OpenRewrite-Collection:{{VERSION_COM_GEPARDEC_OPENREWRITE_OPENREWRITE_COLLECTION}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("com.gepardec.openrewrite:OpenRewrite-Collection:{{VERSION_COM_GEPARDEC_OPENREWRITE_OPENREWRITE_COLLECTION}}")
    }
    rewrite {
        activeRecipe("com.gepardec.java.test2")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.gepardec.java.test2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>com.gepardec.openrewrite</groupId>
            <artifactId>OpenRewrite-Collection</artifactId>
            <version>{{VERSION_COM_GEPARDEC_OPENREWRITE_OPENREWRITE_COLLECTION}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=com.gepardec.openrewrite:OpenRewrite-Collection:RELEASE -Drewrite.activeRecipes=com.gepardec.java.test2 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe test2
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install com.gepardec.openrewrite:OpenRewrite-Collection:{{VERSION_COM_GEPARDEC_OPENREWRITE_OPENREWRITE_COLLECTION}}
```
</TabItem>
</Tabs>
