---
sidebar_label: "Append to release notes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Append to release notes

**com.gepardec.wor.lord.dto.BinaryDtoToWeb**

_Adds the specified line to RELEASE.md._


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `com.gepardec:write-open-rewrite` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("com.gepardec.wor.lord.dto.BinaryDtoToWeb")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("com.gepardec:write-open-rewrite:{{VERSION_COM_GEPARDEC_WRITE_OPEN_REWRITE}}")
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
        rewrite("com.gepardec:write-open-rewrite:{{VERSION_COM_GEPARDEC_WRITE_OPEN_REWRITE}}")
    }
    rewrite {
        activeRecipe("com.gepardec.wor.lord.dto.BinaryDtoToWeb")
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
            <recipe>com.gepardec.wor.lord.dto.BinaryDtoToWeb</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>com.gepardec</groupId>
            <artifactId>write-open-rewrite</artifactId>
            <version>{{VERSION_COM_GEPARDEC_WRITE_OPEN_REWRITE}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=com.gepardec:write-open-rewrite:RELEASE -Drewrite.activeRecipes=com.gepardec.wor.lord.dto.BinaryDtoToWeb -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe BinaryDtoToWeb
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install com.gepardec:write-open-rewrite:{{VERSION_COM_GEPARDEC_WRITE_OPEN_REWRITE}}
```
</TabItem>
</Tabs>
