import{a as u,c as p,f as c,k as i,am as m,an as _,i as v,ao as f,l as h}from"./CWI_tegl.js";const V={class:"pu-textarea font-patrick"},x=["id","disabled","placeholder"],B=u({__name:"PUTextArea",props:{disabled:{type:Boolean},placeholder:{},id:{},modelValue:{}},emits:["update:modelValue"],setup(b,{emit:o}){const a=p(null),l=o,d=e=>{const t=e.target;l("update:modelValue",t.value)},s=e=>{e.key==="Enter"&&l("update:modelValue",a.value),e.preventDefault()},n=()=>{l("update:modelValue",a.value)};return(e,t)=>(i(),c("div",V,[m(v("textarea",{id:e.id,"onUpdate:modelValue":t[0]||(t[0]=r=>a.value=r),disabled:e.disabled,placeholder:e.placeholder,type:"text",class:"pu-textarea--default","on:update:modelValue":d,onBlur:n,onKeydown:f(s,["enter"])},null,40,x),[[_,a.value]])]))}}),y=Object.assign(h(B,[["__scopeId","data-v-0cd9dc72"]]),{__name:"PUTextArea"});export{y as _};
