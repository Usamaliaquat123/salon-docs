"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[48463],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(58168),r=a(98587),o=(a(96540),a(15680)),i=["components"],s={id:"web_usage",title:"Usage on the Web"},p=void 0,l={unversionedId:"web_usage",id:"version-4.0.0-beta.0/web_usage",title:"Usage on the Web",description:"React Native Elements just like on mobile can be used in your web projects. This is possible using react-native-web. We'll highlight how to set this up using create-react-app.",source:"@site/versioned_docs/version-4.0.0-beta.0/web_usage.md",sourceDirName:".",slug:"/web_usage",permalink:"/docs/4.0.0-beta.0/web_usage",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/web_usage.md",tags:[],version:"4.0.0-beta.0",frontMatter:{id:"web_usage",title:"Usage on the Web"},sidebar:"version-4.0.0-beta.0/docs",previous:{title:"Customization",permalink:"/docs/4.0.0-beta.0/customization"},next:{title:"Troubleshooting",permalink:"/docs/4.0.0-beta.0/troubleshooting"}},c={},u=[{value:"Why do I have to set this up?",id:"why-do-i-have-to-set-this-up",level:2},{value:"Create React App",id:"create-react-app",level:2}],d={toc:u},m="wrapper";function y(e){var t=e.components,a=(0,r.A)(e,i);return(0,o.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"React Native Elements just like on mobile can be used in your web projects. This is possible using ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},"react-native-web"),". We'll highlight how to set this up using create-react-app."),(0,o.yg)("h2",{id:"why-do-i-have-to-set-this-up"},"Why do I have to set this up?"),(0,o.yg)("p",null,"On the web, you can usually use UI libraries directly from npm without any additional setup. However in react-native, it's a bit different."),(0,o.yg)("p",null,"The major difference is that React Native can support JSX and advanced javascript out the box. This means that we don't need to transpile our code before we ship it to npm. ",(0,o.yg)("strong",{parentName:"p"},"We ship JSX and advanced javascript directly to npm")," in React Native Elements, so we need to account for this in our web projects."),(0,o.yg)("h2",{id:"create-react-app"},"Create React App"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," is a very popular framework for building react applications. Unfortunately it doesn't allow much customization of the build setup. To accomplish this we'll be making use of ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired")," and ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/arackaf/customize-cra"},"customize-cra"),"."),(0,o.yg)("p",null,"After creating a new create-react-app project, run the following commands."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-elements react-native-web react-native-vector-icons\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @babel/plugin-proposal-class-properties customize-cra react-app-rewired\n")),(0,o.yg)("p",null,"Secondly, create a ",(0,o.yg)("inlineCode",{parentName:"p"},"config-overrides.js")," file in the root of your project."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst { override, addBabelPlugins, babelInclude } = require('customize-cra');\n\nmodule.exports = override(\n  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),\n  babelInclude([\n    path.resolve(__dirname, 'node_modules/react-native-elements'),\n    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),\n    path.resolve(__dirname, 'node_modules/react-native-ratings'),\n    path.resolve(__dirname, 'src'),\n  ])\n);\n")),(0,o.yg)("p",null,"Also you should keep in mind that not all of React Native components are implemented for web-platform out-of-box.\nFor example, ",(0,o.yg)("inlineCode",{parentName:"p"},"Modal")," component is not yet implemented in ",(0,o.yg)("inlineCode",{parentName:"p"},"react-native-web"),". Therefore, to use some of our components\nyou may need to install additional third-party libraries that implement the missing functionality.\nFor ",(0,o.yg)("a",{parentName:"p",href:"/docs/4.0.0-beta.0/overlay"},(0,o.yg)("inlineCode",{parentName:"a"},"Overlay"))," and ",(0,o.yg)("a",{parentName:"p",href:"/docs/4.0.0-beta.0/tooltip"},(0,o.yg)("inlineCode",{parentName:"a"},"Tooltip"))," components ",(0,o.yg)("inlineCode",{parentName:"p"},"Modal")," implementation is required."),(0,o.yg)("p",null,"Lastly, change your scripts in ",(0,o.yg)("inlineCode",{parentName:"p"},"package.json")," to use react-app-rewired:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-diff"},'"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test",\n+   "test": "react-app-rewired test"\n}\n')),(0,o.yg)("p",null,"At this point your app can start. However trying to use any components that use icons, will not show them. In your App.js, load these fonts as you would on the web with a style tag."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},"<style type=\"text/css\">{`\n  @font-face {\n    font-family: 'MaterialIcons';\n    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');\n  }\n\n  @font-face {\n    font-family: 'FontAwesome';\n    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');\n  }\n`}</style>\n")),(0,o.yg)("p",null,"The full setup of the guide can be found at ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/react-native-elements/create-react-app-example"},"https://github.com/react-native-elements/create-react-app-example"),"."))}y.isMDXComponent=!0}}]);