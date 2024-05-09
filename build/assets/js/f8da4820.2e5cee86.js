"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[29990],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,d=p["".concat(l,".").concat(m)]||p[m]||g[m]||a;return t?o.createElement(d,i(i({ref:n},u),{},{components:t})):o.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=t(58168),r=t(98587),a=(t(96540),t(15680)),i=["components"],s={title:"useHUser()",sidebar_position:1},l=void 0,c={unversionedId:"customization/theme_object",id:"version-4.0.0-rc.8/customization/theme_object",title:"useHUser()",description:"User Information",source:"@site/versioned_docs/version-4.0.0-rc.8/customization/theme_object.mdx",sourceDirName:"customization",slug:"/customization/theme_object",permalink:"/docs/customization/theme_object",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/customization/theme_object.mdx",tags:[],version:"4.0.0-rc.8",sidebarPosition:1,frontMatter:{title:"useHUser()",sidebar_position:1},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/customizing"},next:{title:"useHAppConfig()",permalink:"/docs/customization/themeprovider"}},u={},p=[{value:"User Information",id:"user-information",level:2},{value:"Language",id:"language",level:2},{value:"Theme Mode",id:"theme-mode",level:2},{value:"Loading",id:"loading",level:2},{value:"Spacing",id:"spacing",level:3}],g={toc:p},m="wrapper";function d(e){var n=e.components,t=(0,r.A)(e,i);return(0,a.yg)(m,(0,o.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const {\n    loading,\n    language,\n    themeMode,\n    accessToken,\n    loginInfo,\n    userInfo,\n} = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\nconsole.log(language) /** Language state of the app **/\nconsole.log(themeMode) /** Current theme of the app **/\nconsole.log(accessToken) /** User Current Token of the app **/\nconsole.log(loginInfo) /** loginInfo state of the app **/\nconsole.log(userInfo) /** UserInfo state of the app **/\n\n")),(0,a.yg)("h2",{id:"user-information"},"User Information"),(0,a.yg)("p",null,"you can get the current authenticated user information"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const { userInfo } = useHUser()\n\nconsole.log(loginInfo) /** loginInfo state of the app **/\n\n")),(0,a.yg)("h2",{id:"language"},"Language"),(0,a.yg)("p",null,"language will show you the current app level language"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const { language } = useHUser()\n\nconsole.log(language) /** Language state of the app **/\n\n")),(0,a.yg)("h2",{id:"theme-mode"},"Theme Mode"),(0,a.yg)("p",null,"current app theme"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const { themeMode } = useHUser()\n\nconsole.log(themeMode) /** Current theme of the app **/\n\n")),(0,a.yg)("h2",{id:"loading"},"Loading"),(0,a.yg)("p",null,"loading state of the app"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n\n")),(0,a.yg)("h3",{id:"spacing"},"Spacing"))}d.isMDXComponent=!0}}]);