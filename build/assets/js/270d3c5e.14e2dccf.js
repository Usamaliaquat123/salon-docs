"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[4922],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,y=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return n?o.createElement(y,l(l({ref:t},m),{},{components:n})):o.createElement(y,l({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var o=n(58168),r=n(98587),a=(n(96540),n(15680)),l=["components"],i={id:"customization",title:"Customization"},s=void 0,p={unversionedId:"customization",id:"version-2.3.2/customization",title:"Customization",description:"Congrats! You've installed React Native Elements and your immediate question",source:"@site/versioned_docs/version-2.3.2/customization.md",sourceDirName:".",slug:"/customization",permalink:"/docs/2.3.2/customization",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.3.2/customization.md",tags:[],version:"2.3.2",frontMatter:{id:"customization",title:"Customization"},sidebar:"version-2.3.2/docs",previous:{title:"Overview",permalink:"/docs/2.3.2/overview"},next:{title:"Usage on the Web",permalink:"/docs/2.3.2/web_usage"}},m={},u=[{value:"Component Styles",id:"component-styles",level:2},{value:"Theming",id:"theming",level:2},{value:"Using Composition",id:"using-composition",level:3},{value:"Using ThemeProvider",id:"using-themeprovider",level:3},{value:"TypeScript Definitions (extending the default theme)",id:"typescript-definitions-extending-the-default-theme",level:3},{value:"Order of Styles",id:"order-of-styles",level:3},{value:"Internal",id:"internal",level:4},{value:"Theme",id:"theme",level:4},{value:"External",id:"external",level:4},{value:"The Theme Object",id:"the-theme-object",level:3},{value:"Dark Mode",id:"dark-mode",level:3},{value:"Using the theme in your own components",id:"using-the-theme-in-your-own-components",level:3},{value:"Using the respective platform&#39;s native colors",id:"using-the-respective-platforms-native-colors",level:3},{value:"Common Pitfalls",id:"common-pitfalls",level:3},{value:"My local styles aren&#39;t working with the theme",id:"my-local-styles-arent-working-with-the-theme",level:4},{value:"Example 1",id:"example-1",level:5},{value:"Example 2",id:"example-2",level:5},{value:"Example 3",id:"example-3",level:5}],c={toc:u},h="wrapper";function y(e){var t=e.components,n=(0,r.A)(e,l);return(0,a.yg)(h,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Congrats! You've installed React Native Elements and your immediate question\ngoes something like this:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"So umm, how do I change how it looks?")),(0,a.yg)("p",null,"Great question! A UI Kit wouldn't be that useful if the apps everyone built\nlooked the same right? For this case React Native Elements provide a number of\nprops on each component to enable you to style them how you want."),(0,a.yg)("h2",{id:"component-styles"},"Component Styles"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Every")," component from React Native Elements has a container around it. The\ncontainer is just a traditional ",(0,a.yg)("inlineCode",{parentName:"p"},"<View />")," from react native that has some\nstyling on it. This default styling prevents components from colliding with each\nother. If you want to change how two components react to each on the screen your\nfirst stop should be the ",(0,a.yg)("inlineCode",{parentName:"p"},"containerStyle")," prop."),(0,a.yg)("p",null,"Similar to ",(0,a.yg)("inlineCode",{parentName:"p"},"containerStyle"),", components may provide their custom style props\nlike ",(0,a.yg)("inlineCode",{parentName:"p"},"buttonStyle"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"titleStyle")," etc. Always refer to the documentation for the\ncomponent to find out which style props it provides."),(0,a.yg)("h2",{id:"theming"},"Theming"),(0,a.yg)("p",null,"While component styles are great for single use, you may want to have the same\nstyling for every instance of a component. For example, you may want all your\nbuttons to be blue or have the same font. Here are some ways to reuse styles\nwith React Native Elements."),(0,a.yg)("h3",{id:"using-composition"},"Using Composition"),(0,a.yg)("p",null,"With this approach, we create one component with the styles we want and use that\ninstead of the built-in component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Button } from 'react-native-elements';\n\nconst RaisedButton = (props) => <Button raised {...props} />;\n\n// Your App\nconst App = () => {\n  return <RaisedButton title=\"Yea\" />;\n};\n")),(0,a.yg)("p",null,"If we want to use a button that's raised in our app, we can use ",(0,a.yg)("inlineCode",{parentName:"p"},"RaisedButton"),"\ninstead of using ",(0,a.yg)("inlineCode",{parentName:"p"},"Button"),". This component still accepts all the props from the\nnormal ",(0,a.yg)("inlineCode",{parentName:"p"},"Button")," just that it has the ",(0,a.yg)("inlineCode",{parentName:"p"},"raised")," prop set by default."),(0,a.yg)("h3",{id:"using-themeprovider"},"Using ThemeProvider"),(0,a.yg)("p",null,"The previous solution works great for only one component, but imagine having to\ndo this for every component you want custom styles for. That could get a bit\ntedious to manage. Thankfully, there's a better way to do this. React Native\nElements ships with a 3 utilities for large-scale theming."),(0,a.yg)("p",null,"Firstly you'll want to set up your ",(0,a.yg)("inlineCode",{parentName:"p"},"ThemeProvider"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'import { ThemeProvider, Button } from \'react-native-elements\';\n\nconst theme = {\n  Button: {\n    raised: true,\n  },\n};\n\n// Your App\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title="My Button" />\n      <Button title="My 2nd Button" />\n    </ThemeProvider>\n  );\n};\n')),(0,a.yg)("p",null,"The example above achieves the same goals as the first example \u2014 apply the same\nstyles to multiple instances of ",(0,a.yg)("inlineCode",{parentName:"p"},"Button")," in the app. However this example\napplies the ",(0,a.yg)("inlineCode",{parentName:"p"},"raised")," prop to every instance of ",(0,a.yg)("inlineCode",{parentName:"p"},"Button")," inside the component\ntree under ",(0,a.yg)("inlineCode",{parentName:"p"},"ThemeProvider"),". Both of these buttons will have the ",(0,a.yg)("inlineCode",{parentName:"p"},"raised")," prop\nset to true."),(0,a.yg)("p",null,"This is extremely convenient and is made possible through\n",(0,a.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React's Context API"),"."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"typescript-definitions-extending-the-default-theme"},"TypeScript Definitions (extending the default theme)"),(0,a.yg)("p",null,"TypeScript definitions for your theme can be extended by using TypeScript's ",(0,a.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html"},"declaration merging")," feature. First you need to create a declaration file called ",(0,a.yg)("inlineCode",{parentName:"p"},"react-native-elements.d.ts")," and then declare the module ",(0,a.yg)("inlineCode",{parentName:"p"},"react-native-elements")," and 're-export' the types that you want to extend."),(0,a.yg)("p",null,"i.e. below we add a custom p1Style to the Text theme object and we add a bunch of colors to the colors object."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };\n\ndeclare module 'react-native-elements' {\n  export interface TextProps {\n    p1Style: StyleProp<TextStyle>;\n  }\n\n  export interface Colors {\n    background: string;\n    border: string;\n    text: string;\n    altText: string;\n    danger: string;\n  }\n\n  export interface FullTheme {\n    colors: RecursivePartial<Colors>;\n    Text: Partial<TextProps>;\n  }\n}\n")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"order-of-styles"},"Order of Styles"),(0,a.yg)("p",null,"What happens now if we want a ",(0,a.yg)("inlineCode",{parentName:"p"},"Button")," that isn't raised? To do that we have to understand the order in which styles are applied."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Internal > Theme > External")),(0,a.yg)("h4",{id:"internal"},"Internal"),(0,a.yg)("p",null,"Internal components styles are the styles which are defined in the component\nfile. These are applied first."),(0,a.yg)("h4",{id:"theme"},"Theme"),(0,a.yg)("p",null,"Theme styles are the values that are set by the ThemeProvider If present, these\nare applied second."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider, Button } from 'react-native-elements';\n\nconst theme = {\n  Button: {\n    titleStyle: {\n      color: 'red',\n    },\n  },\n};\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,a.yg)("p",null,"This will override the white color for the title set in the component's style."),(0,a.yg)("h4",{id:"external"},"External"),(0,a.yg)("p",null,"External styles are the styles which are set through the component props. These\nare applied last and have the highest precedence."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider, Button } from 'react-native-elements';\n\nconst theme = {\n  Button: {\n    titleStyle: {\n      color: 'red',\n    },\n  },\n};\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title=\"My Button\" titleStyle={{ color: 'pink' }} />\n    </ThemeProvider>\n  );\n};\n")),(0,a.yg)("p",null,"This will override both the white color for the title set in the component's\nstyle as well as the red color set in the theme."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Remember if you want to override the values set in the theme you can always\nuse component props.")),(0,a.yg)("p",null,"Note: To theme subcomponents such as ",(0,a.yg)("inlineCode",{parentName:"p"},"ListItem.Title"),', in your theme remove the dot and list them as "ListItemTitle"'),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"the-theme-object"},"The Theme Object"),(0,a.yg)("p",null,"By default, the theme object looks like this. You can add whatever values you\nwant to the theme, and they will be merged with the default. By default the\nplatform colors aren't used anywhere. These native colors are added for\nyour convenience."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"interface theme {\n  colors: {\n    primary;\n    secondary;\n    white;\n    black;\n    grey0;\n    grey1;\n    grey2;\n    grey3;\n    grey4;\n    grey5;\n    greyOutline;\n    searchBg;\n    success;\n    error;\n    warning;\n    divider;\n    platform: {\n      ios: {\n        primary;\n        secondary;\n        grey;\n        searchBg;\n        success;\n        error;\n        warning;\n      };\n      android: {\n        // Same as ios\n      };\n    };\n  };\n}\n")),(0,a.yg)("p",null,"Setting styles in the theme is as simple as using the name of the component, as\na key and the props you want to change as the value."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider } from 'react-native-elements';\n\nconst theme = {\n  Avatar: {\n    rounded: true,\n  },\n  Badge: {\n    textStyle: { fontSize: 30 },\n  },\n};\n\n...\n\n<ThemeProvider theme={theme}>\n")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"dark-mode"},"Dark Mode"),(0,a.yg)("p",null,"React Native Elements also provides a preset dark mode palette to get you started with using dark mode in your app.\nUse the prop ",(0,a.yg)("inlineCode",{parentName:"p"},"useDark")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"ThemeProvider")," to set the default dark theme. You may want to set this by using a button,\nor by using the user's configured settings"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import { useColorScheme } from 'react-native-appearance';\n\n...\n  let colorScheme = useColorScheme();\n...\n  <ThemeProvider useDark={colorScheme === 'dark'}>\n...\n")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"using-the-theme-in-your-own-components"},"Using the theme in your own components"),(0,a.yg)("p",null,"You may want to make use of the theming utilities in your own components. For\nthis you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"withTheme")," HOC exported from this library. It adds three\nprops to the component it wraps - ",(0,a.yg)("inlineCode",{parentName:"p"},"theme"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"updateTheme")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"replaceTheme"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Text } from 'react-native';\nimport { withTheme } from 'react-native-elements';\n\nfunction MyComponent(props) {\n  const { theme, updateTheme, replaceTheme } = props;\n  return <Text style={{ color: theme.colors.primary }}>Yo!</Text>;\n}\n\nexport default withTheme(MyComponent);\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"updateTheme")," function merges the theme passed in with the current theme."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  colors: {\n    primary: 'pink',\n  },\n};\n\n// We can update the primary color\nupdateTheme({ colors: { primary: 'red' } });\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"replaceTheme")," function merges the theme passed in with the default theme."),(0,a.yg)("p",null,"Don't want to wrap your components? You can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"ThemeConsumer")," component\nwhich uses render props!"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Text } from 'react-native';\nimport { ThemeConsumer } from 'react-native-elements';\n\nconst MyComponent = () => (\n  <ThemeConsumer>\n    {({ theme }) => (\n      <Text style={{ color: theme.colors.primary }}>Yo!</Text>;\n    )}\n  </ThemeConsumer>\n)\n")),(0,a.yg)("p",null,"You can also use the ThemeContext directly if you use hooks."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import React, { useContext } from 'react';\nimport { Text } from 'react-native';\nimport { ThemeContext } from 'react-native-elements';\n\nconst MyComponent = () => {\n  const { theme } = useContext(ThemeContext);\n\n  return (\n    <View style={styles.container}>\n      <Text style={{ color: theme.colors.primary }}>Yo!</Text>\n    </View>\n  );\n};\n")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"using-the-respective-platforms-native-colors"},"Using the respective platform's native colors"),(0,a.yg)("p",null,"You may want to style your app using the native color palette. You can do this\nusing the ",(0,a.yg)("inlineCode",{parentName:"p"},"colors")," object and the ",(0,a.yg)("inlineCode",{parentName:"p"},"Platform")," API."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import { Platform } from 'react-native';\nimport { Button, colors, ThemeProvider } from 'react-native-elements';\n\nconst theme = {\n  colors: {\n    ...Platform.select({\n      default: colors.platform.android,\n      ios: colors.platform.ios,\n    }),\n  },\n};\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      // This button's color will now be the default iOS / Android blue.\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"common-pitfalls"},"Common Pitfalls"),(0,a.yg)("p",null,"This section outlines some common pitfalls when using Theming."),(0,a.yg)("h4",{id:"my-local-styles-arent-working-with-the-theme"},"My local styles aren't working with the theme"),(0,a.yg)("p",null,"It's important to understand that the ",(0,a.yg)("inlineCode",{parentName:"p"},"ThemeProvider")," works by merging your local(external) styles with those set on the theme.\nThis means that in both cases ",(0,a.yg)("strong",{parentName:"p"},"the type of these styles must be the same"),"."),(0,a.yg)("h5",{id:"example-1"},"Example 1"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  Button: {\n    containerStyle: {\n      marginTop: 10;\n    }\n  }\n}\n\n<Button\n  containerStyle={{ backgroundColor: 'blue' }}\n/>\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u2705 Works"),(0,a.yg)("p",{parentName:"blockquote"},"In both cases the style is an ",(0,a.yg)("inlineCode",{parentName:"p"},"object"))),(0,a.yg)("br",null),(0,a.yg)("h5",{id:"example-2"},"Example 2"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  Button: {\n    containerStyle: [\n      {\n        marginTop: 10;\n      }\n    ]\n  }\n}\n\n<Button containerStyle={[{ backgroundColor: 'blue' }]} />\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u2705 Works"),(0,a.yg)("p",{parentName:"blockquote"},"In both cases the style is an ",(0,a.yg)("inlineCode",{parentName:"p"},"array"))),(0,a.yg)("br",null),(0,a.yg)("h5",{id:"example-3"},"Example 3"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  Button: {\n    containerStyle: {\n      marginTop: 10;\n    }\n  }\n}\n\n<Button containerStyle={[{ backgroundColor: 'blue' }]} />\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\ud83d\udeab Doesn't work"),(0,a.yg)("p",{parentName:"blockquote"},"In one case the style is an ",(0,a.yg)("inlineCode",{parentName:"p"},"object")," and another the style is an ",(0,a.yg)("inlineCode",{parentName:"p"},"array"))))}y.isMDXComponent=!0}}]);