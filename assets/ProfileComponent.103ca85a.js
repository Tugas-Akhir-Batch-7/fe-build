import{_,A as h,l as g,y as v,m as b,r as x,o as p,c,a as e,t as d,f as l,k as f,d as y,e as u,g as w,B as k,C,D as P}from"./index.6b43fdec.js";const B={setup(){const s=h(),{id:n}=s.params;let o=g({});const t=async()=>{let i;n?i=`/user/profile/${n}`:i="/user/profile";const a=await w.get(i,{headers:await k()});console.log(a.data.data.profile),Object.assign(o,a.data.data)},m=v(()=>o.role==="murid");return b(async()=>{await t();let i=/^(http|https):\/\//,a=i.test(o.profile.photo_ktp);a||(o.profile.photo_ktp=`http://localhost:5000/img-ktp/${o.profile.photo_ktp}`),a=i.test(o.photo),a||(o.photo=`http://localhost:5000/img-profile/${o.photo}`),console.log(a),console.log(n)}),{profile:o,isMurid:m,id:n}}},r=s=>(C("data-v-4f493e14"),s=s(),P(),s),I={class:"p-3 d-flex flex-column flex-fill"},M=r(()=>e("h2",{class:"mb-4"},"Profile",-1)),N=r(()=>e("br",null,null,-1)),S={class:"row align-items-top"},V={class:"mb-4 col-lg-5 mb-lg-0"},E={class:"d-flex justify-content-center"},j=["src"],A={class:"col-lg-7 px-xl-10"},D={class:"rounded bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9",style:{"min-width":"20em"}},T={class:"mb-0 text-white h2"},z={class:"text-primary"},F={key:0},H={class:"list-unstyled mb-1-9"},K={class:"mb-2 mb-xl-3 display-28"},L=r(()=>e("span",{class:"display-26 text-secondary me-2 font-weight-600"},"Email:",-1)),O={key:0},R={class:"mb-2 mb-xl-3 display-28"},U=r(()=>e("span",{class:"display-26 text-secondary me-2 font-weight-600"},"Address:",-1)),q={class:"mb-2 mb-xl-3 display-28"},G=r(()=>e("span",{class:"display-26 text-secondary me-2 font-weight-600"},"Contact:",-1)),J={class:"mb-2 mb-xl-3 display-28"},Q=r(()=>e("span",{class:"display-26 text-secondary me-2 font-weight-600"},"Photo KTP",-1)),W=["href"],X=["src"],Y={key:0},Z=l("Edit Profile");function $(s,n,o,t,m,i){const a=x("router-link");return p(),c("div",I,[M,N,e("div",S,[e("div",V,[e("div",E,[e("img",{src:t.profile.photo,alt:"...",width:"400"},null,8,j)])]),e("div",A,[e("div",D,[e("h3",T,d(t.profile.name),1),e("span",z,[l(d(t.profile.role)+" ",1),t.isMurid?(p(),c("span",F,"("+d(t.profile.batch)+")",1)):f("",!0)])]),e("ul",H,[e("li",K,[L,l(" "+d(t.profile.email),1)]),t.isMurid?(p(),c("div",O,[e("li",R,[U,l(d(t.profile.profile&&t.profile.profile.address),1)]),e("li",q,[G,l(d(t.profile.profile&&t.profile.profile.contact),1)]),e("li",J,[Q,e("div",null,[e("a",{href:t.profile.profile&&t.profile.profile.photo_ktp,target:"_blank"},[e("img",{src:t.profile.profile&&t.profile.profile.photo_ktp,alt:"",width:"100"},null,8,X)],8,W)])])])):f("",!0)]),t.id?f("",!0):(p(),c("div",Y,[y(a,{to:"/profile/edit",class:"px-5 btn btn-warning"},{default:u(()=>[Z]),_:1})]))])])])}var te=_(B,[["render",$],["__scopeId","data-v-4f493e14"]]);export{te as default};
