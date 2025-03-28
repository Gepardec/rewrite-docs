---
sidebar_label: "Add annotation to class"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add annotation to class

**com.gepardec.java.AddAnnotationWithoutArgumentsToClass**

_Adds an annotation to a class._

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | classFqn |  |  |
| `String` | annotationFqn |  |  |
| `Boolean` | repeatable |  |  |


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddAnnotationWithoutArgumentsToClassExample
displayName: Add annotation to class example
recipeList:
  - com.gepardec.java.AddAnnotationWithoutArgumentsToClass: 
      classFqn: null
      annotationFqn: null
      repeatable: null
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe AddAnnotationWithoutArgumentsToClass --recipe-option "classFqn=null" --recipe-option "annotationFqn=null" --recipe-option "repeatable=null"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install com.gepardec:write-open-rewrite:{{VERSION_COM_GEPARDEC_WRITE_OPEN_REWRITE}}
```
</TabItem>
</Tabs>
