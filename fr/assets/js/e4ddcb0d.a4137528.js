"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[5562],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(c,".").concat(h)]||u[h]||f[h]||o;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8267:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"GraphQL Atom Effects",sidebar_label:"GraphQL Atom Effects"},c=void 0,p={unversionedId:"recoil-relay/graphql-effects",id:"recoil-relay/graphql-effects",title:"GraphQL Atom Effects",description:"The underlying GraphQL synchronization support is provided via atom effects.  While GraphQL selectors are provided as a convenience to make them easier to use, you could also apply these effects directly to atoms.  To use these, you'll need to either reference or register your Relay environment.",source:"@site/docs/recoil-relay/graphql-effects.md",sourceDirName:"recoil-relay",slug:"/recoil-relay/graphql-effects",permalink:"/fr/docs/recoil-relay/graphql-effects",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/recoil-relay/graphql-effects.md",tags:[],version:"current",frontMatter:{title:"GraphQL Atom Effects",sidebar_label:"GraphQL Atom Effects"},sidebar:"recoil-relay",previous:{title:"Preloaded Queries",permalink:"/fr/docs/recoil-relay/preloaded-queries"},next:{title:"EnvironmentKey",permalink:"/fr/docs/recoil-relay/api/EnvironmentKey"}},s=[{value:"graphQLQueryEffect()",id:"graphqlqueryeffect",children:[],level:3},{value:"graphQLSubscriptionEffect()",id:"graphqlsubscriptioneffect",children:[],level:3},{value:"graphQLMutationEffect()",id:"graphqlmutationeffect",children:[],level:3}],f={toc:s};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The underlying GraphQL synchronization support is provided via ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/atom-effects"},"atom effects"),".  While ",(0,o.kt)("a",{parentName:"p",href:"/docs/recoil-relay/graphql-selectors"},"GraphQL selectors")," are provided as a convenience to make them easier to use, you could also apply these effects directly to atoms.  To use these, you'll need to either reference or ",(0,o.kt)("a",{parentName:"p",href:"/docs/recoil-relay/environment"},"register your Relay environment"),"."),(0,o.kt)("p",null,"There are three atom effects that correspond with the three types of ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#operation-name"},"GraphQL operations"),":"),(0,o.kt)("h3",{id:"graphqlqueryeffect"},(0,o.kt)("a",{parentName:"h3",href:"/docs/recoil-relay/api/graphQLQueryEffect"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"graphQLQueryEffect()")))),(0,o.kt)("p",null,"This effect initializes an atom with the results of a ",(0,o.kt)("strong",{parentName:"p"},"GraphQL query"),". Data may potentially load incrementally with ",(0,o.kt)("inlineCode",{parentName:"p"},"@defer")," or live queries. This effect will also automatically update the atom if you issue a local Relay ",(0,o.kt)("a",{parentName:"p",href:"https://relay.dev/docs/api-reference/commit-mutation"},(0,o.kt)("inlineCode",{parentName:"a"},"commitMutation()"))," call for the same part of the graph.  GraphQL ",(0,o.kt)("a",{parentName:"p",href:"/docs/recoil-relay/graphql-selectors#graphql-fragments"},"fragments")," are also supported."),(0,o.kt)("h3",{id:"graphqlsubscriptioneffect"},(0,o.kt)("a",{parentName:"h3",href:"/docs/recoil-relay/api/graphQLSubscriptionEffect"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"graphQLSubscriptionEffect()")))),(0,o.kt)("p",null,"If you also want to subscribe to mutations initiated remotely from the server, in addition to local changes, then you can implement a ",(0,o.kt)("strong",{parentName:"p"},"GraphQL subscription")," on the server and use this instead of a query."),(0,o.kt)("h3",{id:"graphqlmutationeffect"},(0,o.kt)("a",{parentName:"h3",href:"/docs/recoil-relay/api/graphQLMutationEffect"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"graphQLMutationEffect()")))),(0,o.kt)("p",null,"This effect allows an atom to act as a write-through cache. Any local mutations to the atom will be committed as a ",(0,o.kt)("strong",{parentName:"p"},"GraphQL mutation")," operation."))}u.isMDXComponent=!0}}]);