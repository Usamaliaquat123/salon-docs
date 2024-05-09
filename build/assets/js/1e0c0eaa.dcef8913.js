"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[13397],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(96540),a=n(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(58168),a=n(96540),l=n(20053),o=n(23104),i=n(56347),u=n(57485),s=n(31682),c=n(89466);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,s.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,i.W6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u.aZ)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function y(e){var t,n,r,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,d=p(e),y=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:d})})),f=y[0],v=y[1],b=g({queryString:u,groupId:s}),h=b[0],N=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Dv)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),E=w[0],A=w[1],C=function(){var e=null!=h?h:E;return m({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){C&&v(C)}),[C]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),N(e),A(e)}),[N,A,d]),tabValues:d}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],d=(0,o.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(d(t),u(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;n=null!=(l=c[o])?l:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},o,{className:(0,l.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,r=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function N(e){var t=y(e);return a.createElement("div",{className:(0,l.A)("tabs-container",v.tabList)},a.createElement(b,(0,r.A)({},e,t)),a.createElement(h,(0,r.A)({},e,t)))}function w(e){var t=(0,f.A)();return a.createElement(N,(0,r.A)({key:String(t)},e))}},41298:(e,t,n)=>{n.d(t,{y:()=>u});var r=n(96540),a=n(5260),l=n(14628),o=n(1547),i=n(83564),u=function(){return r.createElement(a.A,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.A+") format('truetype');\n          }\n        "))}},4588:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(98587),a=n(58168),l=n(96540),o=n(95404),i=n(20053),u=(n(21312),n(44586)),s=n(78478),c=n(26058);const d={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var p=n(92303),m=n(59644),g=["children","transformCode"];function y(){return l.createElement("div",null,"Loading...")}function f(e){var t=(0,p.A)(),n=(0,l.useContext)(o.MY),r=n.code,i=n.language,u=n.theme,s=n.disabled,c=n.onChange;return l.createElement(o.w,(0,a.A)({key:String(t),code:r,language:i,theme:u,disabled:s,onChange:c},e,{className:d.playgroundEditor}))}function v(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,a=(e.wrapper,l.useState(t)),u=a[0],c=a[1],p=function(){c((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:d.playgroundPreview},l.createElement(s.A,{fallback:l.createElement(y,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(o.pA,null),l.createElement(o.p1,null),l.createElement("div",{className:d.toggleContainer},l.createElement("div",{className:(0,i.A)(d.toggleIcon),onClick:p},l.createElement(m.luQ,null),l.createElement("span",{className:d.showCode},u?"Hide":"Show"," Code"))))}))),u&&l.createElement(f,{preImports:r,showCode:u}))}function b(e){var t=e.children,n=(e.transformCode,(0,r.A)(e,g)),i=((0,u.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,c.A)());return l.createElement("div",{className:d.playgroundContainer},l.createElement(o.Q,(0,a.A)({code:t.replace(/\n$/,""),theme:i},n),l.createElement(v,{showCode:n.showCode})))}},51433:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(96540),a=n(36480),l=n(58040),o=n(45550),i=n(91147);const u=Object.assign({React:r,LinearGradient:i.A},a,l,o,r)},64119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var r=n(58168),a=n(98587),l=(n(96540),n(15680)),o=n(41298),i=(n(11470),n(19365),n(21619)),u=n(35504),s=["components"],c={id:"avatar_accessory",title:"Avatar.Accessory"},d=void 0,p={unversionedId:"components/avatar_accessory",id:"version-4.0.0-rc.7/components/avatar_accessory",title:"Avatar.Accessory",description:"This is used for adding an accessory to the Avatar.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/Avatar.Accessory.mdx",sourceDirName:"components",slug:"/components/avatar_accessory",permalink:"/docs/4.0.0-rc.7/components/avatar_accessory",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/Avatar.Accessory.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"avatar_accessory",title:"Avatar.Accessory"},sidebar:"docs",previous:{title:"Avatar",permalink:"/docs/4.0.0-rc.7/components/avatar"},next:{title:"Badge",permalink:"/docs/4.0.0-rc.7/components/badge"}},m={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],y={toc:g},f="wrapper";function v(e){var t=e.components,n=(0,a.A)(e,s);return(0,l.yg)(f,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(o.y,{mdxType:"IconsStyle"}),(0,l.yg)("p",null,"This is used for adding an accessory to the Avatar.\nReceives either all ",(0,l.yg)("a",{parentName:"p",href:"icon#props"},"Icon")," or ",(0,l.yg)("a",{parentName:"p",href:"image#props"},"Image")," props."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("div",{class:"row inline-flex-center"},(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Import")),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(i.A,{mdxType:"CodeBlock"},"import { Avatar } from '@rneui/themed';")),(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Theme Key"," ",(0,l.yg)("a",{href:"../customizing#using-themeprovider"},(0,l.yg)(u.wfp,{mdxType:"BiInfoCircle"})))),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(i.A,{mdxType:"CodeBlock"},"AvatarAccessory"))),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"icon#props"},"Icon"),", ",(0,l.yg)("a",{parentName:"p",href:"image#props"},"Image"),", ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/text#props"},"Text")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPress")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.yg)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"None")),(0,l.yg)("td",{parentName:"tr",align:null}))))))}v.isMDXComponent=!0}}]);