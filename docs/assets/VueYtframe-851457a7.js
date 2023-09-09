import{r as f,w as y,g as ge,o as he,c as Ve}from"./index-0f68746e.js";const me=["id"],be={__name:"VueYtframe",props:{videoId:{type:String,required:!1,default:null},videoUrl:{type:String,required:!1,default:null},width:{type:[Number,String],required:!1,default:"100%"},height:{type:[Number,String],required:!1,default:"100%"},playerVars:{type:Object,required:!1,default:()=>({})}},emits:["ready","playing","paused","ended","stateChange","playbackQualityChange","playbackRateChange","error","apiChange"],setup(S,{expose:I,emit:r}){const n=S,t=f(null),u=f(!1);y([()=>n.width,()=>n.height],([e,a])=>{t.value&&v(e,a)}),y(()=>n.videoId,e=>{b(()=>{C(e)},300)()});function C(e){var a;l(),u.value&&(t.value?((a=n.playerVars)==null?void 0:a.autoplay)===1?g({videoId:e,startSeconds:n.playerVars.start||0,endSeconds:n.playerVars.end||0}):h({videoId:e,startSeconds:n.playerVars.start||0,endSeconds:n.playerVars.end||0}):d())}y(()=>n.videoUrl,e=>{b(()=>{k(e)},500)()});function k(e){var a;l(),u.value&&(t.value?(a=n.playerVars)!=null&&a.autoplay?V({mediaContentUrl:e,startSeconds:n.playerVars.start||0,endSeconds:n.playerVars.end||0}):m({mediaContentUrl:e,startSeconds:n.playerVars.start||0,endSeconds:n.playerVars.end||0}):d())}function l(){const e=n.videoId,a=n.videoUrl;if(!e&&!a){u.value=!1,console.error("At least one of the props 'videoId' or 'videoUrl' must be provided.");return}if(!e&&a&&!c(a)){console.error(`The provided video URL (${a}) is not a valid Youtube URL.`,"If you are sure it is a valid YouTube URL and you are still getting this error,","please open an issue on GitHub at https://github.com/kiranparajuli589/vue3-ytframe/issues/new"),u.value=!1;return}u.value=!0}const s=f(null);ge(async()=>{s.value=Math.random().toString(36).substring(2,12),l(n.videoId,n.videoUrl),U().then(()=>{p().then(()=>{u.value&&d()})})});function U(){if(document.querySelector("script[src='https://www.youtube.com/iframe_api']"))return Promise.resolve();const e=document.createElement("script");return e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e),console.info("Youtube API script added to the HTML document."),Promise.resolve()}function p(){return window.YT&&window.YT.Player?Promise.resolve():new Promise(e=>{setTimeout(()=>{p().then(()=>{e()})},100)})}function d(){const e=document.getElementById(s.value),a=n.videoId||c(n.videoUrl);t.value=new YT.Player(e,{height:n.height,width:n.width,videoId:a,playerVars:n.playerVars,events:{onReady:T,onStateChange:R,onPlaybackQualityChange:A,onPlaybackRateChange:Y,onError:B,onApiChange:E}})}function T(e){r("ready",e.target)}function R(e){switch(e.data){case window.YT.PlayerState.PLAYING:r("playing",e.target);break;case window.YT.PlayerState.PAUSED:r("paused",e.target);break;case window.YT.PlayerState.ENDED:r("ended",e.target);break}r("stateChange",e.target)}function A(e){r("playbackQualityChange",e.target)}function Y(e){r("playbackRateChange",e.target)}function B(e){r("error",e.target)}function E(e){r("apiChange",e.target)}function L(){t.value.playVideo()}function _(){t.value.pauseVideo()}function x(){t.value.stopVideo()}function M(e,a){t.value.seekTo(e,a)}function O(){t.value.nextVideo()}function q(){t.value.previousVideo()}function D(e){t.value.playVideoAt(e)}function N(){t.value.mute()}function Q(){t.value.unMute()}function z(){return t.value.isMuted()}function F(e){t.value.setVolume(e)}function j(){return t.value.getVolume()}function v(e,a){t.value.setSize(e,a)}function G(e){t.value.setLoop(e)}function H(e){t.value.setShuffle(e)}function $(){return t.value.getDuration()}function Z(){return t.value.getCurrentTime()}function J(){return t.value.getVideoEmbedCode()}function K(){return t.value.getVideoUrl()}function W(){return t.value.getVideoLoadedFraction()}function X(){return t.value.getPlayerState()}function ee(){return t.value.getPlaybackRate()}function te(e){t.value.setPlaybackRate(e)}function ae(){return t.value.getAvailablePlaybackRates()}function ne(){return t.value.getOptions()}function oe(e,a){return t.value.getOption(e,a)}function re(e,a,o){t.value.setOption(e,a,o)}function ue(){return t.value.getSphericalProperties()}function ie(e){t.value.setSphericalProperties(e)}function le(){return t.value.getPlaylist()}function se(){return t.value.getPlaylistIndex()}function de(){return t.value.getIframe()}function ce(){t.value.destroy(),t.value=null}function g({videoId:e,startSeconds:a,endSeconds:o}={}){t.value.loadVideoById({videoId:e,startSeconds:a,endSeconds:o})}function h({videoId:e,startSeconds:a,endSeconds:o}={}){t.value.cueVideoById({videoId:e,startSeconds:a,endSeconds:o})}function V({mediaContentUrl:e,startSeconds:a,endSeconds:o}={}){t.value.loadVideoByUrl({mediaContentUrl:e,startSeconds:a,endSeconds:o})}function m({mediaContentUrl:e,startSeconds:a,endSeconds:o}={}){t.value.cueVideoByUrl({mediaContentUrl:e,startSeconds:a,endSeconds:o})}function fe(e,a,o){t.value.cuePlaylist(e,a,o)}function ye(e,a,o){t.value.loadPlaylist(e,a,o)}function c(e){const a=/^https:\/\/(?:(?:www|m)\.)?(?:youtube\.com\/watch\?v=|youtu.be\/|youtube\.com\/embed\/)(?<id>[a-zA-Z0-9_-]+)(?:\&.*)$/gm;a.lastIndex=0;const o=a.exec(e);return o?o.groups.id:null}function b(e,a,o){var i;return function(){var P=this,w=arguments,pe=function(){i=null,o||e.apply(P,w)},ve=o&&!i;clearTimeout(i),i=setTimeout(pe,a),ve&&e.apply(P,w)}}return I({player:t,playVideo:L,pauseVideo:_,stopVideo:x,seekTo:M,nextVideo:O,previousVideo:q,playVideoAt:D,mute:N,unMute:Q,isMuted:z,setVolume:F,getVolume:j,setSize:v,setShuffle:H,setLoop:G,getDuration:$,getCurrentTime:Z,getVideoEmbedCode:J,getVideoUrl:K,getVideoLoadedFraction:W,getPlayerState:X,getPlaybackRate:ee,setPlaybackRate:te,getAvailablePlaybackRates:ae,getOptions:ne,getAnOption:oe,setAnOption:re,getSphericalProperties:ue,setSphericalProperties:ie,getPlaylist:le,getPlaylistIndex:se,getIframe:de,destroy:ce,loadVideoById:g,cueVideoById:h,loadVideoByUrl:V,cueVideoByUrl:m,cuePlaylist:fe,loadPlaylist:ye,getVideoIdFromYoutubeURL:c}),(e,a)=>(he(),Ve("div",{ref:"youtube",id:s.value},null,8,me))}},we=be;export{we as V};