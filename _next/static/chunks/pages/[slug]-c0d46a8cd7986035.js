(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{1587:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return i(9734)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(6495).Z,a=i(2648).Z,r=i(1598).Z,s=i(7273).Z,l=r(i(7294)),o=a(i(2636)),c=i(7757),u=i(3735),d=i(3341);i(4210);var m=a(i(7746));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,a,r,s,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&s(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,r=!1;a.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let b=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:a,widthInt:r,qualityInt:o,className:c,imgStyle:u,blurStyle:d,isLazy:m,fill:f,placeholder:h,loading:g,srcString:b,config:_,unoptimized:v,loader:w,onLoadRef:y,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:S,onLoad:E,onError:A}=e,C=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=m?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},C,{loading:g,width:r,height:a,decoding:"async","data-nimg":f?"fill":"1",className:c,style:n({},u,d)},i,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(A&&(e.src=e.src),e.complete&&p(e,b,h,y,x,j,v))},[b,h,y,x,j,A,v,t]),onLoad:e=>{let t=e.currentTarget;p(t,b,h,y,x,j,v)},onError:e=>{S(!0),"blur"===h&&j(!0),A&&A(e)}})))}),_=l.forwardRef((e,t)=>{let i,a;var r,{src:p,sizes:_,unoptimized:v=!1,priority:w=!1,loading:y,className:x,quality:j,width:S,height:E,fill:A,style:C,onLoad:z,onLoadingComplete:N,placeholder:k="empty",blurDataURL:O,layout:P,objectFit:R,objectPosition:M,lazyBoundary:I,lazyRoot:L}=e,T=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=l.useContext(d.ImageConfigContext),B=l.useMemo(()=>{let e=f||F||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[F]),D=T,V=D.loader||m.default;delete D.loader;let W="__next_img_default"in V;if(W){if("custom"===B.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=V;V=t=>{let{config:i}=t,n=s(t,["config"]);return e(n)}}if(P){"fill"===P&&(A=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(C=n({},C,e));let t={responsive:"100vw",fill:"100vw"}[P];t&&!_&&(_=t)}let q="",G=g(S),Z=g(E);if("object"==typeof(r=p)&&(h(r)||void 0!==r.src)){let e=h(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,a=e.blurHeight,O=O||e.blurDataURL,q=e.src,!A){if(G||Z){if(G&&!Z){let t=G/e.width;Z=Math.round(e.height*t)}else if(!G&&Z){let t=Z/e.height;G=Math.round(e.width*t)}}else G=e.width,Z=e.height}}let H=!w&&("lazy"===y||void 0===y);((p="string"==typeof p?p:q).startsWith("data:")||p.startsWith("blob:"))&&(v=!0,H=!1),B.unoptimized&&(v=!0),W&&p.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(v=!0);let[U,X]=l.useState(!1),[J,Y]=l.useState(!1),$=g(j),K=Object.assign(A?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:M}:{},J?{}:{color:"transparent"},C),Q="blur"===k&&O&&!U?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:G,heightInt:Z,blurWidth:i,blurHeight:a,blurDataURL:O,objectFit:K.objectFit}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:n,width:a,quality:r,sizes:s,loader:l}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:a}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let r=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:r,kind:"x"}}(t,a,s),u=o.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:o.map((e,n)=>"".concat(l({config:t,src:i,quality:r,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:i,quality:r,width:o[u]})}}({config:B,src:p,unoptimized:v,width:G,quality:$,sizes:_,loader:V}),et=p,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:D.crossOrigin},en=l.useRef(z);l.useEffect(()=>{en.current=z},[z]);let ea=l.useRef(N);l.useEffect(()=>{ea.current=N},[N]);let er=n({isLazy:H,imgAttributes:ee,heightInt:Z,widthInt:G,qualityInt:$,className:x,imgStyle:K,blurStyle:Q,loading:y,config:B,fill:A,unoptimized:v,placeholder:k,loader:V,srcString:et,onLoadRef:en,onLoadingCompleteRef:ea,setBlurComplete:X,setShowAltText:Y},D);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},er,{ref:t})),w?l.default.createElement(o.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:a,blurDataURL:r,objectFit:s}=e,l=n||t,o=a||i,c=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&a?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},9734:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return h},default:function(){return g}});var n=i(5893),a=i(7294),r=i(1163),s=i(9008),l=i.n(s),o=i(5675),c=i.n(o),u=i(2998),d=i.n(u),m=i(1664),f=i.n(m),h=!0;function g(e){let{album:t}=e,i=(0,r.useRouter)(),{slug:s}=i.query,[o,u]=(0,a.useState)(!1),[m,h]=(0,a.useState)(!1),[g,p]=(0,a.useState)(!1);(0,a.useEffect)(()=>{{let e=navigator.userAgent.toLowerCase(),t=/mobile|iphone|ipod|ipad|android|blackberry|webos|windows phone|iemobile|opera mini/i.test(e);p(t)}},[]);let b=()=>{h(!m)},_=()=>{u(!0)},v=()=>{u(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsxs)("title",{children:["miop • ",s]}),(0,n.jsx)("meta",{name:"description",content:"".concat(t.title,"(").concat(t.type,", ").concat(t.year,") by miop")}),(0,n.jsx)("meta",{name:"keywords",content:"miop, miop.artist, miop-artist, ".concat(t.title)}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",href:"/favicon.png",sizes:"32x32"})]}),(0,n.jsx)("main",{className:d().main,children:(0,n.jsxs)("div",{className:d().screen,children:[(0,n.jsx)("nav",{className:d().header,children:(0,n.jsx)(f(),{href:"/",dangerouslySetInnerHTML:{__html:"&lt; miop"}})}),(0,n.jsx)("section",{className:d().album,children:t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c(),{src:"/images/".concat(s,"_2.png"),alt:"",width:1,height:1,priority:!0,"aria-hidden":"true",style:{display:"none"}}),(0,n.jsx)(c(),{src:o?"/images/".concat(s,"_2.png"):"/images/".concat(s,"_1.png"),alt:"".concat(t.title," cover"),width:400,height:400,priority:!0,onClick:g?b:void 0,onMouseEnter:g?void 0:_,onMouseLeave:g?void 0:v}),(0,n.jsxs)("div",{className:d()["album-info"],children:[(0,n.jsxs)("p",{className:d()["album-title-wrap"],children:[(0,n.jsxs)("span",{className:d()["album-title"],children:[t.title,"\xa0",(0,n.jsx)("i",{className:d()["album-duration"],children:t.duration})]}),(0,n.jsxs)("span",{children:[t.type,", ",t.year]})]}),(0,n.jsx)("p",{className:d()["album-description"],children:t.description}),(0,n.jsxs)("div",{className:d().credits,children:[(0,n.jsxs)("p",{children:["cover:\xa0",(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:t.credits.designer}})]}),(0,n.jsxs)("p",{children:["mastering:\xa0",(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:t.credits.mastering}})]})]})]})]}):(0,n.jsx)("p",{children:"album not found."})}),(0,n.jsx)("div",{className:d().socials,children:(0,n.jsx)("a",{href:"https://linktr.ee/miop.artist/",target:"_blank",className:d().listen,children:"listen"})})]})})]})}},2998:function(e){e.exports={main:"Album_main__gVsZO",header:"Album_header__tzO9P",screen:"Album_screen__tV7P5",socials:"Album_socials__F90t8",listen:"Album_listen__MOAum",album:"Album_album__OiWRw","album-info":"Album_album-info__jwwSh","album-title":"Album_album-title__OapBc","album-title-wrap":"Album_album-title-wrap__X84zz","album-duration":"Album_album-duration__dbdkl","album-description":"Album_album-description__Vp4P1",credits:"Album_credits__bTPj9",hoverImage:"Album_hoverImage__hpuXh",title:"Album_title__vPUmn",releases:"Album_releases__RbD7v",about:"Album_about__hmp_V"}},5675:function(e,t,i){e.exports=i(3740)},1163:function(e,t,i){e.exports=i(6885)}},function(e){e.O(0,[996,774,888,179],function(){return e(e.s=1587)}),_N_E=e.O()}]);