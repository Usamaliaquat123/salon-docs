"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[94609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),p=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,d=c["".concat(m,".").concat(h)]||c[h]||u[h]||a;return n?o.createElement(d,i(i({ref:t},l),{},{components:n})):o.createElement(d,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=n(50941),s=n(44996),m=["components"],p={title:"useHStripe()",sidebar_position:2},l=void 0,u={unversionedId:"customization/useHStripe",id:"version-4.0.0-rc.8/customization/useHStripe",title:"useHStripe()",description:"The previous solution works great for only one component, but imagine having to",source:"@site/versioned_docs/version-4.0.0-rc.8/customization/useHStripe.mdx",sourceDirName:"customization",slug:"/customization/useHStripe",permalink:"/docs/customization/useHStripe",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/customization/useHStripe.mdx",tags:[],version:"4.0.0-rc.8",sidebarPosition:2,frontMatter:{title:"useHStripe()",sidebar_position:2},sidebar:"docs",previous:{title:"useHSaloonProduct()",permalink:"/docs/customization/useHSaloonProduct"},next:{title:"useHLogin()",permalink:"/docs/customization/usehlogin"}},c={},h=[{value:"<code>createTheme</code>",id:"createtheme",level:3},{value:"<code>useTheme</code>",id:"usetheme",level:3},{value:"<code>useThemeMode</code>",id:"usethememode",level:3},{value:"<code>withTheme</code>",id:"withtheme",level:3},{value:"More examples",id:"more-examples",level:2},{value:"Using with React Navigation",id:"using-with-react-navigation",level:3},{value:"Switch theme mode with useColorScheme",id:"switch-theme-mode-with-usecolorscheme",level:3},{value:"Theme mode based background color",id:"theme-mode-based-background-color",level:3}],d={toc:h};function k(e){var t=e.components,n=(0,r.Z)(e,m);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The previous solution works great for only one component, but imagine having to\ndo this for every component you want custom styles for. That could get a bit\ntedious to manage. Thankfully, there's a better way to do this. React Native\nElements ships with a 3 utilities for large-scale theming."),(0,a.kt)("p",null,"Firstly you'll want to set up your ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeProvider"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Import")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ThemeProvider } from '@rneui/themed';\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"#createtheme"},"createTheme")," to generate a theme object. Then, pass it as a prop to ThemeProvider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = createTheme({\n  lightColors: {\n    primary: 'red',\n  },\n  darkColors: {\n    primary: 'blue',\n  },\n  components: {\n    Button: {\n      raised: true,\n    },\n  },\n});\n\n// Your App\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button>My Button</Button>\n    </ThemeProvider>\n  );\n};\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you do not specify ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," in ThemeProvider, it would use ",(0,a.kt)("a",{parentName:"p",href:"./theme_object#default-light-colors"},"defaultTheme"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Want to use custom color? refer ",(0,a.kt)("a",{parentName:"p",href:"./extending#adding-custom-colors"},"extending colors"))),(0,a.kt)("p",null,"The example above achieves the same goals as the first example \u2014 apply the same\nstyles to multiple instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," in the app. However this example\napplies the ",(0,a.kt)("inlineCode",{parentName:"p"},"raised")," prop to every instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," inside the component\ntree under ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeProvider"),". Both of these buttons will have the ",(0,a.kt)("inlineCode",{parentName:"p"},"raised")," prop\nset to true."),(0,a.kt)("p",null,"This is extremely convenient and is made possible through\n",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React's Context API"),"."),(0,a.kt)("h3",{id:"createtheme"},(0,a.kt)("inlineCode",{parentName:"h3"},"createTheme")),(0,a.kt)("p",null,"Generate a theme base on the options received. Then, pass it as a prop to ThemeProvider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"createTheme({\n  lightColors: Colors,\n  darkColors: Colors,\n  mode: 'light' | 'dark',\n  components: {\n    componentName: (props, theme) => ({\n      // Props\n    }),\n  },\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How it works")),(0,a.kt)(i.Z,{alt:"how createTheme works internally",sources:{light:(0,s.Z)("/img/docs/light.png"),dark:(0,s.Z)("/img/docs/dark.png")},mdxType:"ThemedImage"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To theme subcomponents such as ",(0,a.kt)("inlineCode",{parentName:"p"},"ListItem.Title"),', in your theme remove the dot and list them as "ListItemTitle"')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usetheme"},(0,a.kt)("inlineCode",{parentName:"h3"},"useTheme")),(0,a.kt)("p",null,"Hook returns ",(0,a.kt)("inlineCode",{parentName:"p"},"theme"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"updateTheme")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"replaceTheme")," from ThemeProvider context or default theme if you did not wrap application with ThemeProvider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useTheme } from '@rneui/themed';\n\nfunction Demo() {\n  const { theme, updateTheme } = useTheme();\n  return (\n    <View style={{ background: theme.colors.primary }}>\n      <Button onPress={() => updateTheme({ colors: { primary: 'red' } })} />\n    </View>\n  );\n}\n")),(0,a.kt)("p",null,"The updateTheme function merges the theme passed in with the current theme."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"updateTheme({\n  lightColors: {\n    primary: 'purple',\n  },\n});\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"replaceTheme")," function merges the theme passed in with the default theme."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Want single-theme?")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = createTheme({\n  // Use only one color scheme\n  lightColors: {\n    primary: 'red',\n  },\n  // And set that mode as default\n  mode: 'light',\n  components: {\n    Button: {\n      raised: true,\n    },\n  },\n});\n\n// Your App\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button>My Button</Button>\n    </ThemeProvider>\n  );\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usethememode"},(0,a.kt)("inlineCode",{parentName:"h3"},"useThemeMode")),(0,a.kt)("p",null,"You can get current theme mode (light or dark) and update it using setMode function from useThemeMode hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useThemeMode } from '@rneui/themed';\n\nfunction Demo() {\n  const { mode, setMode } = useThemeMode();\n\n  return <Button onPress={() => setMode('dark')} title={mode} />;\n}\n")),(0,a.kt)("h3",{id:"withtheme"},(0,a.kt)("inlineCode",{parentName:"h3"},"withTheme")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function Signture")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"withTheme<Props>(Component, ?themeKey)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { withTheme, ThemeProps } from '@rneui/themed';\n\ntype CustomComponentProps = {\n  title: string;\n  titleStyle: StyleProps<TextStyle>;\n};\n\nconst CustomComponent = (props: ThemeProps<CustomComponentProps>) => {\n  // Access theme from props\n  const { theme, updateTheme, replaceTheme } = props;\n  // ...\n};\n\nexport default withTheme<CustomComponentProps>(CustomComponent, 'ComponentKey');\n")),(0,a.kt)("p",null,"Don't want to wrap your components with ",(0,a.kt)("inlineCode",{parentName:"p"},"withTheme"),"? You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeConsumer")," component\nwhich uses render props!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Text } from 'react-native';\nimport { ThemeConsumer } from '@rneui/themed';\n\nconst MyComponent = () => (\n  <ThemeConsumer>\n    {({ theme }) => (\n      <Text style={{ color: theme.colors.primary }}>Yo!</Text>;\n    )}\n  </ThemeConsumer>\n)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"more-examples"},"More examples"),(0,a.kt)("h3",{id:"using-with-react-navigation"},"Using with React Navigation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"React Navigation")," uses it's own ",(0,a.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/themes/"},"theming"),", you can use RNE UI's theme with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const Navigation = () => {\n  const { theme } = useTheme();\n\n  return (\n    <NavigationContainer\n      theme={{\n        colors: {\n          primary: theme.colors.primary,\n          background: theme.colors.background,\n          card: theme.colors.white,\n          text: theme.colors.black,\n        },\n        dark: theme.mode === 'dark',\n      }}\n    >\n      {/*  Navigators */}\n    </NavigationContainer>\n  );\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const theme=createTheme({\n  // ...\n})\n\nexport const App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Navigation>\n    </ThemeProvider>\n  );\n};\n")),(0,a.kt)("h3",{id:"switch-theme-mode-with-usecolorscheme"},"Switch theme mode with useColorScheme"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useColorScheme } from 'react-native';\n\nconst theme = createTheme({\n  // ...\n});\n\nexport const App = () => {\n  theme.mode = useColorScheme();\n\n  return (\n    <ThemeProvider theme={theme}>\n      {/*...*/}\n      {/*...*/}\n    </ThemeProvider>\n  );\n};\n")),(0,a.kt)("h3",{id:"theme-mode-based-background-color"},"Theme mode based background color"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const Background = ({ children }) => {\n  const styles = useStyles();\n  return <View style={styles.container}>{children}</View>;\n};\n\nconst useStyles = makeStyles((theme) => ({\n  container: {\n    backgroundColor: theme.colors.background,\n  },\n}));\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const theme = createTheme({\n  // default mode\n  mode: 'dark',\n});\n\nexport default function App() {\n  return (\n    <ThemeProvider theme={theme}>\n      <Background>\n        {/*...*/}\n        {/*...*/}\n      </Background>\n    </ThemeProvider>\n  );\n}\n")))}k.isMDXComponent=!0}}]);