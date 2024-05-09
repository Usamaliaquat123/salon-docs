"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[7450],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>x});var n=r(58168),a=r(96540),o=r(20053),l=r(23104),u=r(56347),i=r(57485),c=r(31682),s=r(89466);function p(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,c.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,u.W6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,i.aZ)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function v(e){var t,r,n,o,l=e.defaultValue,u=e.queryString,i=void 0!==u&&u,c=e.groupId,p=m(e),v=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),b=v[0],y=v[1],h=d({queryString:i,groupId:c}),g=h[0],w=h[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,s.Dv)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=x[0],I=x[1],E=function(){var e=null!=g?g:k;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){E&&y(E)}),[E]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);y(e),w(e),I(e)}),[w,I,p]),tabValues:p}}var b=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,r=e.block,u=e.selectedValue,i=e.selectValue,c=e.tabValues,s=[],p=(0,l.a_)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==u&&(p(t),i(n))},f=function(e){var t,r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var o,l=s.indexOf(e.currentTarget)-1;r=null!=(o=s[l])?o:s[s.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},c.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:m},l,{className:(0,o.A)("tabs__item",y.tabItem,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function g(e){var t=e.lazy,r=e.children,n=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=v(e);return a.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},a.createElement(h,(0,n.A)({},e,t)),a.createElement(g,(0,n.A)({},e,t)))}function x(e){var t=(0,b.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},41298:(e,t,r)=>{r.d(t,{y:()=>i});var n=r(96540),a=r(5260),o=r(14628),l=r(1547),u=r(83564),i=function(){return n.createElement(a.A,null,n.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+u.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.A+") format('truetype');\n          }\n        "))}},54813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=r(58168),a=r(98587),o=(r(96540),r(15680)),l=r(41298),u=(r(11470),r(19365),["components"]),i={id:"listitem_checkbox",title:"ListItem.CheckBox"},c=void 0,s={unversionedId:"components/listitem_checkbox",id:"version-4.0.0-rc.4/components/listitem_checkbox",title:"ListItem.CheckBox",description:"This allows adding CheckBox to the ListItem.",source:"@site/versioned_docs/version-4.0.0-rc.4/components/ListItem.CheckBox.mdx",sourceDirName:"components",slug:"/components/listitem_checkbox",permalink:"/docs/4.0.0-rc.4/components/listitem_checkbox",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.4/components/ListItem.CheckBox.mdx",tags:[],version:"4.0.0-rc.4",frontMatter:{id:"listitem_checkbox",title:"ListItem.CheckBox"},sidebar:"docs",previous:{title:"ListItem.ButtonGroup",permalink:"/docs/4.0.0-rc.4/components/listitem_buttongroup"},next:{title:"ListItem.Chevron",permalink:"/docs/4.0.0-rc.4/components/listitem_chevron"}},p={},m=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2}],f={toc:m},d="wrapper";function v(e){var t=e.components,r=(0,a.A)(e,u);return(0,o.yg)(d,(0,n.A)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(l.y,{mdxType:"IconsStyle"}),(0,o.yg)("p",null,"This allows adding CheckBox to the ListItem.\nThis, Receives all ",(0,o.yg)("a",{parentName:"p",href:"checkbox#props"},"CheckBox")," props."),(0,o.yg)("h2",{id:"import"},"Import"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { ListItem } from "@rneui/themed";\n')),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Includes all ",(0,o.yg)("a",{parentName:"p",href:"checkbox#props"},"CheckBox")," props.")))}v.isMDXComponent=!0},83564:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14628:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},1547:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"}}]);