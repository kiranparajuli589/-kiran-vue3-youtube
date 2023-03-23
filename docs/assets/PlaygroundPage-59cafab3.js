import{r,m as x,c as b,b as e,n as U,u as R,e as P,p as a,v as d,j as n,q as s,o as c}from"./index-635a2c75.js";import{V as I}from"./VueYtframe-5fc11eda.js";const C={class:"playground"},j=e("h2",null,"Playground",-1),B={class:"player"},L={key:1,class:"no-value"},T={key:0,class:"actions"},w={class:"props"},D={class:"video-id"},E=e("div",{class:"title"},"Video ID",-1),M={class:"text-input"},N={class:"video-url"},S=e("div",{class:"title"},"Video URL",-1),A={class:"text-input"},H=e("div",{class:"title"},"Width",-1),Y=e("div",{class:"title"},"Height",-1),q={class:"player-parameters"},F=e("div",{class:"title"},"Player Parameters",-1),J={for:"autoplay"},K=["href"],O={for:"cc-lang-pref"},W=["href"],$={for:"cc-load-policy"},z=["href"],G={for:"color"},Q=["href"],X={for:"controls"},Z=["href"],ee={for:"disable-kb"},le=["href"],te={for:"enable-js-api"},oe=["href"],ne={for:"start"},ae=["href"],ie={for:"end"},se=["href"],de={for:"fs"},ue=["href"],re={for:"hl"},pe=["href"],ve={for:"iv-load-policy"},_e=["href"],ce={for:"list-type"},fe=["href"],ye={for:"loop"},be=["href"],he={for:"modest-branding"},me=["href"],ge={for:"playsinline"},ke=["href"],Ve={for:"rel"},xe=["href"],Ie={__name:"PlaygroundPage",setup(Ue){const p=r(""),v=r(""),f=r(400),y=r(600),h="https://developers.google.com/youtube/player_parameters#%s",i=u=>h.replace("%s",u),o=r({autoplay:null,cc_lang_pref:null,cc_load_policy:null,color:null,controls:null,disablekb:null,enablejsapi:null,end:null,fs:null,hl:null,iv_load_policy:null,listType:null,loop:null,modestbranding:null,origin:window.location.origin,playsinline:null,rel:null,start:null}),m=x(()=>{const u={};for(const[l,t]of Object.entries(o.value))t!==null&&(typeof t=="boolean"?u[l]=t?1:0:u[l]=t);return u}),g=()=>{document.getElementById("video-id").value=""},k=()=>{document.getElementById("video-url").value=""},_=r(null),V=()=>{_.value&&(_.value.destroy(),p.value=null,v.value=null)};return(u,l)=>(c(),b("div",C,[j,e("div",B,[p.value||v.value?(c(),U(I,{key:0,ref_key:"yt",ref:_,"video-id":p.value,"video-url":v.value,height:f.value,width:y.value,"player-vars":R(m)},null,8,["video-id","video-url","height","width","player-vars"])):(c(),b("div",L," Input YouTube video ID or URL to initiate the player. "))]),_.value&&_.value.player?(c(),b("div",T,[e("button",{onClick:l[0]||(l[0]=t=>V())},"Destroy Player")])):P("",!0),e("div",w,[e("div",D,[E,e("div",M,[a(e("input",{id:"video-id",type:"url","onUpdate:modelValue":l[1]||(l[1]=t=>p.value=t)},null,512),[[d,p.value]]),e("div",{class:"mdi mdi-close",onClick:g})])]),e("div",N,[S,e("div",A,[a(e("input",{id:"video-url",type:"url","onUpdate:modelValue":l[2]||(l[2]=t=>v.value=t)},null,512),[[d,v.value]]),e("div",{class:"mdi mdi-close",onClick:k})])]),e("div",null,[H,a(e("input",{type:"range",min:"100",max:"1000","onUpdate:modelValue":l[3]||(l[3]=t=>y.value=t),class:"slider",id:"player-width"},null,512),[[d,y.value]])]),e("div",null,[Y,a(e("input",{type:"range",min:"100",max:"1000","onUpdate:modelValue":l[4]||(l[4]=t=>f.value=t),class:"slider",id:"player-height"},null,512),[[d,f.value]])]),e("div",q,[F,e("div",null,[e("label",J,[n(" Autoplay ("),e("a",{href:i("autoplay"),target:"_blank"},"Ref",8,K),n(") ")]),a(e("input",{id:"autoplay",type:"checkbox","onUpdate:modelValue":l[5]||(l[5]=t=>o.value.autoplay=t)},null,512),[[s,o.value.autoplay]])]),e("div",null,[e("label",O,[n(" CC Lang Pref ("),e("a",{href:i("cc_lang_pref"),target:"_blank"},"Ref",8,W),n(") ")]),a(e("input",{type:"text",id:"cc-lang-pref","onUpdate:modelValue":l[6]||(l[6]=t=>o.value.cc_lang_pref=t)},null,512),[[d,o.value.cc_lang_pref]])]),e("div",null,[e("label",$,[n(" CC Load Policy ("),e("a",{href:i("cc_load_policy"),target:"_blank"},"Ref",8,z),n(") ")]),a(e("input",{type:"checkbox",id:"cc-load-policy","onUpdate:modelValue":l[7]||(l[7]=t=>o.value.cc_load_policy=t)},null,512),[[s,o.value.cc_load_policy]])]),e("div",null,[e("label",G,[n(" Color ("),e("a",{href:i("color"),target:"_blank"},"Ref",8,Q),n(") ")]),a(e("input",{type:"text",id:"color","onUpdate:modelValue":l[8]||(l[8]=t=>o.value.color=t)},null,512),[[d,o.value.color]])]),e("div",null,[e("label",X,[n(" Controls ("),e("a",{href:i("controls"),target:"_blank"},"Ref",8,Z),n(") ")]),a(e("input",{type:"checkbox",id:"controls","onUpdate:modelValue":l[9]||(l[9]=t=>o.value.controls=t)},null,512),[[s,o.value.controls]])]),e("div",null,[e("label",ee,[n(" Disable KB ("),e("a",{href:i("disablekb"),target:"_blank"},"Ref",8,le),n(") ")]),a(e("input",{type:"checkbox",id:"disable-kb","onUpdate:modelValue":l[10]||(l[10]=t=>o.value.disablekb=t)},null,512),[[s,o.value.disablekb]])]),e("div",null,[e("label",te,[n(" Enable JS API ("),e("a",{href:i("enablejsapi"),target:"_blank"},"Ref",8,oe),n(") ")]),a(e("input",{type:"checkbox",id:"enable-js-api","onUpdate:modelValue":l[11]||(l[11]=t=>o.value.enablejsapi=t)},null,512),[[s,o.value.enablejsapi]])]),e("div",null,[e("label",ne,[n(" Start (seconds) ("),e("a",{href:i("start"),target:"_blank"},"Ref",8,ae),n(") ")]),a(e("input",{type:"number",id:"start","onUpdate:modelValue":l[12]||(l[12]=t=>o.value.start=t)},null,512),[[d,o.value.start]])]),e("div",null,[e("label",ie,[n(" End (seconds) ("),e("a",{href:i("end"),target:"_blank"},"Ref",8,se),n(") ")]),a(e("input",{type:"number",id:"end","onUpdate:modelValue":l[13]||(l[13]=t=>o.value.end=t)},null,512),[[d,o.value.end]])]),e("div",null,[e("label",de,[n(" FS ("),e("a",{href:i("fs"),target:"_blank"},"Ref",8,ue),n(") ")]),a(e("input",{type:"checkbox",id:"fs","onUpdate:modelValue":l[14]||(l[14]=t=>o.value.fs=t)},null,512),[[s,o.value.fs]])]),e("div",null,[e("label",re,[n(" HL ("),e("a",{href:i("hl"),target:"_blank"},"Ref",8,pe),n(") ")]),a(e("input",{type:"text",id:"hl","onUpdate:modelValue":l[15]||(l[15]=t=>o.value.hl=t)},null,512),[[d,o.value.hl]])]),e("div",null,[e("label",ve,[n(" IV Load Policy ("),e("a",{href:i("iv_load_policy"),target:"_blank"},"Ref",8,_e),n(") ")]),a(e("input",{type:"checkbox",id:"iv-load-policy","onUpdate:modelValue":l[16]||(l[16]=t=>o.value.iv_load_policy=t)},null,512),[[s,o.value.iv_load_policy]])]),e("div",null,[e("label",ce,[n(" List Type ("),e("a",{href:i("listType"),target:"_blank"},"Ref",8,fe),n(") ")]),a(e("input",{type:"text",id:"list-type","onUpdate:modelValue":l[17]||(l[17]=t=>o.value.listType=t)},null,512),[[d,o.value.listType]])]),e("div",null,[e("label",ye,[n(" Loop ("),e("a",{href:i("loop"),target:"_blank"},"Ref",8,be),n(") ")]),a(e("input",{type:"checkbox",id:"loop","onUpdate:modelValue":l[18]||(l[18]=t=>o.value.loop=t)},null,512),[[s,o.value.loop]])]),e("div",null,[e("label",he,[n(" Modest Branding ("),e("a",{href:i("modestbranding"),target:"_blank"},"Ref",8,me),n(") ")]),a(e("input",{type:"checkbox",id:"modest-branding","onUpdate:modelValue":l[19]||(l[19]=t=>o.value.modestbranding=t)},null,512),[[s,o.value.modestbranding]])]),e("div",null,[e("label",ge,[n(" Plays Inline ("),e("a",{href:i("playsinline"),target:"_blank"},"Ref",8,ke),n(") ")]),a(e("input",{type:"checkbox",id:"playsinline","onUpdate:modelValue":l[20]||(l[20]=t=>o.value.playsinline=t)},null,512),[[s,o.value.playsinline]])]),e("div",null,[e("label",Ve,[n(" Rel ("),e("a",{href:i("rel"),target:"_blank"},"Ref",8,xe),n(") ")]),a(e("input",{type:"checkbox",id:"rel","onUpdate:modelValue":l[21]||(l[21]=t=>o.value.rel=t)},null,512),[[s,o.value.rel]])])])])]))}};export{Ie as default};
