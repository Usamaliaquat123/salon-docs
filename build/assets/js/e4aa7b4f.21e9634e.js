"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[9034],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),i=r(16550),u=r(91980),c=r(67392),s=r(50012);function d(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function v(e){var t,r,n,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,d=p(e),v=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),b=v[0],h=v[1],g=f({queryString:u,groupId:c}),y=g[0],w=g[1],E=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,s.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=E[0],C=E[1],O=function(){var e=null!=y?y:k;return m({value:e,tabValues:d})?e:null}();return(0,a.useEffect)((function(){O&&h(O)}),[O]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);h(e),w(e),C(e)}),[w,C,d]),tabValues:d}}var b=r(72389);const h="tabList__CuJ",g="tabItem_LNqP";function y(e){var t=e.className,r=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==i&&(d(t),u(n))},m=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var o,l=s.indexOf(e.currentTarget)-1;r=null!=(o=s[l])?o:s[s.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function w(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(t){var o=r.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function E(e){var t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function k(e){var t=(0,b.Z)();return a.createElement(E,(0,n.Z)({key:String(t)},e))}},37047:(e,t,r)=>{r.d(t,{w:()=>u});var n=r(67294),a=r(35742),o=r(14330),l=r(98576),i=r(61720),u=function(){return n.createElement(a.Z,null,n.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,r)=>{r.d(t,{Z:()=>C});var n=r(63366),a=r(87462),o=r(67294),l=r(10407),i=r(86010),u=(r(95999),r(52263)),c=r(91262),s=r(66412);const d="playgroundContainer_TGbA",p="playgroundEditor_PvJ1",m="playgroundPreview_bb8I",f="toggleContainer_ZZiH",v="toggleIcon_OnrQ",b="showCode_O0Od";var h=r(72389),g=r(5434),y=["children","transformCode"];function w(){return o.createElement("div",null,"Loading...")}function E(e){var t=(0,h.Z)(),r=(0,o.useContext)(l.L2),n=r.code,i=r.language,u=r.theme,c=r.disabled,s=r.onChange;return o.createElement(l.uz,(0,a.Z)({key:String(t),code:n,language:i,theme:u,disabled:c,onChange:s},e,{className:p}))}function k(e){var t=e.showCode,r=e.preImports,n=void 0===r?"":r,a=(e.wrapper,o.useState(t)),u=a[0],s=a[1],d=function(){s((function(e){return!e}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:m},o.createElement(c.Z,{fallback:o.createElement(w,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(l.i5,null),o.createElement(l.IF,null),o.createElement("div",{className:f},o.createElement("div",{className:(0,i.Z)(v),onClick:d},o.createElement(g.xoN,null),o.createElement("span",{className:b},u?"Hide":"Show"," Code"))))}))),u&&o.createElement(E,{preImports:n,showCode:u}))}function C(e){var t=e.children,r=(e.transformCode,(0,n.Z)(e,y)),i=((0,u.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.p)());return o.createElement("div",{className:d},o.createElement(l.nu,(0,a.Z)({code:t.replace(/\n$/,""),theme:i},r),o.createElement(k,{showCode:r.showCode})))}},56922:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(67294),a=r(32408),o=r(13925),l=r(53211),i=r(83279);const u=Object.assign({React:n,LinearGradient:i.Z},a,o,l,n)},56117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(37047),i=(r(74866),r(85162),r(96711)),u=r(47516),c=["components"],s={id:"card_divider",title:"Card.Divider"},d=void 0,p={unversionedId:"components/card_divider",id:"version-4.0.0-rc.8/components/card_divider",title:"Card.Divider",description:"Add divider to the card which acts as a separator between elements.",source:"@site/versioned_docs/version-4.0.0-rc.8/components/Card.Divider.mdx",sourceDirName:"components",slug:"/components/card_divider",permalink:"/docs/components/card_divider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/components/Card.Divider.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"card_divider",title:"Card.Divider"}},m={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:f};function b(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"Add divider to the card which acts as a separator between elements.\nThis, Receives all ",(0,o.kt)("a",{parentName:"p",href:"divider#props"},"Divider")," props."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{class:"row inline-flex-center"},(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Import")),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"import { Card } from '@rneui/themed';")),(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Theme Key"," ",(0,o.kt)("a",{href:"../customizing#using-themeprovider"},(0,o.kt)(u.Fs0,{mdxType:"BiInfoCircle"})))),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"CardDivider"))),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"divider#props"},"Divider")," props.")))}b.isMDXComponent=!0}}]);