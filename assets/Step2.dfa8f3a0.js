import{_ as l,l as d,m as p,o as m,c as u,a as t,w as f,t as _,b as v,v as h,g as y}from"./index.6b43fdec.js";const b={props:{email:{type:String,required:!0}},setup(n,e){const s=d({otp:""}),o=()=>{e.emit("next")},a=()=>{e.emit("prev")},c=()=>{e.emit("saveForm",s)};return p(()=>{}),{form:s,next:o,prev:a,props:n,confirmOtp:async()=>{try{const r=await y.post("confirmOtp",{email:n.email,otp:s.otp});c(),e.emit("next")}catch(r){r.response.status===400&&alert(r.response.data.message)}}}}},x={class:"background"},g={class:"window"},w=t("div",{id:"signup_icon"},[t("img",{src:"https://via.placeholder.com/150",alt:"",srcset:""})],-1),O=t("div",{id:"title"},"Bebas",-1),V={id:"text"},B=t("p",null,"Almost there",-1),S=t("br",null,null,-1),k=t("div",{class:"d-flex justify-content-center"},[t("input",{type:"submit",class:"buttons",value:"Verify Your Account"})],-1),M=t("br",null,null,-1);function j(n,e,s,o,a,c){return m(),u("div",x,[t("div",g,[w,O,t("form",{onSubmit:e[1]||(e[1]=f((...i)=>o.confirmOtp&&o.confirmOtp(...i),["prevent"])),style:{"justify-content":"center"}},[t("div",V,[B,t("p",null,"Enter the verification code we've sent to "+_(o.props.email),1)]),S,t("div",null,[v(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>o.form.otp=i),class:"fields",type:"number",name:"email",id:"text",placeholder:"Verification Code"},null,512),[[h,o.form.otp]])]),k],32),M])])}var D=l(b,[["render",j]]);export{D as default};
