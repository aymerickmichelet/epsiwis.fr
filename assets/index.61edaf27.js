import{r as o,c as e,o as r,a as n,b as t,M as l,d as c}from"./vendor.21ff4273.js";!function(){const o=document.createElement("link").relList;if(!(o&&o.supports&&o.supports("modulepreload"))){for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver((o=>{for(const r of o)if("childList"===r.type)for(const o of r.addedNodes)"LINK"===o.tagName&&"modulepreload"===o.rel&&e(o)})).observe(document,{childList:!0,subtree:!0})}function e(o){if(o.ep)return;o.ep=!0;const e=function(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),"use-credentials"===o.crossorigin?e.credentials="include":"anonymous"===o.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(o);fetch(o.href,e)}}();const a={name:"App"};a.render=function(n,t,l,c,a,i){const d=o("router-view");return r(),e(d)};const i={},d=function(o,e){return e&&0!==e.length?Promise.all(e.map((o=>{if((o=`/admin-panel/${o}`)in i)return;i[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const n=document.createElement("link");return n.rel=e?"stylesheet":"modulepreload",e||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),e?new Promise(((o,e)=>{n.addEventListener("load",o),n.addEventListener("error",e)})):void 0}))).then((()=>o())):o()},s=[{path:"/",component:()=>d((()=>import("./DefaultLayout.5e62a636.js")),["assets/DefaultLayout.5e62a636.js","assets/DefaultLayout.74bd8134.css","assets/vendor.21ff4273.js","assets/TwIcon.cbfadf96.js","assets/index.esm.6daaa9d6.js","assets/TwDropdown.295c6ec7.js"]),children:[{path:"home",alias:"",name:"home",component:()=>d((()=>import("./Home.094af53b.js")),["assets/Home.094af53b.js","assets/TwIcon.cbfadf96.js","assets/vendor.21ff4273.js"])},{path:"dev/getting-started",name:"dev-getting-started",component:()=>d((()=>import("./GettingStarted.81a60de7.js")),["assets/GettingStarted.81a60de7.js","assets/vendor.21ff4273.js"])},{path:"dev/components/icon",name:"dev-components-icon",component:()=>d((()=>import("./IconExample.080fc708.js")),["assets/IconExample.080fc708.js","assets/TwCodePreviewEditor.105e413e.js","assets/TwCodePreviewEditor.eb141f4f.css","assets/TwIcon.cbfadf96.js","assets/vendor.21ff4273.js","assets/index.esm.6daaa9d6.js"])},{path:"dev/components/button",name:"dev-components-button",component:()=>d((()=>import("./ButtonExample.20ef47b4.js")),["assets/ButtonExample.20ef47b4.js","assets/TwCodePreviewEditor.105e413e.js","assets/TwCodePreviewEditor.eb141f4f.css","assets/TwIcon.cbfadf96.js","assets/vendor.21ff4273.js","assets/index.esm.6daaa9d6.js","assets/TwButton.96e5f08d.js","assets/TwButton.4ca5ce46.css"])},{path:"dev/components/dropdown",name:"dev-components-dropdown",component:()=>d((()=>import("./DropdownExample.6288c3d2.js")),["assets/DropdownExample.6288c3d2.js","assets/TwCodePreviewEditor.105e413e.js","assets/TwCodePreviewEditor.eb141f4f.css","assets/TwIcon.cbfadf96.js","assets/vendor.21ff4273.js","assets/index.esm.6daaa9d6.js","assets/TwDropdown.295c6ec7.js"])},{path:"dev/components/tooltip",name:"dev-components-tooltip",component:()=>d((()=>import("./TooltipExample.643775ee.js")),["assets/TooltipExample.643775ee.js","assets/TooltipExample.e27edb57.css","assets/TwCodePreviewEditor.105e413e.js","assets/TwCodePreviewEditor.eb141f4f.css","assets/TwIcon.cbfadf96.js","assets/vendor.21ff4273.js","assets/index.esm.6daaa9d6.js","assets/TwButton.96e5f08d.js","assets/TwButton.4ca5ce46.css"])},{path:"dev/components/form",name:"dev-components-forms",component:()=>d((()=>import("./Index.c3a421bd.js")),["assets/Index.c3a421bd.js","assets/vendor.21ff4273.js"])},{path:"dev/components/table",name:"dev-components-tables",component:()=>d((()=>import("./Index.5e07d993.js")),["assets/Index.5e07d993.js","assets/vendor.21ff4273.js"])}]}],h=n({history:t(),routes:s});const p=l.default||l;JSON.parse('[{"prefix":"heroicons-outline","width":24,"height":24,"icons":{"calculator":{"body":"<g fill=\\"none\\"><path d=\\"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"chart-pie":{"body":"<g fill=\\"none\\"><path d=\\"M11 3.055A9.001 9.001 0 1 0 20.945 13H11V3.055z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><path d=\\"M20.488 9H15V3.512A9.025 9.025 0 0 1 20.488 9z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"check-circle":{"body":"<g fill=\\"none\\"><path d=\\"M9 12l2 2l4-4m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"code":{"body":"<g fill=\\"none\\"><path d=\\"M10 20l4-16m4 4l4 4l-4 4M6 16l-4-4l4-4\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"cog":{"body":"<g fill=\\"none\\"><path d=\\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c.996.608 2.296.07 2.572-1.065z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><path d=\\"M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"credit-card":{"body":"<g fill=\\"none\\"><path d=\\"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"cube":{"body":"<g fill=\\"none\\"><path d=\\"M20 7l-8-4l-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"duplicate":{"body":"<g fill=\\"none\\"><path d=\\"M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"external-link":{"body":"<g fill=\\"none\\"><path d=\\"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"home":{"body":"<g fill=\\"none\\"><path d=\\"M3 12l2-2m0 0l7-7l7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"library":{"body":"<g fill=\\"none\\"><path d=\\"M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4l9 4M4 10h16v11H4V10z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"light-bulb":{"body":"<g fill=\\"none\\"><path d=\\"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"lightning-bolt":{"body":"<g fill=\\"none\\"><path d=\\"M13 10V3L4 14h7v7l9-11h-7z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"user-group":{"body":"<g fill=\\"none\\"><path d=\\"M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0a2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0a2 2 0 0 1 4 0z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"users":{"body":"<g fill=\\"none\\"><path d=\\"M12 4.354a4 4 0 1 1 0 5.292M15 21H3v-1a6 6 0 0 1 12 0v1zm0 0h6v-1a6 6 0 0 0-9-5.197M13 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"view-grid":{"body":"<g fill=\\"none\\"><path d=\\"M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><path d=\\"M14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><path d=\\"M4 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><path d=\\"M14 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2z\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"}}},{"prefix":"heroicons-solid","width":20,"height":20,"icons":{"bell":{"body":"<g fill=\\"none\\"><path d=\\"M10 2a6 6 0 0 0-6 6v3.586l-.707.707A1 1 0 0 0 4 14h12a1 1 0 0 0 .707-1.707L16 11.586V8a6 6 0 0 0-6-6z\\" fill=\\"currentColor\\"/><path d=\\"M10 18a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z\\" fill=\\"currentColor\\"/></g>"},"chart-pie":{"body":"<g fill=\\"none\\"><path d=\\"M2 10a8 8 0 0 1 8-8v8h8a8 8 0 1 1-16 0z\\" fill=\\"currentColor\\"/><path d=\\"M12 2.252A8.014 8.014 0 0 1 17.748 8H12V2.252z\\" fill=\\"currentColor\\"/></g>"},"chevron-down":{"body":"<g fill=\\"none\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z\\" fill=\\"currentColor\\"/></g>"},"menu-alt-4":{"body":"<g fill=\\"none\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M3 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z\\" fill=\\"currentColor\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M3 13a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z\\" fill=\\"currentColor\\"/></g>"},"x":{"body":"<g fill=\\"none\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10L4.293 5.707a1 1 0 0 1 0-1.414z\\" fill=\\"currentColor\\"/></g>"}}},{"prefix":"mdi","width":24,"height":24,"icons":{"baguette":{"body":"<path d=\\"M5 22c-1.32 0-1.85-2.36-1.96-3.3a5.56 5.56 0 0 1 .32-2.7a2.5 2.5 0 0 1 1.87-1.62c1.17-.2 2 .5 3.06.74a1.21 1.21 0 0 0 1.56-1.37C9.41 12.03 6.28 12 5 12c0-1.86 2.04-2.1 3.5-1.96a10.8 10.8 0 0 1 2.54.56c.5.17 1.08.6 1.63.56c.83-.07 1-.93.64-1.56C12.44 8.12 9.97 8 8.5 8c0-2 1.73-2.38 3.39-2.08a11.58 11.58 0 0 1 2.49.79c.51.22 1.12.64 1.68.45c1.44-.44-.06-1.98-.7-2.35a6.6 6.6 0 0 0-1.42-.58c-.54-.16-1.2-.1-.71-.73a5.13 5.13 0 0 1 2.73-1.24c1.89-.44 4.5-.52 4.96 1.86a5.3 5.3 0 0 1-.85 3.58a38.96 38.96 0 0 1-6.85 8.63a36.6 36.6 0 0 1-4.6 3.99C7.62 21.04 6.3 22 5 22z\\" fill=\\"currentColor\\"/>"},"fruit-watermelon":{"body":"<path d=\\"M16.4 16.4c3.4-3.4 3.4-8.9 0-12.2L4.2 16.4c3.3 3.4 8.8 3.4 12.2 0M16 7c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-4 0c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-4 2c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m10.6 1.6c-4.6 4.6-12 4.6-16.6 0l1.4-1.4c3.8 3.8 9.9 3.8 13.7 0c3.8-3.8 3.8-9.9 0-13.7L18.6 2c4.5 4.6 4.5 12 0 16.6z\\" fill=\\"currentColor\\"/>"},"glass-wine":{"body":"<path d=\\"M15.5 21.27l-.84-.09c-.76-.07-1.41-.58-1.66-1.31a11.52 11.52 0 0 1 0-6c2.32-.47 4-2.5 4-4.87c0-2-2-7-2-7H9S7 7 7 9a5 5 0 0 0 4 4.9c.53 1.96.53 4.04 0 6c-.24.72-.88 1.23-1.63 1.31l-.87.09s-.5-.02-.5.7h8c0-.72-.5-.73-.5-.73M9.44 7l1-3h3.12l1 3H9.44z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"fa-solid","width":512,"height":512,"icons":{"balance-scale":{"body":"<path d=\\"M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51c-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51c-17.65-35.29-68.19-35.36-85.87 0c-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144l72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z\\" fill=\\"currentColor\\"/>","width":640},"basketball-ball":{"body":"<path d=\\"M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1c-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2c50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7c-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1c1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2c-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z\\" fill=\\"currentColor\\"/>","width":496},"cloud-sun":{"body":"<path d=\\"M575.2 325.7c.2-1.9.8-3.7.8-5.6c0-35.3-28.7-64-64-64c-12.6 0-24.2 3.8-34.1 10c-17.6-38.8-56.5-66-101.9-66c-61.8 0-112 50.1-112 112c0 3 .7 5.8.9 8.7c-49.6 3.7-88.9 44.7-88.9 95.3c0 53 43 96 96 96h272c53 0 96-43 96-96c0-42.1-27.2-77.4-64.8-90.4zm-430.4-22.6c-43.7-43.7-43.7-114.7 0-158.3c43.7-43.7 114.7-43.7 158.4 0c9.7 9.7 16.9 20.9 22.3 32.7c9.8-3.7 20.1-6 30.7-7.5L386 81.1c4-11.9-7.3-23.1-19.2-19.2L279 91.2L237.5 8.4C232-2.8 216-2.8 210.4 8.4L169 91.2L81.1 61.9C69.3 58 58 69.3 61.9 81.1l29.3 87.8l-82.8 41.5c-11.2 5.6-11.2 21.5 0 27.1l82.8 41.4l-29.3 87.8c-4 11.9 7.3 23.1 19.2 19.2l76.1-25.3c6.1-12.4 14-23.7 23.6-33.5c-13.1-5.4-25.4-13.4-36-24zm-4.8-79.2c0 40.8 29.3 74.8 67.9 82.3c8-4.7 16.3-8.8 25.2-11.7c5.4-44.3 31-82.5 67.4-105C287.3 160.4 258 140 224 140c-46.3 0-84 37.6-84 83.9z\\" fill=\\"currentColor\\"/>","width":640}}}]').forEach((o=>p.addCollection(o)));const u=c(a);u.use(h),u.mount("#app");export{p as I};
