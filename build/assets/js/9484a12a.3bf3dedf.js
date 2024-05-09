"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[32497],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>y});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),m=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=m(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=m(t),u=r,y=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return t?o.createElement(y,i(i({ref:n},l),{},{components:t})):o.createElement(y,i({ref:n},l))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<a;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var o=t(58168),r=t(98587),a=(t(96540),t(15680)),i=["components"],p={sidebar_label:"Extending Theme",title:"Extending Theme",sidebar_position:4},s=void 0,m={unversionedId:"customization/extending",id:"version-4.0.0-rc.8/customization/extending",title:"Extending Theme",description:"TypeScript definitions for your theme can be extended by using TypeScript's declaration merging feature. First you need to create a declaration file called themed.d.ts and then declare the module @rneui/themed and 're-export' the types that you want to extend. i.e. below we add a custom p1Style to the Text theme object and we add a bunch of colors to the colors object.",source:"@site/versioned_docs/version-4.0.0-rc.8/customization/extending.mdx",sourceDirName:"customization",slug:"/customization/extending",permalink:"/docs/customization/extending",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/customization/extending.mdx",tags:[],version:"4.0.0-rc.8",sidebarPosition:4,frontMatter:{sidebar_label:"Extending Theme",title:"Extending Theme",sidebar_position:4},sidebar:"docs",previous:{title:"Styles",permalink:"/docs/customization/styles"},next:{title:"Common Pitfalls",permalink:"/docs/customization/pitfall"}},l={},c=[{value:"Adding custom colors",id:"adding-custom-colors",level:3},{value:"Adding custom &#39;other&#39; properties",id:"adding-custom-other-properties",level:3},{value:"Extending RNE default components",id:"extending-rne-default-components",level:3},{value:"Using the theme in your own components",id:"using-the-theme-in-your-own-components",level:3}],d={toc:c},u="wrapper";function y(e){var n=e.components,t=(0,r.A)(e,i);return(0,a.yg)(u,(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"TypeScript definitions for your theme can be extended by using TypeScript's ",(0,a.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html"},"declaration merging")," feature. First you need to create a declaration file called ",(0,a.yg)("inlineCode",{parentName:"p"},"themed.d.ts")," and then declare the module ",(0,a.yg)("inlineCode",{parentName:"p"},"@rneui/themed")," and 're-export' the types that you want to extend. i.e. below we add a custom ",(0,a.yg)("inlineCode",{parentName:"p"},"p1Style")," to the ",(0,a.yg)("inlineCode",{parentName:"p"},"Text")," theme object and we add a bunch of colors to the ",(0,a.yg)("inlineCode",{parentName:"p"},"colors")," object."),(0,a.yg)("h3",{id:"adding-custom-colors"},"Adding custom colors"),(0,a.yg)("p",null,"TypeScript will only autocomplete RNE's default colors when accessing the theme. To add your custom colors to the ",(0,a.yg)("inlineCode",{parentName:"p"},"Colors")," type, you can use TypeScript module declaration:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"// themed.d.ts\nimport '@rneui/themed';\n\ndeclare module '@rneui/themed' {\n  export interface Colors {\n    tertiary: string;\n    accent: string;\n    surface: string;\n  }\n}\n")),(0,a.yg)("p",null,"Then when you create your ",(0,a.yg)("inlineCode",{parentName:"p"},"ThemeProvider")," instance,"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"// App.tsx\nconst theme = createTheme({\n  lightColors: {\n    tertiary: '#124789',\n    accent: '#f98652',\n    surface: '#0990763',\n  },\n  darkColors: {\n    tertiary: '#124789',\n    accent: '#908652',\n    surface: '#0990763',\n  },\n  components:{\n    Button:(props,theme)=>({\n      containerStyle:{\n        backgroundColor:theme.colors.tertiary\n      }\n    })\n  }\n  mode: 'light', // or 'dark'\n});\n\n// Wrap with ThemeProvider\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Component />\n    </ThemeProvider>\n  );\n};\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Usage")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"// Component.tsx\nexport const Component = () => {\n  const { theme } = useTheme();\n  return <Text style={{ color: theme.colors.accent }} />;\n};\n")),(0,a.yg)("h3",{id:"adding-custom-other-properties"},"Adding custom 'other' properties"),(0,a.yg)("p",null,"Similar to how you can extend/set custom colors, you can add your own properties to the ",(0,a.yg)("inlineCode",{parentName:"p"},"theme")," type using TypeScript module declaration:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"// themed.d.ts\nimport '@rneui/themed';\n\ndeclare module '@rneui/themed' {\n  export interface Theme {\n    myCustomProperty: string;\n    myCustomFunction: () => void;\n  }\n}\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Usage")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"// App.tsx\nconst App = () => {\n  const { theme } = useTheme();\n  return <Text>{theme.myCustomProperty}</Text>;\n};\n")),(0,a.yg)("h3",{id:"extending-rne-default-components"},"Extending RNE default components"),(0,a.yg)("p",null,"If you need to extend some props of RNE's default components, you can use TypeScript module declaration, Also remember to extend ",(0,a.yg)("inlineCode",{parentName:"p"},"ComponentTheme")," too."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"// themed.d.ts\nimport '@rneui/themed';\n\ndeclare module '@rneui/themed' {\n  export interface TextProps {\n    bold: boolean;\n  }\n\n  export interface ComponentTheme {\n    Text: Partial<TextProps>;\n  }\n}\n")),(0,a.yg)("p",null,"For eg. You can use the following code to extend the ",(0,a.yg)("inlineCode",{parentName:"p"},"Text")," component:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const myTheme = createTheme({\n  Text: (props) => ({\n    style: {\n      fontWeight: props.bold ? 'bold' : 'normal',\n    },\n  }),\n});\n")),(0,a.yg)("p",null,"and use it like this"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n  const { theme } = useTheme();\n  return (\n    <View>\n      <Text>Normal Text</Text>\n      <Text bold>Bold Text</Text>\n    </View>\n  );\n};\n")),(0,a.yg)("h3",{id:"using-the-theme-in-your-own-components"},"Using the theme in your own components"),(0,a.yg)("p",null,"You may want to make use of the theming utilities in your own components. For this you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"withTheme(Component,ComponentThemeKey)")," HOC exported from this library. It adds three props to the component it wraps - theme, updateTheme and replaceTheme."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { withTheme } from '@rneui/themed';\n\ntype CustomComponentProps = {\n  title: string;\n  titleStyle: StyleProps<TextStyle>;\n};\n\nconst CustomComponent = (props: CustomComponentProps) => {\n  // Access theme from props\n  const { theme, updateTheme, replaceTheme } = props;\n  // ...\n};\n\nexport default withTheme<CustomComponentProps>(CustomComponent, 'ComponentKey');\n\ndeclare module '@rneui/themed' {\n  export interface ComponentTheme {\n    ComponentKey: Partial<CustomComponentProps>;\n  }\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { ThemeProvider, createTheme } from '@rneui/themed';\n\nconst myTheme = createTheme({\n  components: {\n    ComponentKey: {\n      titleStyle: {\n        color: 'red',\n      },\n    },\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={myTheme}>\n      <CustomComponent title=\"My Component\" />\n    </ThemeProvider>\n  );\n};\n")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Theme Key for custom component must be unique")))}y.isMDXComponent=!0}}]);