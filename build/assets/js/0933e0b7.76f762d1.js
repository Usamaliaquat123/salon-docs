"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[7562],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return t?n.createElement(g,i(i({ref:a},c),{},{components:t})):n.createElement(g,i({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>w});var n=t(58168),r=t(96540),l=t(20053),i=t(23104),o=t(56347),s=t(57485),u=t(31682),c=t(89466);function p(e){return function(e){var a,t;return null!=(a=null==(t=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(a=e.props)&&"object"==typeof a&&"value"in a)return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function d(e){var a=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=a?a:p(t);return function(e){var a=(0,u.X)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function m(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function g(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId,l=(0,o.W6)(),i=function(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s.aZ)(i),(0,r.useCallback)((function(e){if(i){var a=new URLSearchParams(l.location.search);a.set(i,e),l.replace(Object.assign({},l.location,{search:a.toString()}))}}),[i,l])]}function y(e){var a,t,n,l,i=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,p=d(e),y=(0,r.useState)((function(){return function(e){var a,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),v=y[0],h=y[1],f=g({queryString:s,groupId:u}),b=f[0],N=f[1],w=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,c.Dv)(a),n=t[0],l=t[1],[n,(0,r.useCallback)((function(e){a&&l.set(e)}),[a,l])]),x=w[0],T=w[1],I=function(){var e=null!=b?b:x;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){I&&h(I)}),[I]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),N(e),T(e)}),[N,T,p]),tabValues:p}}var v=t(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){var a=e.className,t=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var a=e.currentTarget,t=c.indexOf(a),n=u[t].value;n!==o&&(p(a),s(n))},m=function(e){var a,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;t=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;t=null!=(l=c[i])?l:c[c.length-1]}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},u.map((function(e){var a=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,l.A)("tabs__item",h.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===a})}),null!=t?t:a)})))}function b(e){var a=e.lazy,t=e.children,n=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){var i=l.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})})))}function N(e){var a=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},r.createElement(f,(0,n.A)({},e,a)),r.createElement(b,(0,n.A)({},e,a)))}function w(e){var a=(0,v.A)();return r.createElement(N,(0,n.A)({key:String(a)},e))}},49440:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var n=t(58168),r=t(98587),l=(t(96540),t(15680)),i=t(11470),o=t(19365),s=t(86025),u=["components"],c={id:"installation",title:"",sidebar_label:"Installation"},p=void 0,d={unversionedId:"installation",id:"version-4.0.0-rc.6/installation",title:"",description:"Installation",source:"@site/versioned_docs/version-4.0.0-rc.6/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/4.0.0-rc.6/installation",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/installation.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"installation",title:"",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/4.0.0-rc.6/"},next:{title:"Troubleshooting",permalink:"/docs/4.0.0-rc.6/troubleshooting"}},m={},g=[{value:"Installation",id:"installation",level:2},{value:"Stable",id:"stable",level:3},{value:"Bleeding Edge",id:"bleeding-edge",level:3},{value:"Peer dependencies",id:"peer-dependencies",level:2},{value:"Install react-native-vector-icons",id:"install-react-native-vector-icons",level:3},{value:"Install react-native-safe-area-context",id:"install-react-native-safe-area-context",level:3},{value:"Using Expo",id:"using-expo",level:2},{value:"New Expo project",id:"new-expo-project",level:3},{value:"Existing Expo project",id:"existing-expo-project",level:3},{value:"Using on Web",id:"using-on-web",level:2},{value:"Why do I have to set this up?",id:"why-do-i-have-to-set-this-up",level:3},{value:"Create React App",id:"create-react-app",level:3}],y={toc:g},v="wrapper";function h(e){var a=e.components,t=(0,r.A)(e,u);return(0,l.yg)(v,(0,n.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"installation"},"Installation"),(0,l.yg)("h3",{id:"stable"},"Stable"),(0,l.yg)("p",null,"Stable version of React Native Elements available on npm"),(0,l.yg)(i.A,{groupId:"pkg",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"npm",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npm install @rneui/themed @rneui/base\n"))),(0,l.yg)(o.A,{value:"yarn",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @rneui/themed @rneui/base\n")))),(0,l.yg)("h3",{id:"bleeding-edge"},"Bleeding Edge"),(0,l.yg)(i.A,{groupId:"pkg",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"npm",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npm install @rneui/base@edge @rneui/themed@edge\n")),(0,l.yg)("p",null,"If you are facing issue while installing from ",(0,l.yg)("inlineCode",{parentName:"p"},"edge")," dist-tag, you can install directly from Github"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"# @rneui/base\nnpm install react-native-elements/react-native-elements#base\n\n# @rneui/themed\nnpm install react-native-elements/react-native-elements#themed\n"))),(0,l.yg)(o.A,{value:"yarn",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @rneui/base@edge @rneui/themed@edge\n")),(0,l.yg)("p",null,"If you are facing issue while installing from ",(0,l.yg)("inlineCode",{parentName:"p"},"edge")," dist-tag, you can install directly from Github"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"# @rneui/base\nyarn add @rneui/base@github:react-native-elements/react-native-elements#base\n\n# @rneui/themed\nyarn add @rneui/themed@github:react-native-elements/react-native-elements#themed\n")))),(0,l.yg)("h2",{id:"peer-dependencies"},"Peer dependencies"),(0,l.yg)("h3",{id:"install-react-native-vector-icons"},"Install react-native-vector-icons"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://expo.io"},"Expo")," or\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/react-community/create-react-native-app"},"create-react-native-app"),"\nprojects include ",(0,l.yg)("strong",{parentName:"p"},"react-native-vector-icons")," out of the box, hence this step can be skipped."),(0,l.yg)("p",null,"If your project is a standard React Native project created using\n",(0,l.yg)("inlineCode",{parentName:"p"},"react-native init")," (it should have an ios/android directory), then you need to install ",(0,l.yg)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"."),(0,l.yg)("p",null,"Or if you encounter the following error."),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"If you see the ",(0,l.yg)("inlineCode",{parentName:"p"},"UNMET PEER DEPENDENCY")," warning for ",(0,l.yg)("strong",{parentName:"p"},"react-native-vector-icons")," like below, you can ignore it as ",(0,l.yg)("em",{parentName:"p"},"react-native-vector-icons")," is already installed by ",(0,l.yg)("em",{parentName:"p"},"expo")," or ",(0,l.yg)("em",{parentName:"p"},"crna"),"."),(0,l.yg)("img",{alt:"React Native Vector Icons Unmet Peer Dependency",src:(0,s.A)("img/peer-dep-error.png")})),(0,l.yg)("p",null,"Otherwise run the following command:"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Manual linking of react-native-vector-icons is not necessary if you're using ",(0,l.yg)("a",{parentName:"p",href:"mailto:react-native@0.60.0"},"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",(0,l.yg)("inlineCode",{parentName:"p"},"react-native unlink react-native-vector-icons")," and the process will run as expected.")),(0,l.yg)(i.A,{defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"npm",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-vector-icons\n"))),(0,l.yg)(o.A,{value:"yarn",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-vector-icons\n")))),(0,l.yg)("p",null,"Link the dependency"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npx react-native link react-native-vector-icons\n")),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"If you have any issues installing react-native-vector-icons, check out their\ninstallation guide\n",(0,l.yg)("a",{parentName:"em",href:"https://github.com/oblador/react-native-vector-icons#installation"},"here")," or\ndebug it using\n",(0,l.yg)("a",{parentName:"em",href:"https://github.com/react-native-elements/react-native-elements/issues/503"},"this issue"),".")),(0,l.yg)("h3",{id:"install-react-native-safe-area-context"},"Install react-native-safe-area-context"),(0,l.yg)("p",null,"If you have already installed ",(0,l.yg)("strong",{parentName:"p"},"react-native-safe-area-context")," as a dependency for\nyour project you can skip this step. Otherwise run the following command:"),(0,l.yg)(i.A,{defaultValue:"npm",groupId:"pkg",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"npm",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-safe-area-context\n"))),(0,l.yg)(o.A,{value:"yarn",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-safe-area-context\n")))),(0,l.yg)("admonition",{title:"Useful information.",type:"info"},(0,l.yg)("p",{parentName:"admonition"},"Manual linking of react-native-safe-area-context is not necessary if you're using ",(0,l.yg)("a",{parentName:"p",href:"mailto:react-native@0.60.0"},"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",(0,l.yg)("inlineCode",{parentName:"p"},"react-native unlink react-native-safe-area-context")," and the process will run as expected.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npx react-native link react-native-safe-area-context\n")),(0,l.yg)("p",null,"It is required to add the ",(0,l.yg)("inlineCode",{parentName:"p"},"SafeAreaProvider")," to the outside of the app. The suggested way to do this is\nthe following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"import { SafeAreaProvider } from 'react-native-safe-area-context';\n\nfunction App() {\n  return <SafeAreaProvider>...</SafeAreaProvider>;\n}\n")),(0,l.yg)("h2",{id:"using-expo"},"Using Expo"),(0,l.yg)("h3",{id:"new-expo-project"},"New Expo project"),(0,l.yg)("p",null,"Create a new project with Expo CLI and React Native Elements template"),(0,l.yg)(i.A,{defaultValue:"stable",values:[{label:"Stable",value:"stable"},{label:"Bleeding Edge",value:"edge"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"stable",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"expo init app --template @rneui/template\n"))),(0,l.yg)(o.A,{value:"edge",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"expo init app --template @rneui/template@edge\n")))),(0,l.yg)("h3",{id:"existing-expo-project"},"Existing Expo project"),(0,l.yg)("p",null,"Just install the package and its peer dependencies"),(0,l.yg)("h2",{id:"using-on-web"},"Using on Web"),(0,l.yg)("p",null,"React Native Elements just like on mobile can be used in your web projects. This is possible using ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},"react-native-web"),". We'll highlight how to set this up using create-react-app."),(0,l.yg)("h3",{id:"why-do-i-have-to-set-this-up"},"Why do I have to set this up?"),(0,l.yg)("p",null,"On the web, you can usually use UI libraries directly from npm without any additional setup. However in react-native, it's a bit different."),(0,l.yg)("p",null,"The major difference is that React Native can support JSX and advanced javascript out the box. This means that we don't need to transpile our code before we ship it to npm. ",(0,l.yg)("strong",{parentName:"p"},"We ship JSX and advanced javascript directly to npm")," in React Native Elements, so we need to account for this in our web projects."),(0,l.yg)("h3",{id:"create-react-app"},"Create React App"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," is a very popular framework for building react applications. Unfortunately it doesn't allow much customization of the build setup. To accomplish this we'll be making use of ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired")," and ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/arackaf/customize-cra"},"customize-cra"),"."),(0,l.yg)("p",null,"After creating a new create-react-app project, run the following commands."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add  @rneui/base @rneui/themed react-native-web react-native-vector-icons\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @babel/plugin-proposal-class-properties customize-cra react-app-rewired\n")),(0,l.yg)("p",null,"Secondly, create a ",(0,l.yg)("inlineCode",{parentName:"p"},"config-overrides.js")," file in the root of your project."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst { override, addBabelPlugins, babelInclude } = require('customize-cra');\n\nmodule.exports = override(\n  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),\n  babelInclude([\n    path.resolve(__dirname, 'node_modules/@rneui/base'),\n    path.resolve(__dirname, 'node_modules/@rneui/themed'),\n    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),\n    path.resolve(__dirname, 'node_modules/react-native-ratings'),\n    path.resolve(__dirname, 'src'),\n  ])\n);\n")),(0,l.yg)("p",null,"Also you should keep in mind that not all of React Native components are implemented for web-platform out-of-box.\nFor example, ",(0,l.yg)("inlineCode",{parentName:"p"},"Modal")," component is not yet implemented in ",(0,l.yg)("inlineCode",{parentName:"p"},"react-native-web"),". Therefore, to use some of our components\nyou may need to install additional third-party libraries that implement the missing functionality.\nFor ",(0,l.yg)("a",{parentName:"p",href:"/docs/4.0.0-rc.6/components/overlay"},(0,l.yg)("inlineCode",{parentName:"a"},"Overlay"))," and ",(0,l.yg)("a",{parentName:"p",href:"/docs/4.0.0-rc.6/components/tooltip"},(0,l.yg)("inlineCode",{parentName:"a"},"Tooltip"))," components ",(0,l.yg)("inlineCode",{parentName:"p"},"Modal")," implementation is required."),(0,l.yg)("p",null,"Lastly, change your scripts in ",(0,l.yg)("inlineCode",{parentName:"p"},"package.json")," to use react-app-rewired:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-diff"},'"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test",\n+   "test": "react-app-rewired test"\n}\n')),(0,l.yg)("p",null,"At this point your app can start. However trying to use any components that use icons, will not show them. In your App.js, load these fonts as you would on the web with a style tag."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-jsx"},"<style type=\"text/css\">{`\n  @font-face {\n    font-family: 'MaterialIcons';\n    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');\n  }\n\n  @font-face {\n    font-family: 'FontAwesome';\n    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');\n  }\n`}</style>\n")),(0,l.yg)("p",null,"The full setup of the guide can be found at ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/react-native-elements/create-react-app-example"},"https://github.com/react-native-elements/create-react-app-example"),"."))}h.isMDXComponent=!0}}]);