import{_ as J}from"./index-2b1034da.js";import{z as Q,r as l,M as ee,I as se,o as c,B as d,k as e,u as s,N as oe,G as k,b as v,l as f,c as M,K as te,L as le}from"./vendor-f1f9cdb2.js";const B=""+new URL("logo_min-73840552.png",import.meta.url).href;function ne(o){o=Math.round(o);const P=Math.floor(o/60),T=o%60;return A(P)+":"+A(T)}function A(o){return o<10?"0"+o:""+o}const R={formatTime:ne};const N=o=>(te("data-v-7cc64528"),o=o(),le(),o),ae={class:"sl-player"},ie=["src"],ue={class:"player-content"},ce=N(()=>e("p",{class:"play-point"},null,-1)),re=[ce],de={class:"control"},pe={class:"left"},_e={class:"cover"},ve=["src"],fe={class:"detail"},ye={class:"name"},me={key:0,class:"auther"},he=N(()=>e("span",null,"-",-1)),ge={class:"time"},ke={key:0},Pe={class:"center"},Te={class:"control-detail"},xe={class:"right"},Ce={key:0},Oe={key:1},Ie={key:2,class:"single-type"},Re=N(()=>e("span",null,"1",-1)),Ne={key:3},De={__name:"index",emits:["on-toggle-list","on-next"],setup(o,{expose:P,emit:T}){const{proxy:V}=Q(),{$pub:x,$config:$}=V,{baseUrl:G,defaultColor:D,playTypeEnum:r,playBtnTypeEnum:C}=$;let y=l({title:"-",author:""});const S=l(null),n=l(null),h=l(!1),b=l(""),g=l(""),p=l(""),m=l(0),z=l(null),_=l(!1),u=l(r.RANDOM_PLAY),t={progress:null,prev:null,next:null},U=ee(()=>m.value?"width:"+m.value*100+"%":"width:0"),O=l(B);function X(){h.value&&(_.value=!_.value,_.value?n.value.play():n.value.pause())}function E(){_.value=!1,clearInterval(z.value)}function Y(){z.value=setInterval(()=>{m.value=n.value.currentTime/n.value.duration,p.value=R.formatTime(n.value.currentTime)},1e3)}function F(){h.value=!0,_.value=!0,g.value=R.formatTime(n.value.duration),n.value.play()}function K(){p.value=g.value,u.value===r.SING_LOOP?n.value.play():I()}function W(i){t.progress||(t.progress=x.slDebounce(L=>{let a=L.offsetX/S.value.offsetWidth,w=n.value.duration*a;m.value=a,p.value=R.formatTime(w),n.value.currentTime=w})),t.progress(i)}function I(i=C.NEXT){T("on-next",{item:y.value,type:i,playType:u.value})}function Z(){h.value&&(t.prev||(t.prev=x.slDebounce(()=>{I(C.PREV)})),t.prev())}function j(){h.value&&(t.next||(t.next=x.slDebounce(()=>{I(C.NEXT)})),t.next())}function q(){u.value===r.RANDOM_PLAY?u.value=r.ORDER:u.value+=1}function H(){p.value="",g.value="",m.value=0}return P({playing(i){H(),E(),y.value=i,b.value=`${G}${i.link}`,i.img?O.value=i.img:O.value=B}}),(i,L)=>{const a=se("Icon");return c(),d("div",ae,[e("audio",{ref_key:"audioRef",ref:n,preload:"",onPause:E,onPlay:Y,onCanplay:F,onEnded:K,src:s(b)},null,40,ie),e("div",ue,[e("div",{ref_key:"progressRef",ref:S,onMousedown:W,class:"progress"},[e("div",null,[e("div",{class:"play-progress",style:oe(s(U))},re,4)])],544),e("div",de,[e("div",pe,[e("div",_e,[e("img",{src:s(O),alt:""},null,8,ve)]),e("div",fe,[e("div",ye,[e("p",null,k(s(y).title),1),s(y).author?(c(),d("p",me,[he,e("span",null,k(s(y).author),1)])):v("",!0)]),e("div",ge,[e("p",null,k(s(p)),1),s(p)?(c(),d("p",ke,"/")):v("",!0),e("p",null,k(s(g)),1)])])]),e("div",Pe,[e("div",Te,[e("div",{onClick:Z,class:"prev"},[f(a,{size:"24",color:s(D),type:"md-skip-backward"},null,8,["color"])]),e("div",{class:"start-stop",onClick:X},[s(_)?(c(),M(a,{key:0,class:"b",size:"24",color:"#ffffff",type:"ios-pause"})):(c(),M(a,{key:1,class:"a",size:"26",color:"#ffffff",type:"ios-play"}))]),e("div",{onClick:j,class:"next"},[f(a,{size:"24",color:s(D),type:"md-skip-backward"},null,8,["color"])])])]),e("div",xe,[e("div",{onClick:q,class:"model"},[s(u)===s(r).ORDER?(c(),d("div",Ce,[f(a,{size:"36",type:"ios-list"})])):v("",!0),s(u)===s(r).LIST_LOOP?(c(),d("div",Oe,[f(a,{size:"36",type:"ios-repeat"})])):v("",!0),s(u)===s(r).SING_LOOP?(c(),d("div",Ie,[Re,f(a,{size:"36",type:"ios-repeat"})])):v("",!0),s(u)===s(r).RANDOM_PLAY?(c(),d("div",Ne,[f(a,{size:"36",type:"ios-shuffle"})])):v("",!0)])])])])])}}},ze=J(De,[["__scopeId","data-v-7cc64528"]]);export{ze as default};
