"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[69167],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(n),p=r,g=c["".concat(u,".").concat(p)]||c[p]||m[p]||l;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(58168),r=n(96540),l=n(20053),o=n(23104),i=n(56347),u=n(57485),d=n(31682),s=n(89466);function c(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,d.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.W6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u.aZ)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function y(e){var t,n,a,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,d=e.groupId,c=m(e),y=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:c})})),f=y[0],v=y[1],h=g({queryString:u,groupId:d}),b=h[0],N=h[1],A=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,s.Dv)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),C=A[0],w=A[1],E=function(){var e=null!=b?b:C;return p({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){E&&v(E)}),[E]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),N(e),w(e)}),[N,w,c]),tabValues:c}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,d=e.tabValues,s=[],c=(0,o.a_)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=s.indexOf(t),a=d[n].value;a!==i&&(c(t),u(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=s.indexOf(e.currentTarget)+1;n=null!=(a=s[r])?a:s[0];break;case"ArrowLeft":var l,o=s.indexOf(e.currentTarget)-1;n=null!=(l=s[o])?l:s[s.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},d.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:p,onClick:m},o,{className:(0,l.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",v.tabList)},r.createElement(h,(0,a.A)({},e,t)),r.createElement(b,(0,a.A)({},e,t)))}function A(e){var t=(0,f.A)();return r.createElement(N,(0,a.A)({key:String(t)},e))}},41298:(e,t,n)=>{n.d(t,{y:()=>u});var a=n(96540),r=n(5260),l=n(14628),o=n(1547),i=n(83564),u=function(){return a.createElement(r.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.A+") format('truetype');\n          }\n        "))}},4588:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(98587),r=n(58168),l=n(96540),o=n(95404),i=n(20053),u=(n(21312),n(44586)),d=n(78478),s=n(26058);const c={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var m=n(92303),p=n(59644),g=["children","transformCode"];function y(){return l.createElement("div",null,"Loading...")}function f(e){var t=(0,m.A)(),n=(0,l.useContext)(o.MY),a=n.code,i=n.language,u=n.theme,d=n.disabled,s=n.onChange;return l.createElement(o.w,(0,r.A)({key:String(t),code:a,language:i,theme:u,disabled:d,onChange:s},e,{className:c.playgroundEditor}))}function v(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,r=(e.wrapper,l.useState(t)),u=r[0],s=r[1],m=function(){s((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:c.playgroundPreview},l.createElement(d.A,{fallback:l.createElement(y,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(o.pA,null),l.createElement(o.p1,null),l.createElement("div",{className:c.toggleContainer},l.createElement("div",{className:(0,i.A)(c.toggleIcon),onClick:m},l.createElement(p.luQ,null),l.createElement("span",{className:c.showCode},u?"Hide":"Show"," Code"))))}))),u&&l.createElement(f,{preImports:a,showCode:u}))}function h(e){var t=e.children,n=(e.transformCode,(0,a.A)(e,g)),i=((0,u.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.A)());return l.createElement("div",{className:c.playgroundContainer},l.createElement(o.Q,(0,r.A)({code:t.replace(/\n$/,""),theme:i},n),l.createElement(v,{showCode:n.showCode})))}},51433:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(96540),r=n(36480),l=n(58040),o=n(45550),i=n(91147);const u=Object.assign({React:a,LinearGradient:i.A},r,l,o,a)},24071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>A,frontMatter:()=>g,metadata:()=>f,toc:()=>h});var a=n(58168),r=n(98587),l=(n(96540),n(15680)),o=n(41298),i=(n(11470),n(19365),n(21619)),u=n(35504),d=["components"],s={toc:[]},c="wrapper";function m(e){var t=e.components,n=(0,r.A)(e,d);return(0,l.yg)(c,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE Image","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20FlatList%2C%20SafeAreaView%2C%20StyleSheet%2C%20ActivityIndicator%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Image%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aconst%20BASE_URI%20%3D%20'https%3A%2F%2Fsource.unsplash.com%2Frandom%3Fsig%3D'%3B%0A%0Aconst%20ImageAPI%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CSafeAreaView%3E%0A%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20data%3D%7B%5B...new%20Array(10)%5D.map((_%2C%20i)%20%3D%3E%20i.toString())%7D%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.list%7D%0A%20%20%20%20%20%20%20%20numColumns%3D%7B2%7D%0A%20%20%20%20%20%20%20%20keyExtractor%3D%7B(e)%20%3D%3E%20e%7D%0A%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20BASE_URI%20%2B%20item%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7Bstyles.item%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20PlaceholderContent%3D%7B%3CActivityIndicator%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Alist%3A%20%7B%0A%20%20width%3A%20'100%25'%2C%0A%20%20backgroundColor%3A%20'%23000'%2C%0A%7D%2C%0Aitem%3A%20%7B%0A%20%20aspectRatio%3A%201%2C%0A%20%20width%3A%20'100%25'%2C%0A%20%20flex%3A%201%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20ImageAPI%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0;var p=["components"],g={id:"image",title:"Image"},y=void 0,f={unversionedId:"components/image",id:"components/image",title:"Image",description:"Drop-in replacement for the standard React Native Image component that displays",source:"@site/docs/components/Image.mdx",sourceDirName:"components",slug:"/components/image",permalink:"/docs/next/components/image",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Image.mdx",tags:[],version:"current",frontMatter:{id:"image",title:"Image"},sidebar:"docs",previous:{title:"Icon",permalink:"/docs/next/components/icon"},next:{title:"Input",permalink:"/docs/next/components/input"}},v={},h=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],b={toc:h},N="wrapper";function A(e){var t=e.components,n=(0,r.A)(e,p);return(0,l.yg)(N,(0,a.A)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(o.y,{mdxType:"IconsStyle"}),(0,l.yg)("p",null,"Drop-in replacement for the standard React Native Image component that displays\nimages with a placeholder and smooth image load transitioning."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("div",{class:"row inline-flex-center"},(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Import")),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(i.A,{mdxType:"CodeBlock"},"import { Image } from '@rneui/themed';")),(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Theme Key"," ",(0,l.yg)("a",{href:"../customizing#using-themeprovider"},(0,l.yg)(u.wfp,{mdxType:"BiInfoCircle"})))),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(i.A,{mdxType:"CodeBlock"},"Image"))),(0,l.yg)(m,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/image#props"},"React Native Image")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Component")),(0,l.yg)("td",{parentName:"tr",align:null},"React Component"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Press handlers present then Pressable else View")),(0,l.yg)("td",{parentName:"tr",align:null},"Define the component passed to image.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ImageComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"typeof Component"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Specify a different component as the Image component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"PlaceholderContent")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ReactElement<any, string")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"JSXElementConstructor<any>>")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Content to load when Image is rendering.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"childrenContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"null")),(0,l.yg)("td",{parentName:"tr",align:null},"Additional styling for the children container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Additional styling for the container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPress")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"placeholderStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Additional styling for the placeholder container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.yg)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"None")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"transition")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Perform fade transition on image load.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"transitionDuration")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"360")),(0,l.yg)("td",{parentName:"tr",align:null},"Perform fade transition on image load."))))))}A.isMDXComponent=!0}}]);