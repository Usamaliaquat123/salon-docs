"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[56115,56527],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>g});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(g,o(o({ref:r},l),{},{components:t})):n.createElement(g,o({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},24108:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=t(58168),a=t(98587),i=(t(96540),t(15680)),o=t(58837),c=["components"],s={},d=void 0,l={unversionedId:"main/usage/PricingCard/PricingCard",id:"version-4.0.0-beta.0/main/usage/PricingCard/PricingCard",title:"PricingCard",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/PricingCard/PricingCard.md",sourceDirName:"main/usage/PricingCard",slug:"/main/usage/PricingCard/",permalink:"/docs/4.0.0-beta.0/main/usage/PricingCard/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/PricingCard/PricingCard.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},p={},u=[],m={toc:u},g="wrapper";function f(e){var r=e.components,t=(0,a.A)(e,c);return(0,i.yg)(g,(0,n.A)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)(o.default,{mdxType:"Snack"}))}f.isMDXComponent=!0},58837:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=t(58168),a=t(98587),i=(t(96540),t(15680)),o=["components"],c={},s=void 0,d={unversionedId:"main/usage/PricingCard/snack/index",id:"version-4.0.0-beta.0/main/usage/PricingCard/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/PricingCard/snack/index.md",sourceDirName:"main/usage/PricingCard/snack",slug:"/main/usage/PricingCard/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/PricingCard/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/PricingCard/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},l={},p=[],u={toc:p},m="wrapper";function g(e){var r=e.components,t=(0,a.A)(e,o);return(0,i.yg)(m,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("div",{className:"snack-player","data-snack-name":"RNE Pricing","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20PricingCard%2C%20colors%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20PricingCardComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Pricing%3A%20React.FunctionComponent%3CPricingCardComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolors.primary%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Free%22%0A%20%20%20%20%20%20%20%20%20%20price%3D%22%240%22%0A%20%20%20%20%20%20%20%20%20%20info%3D%7B%5B'1%20User'%2C%20'Basic%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolors.secondary%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Starter%22%0A%20%20%20%20%20%20%20%20%20%20price%3D%22%2419%22%0A%20%20%20%20%20%20%20%20%20%20info%3D%7B%5B'10%20Users'%2C%20'Basic%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolors.secondary2%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Enterprise%22%0A%20%20%20%20%20%20%20%20%20%20price%3D%22%2449%22%0A%20%20%20%20%20%20%20%20%20%20info%3D%7B%5B'100%20Users'%2C%20'One%20on%20One%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20Pricing%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}g.isMDXComponent=!0}}]);