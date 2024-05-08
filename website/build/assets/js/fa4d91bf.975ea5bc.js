"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[15930],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(v,i(i({ref:t},c),{},{components:a})):n.createElement(v,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function h(e){var t,a,n,l,i=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,p=d(e),h=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),f=h[0],b=h[1],g=v({queryString:s,groupId:u}),k=g[0],y=g[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],l=a[1],[n,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=N[0],x=N[1],T=function(){var e=null!=k?k:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useEffect)((function(){T&&b(T)}),[T]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),x(e)}),[y,x,p]),tabValues:p}}var f=a(72389);const b="tabList__CuJ",g="tabItem_LNqP";function k(e){var t=e.className,a=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(p(t),s(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;a=null!=(l=c[i])?l:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(t){var l=a.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function N(e){var t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},50694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>v});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(74866),o=a(85162),s=a(44996),u=["components"],c={id:"installation",title:"",sidebar_label:"Installation"},p=void 0,d={unversionedId:"installation",id:"installation",title:"",description:"Installation",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/next/installation",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/installation.mdx",tags:[],version:"current",frontMatter:{id:"installation",title:"",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/"},next:{title:"Troubleshooting",permalink:"/docs/next/troubleshooting"}},m={},v=[{value:"Installation",id:"installation",level:2},{value:"Stable",id:"stable",level:3},{value:"Bleeding Edge",id:"bleeding-edge",level:3},{value:"Peer dependencies",id:"peer-dependencies",level:2},{value:"Install react-native-vector-icons",id:"install-react-native-vector-icons",level:3},{value:"Install react-native-safe-area-context",id:"install-react-native-safe-area-context",level:3},{value:"Using Expo",id:"using-expo",level:2},{value:"New Expo project",id:"new-expo-project",level:3},{value:"Existing Expo project",id:"existing-expo-project",level:3},{value:"Using on Web",id:"using-on-web",level:2},{value:"Why do I have to set this up?",id:"why-do-i-have-to-set-this-up",level:3},{value:"Create React App",id:"create-react-app",level:3}],h={toc:v};function f(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("h3",{id:"stable"},"Stable"),(0,l.kt)("p",null,"Stable version of React Native Elements available on npm"),(0,l.kt)(i.Z,{groupId:"pkg",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @rneui/themed @rneui/base\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @rneui/themed @rneui/base\n")))),(0,l.kt)("h3",{id:"bleeding-edge"},"Bleeding Edge"),(0,l.kt)(i.Z,{groupId:"pkg",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @rneui/base@edge @rneui/themed@edge\n")),(0,l.kt)("p",null,"If you are facing issue while installing from ",(0,l.kt)("inlineCode",{parentName:"p"},"edge")," dist-tag, you can install directly from Github"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# @rneui/base\nnpm install react-native-elements/react-native-elements#base\n\n# @rneui/themed\nnpm install react-native-elements/react-native-elements#themed\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @rneui/base@edge @rneui/themed@edge\n")),(0,l.kt)("p",null,"If you are facing issue while installing from ",(0,l.kt)("inlineCode",{parentName:"p"},"edge")," dist-tag, you can install directly from Github"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# @rneui/base\nyarn add @rneui/base@github:react-native-elements/react-native-elements#base\n\n# @rneui/themed\nyarn add @rneui/themed@github:react-native-elements/react-native-elements#themed\n")))),(0,l.kt)("h2",{id:"peer-dependencies"},"Peer dependencies"),(0,l.kt)("h3",{id:"install-react-native-vector-icons"},"Install react-native-vector-icons"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://expo.io"},"Expo")," or\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-community/create-react-native-app"},"create-react-native-app"),"\nprojects include ",(0,l.kt)("strong",{parentName:"p"},"react-native-vector-icons")," out of the box, hence this step can be skipped."),(0,l.kt)("p",null,"If your project is a standard React Native project created using\n",(0,l.kt)("inlineCode",{parentName:"p"},"react-native init")," (it should have an ios/android directory), then you need to install ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"."),(0,l.kt)("p",null,"Or if you encounter the following error."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you see the ",(0,l.kt)("inlineCode",{parentName:"p"},"UNMET PEER DEPENDENCY")," warning for ",(0,l.kt)("strong",{parentName:"p"},"react-native-vector-icons")," like below, you can ignore it as ",(0,l.kt)("em",{parentName:"p"},"react-native-vector-icons")," is already installed by ",(0,l.kt)("em",{parentName:"p"},"expo")," or ",(0,l.kt)("em",{parentName:"p"},"crna"),"."),(0,l.kt)("img",{alt:"React Native Vector Icons Unmet Peer Dependency",src:(0,s.Z)("img/peer-dep-error.png")})),(0,l.kt)("p",null,"Otherwise run the following command:"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Manual linking of react-native-vector-icons is not necessary if you're using ",(0,l.kt)("a",{parentName:"p",href:"mailto:react-native@0.60.0"},"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native unlink react-native-vector-icons")," and the process will run as expected.")),(0,l.kt)(i.Z,{defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-vector-icons\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-vector-icons\n")))),(0,l.kt)("p",null,"Link the dependency"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native link react-native-vector-icons\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"If you have any issues installing react-native-vector-icons, check out their\ninstallation guide\n",(0,l.kt)("a",{parentName:"em",href:"https://github.com/oblador/react-native-vector-icons#installation"},"here")," or\ndebug it using\n",(0,l.kt)("a",{parentName:"em",href:"https://github.com/react-native-elements/react-native-elements/issues/503"},"this issue"),".")),(0,l.kt)("h3",{id:"install-react-native-safe-area-context"},"Install react-native-safe-area-context"),(0,l.kt)("p",null,"If you have already installed ",(0,l.kt)("strong",{parentName:"p"},"react-native-safe-area-context")," as a dependency for\nyour project you can skip this step. Otherwise run the following command:"),(0,l.kt)(i.Z,{defaultValue:"npm",groupId:"pkg",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-safe-area-context\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-safe-area-context\n")))),(0,l.kt)("admonition",{title:"Useful information.",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Manual linking of react-native-safe-area-context is not necessary if you're using ",(0,l.kt)("a",{parentName:"p",href:"mailto:react-native@0.60.0"},"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native unlink react-native-safe-area-context")," and the process will run as expected.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native link react-native-safe-area-context\n")),(0,l.kt)("p",null,"It is required to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"SafeAreaProvider")," to the outside of the app. The suggested way to do this is\nthe following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { SafeAreaProvider } from 'react-native-safe-area-context';\n\nfunction App() {\n  return <SafeAreaProvider>...</SafeAreaProvider>;\n}\n")),(0,l.kt)("h2",{id:"using-expo"},"Using Expo"),(0,l.kt)("h3",{id:"new-expo-project"},"New Expo project"),(0,l.kt)("p",null,"Create a new project with Expo CLI and React Native Elements template"),(0,l.kt)(i.Z,{defaultValue:"stable",values:[{label:"Stable",value:"stable"},{label:"Bleeding Edge",value:"edge"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"stable",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app --template @rneui/template\n"))),(0,l.kt)(o.Z,{value:"edge",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app --template @rneui/template@edge\n")))),(0,l.kt)("h3",{id:"existing-expo-project"},"Existing Expo project"),(0,l.kt)("p",null,"Just install the package and its peer dependencies"),(0,l.kt)("h2",{id:"using-on-web"},"Using on Web"),(0,l.kt)("p",null,"React Native Elements just like on mobile can be used in your web projects. This is possible using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},"react-native-web"),". We'll highlight how to set this up using create-react-app."),(0,l.kt)("h3",{id:"why-do-i-have-to-set-this-up"},"Why do I have to set this up?"),(0,l.kt)("p",null,"On the web, you can usually use UI libraries directly from npm without any additional setup. However in react-native, it's a bit different."),(0,l.kt)("p",null,"The major difference is that React Native can support JSX and advanced javascript out the box. This means that we don't need to transpile our code before we ship it to npm. ",(0,l.kt)("strong",{parentName:"p"},"We ship JSX and advanced javascript directly to npm")," in React Native Elements, so we need to account for this in our web projects."),(0,l.kt)("h3",{id:"create-react-app"},"Create React App"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," is a very popular framework for building react applications. Unfortunately it doesn't allow much customization of the build setup. To accomplish this we'll be making use of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/arackaf/customize-cra"},"customize-cra"),"."),(0,l.kt)("p",null,"After creating a new create-react-app project, run the following commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add  @rneui/base @rneui/themed react-native-web react-native-vector-icons\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @babel/plugin-proposal-class-properties customize-cra react-app-rewired\n")),(0,l.kt)("p",null,"Secondly, create a ",(0,l.kt)("inlineCode",{parentName:"p"},"config-overrides.js")," file in the root of your project."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst { override, addBabelPlugins, babelInclude } = require('customize-cra');\n\nmodule.exports = override(\n  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),\n  babelInclude([\n    path.resolve(__dirname, 'node_modules/@rneui/base'),\n    path.resolve(__dirname, 'node_modules/@rneui/themed'),\n    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),\n    path.resolve(__dirname, 'node_modules/react-native-ratings'),\n    path.resolve(__dirname, 'src'),\n  ])\n);\n")),(0,l.kt)("p",null,"Also you should keep in mind that not all of React Native components are implemented for web-platform out-of-box.\nFor example, ",(0,l.kt)("inlineCode",{parentName:"p"},"Modal")," component is not yet implemented in ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-web"),". Therefore, to use some of our components\nyou may need to install additional third-party libraries that implement the missing functionality.\nFor ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/components/overlay"},(0,l.kt)("inlineCode",{parentName:"a"},"Overlay"))," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/components/tooltip"},(0,l.kt)("inlineCode",{parentName:"a"},"Tooltip"))," components ",(0,l.kt)("inlineCode",{parentName:"p"},"Modal")," implementation is required."),(0,l.kt)("p",null,"Lastly, change your scripts in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," to use react-app-rewired:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},'"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test",\n+   "test": "react-app-rewired test"\n}\n')),(0,l.kt)("p",null,"At this point your app can start. However trying to use any components that use icons, will not show them. In your App.js, load these fonts as you would on the web with a style tag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<style type=\"text/css\">{`\n  @font-face {\n    font-family: 'MaterialIcons';\n    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');\n  }\n\n  @font-face {\n    font-family: 'FontAwesome';\n    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');\n  }\n`}</style>\n")),(0,l.kt)("p",null,"The full setup of the guide can be found at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements/create-react-app-example"},"https://github.com/react-native-elements/create-react-app-example"),"."))}f.isMDXComponent=!0}}]);