import{_ as r,o as d,c as a,a as e}from"./index.6b43fdec.js";const c={data(){return{file1:"",src1:""}},methods:{next(){this.$emit("nextStep"),this.$emit("saveKTP",this.file1)},prev(){this.$emit("prevStep")},uploadKTP(){const l=this.$refs.file1.files[0];this.file1=l;const t=new FileReader;t.readAsDataURL(l),t.onload=i=>{this.src1=i.target.result},t.onerror=i=>{console.log(i)}}}},u={class:"background"},f={class:"window"},p={style:{"justify-content":"center"}},_={class:"image_fields",input:"",type:"image"},m=["src"],h={id:"text",style:{"margin-left":"25%"},class:"py-4"},v=e("p",null,"Upload an image of Your ID card",-1),x=e("br",null,null,-1);function g(l,t,i,y,o,s){return d(),a("div",u,[e("div",f,[e("form",p,[e("div",_,[e("img",{src:o.src1,alt:"",style:{width:"100%"}},null,8,m)]),e("div",h,[v,e("input",{required:"",type:"file",id:"file1",ref:"file1",onInput:t[0]||(t[0]=n=>s.uploadKTP())},null,544)])]),e("div",null,[e("button",{class:"buttons",id:"text",onClick:t[1]||(t[1]=(...n)=>s.next&&s.next(...n))},"Next"),x,e("button",{class:"buttons",id:"text",onClick:t[2]||(t[2]=(...n)=>s.prev&&s.prev(...n))},"Back")])])])}var k=r(c,[["render",g]]);export{k as default};
