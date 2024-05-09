"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[83452],{15680:(t,e,n)=>{n.d(e,{xA:()=>u,yg:()=>p});var a=n(96540);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},A=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=m(n),A=i,p=c["".concat(o,".").concat(A)]||c[A]||d[A]||r;return n?a.createElement(p,l(l({ref:e},u),{},{components:n})):a.createElement(p,l({ref:e},u))}));function p(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=A;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:i,l[1]=s;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},19365:(t,e,n)=>{n.d(e,{A:()=>l});var a=n(96540),i=n(20053);const r={tabItem:"tabItem_Ymn6"};function l(t){var e=t.children,n=t.hidden,l=t.className;return a.createElement("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,l),hidden:n},e)}},11470:(t,e,n)=>{n.d(e,{A:()=>v});var a=n(58168),i=n(96540),r=n(20053),l=n(23104),s=n(56347),o=n(57485),m=n(31682),u=n(89466);function c(t){return function(t){var e,n;return null!=(e=null==(n=i.Children.map(t,(function(t){if(!t||(0,i.isValidElement)(t)&&(e=t.props)&&"object"==typeof e&&"value"in e)return t;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?e:[]}(t).map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}function d(t){var e=t.values,n=t.children;return(0,i.useMemo)((function(){var t=null!=e?e:c(n);return function(t){var e=(0,m.X)(t,(function(t,e){return t.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(t),t}),[e,n])}function A(t){var e=t.value;return t.tabValues.some((function(t){return t.value===e}))}function p(t){var e=t.queryString,n=void 0!==e&&e,a=t.groupId,r=(0,s.W6)(),l=function(t){var e=t.queryString,n=void 0!==e&&e,a=t.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,o.aZ)(l),(0,i.useCallback)((function(t){if(l){var e=new URLSearchParams(r.location.search);e.set(l,t),r.replace(Object.assign({},r.location,{search:e.toString()}))}}),[l,r])]}function g(t){var e,n,a,r,l=t.defaultValue,s=t.queryString,o=void 0!==s&&s,m=t.groupId,c=d(t),g=(0,i.useState)((function(){return function(t){var e,n=t.defaultValue,a=t.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!A({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(e=a.find((function(t){return t.default})))?e:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:l,tabValues:c})})),C=g[0],y=g[1],D=p({queryString:o,groupId:m}),h=D[0],I=D[1],v=(e=function(t){return t?"docusaurus.tab."+t:null}({groupId:m}.groupId),n=(0,u.Dv)(e),a=n[0],r=n[1],[a,(0,i.useCallback)((function(t){e&&r.set(t)}),[e,r])]),b=v[0],f=v[1],L=function(){var t=null!=h?h:b;return A({value:t,tabValues:c})?t:null}();return(0,i.useLayoutEffect)((function(){L&&y(L)}),[L]),{selectedValue:C,selectValue:(0,i.useCallback)((function(t){if(!A({value:t,tabValues:c}))throw new Error("Can't select invalid tab value="+t);y(t),I(t),f(t)}),[I,f,c]),tabValues:c}}var C=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function D(t){var e=t.className,n=t.block,s=t.selectedValue,o=t.selectValue,m=t.tabValues,u=[],c=(0,l.a_)().blockElementScrollPositionUntilNextRender,d=function(t){var e=t.currentTarget,n=u.indexOf(e),a=m[n].value;a!==s&&(c(e),o(a))},A=function(t){var e,n=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":var a,i=u.indexOf(t.currentTarget)+1;n=null!=(a=u[i])?a:u[0];break;case"ArrowLeft":var r,l=u.indexOf(t.currentTarget)-1;n=null!=(r=u[l])?r:u[u.length-1]}null==(e=n)||e.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},e)},m.map((function(t){var e=t.value,n=t.label,l=t.attributes;return i.createElement("li",(0,a.A)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:function(t){return u.push(t)},onKeyDown:A,onClick:d},l,{className:(0,r.A)("tabs__item",y.tabItem,null==l?void 0:l.className,{"tabs__item--active":s===e})}),null!=n?n:e)})))}function h(t){var e=t.lazy,n=t.children,a=t.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){var l=r.find((function(t){return t.props.value===a}));return l?(0,i.cloneElement)(l,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map((function(t,e){return(0,i.cloneElement)(t,{key:e,hidden:t.props.value!==a})})))}function I(t){var e=g(t);return i.createElement("div",{className:(0,r.A)("tabs-container",y.tabList)},i.createElement(D,(0,a.A)({},t,e)),i.createElement(h,(0,a.A)({},t,e)))}function v(t){var e=(0,C.A)();return i.createElement(I,(0,a.A)({key:String(e)},t))}},97403:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>D,frontMatter:()=>c,metadata:()=>A,toc:()=>g});var a=n(58168),i=n(98587),r=(n(96540),n(15680)),l=(n(11470),n(19365),n(36480),["components"]),s={toc:[{value:"Using Map Function - Implemented with avatar",id:"using-map-function---implemented-with-avatar",level:3},{value:"Using Map Function - Implemented with link and icon",id:"using-map-function---implemented-with-link-and-icon",level:3},{value:"Using RN FlatList - Implemented with link and avatar",id:"using-rn-flatlist---implemented-with-link-and-avatar",level:3},{value:"Using RN FlatList - Implemented with custom avatar component.",id:"using-rn-flatlist---implemented-with-custom-avatar-component",level:3},{value:"ListItem implemented with custom View for Subtitle",id:"listitem-implemented-with-custom-view-for-subtitle",level:3},{value:"Badges",id:"badges",level:3},{value:"Linear gradient + Scale feedback",id:"linear-gradient--scale-feedback",level:3}]},o="wrapper";function m(t){var e=t.components,n=(0,i.A)(t,l);return(0,r.yg)(o,(0,a.A)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"using-map-function---implemented-with-avatar"},"Using Map Function - Implemented with avatar"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from '@rneui/themed'\n\nconst list = [\n  {\n    name: 'Amy Farha',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',\n    subtitle: 'Vice President'\n  },\n  {\n    name: 'Chris Jackson',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n    subtitle: 'Vice Chairman'\n  },\n  ... // more items\n]\n\n<View>\n  {\n    list.map((l, i) => (\n      <ListItem key={i} bottomDivider>\n        <Avatar source={{uri: l.avatar_url}} />\n        <ListItem.Content>\n          <ListItem.Title>{l.name}</ListItem.Title>\n          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>\n        </ListItem.Content>\n      </ListItem>\n    ))\n  }\n</View>\n")),(0,r.yg)("h3",{id:"using-map-function---implemented-with-link-and-icon"},"Using Map Function - Implemented with link and icon"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Icon } from '@rneui/themed'\n\nconst list = [\n  {\n    title: 'Appointments',\n    icon: 'av-timer'\n  },\n  {\n    title: 'Trips',\n    icon: 'flight-takeoff'\n  },\n  ... // more items\n]\n\n<View>\n  {\n    list.map((item, i) => (\n      <ListItem key={i} bottomDivider>\n        <Icon name={item.icon} />\n        <ListItem.Content>\n          <ListItem.Title>{item.title}</ListItem.Title>\n        </ListItem.Content>\n        <ListItem.Chevron />\n      </ListItem>\n    ))\n  }\n</View>\n")),(0,r.yg)("h3",{id:"using-rn-flatlist---implemented-with-link-and-avatar"},"Using RN FlatList - Implemented with link and avatar"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from '@rneui/themed'\n\nconst list = [\n  {\n    name: 'Amy Farha',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',\n    subtitle: 'Vice President'\n  },\n  {\n    name: 'Chris Jackson',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n    subtitle: 'Vice Chairman'\n  },\n  ... // more items\n]\n\nkeyExtractor = (item, index) => index.toString()\n\nrenderItem = ({ item }) => (\n  <ListItem bottomDivider>\n    <Avatar source={{uri: item.avatar_url}} />\n    <ListItem.Content>\n      <ListItem.Title>{item.name}</ListItem.Title>\n      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>\n    </ListItem.Content>\n    <ListItem.Chevron />\n  </ListItem>\n)\n\nrender () {\n  return (\n    <FlatList\n      keyExtractor={this.keyExtractor}\n      data={list}\n      renderItem={this.renderItem}\n    />\n  )\n}\n")),(0,r.yg)("h3",{id:"using-rn-flatlist---implemented-with-custom-avatar-component"},"Using RN FlatList - Implemented with custom avatar component."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from '@rneui/themed'\n\nconst list = [\n  {\n    name: 'Amy Farha',\n    subtitle: 'Vice President'\n  },\n  {\n    name: 'Chris Jackson',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n    subtitle: 'Vice Chairman'\n  },\n  ... // more items\n]\n\nkeyExtractor = (item, index) => index.toString()\n\nrenderItem = ({ item }) => (\n  <ListItem bottomDivider >\n    <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }}/>\n    <ListItem.Content>\n      <ListItem.Title>{item.name}</ListItem.Title>\n      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>\n    </ListItem.Content>\n    <ListItem.Chevron />\n  </ListItem>\n)\n\nrender () {\n  return (\n    <FlatList\n      keyExtractor={this.keyExtractor}\n      data={list}\n      renderItem={this.renderItem}\n    />\n  )\n}\n")),(0,r.yg)("h3",{id:"listitem-implemented-with-custom-view-for-subtitle"},"ListItem implemented with custom View for Subtitle"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from '@rneui/themed'\n\nrender () {\n  return (\n    <ListItem>\n      <ListItem.Content>\n        <ListItem.Title>Limited supply! Its like digital gold!</ListItem.Title>\n        <View style={styles.subtitleView}>\n          <Image source={require('../images/rating.png')} style={styles.ratingImage}/>\n          <Text style={styles.ratingText}>5 months ago</Text>\n        </View>\n      </ListItem.Content>\n    </ListItem>\n  )\n}\n\nstyles = StyleSheet.create({\n  subtitleView: {\n    flexDirection: 'row',\n    paddingLeft: 10,\n    paddingTop: 5\n  },\n  ratingImage: {\n    height: 19.21,\n    width: 100\n  },\n  ratingText: {\n    paddingLeft: 10,\n    color: 'grey'\n  }\n})\n")),(0,r.yg)("h3",{id:"badges"},"Badges"),(0,r.yg)("p",null,"Example badge usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"<ListItem>\n  <Badge\n    value={3}\n    textStyle={{ color: 'orange' }}\n    containerStyle={{ marginTop: -20 }}\n  />\n</ListItem>\n")),(0,r.yg)("h3",{id:"linear-gradient--scale-feedback"},"Linear gradient + Scale feedback"),(0,r.yg)("img",{src:"/img/listitem_with_gradient_scale.gif",width:"500"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from '@rneui/themed';\nimport TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale\nimport LinearGradient from 'react-native-linear-gradient'; // Only if no expo\n\n<ListItem\n  Component={TouchableScale}\n  friction={90} //\n  tension={100} // These props are passed to the parent component (here TouchableScale)\n  activeScale={0.95} //\n  linearGradientProps={{\n    colors: ['#FF9800', '#F44336'],\n    start: { x: 1, y: 0 },\n    end: { x: 0.2, y: 0 },\n  }}\n  ViewComponent={LinearGradient} // Only if no expo\n>\n  <Avatar rounded source={{ uri: avatar_url }} />\n  <ListItem.Content>\n    <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>\n      Chris Jackson\n    </ListItem.Title>\n    <ListItem.Subtitle style={{ color: 'white' }}>\n      Vice Chairman\n    </ListItem.Subtitle>\n  </ListItem.Content>\n  <ListItem.Chevron color=\"white\" />\n</ListItem>;\n")),(0,r.yg)("div",{className:"snack-player","data-snack-name":"RNE ListItem","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Image%2C%20FlatList%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%0AText%2C%0AListItem%2C%0AAvatar%2C%0AIcon%2C%0ABadge%2C%0AListItemProps%2C%0AButton%2C%0ASwitch%2C%0Acolors%0A%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aconst%20log%20%3D%20()%20%3D%3E%20console.log('this%20is%20an%20example%20method')%3B%0A%0Atype%20List1Data%20%3D%20%7B%0Atitle%3A%20string%3B%0Aicon%3A%20string%3B%0A%7D%3B%0Aconst%20list1%3A%20List1Data%5B%5D%20%3D%20%5B%0A%7B%0A%20%20title%3A%20'Appointments'%2C%0A%20%20icon%3A%20'av-timer'%2C%0A%7D%2C%0A%7B%0A%20%20title%3A%20'Trips'%2C%0A%20%20icon%3A%20'flight-takeoff'%2C%0A%7D%2C%0A%7B%0A%20%20title%3A%20'Passwords'%2C%0A%20%20icon%3A%20'fingerprint'%2C%0A%7D%2C%0A%7B%0A%20%20title%3A%20'Pitches'%2C%0A%20%20icon%3A%20'lightbulb-outline'%2C%0A%7D%2C%0A%7B%0A%20%20title%3A%20'Updates'%2C%0A%20%20icon%3A%20'track-changes'%2C%0A%7D%2C%0A%5D%3B%0A%0Atype%20List2Data%20%3D%20%7B%0Aname%3A%20string%3B%0Aavatar_url%3A%20string%3B%0Asubtitle%3A%20string%3B%0AlinearGradientColors%3A%20string%5B%5D%3B%0A%7D%3B%0A%0Aconst%20list2%3A%20Partial%3CList2Data%3E%5B%5D%20%3D%20%5B%0A%7B%0A%20%20name%3A%20'Amy%20Farha'%2C%0A%20%20avatar_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FXdLjsJX_.jpg'%2C%0A%20%20subtitle%3A%20'Vice%20President'%2C%0A%20%20linearGradientColors%3A%20%5B'%23FF9800'%2C%20'%23F44336'%5D%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'Chris%20Jackson'%2C%0A%20%20avatar_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FKtCFjlD4.jpg'%2C%0A%20%20subtitle%3A%20'Vice%20Chairman'%2C%0A%20%20linearGradientColors%3A%20%5B'%233F51B5'%2C%20'%232196F3'%5D%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'Amanda%20Martin'%2C%0A%20%20avatar_url%3A%0A%20%20%20%20'https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498529605908-f357a9af7bf5%3Fixlib%3Drb-0.3.5%26q%3D80%26fm%3Djpg%26crop%3Dfaces%26fit%3Dcrop%26h%3D200%26w%3D200%26s%3D047fade70e80ebb22ac8f09c04872c40'%2C%0A%20%20subtitle%3A%20'CEO'%2C%0A%20%20linearGradientColors%3A%20%5B'%23FFD600'%2C%20'%23FF9800'%5D%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'Christy%20Thomas'%2C%0A%20%20avatar_url%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F48.jpg'%2C%0A%20%20subtitle%3A%20'Lead%20Developer'%2C%0A%20%20linearGradientColors%3A%20%5B'%234CAF50'%2C%20'%238BC34A'%5D%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'Melissa%20Jones'%2C%0A%20%20avatar_url%3A%0A%20%20%20%20'https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FM%2FMV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg%40%40._V1_UY256_CR2%2C0%2C172%2C256_AL_.jpg'%2C%0A%20%20subtitle%3A%20'CTO'%2C%0A%20%20linearGradientColors%3A%20%5B'%23F44336'%2C%20'%23E91E63'%5D%2C%0A%7D%2C%0A%5D%3B%0A%0Atype%20ListComponentProps%20%3D%20ListItemProps%3B%0A%0Aconst%20Lists2%3A%20React.FunctionComponent%3CListComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bexpanded%2C%20setExpanded%5D%20%3D%20React.useState(false)%3B%0A%0Aconst%20listItemProps%20%3D%20%7B%7D%3B%0Aconst%20renderRow%20%3D%20(%7B%20item%20%7D%3A%20%7B%20item%3A%20List1Data%20%7D)%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CListItem.Swipeable%0A%20%20%20%20%20%20onPress%3D%7Blog%7D%0A%20%20%20%20%20%20bottomDivider%0A%20%20%20%20%20%20leftContent%3D%7B%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Info%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'info'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%20minHeight%3A%20'100%25'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20rightContent%3D%7B%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Delete%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'delete'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%20minHeight%3A%20'100%25'%2C%20backgroundColor%3A%20'red'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CIcon%20name%3D%7Bitem.icon%7D%20%2F%3E%0A%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%3CListItem.Title%3E%7Bitem.title%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%3CListItem.Chevron%20%2F%3E%0A%20%20%20%20%3C%2FListItem.Swipeable%3E%0A%20%20)%3B%0A%7D%3B%0Aconst%20%5Bswitch1%2C%20setSwitch1%5D%20%3D%20useState(true)%3B%0Aconst%20%5Bcheckbox1%2C%20setCheckbox1%5D%20%3D%20useState(true)%3B%0Aconst%20%5BselectedButtonIndex%2C%20setSelectedButtonIndex%5D%20%3D%20useState(0)%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20ListHeaderComponent%3D%7B%0A%20%20%20%20%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20paddingVertical%3A%208%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blist2.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20linearGradientProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20colors%3A%20l.linearGradientColors%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20start%3A%20%5B1%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20end%3A%20%5B0.2%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2016%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%208%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%208%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar%20rounded%20source%3D%7B%7B%20uri%3A%20l.avatar_url%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20color%3A%20'white'%2C%20fontWeight%3A%20'bold'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bl.name%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Subtitle%20style%3D%7B%5B%7B%20color%3A%20'white'%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bl.subtitle%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Subtitle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Chevron%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.list%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Accordion%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20content%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22place%22%20size%3D%7B30%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3EList%20Accordion%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20isExpanded%3D%7Bexpanded%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setExpanded(!expanded)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Blist2.map((l%3A%20Partial%3CList2Data%3E%2C%20i%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20key%3D%7Bi%7D%20onPress%3D%7Blog%7D%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar%20title%3D%7Bl.name%7D%20source%3D%7B%7B%20uri%3A%20l.avatar_url%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3E%7Bl.name%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Subtitle%3E%7Bl.subtitle%7D%3C%2FListItem.Subtitle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Chevron%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Accordion%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.list%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Blist2.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20key%3D%7Bi%7D%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22user-circle-o%22%20type%3D%22font-awesome%22%20color%3D%22red%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7B%7B%20color%3A%20'red'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bl.name%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Subtitle%3E%7Bl.subtitle%7D%3C%2FListItem.Subtitle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%20right%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20right%20style%3D%7B%7B%20color%3A%20'green'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2011%3A00%20am%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Subtitle%20right%3E12%3A00%20am%3C%2FListItem.Subtitle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.list%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3EName%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Input%20placeholder%3D%22Type%20your%20name%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Chevron%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3ESwitch%20that%20please%20%F0%9F%98%B2%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSwitch%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bswitch1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7B(value)%20%3D%3E%20setSwitch1(value)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3EChoose%20%F0%9F%A4%AF%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.ButtonGroup%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttons%3D%7B%5B'Flower'%2C%20'Coco'%5D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedIndex%3D%7BselectedButtonIndex%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B(index)%20%3D%3E%20setSelectedButtonIndex(index)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.CheckBox%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20checked%3D%7Bcheckbox1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheckbox1(!checkbox1)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3ECheck%20that%20please%20%F0%9F%98%A2%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CBadge%20value%3D%2212%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3EWith%20a%20Badge%20!%20%F0%9F%98%BB%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22check%22%20size%3D%7B20%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3EThis%20thing%20is%20checked%20%F0%9F%98%8E%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.list%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar%20source%3D%7B'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F57.jpg'%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Limited%20supply!%20Its%20like%20digital%20gold!%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.subtitleView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%22https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2019%2F11%2F03%2F20%2F11%2Fportrait-4599553__340.jpg%22%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.ratingImage%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.ratingText%7D%3E5%20months%20ago%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20data%3D%7Blist1%7D%0A%20%20%20%20%20%20keyExtractor%3D%7B(a%3A%20List1Data%2C%20index%3A%20number)%20%3D%3E%20index.toString()%7D%0A%20%20%20%20%20%20renderItem%3D%7BrenderRow%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Acontainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0Alist%3A%20%7B%0A%20%20marginTop%3A%2020%2C%0A%20%20borderTopWidth%3A%201%2C%0A%20%20borderColor%3A%20colors.greyOutline%2C%0A%7D%2C%0AsubtitleView%3A%20%7B%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20paddingLeft%3A%2010%2C%0A%20%20paddingTop%3A%205%2C%0A%7D%2C%0AratingImage%3A%20%7B%0A%20%20height%3A%2019.21%2C%0A%20%20width%3A%20100%2C%0A%7D%2C%0AratingText%3A%20%7B%0A%20%20paddingLeft%3A%2010%2C%0A%20%20color%3A%20'grey'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Lists2%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0;var u=["components"],c={id:"listitem",title:"ListItem"},d=void 0,A={unversionedId:"components/listitem",id:"version-4.0.0-rc.2/components/listitem",title:"ListItem",description:"ListItems are used to display rows of information, such as a contact list, playlist, or menu.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/ListItem.mdx",sourceDirName:"components",slug:"/components/listitem",permalink:"/docs/4.0.0-rc.2/components/listitem",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/ListItem.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"listitem",title:"ListItem"},sidebar:"docs",previous:{title:"LinearProgress",permalink:"/docs/4.0.0-rc.2/components/linearprogress"},next:{title:"ListItem.Accordion",permalink:"/docs/4.0.0-rc.2/components/listitem_accordion"}},p={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],C={toc:g},y="wrapper";function D(t){var e=t.components,n=(0,i.A)(t,u);return(0,r.yg)(y,(0,a.A)({},C,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"ListItems are used to display rows of information, such as a contact list, playlist, or menu.\nThey are very customizable and can contain switches, avatars, badges, icons, and more."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{mdxType:"Usage"}),(0,r.yg)("h2",{id:"props"},"Props"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Includes all ",(0,r.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,r.yg)("div",{class:"table-responsive"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Component")),(0,r.yg)("td",{parentName:"tr",align:null},"React Component"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Replace element with custom element.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ViewComponent")),(0,r.yg)("td",{parentName:"tr",align:null},"React Component"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Container for linear gradient.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bottomDivider")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Add divider at the bottom of the list item.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"children")),(0,r.yg)("td",{parentName:"tr",align:null},"any"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Add enclosed children.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Additional main container styling.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disabledStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specific styling to be used when list item is disabled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"linearGradientProps")),(0,r.yg)("td",{parentName:"tr",align:null},"any"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Props for linear gradient component.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pad")),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Adds spacing between the leftComponent, the title component & right component.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"topDivider")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Add divider at the top of the list item."))))))}D.isMDXComponent=!0}}]);