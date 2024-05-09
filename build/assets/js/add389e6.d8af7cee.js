"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[69379],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>E});var r=n(58168),a=n(96540),o=n(20053),l=n(23104),i=n(56347),u=n(57485),c=n(31682),s=n(89466);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.W6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u.aZ)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function g(e){var t,n,r,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,d=p(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),v=g[0],y=g[1],b=f({queryString:u,groupId:c}),h=b[0],w=b[1],E=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Dv)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),A=E[0],C=E[1],N=function(){var e=null!=h?h:A;return m({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){N&&y(N)}),[N]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);y(e),w(e),C(e)}),[w,C,d]),tabValues:d}}var v=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],d=(0,l.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==i&&(d(t),u(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var o,l=s.indexOf(e.currentTarget)-1;n=null!=(o=s[l])?o:s[s.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:m,onClick:p},l,{className:(0,o.A)("tabs__item",y.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=g(e);return a.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},a.createElement(b,(0,r.A)({},e,t)),a.createElement(h,(0,r.A)({},e,t)))}function E(e){var t=(0,v.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},41298:(e,t,n)=>{n.d(t,{y:()=>u});var r=n(96540),a=n(5260),o=n(14628),l=n(1547),i=n(83564),u=function(){return r.createElement(a.A,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.A+") format('truetype');\n          }\n        "))}},4588:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(98587),a=n(58168),o=n(96540),l=n(95404),i=n(20053),u=(n(21312),n(44586)),c=n(78478),s=n(26058);const d={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var p=n(92303),m=n(59644),f=["children","transformCode"];function g(){return o.createElement("div",null,"Loading...")}function v(e){var t=(0,p.A)(),n=(0,o.useContext)(l.MY),r=n.code,i=n.language,u=n.theme,c=n.disabled,s=n.onChange;return o.createElement(l.w,(0,a.A)({key:String(t),code:r,language:i,theme:u,disabled:c,onChange:s},e,{className:d.playgroundEditor}))}function y(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,a=(e.wrapper,o.useState(t)),u=a[0],s=a[1],p=function(){s((function(e){return!e}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:d.playgroundPreview},o.createElement(c.A,{fallback:o.createElement(g,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(l.pA,null),o.createElement(l.p1,null),o.createElement("div",{className:d.toggleContainer},o.createElement("div",{className:(0,i.A)(d.toggleIcon),onClick:p},o.createElement(m.luQ,null),o.createElement("span",{className:d.showCode},u?"Hide":"Show"," Code"))))}))),u&&o.createElement(v,{preImports:r,showCode:u}))}function b(e){var t=e.children,n=(e.transformCode,(0,r.A)(e,f)),i=((0,u.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.A)());return o.createElement("div",{className:d.playgroundContainer},o.createElement(l.Q,(0,a.A)({code:t.replace(/\n$/,""),theme:i},n),o.createElement(y,{showCode:n.showCode})))}},51433:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(96540),a=n(36480),o=n(58040),l=n(45550),i=n(91147);const u=Object.assign({React:r,LinearGradient:i.A},a,o,l,r)},59498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var r=n(58168),a=n(98587),o=(n(96540),n(15680)),l=n(41298),i=(n(11470),n(19365),n(21619)),u=n(35504),c=["components"],s={id:"dialog_actions",title:"Dialog.Actions"},d=void 0,p={unversionedId:"components/dialog_actions",id:"components/dialog_actions",title:"Dialog.Actions",description:"Define Dialog Actions using this component.",source:"@site/docs/components/Dialog.Actions.mdx",sourceDirName:"components",slug:"/components/dialog_actions",permalink:"/docs/next/components/dialog_actions",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Dialog.Actions.mdx",tags:[],version:"current",frontMatter:{id:"dialog_actions",title:"Dialog.Actions"},sidebar:"docs",previous:{title:"Dialog",permalink:"/docs/next/components/dialog"},next:{title:"Dialog.Button",permalink:"/docs/next/components/dialog_button"}},m={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],g={toc:f},v="wrapper";function y(e){var t=e.components,n=(0,a.A)(e,c);return(0,o.yg)(v,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(l.y,{mdxType:"IconsStyle"}),(0,o.yg)("p",null,"Define Dialog Actions using this component."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("div",{class:"row inline-flex-center"},(0,o.yg)("div",{class:"col col--3"},(0,o.yg)("h4",null,"Import")),(0,o.yg)("div",{class:"col col--9"},(0,o.yg)(i.A,{mdxType:"CodeBlock"},"import { Dialog } from '@rneui/themed';")),(0,o.yg)("div",{class:"col col--3"},(0,o.yg)("h4",null,"Theme Key"," ",(0,o.yg)("a",{href:"../customizing#using-themeprovider"},(0,o.yg)(u.wfp,{mdxType:"BiInfoCircle"})))),(0,o.yg)("div",{class:"col col--9"},(0,o.yg)(i.A,{mdxType:"CodeBlock"},"DialogActions"))),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"children")),(0,o.yg)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Add Enclosed components as an action to the dialog."))))))}y.isMDXComponent=!0}}]);