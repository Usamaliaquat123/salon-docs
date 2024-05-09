"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[80370],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),v=o,d=u["".concat(c,".").concat(v)]||u[v]||m[v]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},51496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(58168),o=n(98587),i=(n(96540),n(15680)),a=["components"],s={id:"overview",title:"Overview"},c=void 0,l={unversionedId:"overview",id:"version-1.2.0/overview",title:"Overview",description:"This section of the documentation describes the props and examples for all the",source:"@site/versioned_docs/version-1.2.0/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/1.2.0/overview",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/overview.md",tags:[],version:"1.2.0",frontMatter:{id:"overview",title:"Overview"},sidebar:"version-1.2.0/docs",previous:{title:"Getting Started",permalink:"/docs/1.2.0/getting_started"},next:{title:"Customization",permalink:"/docs/1.2.0/customization"}},p={},u=[{value:"Using React Native Elements",id:"using-react-native-elements",level:2}],m={toc:u},v="wrapper";function d(e){var t=e.components,n=(0,o.A)(e,a);return(0,i.yg)(v,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This section of the documentation describes the props and examples for all the\ncomponents from React Native Elements. Please take some time and explore all of the components that are at your disposal!"),(0,i.yg)("h2",{id:"using-react-native-elements"},"Using React Native Elements"),(0,i.yg)("p",null,"The components in this library have a single theme running through them. From\none central location, we can update the colours used in all components. While\nthis was great for the developers of the library, the actual users also needed a\nway to use this feature."),(0,i.yg)("p",null,"But why stop at colours? Why not allow the props of every component to be\ndefined in one central place? And so the idea behind theming with React Native\nElements was born!"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"import { Button, ThemeProvider } from 'react-native-elements';\n\nconst MyApp = () => {\n  return (\n    <ThemeProvider>\n      <Button title=\"Hey!\" />\n    </ThemeProvider>\n  );\n};\n")),(0,i.yg)("p",null,"To customize the theme, or use it within your own components, be sure to check\nthe docs on ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.2.0/customization"},"Customization"),"."))}d.isMDXComponent=!0}}]);