import{_ as h}from"./BrjHHcnn.js";import{_ as w}from"./BNyl40js.js";import{a as y,f as k,k as n,M as r,g as i,w as t,Y as d,i as o,h as m,t as u,n as f}from"./Zq3_OZUN.js";import"./BOCn5B7V.js";import"./BUXdRw_7.js";import"./DjBmh4g5.js";const g={class:"accordion-demo"},v={class:"w-72"},B={class:"w-72"},C={class:"w-72"},S=y({__name:"ShowAccordion",props:{type:{}},setup(A){const l=[{title:"Custom",content:"Demo content"},{title:"Items",content:"Sample data"}];return(e,p)=>{const s=h,c=w;return n(),k("div",g,[e.type==="default"?(n(),r(c,{key:0},{preview:t(()=>[o("div",v,[m(s,{items:[{title:"First",content:"Basic content"},{title:"Second",content:"More content"}]})])]),code:t(()=>[d(e.$slots,"code")]),_:3})):i("",!0),e.type==="custom-content"?(n(),r(c,{key:1},{preview:t(()=>[o("div",B,[m(s,{items:l},{content:t(()=>p[0]||(p[0]=[o("div",{class:"p-4 bg-gray-50 rounded dark:text-primary-light-500"}," Custom content area with additional styling ",-1)])),_:1})])]),code:t(()=>[d(e.$slots,"code")]),_:3})):i("",!0),e.type==="custom-header"?(n(),r(c,{key:2},{preview:t(()=>[o("div",C,[m(s,{items:l,class:"w-full"},{header:t(({item:a,isOpen:_})=>[o("h3",{class:f({"text-[#E12B56]":_,"text-gray-800 dark:text-white":!_})},u(a.title),3)]),content:t(({item:a})=>[o("p",null,u(a.content),1)]),_:1})])]),code:t(()=>[d(e.$slots,"code")]),_:3})):i("",!0)])}}}),E=Object.assign(S,{__name:"PaperShowAccordion"});export{E as default};
