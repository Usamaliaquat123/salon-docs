"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[96598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,D=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(D,l(l({ref:t},c),{},{components:n})):a.createElement(D,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function D(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function g(e){var t,n,a,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,d=p(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:d})})),A=g[0],f=g[1],b=D({queryString:s,groupId:u}),v=b[0],C=b[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),h=k[0],y=k[1],B=function(){var e=null!=v?v:h;return m({value:e,tabValues:d})?e:null}();return(0,r.useEffect)((function(){B&&f(B)}),[B]),{selectedValue:A,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);f(e),C(e),y(e)}),[C,y,d]),tabValues:d}}var A=n(72389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function C(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(C,(0,a.Z)({},e,t)))}function h(e){var t=(0,A.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>s});var a=n(67294),r=n(35742),o=n(14330),l=n(98576),i=n(61720),s=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(63366),r=n(87462),o=n(67294),l=n(10407),i=n(86010),s=(n(95999),n(52263)),u=n(91262),c=n(66412);const d="playgroundContainer_TGbA",p="playgroundEditor_PvJ1",m="playgroundPreview_bb8I",D="toggleContainer_ZZiH",g="toggleIcon_OnrQ",A="showCode_O0Od";var f=n(72389),b=n(5434),v=["children","transformCode"];function C(){return o.createElement("div",null,"Loading...")}function k(e){var t=(0,f.Z)(),n=(0,o.useContext)(l.L2),a=n.code,i=n.language,s=n.theme,u=n.disabled,c=n.onChange;return o.createElement(l.uz,(0,r.Z)({key:String(t),code:a,language:i,theme:s,disabled:u,onChange:c},e,{className:p}))}function h(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,r=(e.wrapper,o.useState(t)),s=r[0],c=r[1],d=function(){c((function(e){return!e}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:m},o.createElement(u.Z,{fallback:o.createElement(C,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(l.i5,null),o.createElement(l.IF,null),o.createElement("div",{className:D},o.createElement("div",{className:(0,i.Z)(g),onClick:d},o.createElement(b.xoN,null),o.createElement("span",{className:A},s?"Hide":"Show"," Code"))))}))),s&&o.createElement(k,{preImports:a,showCode:s}))}function y(e){var t=e.children,n=(e.transformCode,(0,a.Z)(e,v)),i=((0,s.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,c.p)());return o.createElement("div",{className:d},o.createElement(l.nu,(0,r.Z)({code:t.replace(/\n$/,""),theme:i},n),o.createElement(h,{showCode:n.showCode})))}},56922:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(32408),o=n(13925),l=n(53211),i=n(83279);const s=Object.assign({React:a,LinearGradient:i.Z},r,o,l,a)},11067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>D,default:()=>v,frontMatter:()=>m,metadata:()=>g,toc:()=>f});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(37047),i=(n(74866),n(85162),n(96711)),s=n(47516),u=["components"],c={toc:[]};function d(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Web-platform specific note"),":"),(0,o.kt)("p",{parentName:"blockquote"},"You ",(0,o.kt)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,o.kt)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,o.kt)("a",{parentName:"p",href:"#modalcomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,o.kt)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-web"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Dialog ModalComponent={Modal} ... />\n...\n")),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Dialog","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%0AButton%2C%0ADialog%2C%0ACheckBox%2C%0AListItem%2C%0AAvatar%2C%0A%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20DialogComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Dialogs%3A%20React.FunctionComponent%3CDialogComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bvisible1%2C%20setVisible1%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible2%2C%20setVisible2%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible3%2C%20setVisible3%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible4%2C%20setVisible4%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible5%2C%20setVisible5%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible6%2C%20setVisible6%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bchecked%2C%20setChecked%5D%20%3D%20useState(1)%3B%0A%0Aconst%20toggleDialog1%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible1(!visible1)%3B%0A%7D%3B%0Aconst%20toggleDialog2%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible2(!visible2)%3B%0A%7D%3B%0Aconst%20toggleDialog3%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible3(!visible3)%3B%0A%7D%3B%0Aconst%20toggleDialog4%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible4(!visible4)%3B%0A%7D%3B%0Aconst%20toggleDialog5%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible5(!visible5)%3B%0A%7D%3B%0Aconst%20toggleDialog6%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible6(!visible6)%3B%0A%7D%3B%0A%0Aconst%20userlist%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20name%3A%20'Amy%20Farha'%2C%0A%20%20%20%20avatar_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FXdLjsJX_.jpg'%2C%0A%20%20%20%20subtitle%3A%20'amy.farha%40gmail.com'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20name%3A%20'Chris%20Jackson'%2C%0A%20%20%20%20avatar_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FKtCFjlD4.jpg'%2C%0A%20%20%20%20subtitle%3A%20'cjackson%40gmail.com'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20name%3A%20'Amanda%20Martin'%2C%0A%20%20%20%20avatar_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498529605908-f357a9af7bf5%3Fixlib%3Drb-0.3.5%26q%3D80%26fm%3Djpg%26crop%3Dfaces%26fit%3Dcrop%26h%3D200%26w%3D200%26s%3D047fade70e80ebb22ac8f09c04872c40'%2C%0A%20%20%20%20subtitle%3A%20'amandam%40gmail.com'%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Areturn%20(%0A%20%20%3CView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Simple%20Dialog%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog1%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Mutli%20Action%20Dialog%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog2%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Loading%20Dialog%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog3%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Buttonless%20Dialog%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog4%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Custom%20Dialog%201%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog5%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Custom%20Dialog%202%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog6%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible1%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog1%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Dialog%20Title%22%2F%3E%0A%20%20%20%20%20%20%3CText%3EDialog%20body%20text.%20Add%20relevant%20information%20here.%3C%2FText%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible2%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog2%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Dialog%20Title%22%2F%3E%0A%20%20%20%20%20%20%3CText%3EDialog%20body%20text.%20Add%20relevant%20information%20here.%3C%2FText%3E%0A%20%20%20%20%20%20%3CDialog.Actions%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Button%20title%3D%22ACTION%201%22%20onPress%3D%7B()%20%3D%3E%20console.log('Primary%20Action%20Clicked!')%7D%2F%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Button%20title%3D%22ACTION%202%22%20onPress%3D%7B()%20%3D%3E%20console.log('Secondary%20Action%20Clicked!')%7D%2F%3E%0A%20%20%20%20%20%20%3C%2FDialog.Actions%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%20isVisible%3D%7Bvisible3%7D%20onBackdropPress%3D%7BtoggleDialog3%7D%3E%0A%20%20%20%20%20%20%3CDialog.Loading%20%2F%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible4%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog4%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Dialog%20Title%22%2F%3E%0A%20%20%20%20%20%20%3CText%3EDialog%20body%20text.%20Add%20relevant%20information%20here.%3C%2FText%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible5%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog5%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Select%20Preference%22%2F%3E%0A%20%20%20%20%20%20%7B%5B'Option%201'%2C%20'Option%202'%2C%20'Option%203'%5D.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%7Bl%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'white'%2C%20borderWidth%3A%200%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20checkedIcon%3D%22dot-circle-o%22%0A%20%20%20%20%20%20%20%20%20%20uncheckedIcon%3D%22circle-o%22%0A%20%20%20%20%20%20%20%20%20%20checked%3D%7Bchecked%20%3D%3D%3D%20i%20%2B%201%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setChecked(i%20%2B%201)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20))%7D%0A%0A%20%20%20%20%20%20%3CDialog.Actions%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Button%0A%20%20%20%20%20%20%20%20%20%20title%3D%22CONFIRM%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(%60Option%20%24%7Bchecked%7D%20was%20selected!%60)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20toggleDialog5()%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Button%20title%3D%22CANCEL%22%20onPress%3D%7BtoggleDialog5%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FDialog.Actions%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible6%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog6%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Choose%20Account%22%2F%3E%0A%20%20%20%20%20%20%7Buserlist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%20-10%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%208%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog6%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%20rounded%20source%3D%7B%7B%20uri%3A%20l.avatar_url%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bl.name%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Subtitle%3E%7Bl.subtitle%7D%3C%2FListItem.Subtitle%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Abutton%3A%20%7B%0A%20%20borderRadius%3A%206%2C%0A%20%20width%3A%20220%2C%0A%20%20margin%3A%2020%2C%0A%7D%2C%0AbuttonContainer%3A%20%7B%0A%20%20margin%3A%2020%2C%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'center'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Dialogs%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var p=["components"],m={id:"dialog",title:"Dialog"},D=void 0,g={unversionedId:"components/dialog",id:"version-4.0.0-rc.8/components/dialog",title:"Dialog",description:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",source:"@site/versioned_docs/version-4.0.0-rc.8/components/Dialog.mdx",sourceDirName:"components",slug:"/components/dialog",permalink:"/docs/components/dialog",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/components/Dialog.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"dialog",title:"Dialog"}},A={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],b={toc:f};function v(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.\nYou can wrap any component with a simple Dialog component to display quick information to the user.\nAlso receives all ",(0,o.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/docs/components/overlay#props"},"Overlay")," props except ",(0,o.kt)("inlineCode",{parentName:"p"},"fullscreen"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{class:"row inline-flex-center"},(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Import")),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"import { Dialog } from '@rneui/themed';")),(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Theme Key"," ",(0,o.kt)("a",{href:"../customizing#using-themeprovider"},(0,o.kt)(s.Fs0,{mdxType:"BiInfoCircle"})))),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"Dialog"))),(0,o.kt)(d,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"overlay#props"},"Overlay")," props.")),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"children")),(0,o.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Add Enclosed components.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,o.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,o.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"overlayStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Add additional styling to the internal Overlay component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,o.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"None")),(0,o.kt)("td",{parentName:"tr",align:null}))))))}v.isMDXComponent=!0}}]);