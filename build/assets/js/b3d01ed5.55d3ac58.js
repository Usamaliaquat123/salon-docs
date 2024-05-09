"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[30977],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,y=g["".concat(s,".").concat(d)]||g[d]||v[d]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>v});var a=n(58168),r=n(98587),i=(n(96540),n(15680)),o=n(86025),l=["components"],s={id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started"},c=void 0,p={unversionedId:"getting_started",id:"version-2.3.2/getting_started",title:"Getting Started",description:"The aim of React Native Elements is to provide an all-in-one UI kit for creating",source:"@site/versioned_docs/version-2.3.2/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/docs/2.3.2/getting_started",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.3.2/getting_started.md",tags:[],version:"2.3.2",frontMatter:{id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started"},sidebar:"version-2.3.2/docs",next:{title:"Overview",permalink:"/docs/2.3.2/overview"}},g={},v=[{value:"Installation",id:"installation",level:2},{value:"Step 1: Install react-native-elements",id:"step-1-install-react-native-elements",level:3},{value:"Step 2: Install react-native-vector-icons",id:"step-2-install-react-native-vector-icons",level:3}],d={toc:v},y="wrapper";function u(e){var t=e.components,n=(0,r.A)(e,l);return(0,i.yg)(y,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The aim of React Native Elements is to provide an all-in-one UI kit for creating\napps in react native. There are many great ui components made by developers all\naround open source. React Native Elements takes the hassle of assembling these\npackages together by giving you a ready made kit with consistent api and look\nand feel."),(0,i.yg)("h2",{id:"installation"},"Installation"),(0,i.yg)("p",null,"Installing React Native Elements depends on your type of react native project."),(0,i.yg)("div",{class:"toggler"},(0,i.yg)("ul",{role:"tablist"},(0,i.yg)("li",{id:"expo",class:"button-expo","aria-selected":"false",role:"tab",tabindex:"0","aria-controls":"expo",onclick:"displayTab('expo')"},"Expo | Create React Native App"),(0,i.yg)("li",{id:"native",class:"button-native","aria-selected":"false",role:"tab",tabindex:"-1","aria-controls":"nativetab",onclick:"displayTab('native')"},"React Native CLI"))),(0,i.yg)("block",{class:"expo"}),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://expo.io"},"Expo")," or\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/react-community/create-react-native-app"},"create-react-native-app"),"\nprojects include ",(0,i.yg)("strong",{parentName:"p"},"react-native-vector-icons")," out of the box, so all you need\nto do is install ",(0,i.yg)("strong",{parentName:"p"},"react-native-elements"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"yarn add react-native-elements\n# or with npm\nnpm install react-native-elements\n")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"Note:")," If you see the ",(0,i.yg)("inlineCode",{parentName:"p"},"UNMET PEER DEPENDENCY")," warning for\n",(0,i.yg)("strong",{parentName:"p"},"react-native-vector-icons")," like below, you can ignore it as\n",(0,i.yg)("em",{parentName:"p"},"react-native-vector-icons")," is already installed by ",(0,i.yg)("em",{parentName:"p"},"expo")," or ",(0,i.yg)("em",{parentName:"p"},"crna"),"."),(0,i.yg)("img",{alt:"React Native Vector Icons Unmet Peer Dependency",src:(0,o.A)("img/peer-dep-error.png")})),(0,i.yg)("block",{class:"native"}),(0,i.yg)("p",null,"If your project is a standard React Native project created using\n",(0,i.yg)("inlineCode",{parentName:"p"},"react-native init")," (it should have an ios/android directory), then follow these\ninstallation instructions:"),(0,i.yg)("h3",{id:"step-1-install-react-native-elements"},"Step 1: Install react-native-elements"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"yarn add react-native-elements\n# or with npm\nnpm i react-native-elements --save\n")),(0,i.yg)("h3",{id:"step-2-install-react-native-vector-icons"},"Step 2: Install react-native-vector-icons"),(0,i.yg)("p",null,"If you have already installed ",(0,i.yg)("strong",{parentName:"p"},"react-native-vector-icons")," as a dependency for\nyour project you can skip this step. Otherwise run the following command:"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("em",{parentName:"p"},"Manual linking of react-native-vector-icons is not necessary if you're using ",(0,i.yg)("a",{parentName:"em",href:"mailto:react-native@0.60.0"},"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",(0,i.yg)("inlineCode",{parentName:"em"},"react-native unlink react-native-vector-icons")," and the process will run as expected."))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"# yarn\nyarn add react-native-vector-icons\n# or with npm\nnpm i --save react-native-vector-icons\n\n# link\nreact-native link react-native-vector-icons\n")),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"If you have any issues installing react-native-vector-icons, check out their\ninstallation guide\n",(0,i.yg)("a",{parentName:"em",href:"https://github.com/oblador/react-native-vector-icons#installation"},"here")," or\ndebug it using\n",(0,i.yg)("a",{parentName:"em",href:"https://github.com/react-native-elements/react-native-elements/issues/503"},"this issue"),".")))}u.isMDXComponent=!0}}]);