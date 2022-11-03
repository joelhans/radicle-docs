"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[8],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7894:(e,t,r)=>{r.d(t,{z:()=>l,Z:()=>c});var n=r(7294);const a="grid_iD3H",o="button_YHhe",i="cta_VXSW";function c(e){let{children:t}=e;return n.createElement("div",{className:a},t)}function l(e){let{children:t,style:r={},href:a,title:c,cta:l}=e;return n.createElement("a",{href:a,className:o,style:r},n.createElement("h3",null,c),n.createElement("p",null,t),l&&n.createElement("p",{className:i},l," \u2192"))}},753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(7894);const i={id:"collaboration",title:"Radicle's collaboration workflow"},c=void 0,l={unversionedId:"using-radicle/collaboration",id:"using-radicle/collaboration",title:"Radicle's collaboration workflow",description:"This is a practical overview of the current collaboration workflow using Radicle-built projects. This will change as",source:"@site/docs/using-radicle/collaboration.md",sourceDirName:"using-radicle",slug:"/using-radicle/collaboration",permalink:"/using-radicle/collaboration",draft:!1,editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/using-radicle/collaboration.md",tags:[],version:"current",frontMatter:{id:"collaboration",title:"Radicle's collaboration workflow"},sidebar:"docsSidebar",previous:{title:"Manage your Radicle identity",permalink:"/using-radicle/identity"},next:{title:"Create, view, and comment on issues",permalink:"/using-radicle/issues"}},s={},d=[],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is a practical overview of the current collaboration workflow using Radicle-built projects. This will change as\nboth the protocols and projects change and add new functionality in the future.")),(0,a.kt)("p",null,"Maintainers (known in Radicle as ",(0,a.kt)("em",{parentName:"p"},"delegates"),") use ",(0,a.kt)("a",{parentName:"p",href:"/using-radicle/create"},"create")," a project and associate it with one\nor more seed nodes on the Radicle network. As they make changes, they ",(0,a.kt)("a",{parentName:"p",href:"/using-radicle/push"},"synchronize")," project data\nbetween their local state and a remote associated with the project on the Radicle network. This makes the project\n",(0,a.kt)("a",{parentName:"p",href:"/using-radicle/view-share"},"viewable")," on the Radicle web app."),(0,a.kt)("p",null,"Contributors ",(0,a.kt)("a",{parentName:"p",href:"/using-radicle/clone"},"clone")," the maintainer's remote and development branch (typically ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"master"),") from the Radicle network, initializing a new remote in the process. "),(0,a.kt)("p",null,"With the project data stored on their local system, they can make changes, commit them with Git, and push them to\n",(0,a.kt)("em",{parentName:"p"},"their")," remote. Remotes are Radicle's version of forks, with the contributor's now diverged from the latest commit on\nthe delegate's branch."),(0,a.kt)("p",null,"Maintainers can use the CLI to find, track, and ",(0,a.kt)("a",{parentName:"p",href:"/using-radicle/track-review-merge"},"review/merge")," collaborations to\ntheir project. Once the changes have been merged, the maintainer pushes them to their remote, thus re-establishing the most up to date state of the project."),(0,a.kt)("p",null,"Contributors can now synchronize the state of their remote with the maintainer's and begin to the code collaboration\ncycle once more."),(0,a.kt)(o.Z,{mdxType:"Grid"},(0,a.kt)("div",null,(0,a.kt)("a",{href:"/using-radicle/issues"},"Create or view issues")),(0,a.kt)("div",null,(0,a.kt)("a",{href:"/using-radicle/track-review-merge"},"Collaborate with patches"))))}u.isMDXComponent=!0}}]);