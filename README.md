## Create visual studio snippets for generating pages, utils, modules and components content to work faster with the architecture

- use "np" snippet for generating a next page content
- use "nu" snippet for generating a next page utils content
- use "nm" snippet for generating a next module content
- use "nc" snippet for generating a next component content

### This is the vs code config to create the snippets

- To create the snippets on vs code press "ctrl+shift+p" and search "Configure User Snippets" and press "enter" and go to "New Global Snippet file..." and press "enter", add a snippet name and then paste the below code snippet to the config file. Now you can use snippets to generate content on js, ts and ts react files.

```json
{
  // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
  // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
  // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
  // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
  // Placeholders with the same ids are connected.
  "Create next js page": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "np",
    "body": [
      "import { prefetchQuery } from './utils';",
      "import { $1Module } from '@/containers/modules';",
      "import { HydrationBoundary, dehydrate } from '@tanstack/react-query';",
      "",
      "",
      "const $1Page = async () => {",
      "const queryClient = await prefetchQuery();",
      "",
      "return (",
      "<HydrationBoundary state={dehydrate(queryClient)}>",
      "<$1Module />",
      "</HydrationBoundary>",
      ")",
      "};",
      "",
      "export default $1Page;",
      "$2"
    ],
    "description": "Create a next js page snippet"
  },
  "Create next js page utils": {
    "scope": "javascript,typescript",
    "prefix": "nu",
    "body": [
      "import { QueryClient } from '@tanstack/react-query';",
      "",
      "export const prefetchQuery = async (): Promise<QueryClient> => {",
      "const queryClient = new QueryClient();",
      "",
      "return queryClient;",
      "};"
    ],
    "description": "Create a next js page utils snippet"
  },
  "Create next js module": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "nm",
    "body": [
      "'use client';",
      "import { $1 } from '@/containers/components';",
      "",
      "const $TM_FILENAME_BASE = () => {",
      "return <$1/>",
      "};",
      "",
      "export default $TM_FILENAME_BASE;",
      "$2"
    ],
    "description": "Create a next js module snippet"
  },
  "Create next js component": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "nc",
    "body": [
      "'use client';",
      "",
      "interface ${TM_FILENAME_BASE}Props{}",
      "",
      "const $TM_FILENAME_BASE:React.FC<${TM_FILENAME_BASE}Props> = (props) => {",
      "return <div>$TM_FILENAME_BASE</div>;",
      "};",
      "",
      "export default $TM_FILENAME_BASE;",
      "$2"
    ],
    "description": "Create a next js component snippet"
  }
}
```
