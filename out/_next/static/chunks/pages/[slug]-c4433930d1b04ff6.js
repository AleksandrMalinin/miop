(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{1587:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return i(9734)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(6495).Z,n=i(2648).Z,r=i(1598).Z,s=i(7273).Z,l=r(i(7294)),o=n(i(2636)),c=i(7757),u=i(3735),d=i(3341);i(4210);var m=n(i(7746));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,n,r,s,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&s(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,r=!1;n.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let b=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:n,widthInt:r,qualityInt:o,className:c,imgStyle:u,blurStyle:d,isLazy:m,fill:f,placeholder:h,loading:g,srcString:b,config:w,unoptimized:v,loader:_,onLoadRef:y,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:E,onLoad:S,onError:A}=e,C=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=m?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},C,{loading:g,width:r,height:n,decoding:"async","data-nimg":f?"fill":"1",className:c,style:a({},u,d)},i,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(A&&(e.src=e.src),e.complete&&p(e,b,h,y,x,j,v))},[b,h,y,x,j,A,v,t]),onLoad:e=>{let t=e.currentTarget;p(t,b,h,y,x,j,v)},onError:e=>{E(!0),"blur"===h&&j(!0),A&&A(e)}})))}),w=l.forwardRef((e,t)=>{let i,n;var r,{src:p,sizes:w,unoptimized:v=!1,priority:_=!1,loading:y,className:x,quality:j,width:E,height:S,fill:A,style:C,onLoad:P,onLoadingComplete:N,placeholder:z="empty",blurDataURL:I,layout:O,objectFit:R,objectPosition:k,lazyBoundary:M,lazyRoot:L}=e,T=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(d.ImageConfigContext),F=l.useMemo(()=>{let e=f||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:i})},[D]),B=T,V=B.loader||m.default;delete B.loader;let W="__next_img_default"in V;if(W){if("custom"===F.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=V;V=t=>{let{config:i}=t,a=s(t,["config"]);return e(a)}}if(O){"fill"===O&&(A=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(C=a({},C,e));let t={responsive:"100vw",fill:"100vw"}[O];t&&!w&&(w=t)}let q="",H=g(E),Z=g(S);if("object"==typeof(r=p)&&(h(r)||void 0!==r.src)){let e=h(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,n=e.blurHeight,I=I||e.blurDataURL,q=e.src,!A){if(H||Z){if(H&&!Z){let t=H/e.width;Z=Math.round(e.height*t)}else if(!H&&Z){let t=Z/e.height;H=Math.round(e.width*t)}}else H=e.width,Z=e.height}}let G=!_&&("lazy"===y||void 0===y);((p="string"==typeof p?p:q).startsWith("data:")||p.startsWith("blob:"))&&(v=!0,G=!1),F.unoptimized&&(v=!0),W&&p.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(v=!0);let[U,X]=l.useState(!1),[J,Y]=l.useState(!1),$=g(j),K=Object.assign(A?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:k}:{},J?{}:{color:"transparent"},C),Q="blur"===z&&I&&!U?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:H,heightInt:Z,blurWidth:i,blurHeight:n,blurDataURL:I,objectFit:K.objectFit}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:a,width:n,quality:r,sizes:s,loader:l}=e;if(a)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,i){let{deviceSizes:a,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(i);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let r=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:r,kind:"x"}}(t,n,s),u=o.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:o.map((e,a)=>"".concat(l({config:t,src:i,quality:r,width:e})," ").concat("w"===c?e:a+1).concat(c)).join(", "),src:l({config:t,src:i,quality:r,width:o[u]})}}({config:F,src:p,unoptimized:v,width:H,quality:$,sizes:w,loader:V}),et=p,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},ea=l.useRef(P);l.useEffect(()=>{ea.current=P},[P]);let en=l.useRef(N);l.useEffect(()=>{en.current=N},[N]);let er=a({isLazy:G,imgAttributes:ee,heightInt:Z,widthInt:H,qualityInt:$,className:x,imgStyle:K,blurStyle:Q,loading:y,config:F,fill:A,unoptimized:v,placeholder:z,loader:V,srcString:et,onLoadRef:ea,onLoadingCompleteRef:en,setBlurComplete:X,setShowAltText:Y},B);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},er,{ref:t})),_?l.default.createElement(o.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:a,blurHeight:n,blurDataURL:r,objectFit:s}=e,l=a||t,o=n||i,c=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:a,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(a,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},9734:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var a=i(5893),n=i(7294),r=i(1163),s=i(5675),l=i.n(s),o=i(2998),c=i.n(o),u=i(1664),d=i.n(u),m=i(3867);function f(){let e=(0,r.useRouter)(),{slug:t}=e.query,i=m[t],[s,o]=(0,n.useState)(!1),u=()=>{o(!0)},f=()=>{o(!1)};return(0,a.jsx)("main",{className:c().main,children:(0,a.jsxs)("div",{className:c().screen,children:[(0,a.jsx)("nav",{className:c().header,children:(0,a.jsx)(d(),{href:"/",dangerouslySetInnerHTML:{__html:"&lt; mi☮p"}})}),(0,a.jsx)("section",{className:c().album,children:i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l(),{src:"/images/".concat(t,"_2.png"),alt:"",layout:"fixed",width:1,height:1,priority:!0,"aria-hidden":"true",style:{display:"none"}}),(0,a.jsx)(l(),{src:s?"/images/".concat(t,"_2.png"):"/images/".concat(t,"_1.png"),alt:"".concat(i.title," cover"),width:400,height:400,priority:!0,onMouseEnter:u,onMouseLeave:f}),(0,a.jsxs)("div",{className:c()["album-info"],children:[(0,a.jsxs)("p",{className:c()["album-title-wrap"],children:[(0,a.jsxs)("span",{className:c()["album-title"],children:[i.title,"\xa0",(0,a.jsx)("i",{className:c()["album-duration"],children:i.duration})]}),(0,a.jsxs)("span",{children:["EP, ",i.year]})]}),(0,a.jsx)("p",{className:c()["album-description"],children:i.description}),(0,a.jsxs)("div",{className:c().credits,children:[(0,a.jsxs)("p",{children:["cover:\xa0",(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:i.credits.designer}})]}),(0,a.jsxs)("p",{children:["mastering:\xa0",(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:i.credits.mastering}})]})]})]})]}):(0,a.jsx)("p",{children:"album not found."})}),(0,a.jsx)("div",{className:c().socials,children:(0,a.jsx)("a",{href:"https://linktr.ee/miop.artist/",target:"_blank",className:c().listen,children:"listen"})})]})})}},2998:function(e){e.exports={main:"Album_main__gVsZO",header:"Album_header__tzO9P",screen:"Album_screen__tV7P5",socials:"Album_socials__F90t8",listen:"Album_listen__MOAum",album:"Album_album__OiWRw","album-info":"Album_album-info__jwwSh","album-title":"Album_album-title__OapBc","album-title-wrap":"Album_album-title-wrap__X84zz","album-duration":"Album_album-duration__dbdkl","album-description":"Album_album-description__Vp4P1",credits:"Album_credits__bTPj9",hoverImage:"Album_hoverImage__hpuXh",title:"Album_title__vPUmn",releases:"Album_releases__RbD7v",about:"Album_about__hmp_V"}},5675:function(e,t,i){e.exports=i(3740)},1163:function(e,t,i){e.exports=i(6885)},3867:function(e){"use strict";e.exports=JSON.parse('{"mold":{"title":"mold","year":2023,"duration":"10:59","description":"I recorded this mini-album in Lisbon, adapting to new, unpredictable life circumstances, full of anxiety, uncertainty, caught off guard by my own transformation into some unknown version of myself that I had never seen before. And, literally infected by a new destructive form of freedom that I barely wished to experience, I nevertheless began to see even more beauty, touching and inexpressible things in everything around me. And this led me to the idea, unexpectedly becoming the inspiration for this little album, which was formulated by my friend - it is an internal, indistinct \'dance with lowered hands.\'","credits":{"designer":"<a href=\'https://www.instagram.com/quollibet/\'>Daria Horoshih</a>","mastering":"<a href=\'https://www.instagram.com/aurummusic/\'>Pavel Afanasyev</a>"}},"lemma":{"title":"lemma","year":2022,"duration":"18:48","description":"The album consists of an attempt to overcome destructive fixations and find a secluded and safe point in which it would be possible to discern and comprehend what is happening. Thus even what feels creative at some point turns out to be destructive — growing and growing, it absorbs everything that surrounds you until finally collapses into an indecipherable pulsating point.","credits":{"designer":"<a href=\'https://www.instagram.com/avleriev/\'>avleriev</a>","mastering":"<a href=\'https://www.instagram.com/aurummusic/\'>Pavel Afanasyev</a>"}},"semblance":{"title":"semblance","year":2022,"duration":"18:00","description":"The idea behind this debut EP was an attempt to create dramatic tension in an ascetic and predictable acoustic landscape specific to the minimal. for myself I define this material as a personal experiment, albeit with possible displacements, with the language of a particular genre of electronic music.","credits":{"designer":"<a href=\'https://www.instagram.com/pavelripley/\'>Pavel Ripley</a>","mastering":"<a href=\'https://www.instagram.com/aurummusic/\'>Pavel Afanasyev</a>"}}}')}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=1587)}),_N_E=e.O()}]);