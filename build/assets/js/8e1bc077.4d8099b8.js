"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[22100],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,y=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return r?n.createElement(y,l(l({ref:t},d),{},{components:r})):n.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(96540),a=r(20053);const i={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,l),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>D});var n=r(58168),a=r(96540),i=r(20053),l=r(23104),o=r(56347),s=r(57485),u=r(31682),d=r(89466);function c(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:c(r);return function(e){var t=(0,u.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function y(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,i=(0,o.W6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,s.aZ)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function g(e){var t,r,n,i,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,c=p(e),g=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:c})})),v=g[0],f=g[1],A=y({queryString:s,groupId:u}),h=A[0],b=A[1],D=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,d.Dv)(t),n=r[0],i=r[1],[n,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),C=D[0],E=D[1],N=function(){var e=null!=h?h:C;return m({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){N&&f(N)}),[N]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);f(e),b(e),E(e)}),[b,E,c]),tabValues:c}}var v=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function A(e){var t=e.className,r=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,d=[],c=(0,l.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=d.indexOf(t),n=u[r].value;n!==o&&(c(t),s(n))},m=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=d.indexOf(e.currentTarget)+1;r=null!=(n=d[a])?n:d[0];break;case"ArrowLeft":var i,l=d.indexOf(e.currentTarget)-1;r=null!=(i=d[l])?i:d[d.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t)},u.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return d.push(e)},onKeyDown:m,onClick:p},l,{className:(0,i.A)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=r?r:t)})))}function h(e){var t=e.lazy,r=e.children,n=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function b(e){var t=g(e);return a.createElement("div",{className:(0,i.A)("tabs-container",f.tabList)},a.createElement(A,(0,n.A)({},e,t)),a.createElement(h,(0,n.A)({},e,t)))}function D(e){var t=(0,v.A)();return a.createElement(b,(0,n.A)({key:String(t)},e))}},58009:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>p,default:()=>A,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var n=r(58168),a=r(98587),i=(r(96540),r(15680)),l=(r(11470),r(19365),r(36480),["components"]),o={toc:[]},s="wrapper";function u(e){var t=e.components,r=(0,a.A)(e,l);return(0,i.yg)(s,(0,n.A)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("div",{className:"snack-player","data-snack-name":"RNE Divider","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useContext%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20Divider%2C%20useTheme%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20ScrollView%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Atype%20DividerViewTypes%20%3D%20%7B%7D%3B%0A%0Aconst%20DividerView%3A%20React.FunctionComponent%3CDividerViewTypes%3E%20%3D%20(props)%20%3D%3E%20%7B%0Aconst%20%7B%20theme%20%7D%20%3D%20useTheme()%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Dividers%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3EHorizontal%20Divider%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20width%20and%20color%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20width%3D%7B5%7D%20color%3D%7Btheme%3F.colors%3F.primary%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Divider%20with%20Inset%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20left%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20right%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20insetType%3D%22right%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20middle%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20insetType%3D%22middle%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3EWelcome%20to%20RNE%20App%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EVertical%20Dividers%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.vertical%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.vertical%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20width%3D%7B5%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EDividers%20with%20SubHeader%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%0A%20%20%20%20%20%20%20%20%20%20subHeader%3D%22Divider%22%0A%20%20%20%20%20%20%20%20%20%20inset%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20subHeaderStyle%3D%7B%7B%20color%3A%20theme%3F.colors%3F.primary%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%2C%0Ahorizontal%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%7D%2C%0AhorizontalText%3A%20%7B%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2016%2C%0A%20%20marginVertical%3A%2010%2C%0A%7D%2C%0Avertical%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20justifyContent%3A%20'space-evenly'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20DividerView%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0;var d=["components"],c={id:"divider",title:"Divider"},p=void 0,m={unversionedId:"components/divider",id:"version-4.0.0-rc.2/components/divider",title:"Divider",description:"Dividers are visual separators of content.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/Divider.mdx",sourceDirName:"components",slug:"/components/divider",permalink:"/docs/4.0.0-rc.2/components/divider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/Divider.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"divider",title:"Divider"},sidebar:"docs",previous:{title:"Dialog.Title",permalink:"/docs/4.0.0-rc.2/components/dialog_title"},next:{title:"FAB",permalink:"/docs/4.0.0-rc.2/components/fab"}},y={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:g},f="wrapper";function A(e){var t=e.components,r=(0,a.A)(e,d);return(0,i.yg)(f,(0,n.A)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Dividers are visual separators of content.\nUse Divider when you want to make a distinction between sections of content.\nOur divider offers adding inset, color, orientation and subHeader to the component using props.\nAlso receives all ",(0,i.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)(u,{mdxType:"Usage"}),(0,i.yg)("h2",{id:"props"},"Props"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Includes all ",(0,i.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,i.yg)("div",{class:"table-responsive"},(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"color")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"The color of the component.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"inset")),(0,i.yg)("td",{parentName:"tr",align:null},"boolean"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")),(0,i.yg)("td",{parentName:"tr",align:null},"Applies inset to the divider.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"insetType")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"middle")," or ",(0,i.yg)("inlineCode",{parentName:"td"},"left")," or ",(0,i.yg)("inlineCode",{parentName:"td"},"right")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"left")),(0,i.yg)("td",{parentName:"tr",align:null},"Applies inset to a specific direction to the divider.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"orientation")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"vertical")," or ",(0,i.yg)("inlineCode",{parentName:"td"},"horizontal")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"horizontal")),(0,i.yg)("td",{parentName:"tr",align:null},"Apply orientation to the divider.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"style")),(0,i.yg)("td",{parentName:"tr",align:null},"View Style"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Applies style to the divider.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"subHeader")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Adds subHeader text to the divider.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"subHeaderStyle")),(0,i.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Adds style to the subHeader text of the divider")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"width")),(0,i.yg)("td",{parentName:"tr",align:null},"number"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Apply width to the divider."))))))}A.isMDXComponent=!0}}]);