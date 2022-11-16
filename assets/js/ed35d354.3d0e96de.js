"use strict";(self.webpackChunkdynamiccookingdocu=self.webpackChunkdynamiccookingdocu||[]).push([[124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,g=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={},i="Adding Sound Effects",c={unversionedId:"tutorial-advanced/AddingSoundEffects",id:"tutorial-advanced/AddingSoundEffects",title:"Adding Sound Effects",description:"Adding Sound Effects can be done relatively easy and there are two main ways of doing it.",source:"@site/docs/tutorial-advanced/AddingSoundEffects.md",sourceDirName:"tutorial-advanced",slug:"/tutorial-advanced/AddingSoundEffects",permalink:"/DynamicCookingDocu/docs/tutorial-advanced/AddingSoundEffects",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Duplicating Cooking Fields",permalink:"/DynamicCookingDocu/docs/tutorial-advanced/DuplicatingCookingFields"},next:{title:"Tutorial - Extras",permalink:"/DynamicCookingDocu/docs/category/tutorial---extras"}},l={},d=[],s={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-sound-effects"},"Adding Sound Effects"),(0,r.kt)("p",null,"Adding Sound Effects can be done relatively easy and there are two main ways of doing it."),(0,r.kt)("h1",{id:"gameobject-toggle"},"GameObject Toggle"),(0,r.kt)("p",null,"Some Cooking Fields have toggles under them. For example the StoveTop and Oven both have GameObject Toggles under them. If you put a new GameObject with a sound as a child of the Toggling Object it will play the sound! ",(0,r.kt)("em",{parentName:"p"},"As long as you have Play On Awake Enabled")),(0,r.kt)("h1",{id:"getting-variables"},"Getting Variables"),(0,r.kt)("p",null,"The Cooking Fields all have scripts with public variables. It should be possible to get those variables and play sounds or do things when those variables are set to true/false.\nAll you'd need to do is create a graph udon behavior and do the following:\n",(0,r.kt)("img",{alt:"Advanced Variable",src:n(4361).Z,width:"1283",height:"541"})),(0,r.kt)("p",null,"Now the variable currentlycooking can be easily manipulated to do anything you want! You can play an oven cooking sound when currentlycooking is set to true, or a beep sound when a separate variable donecooking is set to true!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Current Cooking Field Variable Names:\n\nCurrentlycooking\nDone Cooking\n")))}u.isMDXComponent=!0},4361:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/advancedvariable-1f520ff5eea487c79249acf64070323a.png"}}]);