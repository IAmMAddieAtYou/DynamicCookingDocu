"use strict";(self.webpackChunkdynamiccookingdocu=self.webpackChunkdynamiccookingdocu||[]).push([[124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,g=p["".concat(d,".").concat(f)]||p[f]||u[f]||r;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={},i="Adding Sound Effects",c={unversionedId:"tutorial-advanced/AddingSoundEffects",id:"tutorial-advanced/AddingSoundEffects",title:"Adding Sound Effects",description:"Adding Sound Effects can be done relatively easy and there are two main ways of doing it.",source:"@site/docs/tutorial-advanced/AddingSoundEffects.md",sourceDirName:"tutorial-advanced",slug:"/tutorial-advanced/AddingSoundEffects",permalink:"/DynamicCookingDocu/docs/tutorial-advanced/AddingSoundEffects",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-advanced/AddingSoundEffects.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Duplicating Cooking Fields",permalink:"/DynamicCookingDocu/docs/tutorial-advanced/DuplicatingCookingFields"},next:{title:"Tutorial - Extras",permalink:"/DynamicCookingDocu/docs/category/tutorial---extras"}},d={},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adding-sound-effects"},"Adding Sound Effects"),(0,a.kt)("p",null,"Adding Sound Effects can be done relatively easy and there are two main ways of doing it."),(0,a.kt)("h1",{id:"gameobject-toggle"},"GameObject Toggle"),(0,a.kt)("p",null,"Some Cooking Fields have toggles under them. For example the StoveTop and Oven both have GameObject Toggles under them. If you put a new GameObject with a sound as a child of the Toggling Object it will play the sound! ",(0,a.kt)("em",{parentName:"p"},"As long as you have Play On Awake Enabled")),(0,a.kt)("h1",{id:"getting-variables"},"Getting Variables"),(0,a.kt)("p",null,"The Cooking Fields all have scripts with public variables. It should be possible to get those variables and play sounds or do things when those variables are set to true/false.\nAll you'd need to do is create a graph udon behavior and do the following:\n",(0,a.kt)("img",{alt:"Advanced Variable",src:n(4361).Z,width:"1283",height:"541"})),(0,a.kt)("p",null,"Now the variable currentlycooking can be easily manipulated to do anything you want! You can play an oven cooking sound when currentlycooking is set to true, or a beep sound when a separate variable donecooking is set to true!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Current Cooking Field Variable Names:\n\nCurrentlycooking\nDone Cooking\n")))}u.isMDXComponent=!0},4361:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/advancedvariable-1f520ff5eea487c79249acf64070323a.png"}}]);