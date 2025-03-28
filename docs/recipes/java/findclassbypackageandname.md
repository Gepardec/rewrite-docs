---
sidebar_label: "FindClassByPackageAndName"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# FindClassByPackageAndName

**com.gepardec.java.FindClassByPackageAndName**

_FindClassByPackageAndName_

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | classFqn |  |  |


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindClassByPackageAndNameExample
displayName: FindClassByPackageAndName example
recipeList:
  - com.gepardec.java.FindClassByPackageAndName: 
      classFqn: null
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindClassByPackageAndName --recipe-option "classFqn=null"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install com.gepardec:write-open-rewrite:{{VERSION_COM_GEPARDEC_WRITE_OPEN_REWRITE}}
```
</TabItem>
</Tabs>
