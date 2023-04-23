import{r as v,w as u,g as ie,o as le,c as se}from"./index-da2c0868.js";const de=["id"],ce={__name:"VueYtframe",props:{videoId:{type:String,required:!1,default:null},videoUrl:{type:String,required:!1,default:null},width:{type:[Number,String],required:!1,default:"100%"},height:{type:[Number,String],required:!1,default:"100%"},playerVars:{type:Object,required:!1,default:()=>({})}},emits:["ready","playing","paused","ended","stateChange","playbackQualityChange","playbackRateChange","error","apiChange"],setup(h,{expose:V,emit:r}){const n=h,t=v(null);u([()=>n.videoId,()=>n.videoUrl],([e,a])=>{s(e,a)}),u([()=>n.width,()=>n.height],([e,a])=>{t.value&&c(e,a)}),u(()=>n.videoId,e=>{var a;t.value&&e&&(((a=n.playerVars)==null?void 0:a.autoplay)===1?y({videoId:e,startSeconds:n.playerVars.start||0,endSeconds:n.playerVars.end||0}):f({videoId:e,startSeconds:n.playerVars.start||0,endSeconds:n.playerVars.end||0}))}),u(()=>n.videoUrl,e=>{var a;t.value&&e&&((a=n.playerVars)!=null&&a.autoplay?p({videoUrl:e,startSeconds:n.playerVars.start||0,endSeconds:n.playerVars.end||0}):g({videoUrl:e,startSeconds:n.playerVars.start||0,endSeconds:n.playerVars.end||0}))});function s(e,a){!e&&!a&&console.error('At least one of the props "videoId" or "videoUrl" must be provided.'),!e&&a&&(l(a)||console.error(`The provided video URL (${a}) is not a valid Youtube URL.`,"If you are sure it is a valid YouTube URL and you are still getting this error,","please open an issue on GitHub at https://github.com/kiranparajuli589/vue3-ytframe/issues/new"))}const i=v(null);ie(async()=>{i.value=Math.random().toString(36).substring(2,12),s(n.videoId,n.videoUrl),m().then(()=>{d().then(()=>{P()})})});function m(){if(document.querySelector("script[src='https://www.youtube.com/iframe_api']"))return Promise.resolve();const e=document.createElement("script");return e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e),console.info("Youtube API script added"),Promise.resolve()}function d(){return window.YT&&window.YT.Player?Promise.resolve():new Promise(e=>{setTimeout(()=>{d().then(()=>{e()})},100)})}function P(){const e=document.getElementById(i.value),a=n.videoId||l(n.videoUrl);t.value=new YT.Player(e,{height:n.height,width:n.width,videoId:a,playerVars:n.playerVars,events:{onReady:b,onStateChange:w,onPlaybackQualityChange:S,onPlaybackRateChange:k,onError:I,onApiChange:C}})}function b(e){r("ready",e.target)}function w(e){switch(e.data){case window.YT.PlayerState.PLAYING:r("playing",e.target);break;case window.YT.PlayerState.PAUSED:r("paused",e.target);break;case window.YT.PlayerState.ENDED:r("ended",e.target);break}r("stateChange",e.target)}function S(e){r("playbackQualityChange",e.target)}function k(e){r("playbackRateChange",e.target)}function I(e){r("error",e.target)}function C(e){r("apiChange",e.target)}function R(){t.value.playVideo()}function A(){t.value.pauseVideo()}function T(){t.value.stopVideo()}function Y(e,a){t.value.seekTo(e,a)}function U(){t.value.nextVideo()}function B(){t.value.previousVideo()}function E(e){t.value.playVideoAt(e)}function _(){t.value.mute()}function L(){t.value.unMute()}function x(){return t.value.isMuted()}function O(e){t.value.setVolume(e)}function q(){return t.value.getVolume()}function c(e,a){t.value.setSize(e,a)}function D(e){t.value.setLoop(e)}function M(e){t.value.setShuffle(e)}function N(){return t.value.getDuration()}function Q(){return t.value.getCurrentTime()}function z(){return t.value.getVideoEmbedCode()}function F(){return t.value.getVideoUrl()}function j(){return t.value.getVideoLoadedFraction()}function G(){return t.value.getPlayerState()}function $(){return t.value.getPlaybackRate()}function H(e){t.value.setPlaybackRate(e)}function Z(){return t.value.getAvailablePlaybackRates()}function J(){return t.value.getOptions()}function K(e,a){return t.value.getOption(e,a)}function W(e,a,o){t.value.setOption(e,a,o)}function X(){return t.value.getSphericalProperties()}function ee(e){t.value.setSphericalProperties(e)}function te(){return t.value.getPlaylist()}function ae(){return t.value.getPlaylistIndex()}function ne(){return t.value.getIframe()}function oe(){t.value.destroy()}function y({videoId:e,startSeconds:a,endSeconds:o}={}){t.value.loadVideoById({videoId:e,startSeconds:a,endSeconds:o})}function f({videoId:e,startSeconds:a,endSeconds:o}={}){t.value.cueVideoById({videoId:e,startSeconds:a,endSeconds:o})}function p({mediaContentUrl:e,startSeconds:a,endSeconds:o}={}){t.value.loadVideoByUrl({mediaContentUrl:e,startSeconds:a,endSeconds:o})}function g({mediaContentUrl:e,startSeconds:a,endSeconds:o}={}){t.value.cueVideoByUrl({mediaContentUrl:e,startSeconds:a,endSeconds:o})}function re(e,a,o){t.value.cuePlaylist(e,a,o)}function ue(e,a,o){t.value.loadPlaylist(e,a,o)}function l(e){const a=/^https:\/\/(?:(?:www|m)\.)?(?:youtube\.com\/watch\?v=|youtu.be\/|youtube\.com\/embed\/)(?<id>[a-zA-Z0-9_-]+)$/gm;a.lastIndex=0;const o=a.exec(e);return o?o.groups.id:null}return V({player:t,playVideo:R,pauseVideo:A,stopVideo:T,seekTo:Y,nextVideo:U,previousVideo:B,playVideoAt:E,mute:_,unMute:L,isMuted:x,setVolume:O,getVolume:q,setSize:c,setShuffle:M,setLoop:D,getDuration:N,getCurrentTime:Q,getVideoEmbedCode:z,getVideoUrl:F,getVideoLoadedFraction:j,getPlayerState:G,getPlaybackRate:$,setPlaybackRate:H,getAvailablePlaybackRates:Z,getOptions:J,getAnOption:K,setAnOption:W,getSphericalProperties:X,setSphericalProperties:ee,getPlaylist:te,getPlaylistIndex:ae,getIframe:ne,destroy:oe,loadVideoById:y,cueVideoById:f,loadVideoByUrl:p,cueVideoByUrl:g,cuePlaylist:re,loadPlaylist:ue,getVideoIdFromYoutubeURL:l}),(e,a)=>(le(),se("div",{ref:"youtube",id:i.value},null,8,de))}},fe=ce;export{fe as V};
