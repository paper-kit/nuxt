import{_ as w}from"./BfjTjhiS.js";import{_ as h}from"./DKNSDb3F.js";import{a as y,f,k as n,M as r,g as i,w as t,Y as d,i as o,h as m,t as u,n as k}from"./DXCho4kf.js";import"./u4CqYnwd.js";import"./C23bM2gH.js";import"./BiKx88S3.js";const v={class:"accordion-demo"},g={class:"w-72"},B={class:"w-72"},C={class:"w-72"},S=y({__name:"ShowAccordion",props:{type:{}},setup(A){const l=[{title:"Custom",content:"Demo content"},{title:"Items",content:"Sample data"}];return(e,p)=>{const s=w,c=h;return n(),f("div",v,[e.type==="default"?(n(),r(c,{key:0},{preview:t(()=>[o("div",g,[m(s,{items:[{title:"First",content:"Basic content"},{title:"Second",content:"More content"}]})])]),code:t(()=>[d(e.$slots,"code")]),_:3})):i("",!0),e.type==="custom-content"?(n(),r(c,{key:1},{preview:t(()=>[o("div",B,[m(s,{items:l},{content:t(()=>p[0]||(p[0]=[o("div",{class:"p-4 bg-gray-50 rounded"}," Custom content area with additional styling ",-1)])),_:1})])]),code:t(()=>[d(e.$slots,"code")]),_:3})):i("",!0),e.type==="custom-header"?(n(),r(c,{key:2},{preview:t(()=>[o("div",C,[m(s,{items:l,class:"w-full"},{header:t(({item:a,isOpen:_})=>[o("h3",{class:k({"text-[#E12B56]":_,"text-gray-800":!_})},u(a.title),3)]),content:t(({item:a})=>[o("p",null,u(a.content),1)]),_:1})])]),code:t(()=>[d(e.$slots,"code")]),_:3})):i("",!0)])}}}),I=Object.assign(S,{__name:"PaperShowAccordion"});export{I as default};
