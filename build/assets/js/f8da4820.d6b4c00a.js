"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[79346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=r,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"useHUser()",sidebar_position:1},l=void 0,c={unversionedId:"customization/theme_object",id:"version-4.0.0-rc.8/customization/theme_object",title:"useHUser()",description:"User Information",source:"@site/versioned_docs/version-4.0.0-rc.8/customization/theme_object.mdx",sourceDirName:"customization",slug:"/customization/theme_object",permalink:"/docs/customization/theme_object",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/customization/theme_object.mdx",tags:[],version:"4.0.0-rc.8",sidebarPosition:1,frontMatter:{title:"useHUser()",sidebar_position:1},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/customizing"},next:{title:"useHAppConfig()",permalink:"/docs/customization/themeprovider"}},u={},p=[{value:"User Information",id:"user-information",level:2},{value:"Language",id:"language",level:2},{value:"Theme Mode",id:"theme-mode",level:2},{value:"Loading",id:"loading",level:2},{value:"Spacing",id:"spacing",level:3}],g={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const {\n    loading,\n    language,\n    themeMode,\n    accessToken,\n    loginInfo,\n    userInfo,\n} = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\nconsole.log(language) /** Language state of the app **/\nconsole.log(themeMode) /** Current theme of the app **/\nconsole.log(accessToken) /** User Current Token of the app **/\nconsole.log(loginInfo) /** loginInfo state of the app **/\nconsole.log(userInfo) /** UserInfo state of the app **/\n\n")),(0,a.kt)("h2",{id:"user-information"},"User Information"),(0,a.kt)("p",null,"you can get the current authenticated user information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { userInfo } = useHUser()\n\nconsole.log(loginInfo) /** loginInfo state of the app **/\n\n")),(0,a.kt)("h2",{id:"language"},"Language"),(0,a.kt)("p",null,"language will show you the current app level language"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { language } = useHUser()\n\nconsole.log(language) /** Language state of the app **/\n\n")),(0,a.kt)("h2",{id:"theme-mode"},"Theme Mode"),(0,a.kt)("p",null,"current app theme"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { themeMode } = useHUser()\n\nconsole.log(themeMode) /** Current theme of the app **/\n\n")),(0,a.kt)("h2",{id:"loading"},"Loading"),(0,a.kt)("p",null,"loading state of the app"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n\n")),(0,a.kt)("h3",{id:"spacing"},"Spacing"))}m.isMDXComponent=!0}}]);