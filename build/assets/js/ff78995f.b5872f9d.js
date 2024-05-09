"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[79801],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,u),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>I});var n=r(58168),a=r(96540),o=r(20053),u=r(23104),i=r(56347),l=r(57485),s=r(31682),c=r(89466);function p(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,s.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,i.W6)(),u=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l.aZ)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function v(e){var t,r,n,o,u=e.defaultValue,i=e.queryString,l=void 0!==i&&i,s=e.groupId,p=m(e),v=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:p})})),b=v[0],y=v[1],h=f({queryString:l,groupId:s}),g=h[0],w=h[1],I=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Dv)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),E=I[0],O=I[1],T=function(){var e=null!=g?g:E;return d({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){T&&y(T)}),[T]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);y(e),w(e),O(e)}),[w,O,p]),tabValues:p}}var b=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,r=e.block,i=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,u.a_)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==i&&(p(t),l(n))},d=function(e){var t,r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,u=c.indexOf(e.currentTarget)-1;r=null!=(o=c[u])?o:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},u,{className:(0,o.A)("tabs__item",y.tabItem,null==u?void 0:u.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function g(e){var t=e.lazy,r=e.children,n=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var u=o.find((function(e){return e.props.value===n}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=v(e);return a.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},a.createElement(h,(0,n.A)({},e,t)),a.createElement(g,(0,n.A)({},e,t)))}function I(e){var t=(0,b.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},84495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(58168),a=r(98587),o=(r(96540),r(15680)),u=(r(11470),r(19365),["components"]),i={id:"listitem_input",title:"ListItem.Input"},l=void 0,s={unversionedId:"components/listitem_input",id:"version-4.0.0-rc.3/components/listitem_input",title:"ListItem.Input",description:"This allows adding an Text Input within the ListItem.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/ListItem.Input.mdx",sourceDirName:"components",slug:"/components/listitem_input",permalink:"/docs/4.0.0-rc.3/components/listitem_input",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/ListItem.Input.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"listitem_input",title:"ListItem.Input"},sidebar:"docs",previous:{title:"ListItem.Content",permalink:"/docs/4.0.0-rc.3/components/listitem_content"},next:{title:"ListItem.Subtitle",permalink:"/docs/4.0.0-rc.3/components/listitem_subtitle"}},c={},p=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2}],m={toc:p},d="wrapper";function f(e){var t=e.components,r=(0,a.A)(e,u);return(0,o.yg)(d,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This allows adding an Text Input within the ListItem.\nThis, Receives all ",(0,o.yg)("a",{parentName:"p",href:"/docs/4.0.0-rc.3/components/input#props"},"Input")," props."),(0,o.yg)("h2",{id:"import"},"Import"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { ListItem } from "@rneui/themed";\n')),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Includes all ",(0,o.yg)("a",{parentName:"p",href:"input#props"},"Input")," props.")))}f.isMDXComponent=!0}}]);