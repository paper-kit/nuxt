import{_ as se}from"./BLcTf1Dq.js";import{u as re,a2 as ie,aj as T,l as C,f as _,k as m,i as n,Y as $,a as P,c as x,ak as W,al as de,am as ue,M as A,g as w,t as U,D as ce,o as pe,an as z,ao as me,F as O,O as j,ah as K,n as v,h as l,R as B,w as a,N as k,ap as fe,T as q,aq as be,A as S}from"./CCS5wuaI.js";import{_ as _e}from"./lGw_J9UU.js";import{_ as ve}from"./9dXXMrnv.js";import{_ as he}from"./ByCPJ7R-.js";import{_ as ge}from"./BJkYNttm.js";import{_ as R}from"./CVJmA6jv.js";import{_ as ye}from"./C__UhuJs.js";import{_ as ke}from"./Bl7DzOre.js";import{_ as Ue}from"./COR7G3KZ.js";const Ve="$s";function we(...d){const u=typeof d[d.length-1]=="string"?d.pop():void 0;typeof d[0]!="string"&&d.unshift(u);const[e,r]=d;if(!e||typeof e!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+e);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const c=Ve+e,p=re(),b=ie(p.payload.state,c);if(b.value===void 0&&r){const o=r();if(T(o))return p.payload.state[c]=o,o;b.value=o}return b}const xe={},Pe={class:"border-2 border-primary-light-500 rounded-lg w-72 h-48 hover:scale-110 transition-all duration-300"},Te={class:"component-example p-4 flex justify-center items-center h-36"},$e={class:"component-name text-lg font-bold flex h-12 justify-center items-center w-full border-t-2 border-primary-light-500"};function Ce(d,u){return m(),_("div",Pe,[n("div",Te,[$(d.$slots,"component")]),n("div",$e,[$(d.$slots,"component-name")])])}const Se=Object.assign(C(xe,[["render",Ce]]),{__name:"ShowComponent"}),Be={class:"pu-textarea font-patrick"},Ie=["id","disabled","placeholder"],Ae=P({__name:"PUTextArea",props:{disabled:{type:Boolean},placeholder:{},id:{},modelValue:{}},emits:["update:modelValue"],setup(d,{emit:u}){const e=x(null),r=u,c=o=>{const f=o.target;r("update:modelValue",f.value)},p=o=>{o.key==="Enter"&&r("update:modelValue",e.value),o.preventDefault()},b=()=>{r("update:modelValue",e.value)};return(o,f)=>(m(),_("div",Be,[W(n("textarea",{id:o.id,"onUpdate:modelValue":f[0]||(f[0]=s=>e.value=s),disabled:o.disabled,placeholder:o.placeholder,type:"text",class:"pu-textarea--default","on:update:modelValue":c,onBlur:b,onKeydown:ue(p,["enter"])},null,40,Ie),[[de,e.value]])]))}}),Oe=Object.assign(C(Ae,[["__scopeId","data-v-c5e5ea8b"]]),{__name:"PUTextArea"}),je={class:"pu-tag font-patrick"},Me={class:"pu-tag--default"},Re=P({__name:"PUTag",props:{label:{},icon:{}},setup(d){return(u,e)=>{const r=R;return m(),_("div",je,[n("div",Me,[n("span",null,U(u.label),1),u.icon?(m(),A(r,{key:0,name:u.icon,class:"cursor-pointer"},null,8,["name"])):w("",!0)])])}}}),De=Object.assign(C(Re,[["__scopeId","data-v-79457cde"]]),{__name:"PUTag"}),Ee={class:"tabs relative font-patrick"},Ne={class:"tabs-nav relative"},ze=["onClick"],Fe={class:"default-tab"},Le={class:"tabs-content-container relative overflow-hidden"},Ke=P({__name:"PUTabs",props:{tabs:{}},setup(d){const u=x([]),e=x(0),r=x(0),c=x(0),p=f=>c.value===f,b=f=>{c.value=f},o=()=>{const f=u.value[c.value];if(f){const{offsetLeft:s,offsetWidth:i}=f;e.value=s,r.value=i}};return ce(c,()=>z(o)),pe(()=>z(o)),me(()=>z(o)),(f,s)=>{const i=R;return m(),_("div",Ee,[n("div",Ne,[(m(!0),_(O,null,j(f.tabs,(g,V)=>(m(),_("div",{key:V,ref_for:!0,ref_key:"tabRefs",ref:u,class:v(["tab-item",{"active-tab":p(V)}]),onClick:t=>b(V)},[$(f.$slots,"tab",{tab:g,isActive:p(V)},()=>[n("div",Fe,[l(i,{name:g.icon||""},null,8,["name"]),n("span",null,U(g.label),1)])],!0)],10,ze))),128)),n("div",{class:"absolute bottom-0 h-[2px] bg-primary-light-500 transition-all duration-300",style:K({left:`${e.value}px`,width:`${r.value}px`})},null,4)]),n("div",Le,[n("div",{class:"tabs-content",style:K({transform:`translateX(-${c.value*100}%)`})},[(m(!0),_(O,null,j(f.tabs,(g,V)=>(m(),_("div",{key:V,class:"tab-panel"},[$(f.$slots,"content",{tab:g},()=>[n("p",null,U(g.content),1)],!0)]))),128))],4)])])}}}),We=Object.assign(C(Ke,[["__scopeId","data-v-4611b78b"]]),{__name:"PUTabs"}),qe={class:"inline-flex font-patrick"},He=P({__name:"PUCheckbox",props:{modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},label:{default:""},flavor:{default:"normal"},strikeOnFalse:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(d,{emit:u}){const e=d,r=u,c=()=>{e.disabled||r("update:modelValue",!e.modelValue)},p=B(()=>e.modelValue?{icon:"check",style:"bg-primary-light-500 text-white"}:{icon:"",style:"border-primary-light-500"}),b=B(()=>e.flavor==="outlined"?"bg-transparent border-primary-light-500":e.disabled?"bg-primary-light-100 border-primary-light-300 text-primary-light-400":p.value.style);return(o,f)=>{const s=R;return m(),_("div",qe,[o.label?(m(),_("div",{key:0,class:v(["flex items-center gap-2 group",{"cursor-pointer":!o.disabled,"cursor-not-allowed":o.disabled}]),onClick:c},[n("div",{class:v(["flex items-center justify-center w-5 h-5 border-2 border-primary-light-500 rounded transition-all",[b.value,{"active:animate-bounce":!o.disabled,"border-primary-light-300":o.disabled}]])},[p.value.icon?(m(),A(s,{key:0,name:p.value.icon},null,8,["name"])):w("",!0)],2),n("span",{class:v(["transition-opacity text-primary-light-500 select-none",{"text-primary-light-400":o.disabled,"line-through":o.strikeOnFalse&&!o.modelValue,"group-hover:opacity-80":!o.disabled,"font-bold":o.modelValue}])},U(o.label),3)],2)):(m(),_("div",{key:1,class:v(["flex items-center justify-center w-5 h-5 border-2 border-primary-light-500 rounded transition-all",[b.value,{"cursor-pointer active:animate-bounce":!o.disabled,"cursor-not-allowed":o.disabled,"border-primary-light-300":o.disabled}]]),onClick:c},[p.value.icon?(m(),A(s,{key:0,name:p.value.icon,class:"text-sm"},null,8,["name"])):w("",!0)],2))])}}}),Xe=Object.assign(C(He,[["__scopeId","data-v-7c40f160"]]),{__name:"PUCheckbox"}),Ye={class:"inline-flex items-center font-patrick"},Ge=P({__name:"PUSwitch",props:{modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},label:{default:""},flavor:{default:"normal"},width:{default:"full"}},emits:["update:modelValue"],setup(d,{emit:u}){const e=d,r=u,c=()=>{e.disabled||r("update:modelValue",!e.modelValue)},p=B(()=>{const o="rounded-full transition-colors duration-300 relative",f={full:"w-11 h-6",mid:"w-8 h-3"},s={normal:{active:"bg-primary-light-500",inactive:"bg-primary-light-300"},outlined:{active:"bg-primary-light-500 border-2 border-primary-light-500",inactive:"bg-transparent border-2 border-primary-light-500"}};return[o,f[e.width],e.modelValue?s[e.flavor].active:s[e.flavor].inactive,e.disabled?"opacity-50 cursor-not-allowed":"cursor-pointer"]}),b=B(()=>{const o="absolute bg-white rounded-full shadow-sm transform transition-transform duration-300",f={full:"w-4 h-4 top-1",mid:"w-5 h-5 -top-1 border border-2 border-primary-light-500"},s={full:e.modelValue?"translate-x-6":"translate-x-1",mid:e.modelValue?"translate-x-4":"-translate-x-1"};return[o,f[e.width],s[e.width],e.flavor==="outlined"&&!e.modelValue?"border border-primary-light-500":""]});return(o,f)=>(m(),_("div",Ye,[n("div",{class:v(["flex items-center gap-3 group",{"cursor-pointer":!o.disabled,"cursor-not-allowed":o.disabled}]),onClick:c},[n("div",{class:v(p.value)},[n("div",{class:v(b.value)},null,2)],2),o.label?(m(),_("span",{key:0,class:v(["text-primary-light-500 transition-opacity select-none",{"text-primary-light-400":o.disabled,"group-hover:opacity-80":!o.disabled}])},U(o.label),3)):w("",!0)],2)]))}}),Je=Object.assign(Ge,{__name:"PUSwitch"}),Qe={key:0,class:"flex gap-2 font-patrick"},Ze=["onClick"],et=P({__name:"PURadio",props:{modelValue:{type:[String,Number,Boolean]},options:{default:void 0},label:{default:""},value:{type:[String,Number,Boolean],default:void 0},disabled:{type:Boolean,default:!1},flavor:{default:"normal"},name:{default:"radio-group"}},emits:["update:modelValue"],setup(d,{emit:u}){const e=d,r=u,c=B(()=>e.modelValue===e.value),p=s=>{!e.disabled&&s!==void 0&&r("update:modelValue",s)},b=s=>{const i=["flex items-center gap-2 group transition-all"];return e.disabled?i.push("cursor-not-allowed opacity-50"):i.push("cursor-pointer"),["outlined","box"].includes(e.flavor)&&(i.push("p-2 rounded-lg border-2"),s?(i.push("border-primary-light-600"),e.flavor==="outlined"&&i.push("font-bold"),e.flavor==="box"&&i.push("font-bold")):i.push("border-primary-light-300 hover:border-primary-light-400")),i},o=s=>{const i=["w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"];return e.flavor==="outlined"?i.push(s?"border-primary-light-600 bg-primary-light-100":"border-primary-light-300"):e.flavor==="normal"&&i.push(s?"border-primary-light-600 bg-primary-light-600":"border-primary-light-300 bg-white"),e.disabled&&(i.push("border-primary-light-200"),e.flavor==="normal"&&i.push("bg-gray-100")),i},f=B(()=>e.flavor==="outlined"?"w-2 h-2 rounded-full bg-primary-light-600":"w-2 h-2 rounded-full bg-white");return(s,i)=>s.options?(m(),_("div",Qe,[(m(!0),_(O,null,j(s.options,g=>(m(),_("div",{key:String(g.value),class:v(b(s.modelValue===g.value)),onClick:V=>p(g.value)},[s.flavor!=="box"?(m(),_("div",{key:0,class:v(["relative shrink-0",o(s.modelValue===g.value)])},[s.modelValue===g.value?(m(),_("div",{key:0,class:v(f.value)},null,2)):w("",!0)],2)):w("",!0),n("span",{class:v(["text-primary-light-600 select-none",{"font-bold":s.modelValue===g.value,"group-hover:opacity-80":!s.disabled}])},U(g.label),3)],10,Ze))),128))])):(m(),_("div",{key:1,class:v(b(c.value)),onClick:i[0]||(i[0]=()=>e.value!==void 0&&p(e.value))},[s.flavor!=="box"?(m(),_("div",{key:0,class:v(["relative shrink-0",o(c.value)])},[c.value?(m(),_("div",{key:0,class:v(f.value)},null,2)):w("",!0)],2)):w("",!0),s.label?(m(),_("span",{key:1,class:v(["text-primary-light-600 select-none",{"font-bold":c.value,"group-hover:opacity-80":!s.disabled}])},U(s.label),3)):w("",!0)],2))}}),tt=Object.assign(et,{__name:"PURadio"}),H=()=>{const d=we("modalVisible",()=>!1);return{isVisible:d,show:()=>{d.value=!0},hide:()=>{d.value=!1}}},ot=P({__name:"PUModal",setup(d){const{isVisible:u,hide:e}=H(),r=()=>{e()},c=p=>{p.target===p.currentTarget&&r()};return(p,b)=>(m(),A(q,{name:"fade-modal"},{default:a(()=>[k(u)?(m(),_("div",{key:0,class:"modal-overlay",onClick:c},[n("div",{class:"modal-container",onClick:b[0]||(b[0]=fe(()=>{},["stop"]))},[$(p.$slots,"header",{},()=>[b[1]||(b[1]=n("h3",{class:"modal-title"}," Default Title ",-1))],!0),$(p.$slots,"content",{},()=>[b[2]||(b[2]=n("p",{class:"modal-content"}," Default content goes here... ",-1))],!0),$(p.$slots,"footer",{},()=>[n("button",{class:"modal-button",onClick:r}," Close ")],!0)])])):w("",!0)]),_:3}))}}),nt=Object.assign(C(ot,[["__scopeId","data-v-3c993fee"]]),{__name:"PUModal"}),M=x([]),lt=({severity:d,summary:u,detail:e,life:r})=>{const c=Date.now(),p={id:c,severity:d,summary:u,detail:e,visible:!0};M.value.push(p),setTimeout(()=>{X(c)},r||3e3)},X=d=>{const u=M.value.findIndex(e=>e.id===d);u!==-1&&M.value.splice(u,1)},at={class:"inline-block"},st=P({__name:"PUToast",props:{position:{default:"top-right"}},setup(d){const e={"top-left":"pu-toast-container--top-left","top-right":"pu-toast-container--top-right","bottom-left":"pu-toast-container--bottom-left","bottom-right":"pu-toast-container--bottom-right",center:"pu-toast-container--center"}[d.position||"top-right"],r=c=>({primary:"pu-toast--primary",secondary:"pu-toast--secondary"})[c];return(c,p)=>{const b=R;return m(!0),_(O,null,j(k(M),o=>(m(),_("div",{key:o.id,class:v(["pu-toast-container font-patrick",k(e)])},[l(q,{name:"toast-transition"},{default:a(()=>[W(n("div",{class:v(["pu-toast",r(o.severity)])},[l(b,{name:"info","custom-class":o.severity==="primary"?"text-white":"text-black"},null,8,["custom-class"]),n("div",at,U(o.summary),1),l(b,{name:"close",class:"close-icon",onClick:f=>o.id?k(X)(o.id):null},null,8,["onClick"])],2),[[be,o.visible]])]),_:2},1024)],2))),128)}}}),rt=Object.assign(C(st,[["__scopeId","data-v-ddb965ac"]]),{__name:"PUToast"}),it=()=>({add:u=>{lt(u)}}),dt={class:"flex gap-4 flex-wrap mx-4"},ut={class:"flex"},ct={class:""},pt={class:""},mt={class:"tags flex gap-2"},ft={class:"tags flex gap-2"},bt={class:"w-72"},_t={class:"w-72"},vt={class:"my-4"},ht={class:"flex gap-2 items-center"},gt={class:"flex"},yt=P({__name:"AllComponents",setup(d){const{add:u}=it(),e=x([{value:1,label:"Example Item"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}]),r=x(null),{show:c}=H(),p=()=>{c()},b=[{title:"Accordion 1",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],o=[{label:"Tab 1",content:"Content for Tab 1"},{label:"Tab 2",content:"Content for Tab 2"},{label:"Tab 3",content:"Content for Tab 3"}],f=x(null),s=V=>{f.value=V},i=x(!1),g=()=>{u({severity:"secondary",summary:"Success",detail:"Action completed successfully!",life:3e4})};return(V,t)=>{const D=se,y=Se,Y=_e,G=ve,F=he,J=ge,Q=Oe,E=De,N=ye,Z=ke,ee=We,te=Ue,L=Xe,oe=Je,ne=tt,le=nt,ae=rt;return m(),_("div",dt,[l(y,null,{component:a(()=>[l(D,{flavor:"outlined"},{default:a(()=>t[7]||(t[7]=[S(" Click me! ")])),_:1})]),"component-name":a(()=>t[8]||(t[8]=[n("a",{href:"/docs/components/pu-button"},"PUButton",-1)])),_:1}),l(y,null,{component:a(()=>[l(Y,{options:k(e),"model-value":k(f),placeholder:"Select an option",size:"large","example-option":{value:1,label:"Example Item"},"onUpdate:modelValue":s},null,8,["options","model-value"])]),"component-name":a(()=>t[9]||(t[9]=[n("a",{href:"/docs/components/pu-select"},"PUSelect",-1)])),_:1}),l(y,null,{component:a(()=>[n("div",ut,[l(G,{name:"arrow-down",flavor:"outlined"})])]),"component-name":a(()=>t[10]||(t[10]=[n("a",{href:"/docs/components/pu-button-icon"},"PUButtonIcon",-1)])),_:1}),l(y,null,{component:a(()=>[n("div",ct,[l(F,{id:"test"},{default:a(()=>t[11]||(t[11]=[S(" teste ")])),_:1}),l(J,{id:"test",modelValue:k(r),"onUpdate:modelValue":t[0]||(t[0]=h=>T(r)?r.value=h:null),placeholder:"Search","icon-left":"search"},null,8,["modelValue"])])]),"component-name":a(()=>t[12]||(t[12]=[n("a",{href:"/docs/components/pu-input"},"PUInput",-1)])),_:1}),l(y,null,{component:a(()=>[n("div",pt,[l(F,{id:"test2"},{default:a(()=>t[13]||(t[13]=[S(" teste ")])),_:1}),l(Q,{id:"test2",modelValue:k(r),"onUpdate:modelValue":t[1]||(t[1]=h=>T(r)?r.value=h:null),placeholder:"Type"},null,8,["modelValue"])])]),"component-name":a(()=>t[14]||(t[14]=[n("a",{href:"/docs/components/pu-textarea"},"PUTextArea",-1)])),_:1}),l(y,null,{component:a(()=>[n("div",mt,[l(E,{label:"Tag 1"}),l(E,{label:"Tag 2",icon:"close"}),l(E,{label:"Tag 3"})])]),"component-name":a(()=>t[15]||(t[15]=[n("a",{href:"/docs/components/pu-tag"},"PUTag",-1)])),_:1}),l(y,null,{component:a(()=>[n("div",ft,[l(N,{label:"Badge 1",severity:"secondary"}),l(N,{label:"Badge 2",icon:"close"}),l(N,{label:"Badge 3",severity:"ghost"})])]),"component-name":a(()=>t[16]||(t[16]=[n("a",{href:"/docs/components/pu-badge"},"PUBadge",-1)])),_:1}),l(y,null,{component:a(()=>[n("div",bt,[l(Z,{items:b},{header:a(({item:h,isOpen:I})=>[n("h3",{class:v({"text-[#E12B56]":I,"text-gray-800":!I})},U(h.title),3)]),content:a(({item:h})=>[n("p",null,U(h.content),1)]),_:1})])]),"component-name":a(()=>t[17]||(t[17]=[n("a",{href:"/docs/components/pu-accordion"},"PUAccordion",-1)])),_:1}),l(y,null,{component:a(()=>[n("div",_t,[l(ee,{tabs:o},{tab:a(({tab:h,isActive:I})=>[n("div",{class:v([{"text-black":I,"text-gray-500":!I},"flex items-center gap-2"])},[n("span",null,U(h.label),1)],2)]),content:a(({tab:h})=>[n("p",vt,U(h.content),1)]),_:1})])]),"component-name":a(()=>t[18]||(t[18]=[n("a",{href:"/docs/components/pu-tabs"},"PUTabs",-1)])),_:1}),l(y,null,{component:a(()=>[l(D,{flavor:"normal",shape:"rounded",onClick:g},{default:a(()=>t[19]||(t[19]=[S(" Open Toast ")])),_:1})]),"component-name":a(()=>t[20]||(t[20]=[n("a",{href:"/docs/components/pu-toast"},"PUToast",-1)])),_:1}),l(y,null,{component:a(()=>[l(D,{flavor:"normal",shape:"rounded",onClick:t[2]||(t[2]=h=>p())},{default:a(()=>t[21]||(t[21]=[S(" Open Modal ")])),_:1})]),"component-name":a(()=>t[22]||(t[22]=[n("a",{href:"/docs/components/pu-modal"},"PUModal",-1)])),_:1}),l(y,null,{component:a(()=>[l(te,{positions:["bottom-right"]},{default:a(()=>t[23]||(t[23]=[S(" Hello World! ")])),_:1})]),"component-name":a(()=>t[24]||(t[24]=[n("a",{href:"/docs/components/pu-tooltip"},"PUTooltip",-1)])),_:1}),l(y,null,{component:a(()=>[n("div",ht,[l(L,{modelValue:k(i),"onUpdate:modelValue":t[3]||(t[3]=h=>T(i)?i.value=h:null)},null,8,["modelValue"]),l(L,{modelValue:k(i),"onUpdate:modelValue":t[4]||(t[4]=h=>T(i)?i.value=h:null),flavor:"outlined",label:"checked","strike-on-false":""},null,8,["modelValue"])])]),"component-name":a(()=>t[25]||(t[25]=[n("a",{href:"/docs/components/pu-checkbox"},"PUCheckbox",-1)])),_:1}),l(y,null,{component:a(()=>[l(oe,{modelValue:k(i),"onUpdate:modelValue":t[5]||(t[5]=h=>T(i)?i.value=h:null),label:"Switch?",width:"mid"},null,8,["modelValue"])]),"component-name":a(()=>t[26]||(t[26]=[n("a",{href:"/docs/components/pu-switch"},"PUSwitch",-1)])),_:1}),l(y,null,{component:a(()=>[n("div",gt,[l(ne,{modelValue:k(i),"onUpdate:modelValue":t[6]||(t[6]=h=>T(i)?i.value=h:null),options:[{label:"True",value:!0},{label:"False",value:!1}],flavor:"box"},null,8,["modelValue"])])]),"component-name":a(()=>t[27]||(t[27]=[n("a",{href:"/docs/components/pu-radio"},"PURadio",-1)])),_:1}),l(le),l(ae,{ref:"toast",position:"top-right"},null,512)])}}}),Bt=Object.assign(yt,{__name:"AllComponents"});export{Bt as default};
