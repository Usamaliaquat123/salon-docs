"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[1171],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>m});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u[d]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},19365:(e,r,t)=>{t.d(r,{A:()=>i});var n=t(96540),a=t(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){var r=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:t},r)}},11470:(e,r,t)=>{t.d(r,{A:()=>E});var n=t(58168),a=t(96540),o=t(20053),i=t(23104),u=t(56347),l=t(57485),c=t(31682),s=t(89466);function d(e){return function(e){var r,t;return null!=(r=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(r=e.props)&&"object"==typeof r&&"value"in r)return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function p(e){var r=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=r?r:d(t);return function(e){var r=(0,c.X)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function f(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function m(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId,o=(0,u.W6)(),i=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((function(e){if(i){var r=new URLSearchParams(o.location.search);r.set(i,e),o.replace(Object.assign({},o.location,{search:r.toString()}))}}),[i,o])]}function v(e){var r,t,n,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,c=e.groupId,d=p(e),v=(0,a.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:d})})),b=v[0],y=v[1],h=m({queryString:l,groupId:c}),g=h[0],w=h[1],E=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Dv)(r),n=t[0],o=t[1],[n,(0,a.useCallback)((function(e){r&&o.set(e)}),[r,o])]),A=E[0],O=E[1],I=function(){var e=null!=g?g:A;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){I&&y(I)}),[I]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);y(e),w(e),O(e)}),[w,O,d]),tabValues:d}}var b=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var r=e.className,t=e.block,u=e.selectedValue,l=e.selectValue,c=e.tabValues,s=[],d=(0,i.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var r=e.currentTarget,t=s.indexOf(r),n=c[t].value;n!==u&&(d(r),l(n))},f=function(e){var r,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;t=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var o,i=s.indexOf(e.currentTarget)-1;t=null!=(o=s[i])?o:s[s.length-1]}null==(r=t)||r.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},r)},c.map((function(e){var r=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:u===r?0:-1,"aria-selected":u===r,key:r,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},i,{className:(0,o.A)("tabs__item",y.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===r})}),null!=t?t:r)})))}function g(e){var r=e.lazy,t=e.children,n=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var i=o.find((function(e){return e.props.value===n}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})})))}function w(e){var r=v(e);return a.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},a.createElement(h,(0,n.A)({},e,r)),a.createElement(g,(0,n.A)({},e,r)))}function E(e){var r=(0,b.A)();return a.createElement(w,(0,n.A)({key:String(r)},e))}},41298:(e,r,t)=>{t.d(r,{y:()=>l});var n=t(96540),a=t(5260),o=t(14628),i=t(1547),u=t(83564),l=function(){return n.createElement(a.A,null,n.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+u.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.A+") format('truetype');\n          }\n        "))}},1941:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(58168),a=t(98587),o=(t(96540),t(15680)),i=t(41298),u=(t(11470),t(19365),["components"]),l={id:"card_divider",title:"Card.Divider"},c=void 0,s={unversionedId:"components/card_divider",id:"version-4.0.0-rc.5/components/card_divider",title:"Card.Divider",description:"Add divider to the card which acts as a separator between elements.",source:"@site/versioned_docs/version-4.0.0-rc.5/components/Card.Divider.mdx",sourceDirName:"components",slug:"/components/card_divider",permalink:"/docs/4.0.0-rc.5/components/card_divider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.5/components/Card.Divider.mdx",tags:[],version:"4.0.0-rc.5",frontMatter:{id:"card_divider",title:"Card.Divider"},sidebar:"docs",previous:{title:"Card",permalink:"/docs/4.0.0-rc.5/components/card"},next:{title:"Card.FeaturedSubtitle",permalink:"/docs/4.0.0-rc.5/components/card_featuredsubtitle"}},d={},p=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2}],f={toc:p},m="wrapper";function v(e){var r=e.components,t=(0,a.A)(e,u);return(0,o.yg)(m,(0,n.A)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)(i.y,{mdxType:"IconsStyle"}),(0,o.yg)("p",null,"Add divider to the card which acts as a separator between elements.\nThis, Receives all ",(0,o.yg)("a",{parentName:"p",href:"divider#props"},"Divider")," props."),(0,o.yg)("h2",{id:"import"},"Import"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Card } from "@rneui/themed";\n')),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Includes all ",(0,o.yg)("a",{parentName:"p",href:"divider#props"},"Divider")," props.")))}v.isMDXComponent=!0},83564:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14628:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},1547:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"}}]);