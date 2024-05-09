"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[92233],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(t),u=r,y=g["".concat(p,".").concat(u)]||g[u]||m[u]||o;return t?a.createElement(y,i(i({ref:n},s),{},{components:t})):a.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},56976:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var a=t(58168),r=t(98587),o=(t(96540),t(15680)),i=["components"],l={id:"troubleshooting",title:"Troubleshooting"},p=void 0,c={unversionedId:"troubleshooting",id:"version-4.0.0-rc.2/troubleshooting",title:"Troubleshooting",description:"Although we try to make the experience of using React Native Elements",source:"@site/versioned_docs/version-4.0.0-rc.2/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/4.0.0-rc.2/troubleshooting",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/troubleshooting.md",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/4.0.0-rc.2/installation"},next:{title:"Overview",permalink:"/docs/4.0.0-rc.2/customizing"}},s={},g=[{value:"You incorrectly spelt a component",id:"you-incorrectly-spelt-a-component",level:3},{value:"Importing a component from the wrong version",id:"importing-a-component-from-the-wrong-version",level:3},{value:"Using <code>react-native-init</code>",id:"using-react-native-init",level:3},{value:"Using an Expo app (create-react-native-app or Expo XDE)",id:"using-an-expo-app-create-react-native-app-or-expo-xde",level:3},{value:"Using a detached <code>create-react-native-app</code> app",id:"using-a-detached-create-react-native-app-app",level:3}],m={toc:g},u="wrapper";function y(e){var n=e.components,t=(0,r.A)(e,i);return(0,o.yg)(u,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Although we try to make the experience of using React Native Elements\nhassle-free, time to time you may encounter some problems along the way."),(0,o.yg)("p",null,"On this page you can find solutions to commonly encountered issues."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Invariant Violation: Element type is invalid")),(0,o.yg)("p",null,"This error occurs when trying to import a component that doesn't exist. This\nusually happens for a few reasons:"),(0,o.yg)("h3",{id:"you-incorrectly-spelt-a-component"},"You incorrectly spelt a component"),(0,o.yg)("p",null,"Spelling a component incorrectly though very simple, happens occasionally."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},"// Incorrect\nimport { Listitem } from '@rneui/themed';\n\n// Correct\nimport { ListItem } from '@rneui/themed';\n")),(0,o.yg)("h3",{id:"importing-a-component-from-the-wrong-version"},"Importing a component from the wrong version"),(0,o.yg)("p",null,"This error occurs when you're trying to use a component from the wrong version.\nAt RNE they're some components that are only available in some versions."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-md"},"Example:\n\n`<FormInput />` is only available in v0.19.1 and below. `<Input />` is only\navailable in `v1.0.0-beta1` and higher.\n")),(0,o.yg)("p",null,"To fix this, follow these steps:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Check your ",(0,o.yg)("inlineCode",{parentName:"li"},"package.json")," for the version of ",(0,o.yg)("inlineCode",{parentName:"li"},"@rneui/themed")," you are\nusing."),(0,o.yg)("li",{parentName:"ol"},"View the documentation for your particular version on the website. See\navailable versions\n",(0,o.yg)("a",{parentName:"li",href:"/versions"},"here"),"\nor click the version number next to the logo in the header."),(0,o.yg)("li",{parentName:"ol"},"Checking the list of components on the left side bar, make sure you're using\nthe right component.")),(0,o.yg)("hr",null),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"fontFamily (font-name) is not a system font")),(0,o.yg)("p",null,"This is a general error in react native, where you in your code, or a package\nyou are using, is trying to use a font that is not bundled with the platform or\nis not added to the project."),(0,o.yg)("p",null,"If you aren't using a custom font in your application, then it's likely that\nthe error comes from React Native Elements looking for\n",(0,o.yg)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"."),(0,o.yg)("p",null,"They're a couple ways to solve this depending on your setup."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#you-incorrectly-spelt-a-component"},"You incorrectly spelt a component")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#importing-a-component-from-the-wrong-version"},"Importing a component from the wrong version")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#using-react-native-init"},"Using ",(0,o.yg)("inlineCode",{parentName:"a"},"react-native-init"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#using-an-expo-app-create-react-native-app-or-expo-xde"},"Using an Expo app (create-react-native-app or Expo XDE)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#using-a-detached-create-react-native-app-app"},"Using a detached ",(0,o.yg)("inlineCode",{parentName:"a"},"create-react-native-app")," app"))),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"using-react-native-init"},"Using ",(0,o.yg)("inlineCode",{parentName:"h3"},"react-native-init")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Delete everything to be sure"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"rm -rf node_modules yarn.lock\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Install React Native Elements"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn && yarn add @rneui/base @rneui/themed\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Install react-native-vector-icons"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn add react-native-vector-icons\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Link react-native-vector-icons. Learn more about\n",(0,o.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/linking.html"},"linking"),"."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"react-native link react-native-vector-icons\n")))),(0,o.yg)("p",null,"If you encounter any red error screens during the process, try running these\ncommands:"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},'"Unrecognized font x"'),(0,o.yg)("p",{parentName:"blockquote"},"iOS - ",(0,o.yg)("inlineCode",{parentName:"p"},"rm -rf ios/build")),(0,o.yg)("p",{parentName:"blockquote"},"Android - ",(0,o.yg)("inlineCode",{parentName:"p"},"rm -rf android/build && rm -rf android/app/build"))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},'"Unable to resolve module x"'),(0,o.yg)("p",{parentName:"blockquote"},"npm -",(0,o.yg)("inlineCode",{parentName:"p"},"rm -rf node_modules && npm i")),(0,o.yg)("p",{parentName:"blockquote"},"yarn - ",(0,o.yg)("inlineCode",{parentName:"p"},"rm -rf node_modules && yarn"))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},'"Unable to resolve module x"'),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("inlineCode",{parentName:"p"},"npm start -- --reset-cache"))),(0,o.yg)("h3",{id:"using-an-expo-app-create-react-native-app-or-expo-xde"},"Using an Expo app (create-react-native-app or Expo XDE)"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Delete everything to be sure"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"rm -rf node_modules yarn.lock package-lock.json\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Install React Native Elements"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn && yarn add @rneui/base @rneui/themed\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Install ",(0,o.yg)("inlineCode",{parentName:"p"},"@expo/vector-icons")),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn add @expo/vector-icons --save\n")))),(0,o.yg)("h3",{id:"using-a-detached-create-react-native-app-app"},"Using a detached ",(0,o.yg)("inlineCode",{parentName:"h3"},"create-react-native-app")," app"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If you choose a regular React Native project, use\n",(0,o.yg)("a",{parentName:"li",href:"#using-react-native-init"},"Solution 1")),(0,o.yg)("li",{parentName:"ul"},"If you choose to use Expo SDK (ExpoKit), use\n",(0,o.yg)("a",{parentName:"li",href:"#using-an-expo-app-create-react-native-app-or-expo-xde"},"Solution 2"))))}y.isMDXComponent=!0}}]);