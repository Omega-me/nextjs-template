## Create visual studio snippets for generating pages, utils, modules and components content to work faster with the architecture

- use "pg" snippet for generating a next page
- use "pg-with-mod" snippet for generating a next page with react query and module support
- use "pg-util-mod-par" snippet for generating a next page utils content with react query support and params interface (useful if using dynamic routes, and module support)
- use "pg-util-par" snippet for generating a next page utils content with params interface (useful if using dynamic routes)
- use "pg-util-mod" snippet for generating a next page utils content with react query support
- use "pg-util" snippet for generating a next page utils content
- use "pg-module" snippet for generating a next module content
- use "pg-component" snippet for generating a next component content

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
    "prefix": "pg",
    "body": [
      "import { PageProps } from './utils';",
      "",
      "const $1Page = async (props: PageProps) => {",
      "",
      "return (<div>$1</div>)",
      "};",
      "",
      "export default $1Page;",
      "$2"
    ],
    "description": "Create a next js page snippet"
  },
  "Create next js page with module": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "pg-with-mod",
    "body": [
      "import { PageProps, prefetchQuery } from './utils';",
      "import { $1Module } from '@/containers/modules';",
      "import { HydrationBoundary, dehydrate } from '@tanstack/react-query';",
      "",
      "",
      "const $1Page = async (props: PageProps) => {",
      "const queryClient = await prefetchQuery(props);",
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
    "description": "Create a next js page snippet with module and react query support"
  },
  "Create next js utils for a page with module and params": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "pg-util-mod-par",
    "body": [
      "import { IPageProps } from '@/common/interfaces';",
      "import { QueryClient } from '@tanstack/react-query';",
      "",
      "export interface PageProps extends IPageProps { params: { ${TM_DIRECTORY/.*[\\\\|\\/]+[[...]+(.*)+[\\[(.*?)\\]]/${1: }/}: string[] | string } }",
      "",
      "export const prefetchQuery = async (props: PageProps): Promise<QueryClient> => {",
      "const queryClient = new QueryClient();",
      "",
      "return queryClient;",
      "};"
    ],
    "description": "Create a next js page utils snippet with react query support and params for dynamic routing"
  },
  "Create next js page utils with params": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "pg-util-par",
    "body": [
      "import { IPageProps } from '@/common/interfaces';",
      "",
      "export interface PageProps extends IPageProps { params: { ${TM_DIRECTORY/.*[\\\\|\\/]+[[...]+(.*)+[\\[(.*?)\\]]/${1: }/}: string[] | string } }"
    ],
    "description": "Create a next js page utils snippet with params for dynamic routing"
  },
  "Create next js utils for a page with module": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "pg-util-mod",
    "body": [
      "import { IPageProps } from '@/common/interfaces';",
      "import { QueryClient } from '@tanstack/react-query';",
      "",
      "export interface PageProps extends IPageProps { }",
      "",
      "export const prefetchQuery = async (props: PageProps): Promise<QueryClient> => {",
      "const queryClient = new QueryClient();",
      "",
      "return queryClient;",
      "};"
    ],
    "description": "Create a next js page utils snippet with react query support and params for dynamic routing"
  },
  "Create next js page utils": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "pg-util",
    "body": ["import { IPageProps } from '@/common/interfaces';", "", "export interface PageProps extends IPageProps { }"],
    "description": "Create a next js page utils snippet"
  },
  "Create next js module": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "pg-module",
    "body": [
      "'use client';",
      "import { ${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/} } from '@/containers/components';",
      "",
      "const ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/g} = () => {",
      "return <${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/}/>",
      "};",
      "",
      "export default ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/g};"
    ],
    "description": "Create a next js module snippet"
  },
  "Create next js component": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "pg-component",
    "body": [
      "'use client';",
      "",
      "interface ${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/}Props{ }",
      "",
      "const ${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/}:React.FC<${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/}Props> = (props) => {",
      "return <div>${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/}</div>;",
      "};",
      "export default ${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/};"
    ],
    "description": "Create a next js component snippet"
  }
}
```
