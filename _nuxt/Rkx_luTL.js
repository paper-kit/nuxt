import{_ as x}from"./DGIJ1Sdk.js";import{a as y,c as s,o as k,D as F,f as M,k as P,i as o,h as d,t as f,l as T}from"./v4lB7h4w.js";const V={class:"relative w-full max-w-xl border-2 border-primary-light-500 rounded-lg shadow-lg overflow-hidden"},C=["src","poster"],I={class:"absolute -bottom-1 -left-1 w-[calc(100%+.5rem)] bg-white border-2 border-primary-light-500 rounded-b-lg text-primary-light-500 p-2 flex items-center gap-3"},N=["max","value"],B={class:"text-sm font-bold font-patrick"},E=["value"],S=y({__name:"PUVideo",props:{src:{},poster:{}},setup(U){const e=s(null),u=s(!1),r=s(0),c=s(0),i=s(1),n=s(!1),v=s(!1),_=()=>{e.value&&(e.value.paused?(e.value.play(),u.value=!0):(e.value.pause(),u.value=!1))},m=()=>{e.value&&(r.value=e.value.currentTime,c.value=e.value.duration)},p=t=>{const a=Math.floor(t/60),l=Math.floor(t%60).toString().padStart(2,"0");return`${a}:${l}`},g=t=>{if(!e.value)return;const a=t.target;e.value.currentTime=Number.parseFloat(a.value)},h=t=>{if(!e.value)return;const a=t.target;i.value=Number.parseFloat(a.value),e.value.volume=i.value},b=()=>{e.value&&(n.value=!n.value,e.value.muted=n.value)},w=()=>{var t,a,l;e.value&&(v.value?(l=document.exitFullscreen)==null||l.call(document):(a=(t=e.value).requestFullscreen)==null||a.call(t),v.value=!v.value)};return k(()=>{e.value&&(e.value.addEventListener("timeupdate",m),e.value.addEventListener("loadedmetadata",m))}),F(n,t=>{e.value&&(e.value.muted=t)}),(t,a)=>{const l=x;return P(),M("div",V,[o("video",{ref_key:"videoRef",ref:e,src:t.src,poster:t.poster,class:"w-full aspect-video bg-white"},null,8,C),o("div",I,[o("button",{onClick:_},[d(l,{name:u.value?"pause":"play",class:"w-6 h-6"},null,8,["name"])]),o("input",{type:"range",class:"flex-1 accent-primary-light-500",min:"0",max:c.value,value:r.value,onInput:g},null,40,N),o("span",B,f(p(r.value))+" / "+f(p(c.value)),1),o("button",{onClick:b},[d(l,{name:n.value?"volume-mute":"volume",class:"w-5 h-5"},null,8,["name"])]),o("input",{type:"range",class:"w-16 accent-primary-light-500",min:"0",max:"1",step:"0.1",value:i.value,onInput:h},null,40,E),o("button",{onClick:w},[d(l,{name:"focus",class:"w-5 h-5"})])])])}}}),L=Object.assign(T(S,[["__scopeId","data-v-683da076"]]),{__name:"PUVideo"});export{L as _};
