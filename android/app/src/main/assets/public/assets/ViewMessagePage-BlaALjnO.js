import{S as _,d as L,r as p,o as M,i as V,a as R,c,w as a,u as t,b as q,e as F,g as P,f as r,h as l,I as Z,j as H,k as b,l as n,m as O,n as m,t as g,p as x,q as U,s as J,v as K,x as I,y as k,z as B,A as Q,B as W,C as $,D as X,_ as Y}from"./index-DgmN7V8-.js";const ee=[{color:"#ebebeb",id:2,bool:!1,favorito:!1},{color:"#ebebeb",id:1,bool:!1,favorito:!1}],z=new _,te=async d=>{try{return await z.getBackGroundById(d)}catch(f){console.error("Error al obtener mensaje:",f)}},ae=async()=>{try{await z.insert(!1,ee),console.log("Datos insertados correctamente")}catch(d){console.error("Error al insertar datos:",d)}},oe=new _,se=async()=>{try{await oe.delete()}catch(d){console.error("Error al insertar datos:",d)}},re={key:0,class:"absolute inline-flex items-center justify-center rounded-full -top-2 -end-2 circle"},le={class:"w-56 h-56 rounded-full"},ne=["src"],ie={class:"titles"},ue={class:"subtitle"},ce={class:"ion-text-justify font-regulars parr"},de=L({__name:"ViewMessagePage",setup(d){const f=q(),C=F(),h=()=>{f.push({path:"/home"})};let o=parseInt(C.params.id,10);C.params.id===" "&&(o=1),o.toString()==="NaN"&&(o=1,f.push({name:"message",params:{id:o}}));const u=p(),T=async s=>{try{let e=await P(s);u.value=e}catch(e){console.error("Error al obtener datos:",e)}},w=p(),y=p(),G=async s=>{try{let e=await te(s);w.value=e.color,y.value=e.bool,v.value=e.favorito}catch(e){console.error("Error al almacenador mensajes:",e)}},D=p(!1),N=new _;M(async()=>{D.value=await N.getStatus(),D.value&&await se().then(async()=>{await ae(),await V(),await R()}),G(o),T(o)});const v=p(),E=async s=>{v.value=s;const e=[{color:w.value,id:o,bool:y.value,favorito:v.value}];j(e)},S=async s=>{y.value=s;const e=document.getElementById("back");let i;e&&(s?(e.style.cssText="--background: aqua; --offset-top: 56px; --offset-bottom: 76px;",i="aqua"):(e.style.cssText="--background: #ebebeb; --offset-top: 56px; --offset-bottom: 76px;",i="#ebebeb")),w.value=i;const A=[{color:i,id:o,bool:s,favorito:v.value}];j(A)},j=async s=>{try{return await N.update(!1,s,o)}catch(e){console.error("Error al obtener mensajes:",e)}};return(s,e)=>(r(),c(t(X),null,{default:a(()=>[l(t(U),{translucent:!0,class:"ion-no-border"},{default:a(()=>[l(t(Z),null,{default:a(()=>[l(t(H),{slot:"start"},{default:a(()=>[l(t(b),{shape:"round",onClick:e[0]||(e[0]=i=>h())},{default:a(()=>e[6]||(e[6]=[n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24"},[n("path",{fill:"none",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"})],-1)])),_:1})]),_:1}),u.value?(r(),c(t(O),{key:0,class:"title font-bold"},{default:a(()=>[m(g(u.value.fromName),1)]),_:1})):x("",!0)]),_:1})]),_:1}),u.value?(r(),c(t(J),{key:0,fullscreen:!0,class:"ion-padding",style:K({"--background":w.value}),id:"back"},{default:a(()=>[n("div",null,[l(t(W),{class:"ion-no-padding"},{default:a(()=>[l(t(I),null,{default:a(()=>[l(t(k),null,{default:a(()=>[n("div",{class:"avatar relative inline-flex items-center contentImgText",onClick:e[1]||(e[1]=i=>h())},[t(o)!==2?(r(),B("div",re,e[7]||(e[7]=[n("span",{class:"circleText font-regulars"},"ONLINE",-1)]))):x("",!0),n("div",le,[n("img",{src:u.value.profile},null,8,ne)])])]),_:1})]),_:1}),l(t(I),null,{default:a(()=>[l(t(k),{size:"10",class:"font-regulars"},{default:a(()=>[l(t(Q),{class:"ion-text-wrap"},{default:a(()=>[n("h2",ie,g(u.value.fromName)+", "+g(u.value.date),1),n("span",ue,g(u.value.city),1)]),_:1})]),_:1}),t(o)!==2?(r(),c(t(k),{key:0,size:"2"},{default:a(()=>[v.value?(r(),B("svg",{key:0,onClick:e[2]||(e[2]=i=>E(!1)),stroke:"currentColor",class:"favorite size-5 cursor-pointer text-yellow-300",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24","stroke-width":"1.5"},e[8]||(e[8]=[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"},null,-1)]))):(r(),B("svg",{key:1,onClick:e[3]||(e[3]=i=>E(!0)),stroke:"currentColor",class:"favorite size-5 cursor-pointer text-white drop-shadow",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24","stroke-width":"1"},e[9]||(e[9]=[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"},null,-1)])))]),_:1})):(r(),c(t(k),{key:1,size:"2"}))]),_:1}),l(t(I),null,{default:a(()=>[l(t(k),null,{default:a(()=>[n("p",ce,g(u.value.description),1)]),_:1})]),_:1})]),_:1})])]),_:1},8,["style"])):x("",!0),t(o)!==2?(r(),c(t($),{key:1,class:"ion-padding ion-no-border"},{default:a(()=>[y.value?(r(),c(t(b),{key:0,expand:"full",class:"colorBtnB font-regulars",onClick:e[4]||(e[4]=i=>S(!1))},{default:a(()=>e[10]||(e[10]=[m("ADD AS FRIEND")])),_:1})):(r(),c(t(b),{key:1,expand:"full",class:"colorBtnA font-regulars",onClick:e[5]||(e[5]=i=>S(!0))},{default:a(()=>e[11]||(e[11]=[m("ADD AS FRIEND")])),_:1}))]),_:1})):(r(),c(t($),{key:2,class:"ion-padding ion-no-border"}))]),_:1}))}}),pe=Y(de,[["__scopeId","data-v-d67b0bdd"]]);export{pe as default};
