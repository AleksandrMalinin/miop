(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 8108:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Album_main__gVsZO",
	"header": "Album_header__tzO9P",
	"screen": "Album_screen__tV7P5",
	"socials": "Album_socials__F90t8",
	"listen": "Album_listen__MOAum",
	"album": "Album_album__OiWRw",
	"album-info": "Album_album-info__jwwSh",
	"album-title": "Album_album-title__OapBc",
	"album-title-wrap": "Album_album-title-wrap__X84zz",
	"album-duration": "Album_album-duration__dbdkl",
	"album-description": "Album_album-description__Vp4P1",
	"credits": "Album_credits__bTPj9",
	"hoverImage": "Album_hoverImage__hpuXh",
	"title": "Album_title__vPUmn",
	"releases": "Album_releases__RbD7v",
	"about": "Album_about__hmp_V"
};


/***/ }),

/***/ 4228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Album),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/styles/Album.module.css
var Album_module = __webpack_require__(8108);
var Album_module_default = /*#__PURE__*/__webpack_require__.n(Album_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./public/albums.json
var albums = __webpack_require__(3867);
;// CONCATENATED MODULE: ./src/pages/[slug].tsx







function Album({ album  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const { slug  } = router.query;
    const [isHovered, setIsHovered] = (0,external_react_.useState)(false);
    const handleMouseEnter = ()=>{
        setIsHovered(true);
    };
    const handleMouseLeave = ()=>{
        setIsHovered(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: (Album_module_default()).main,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Album_module_default()).screen,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: (Album_module_default()).header,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        dangerouslySetInnerHTML: {
                            __html: "&lt; mi☮p"
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: (Album_module_default()).album,
                    children: album ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: `/images/${slug}_2.png`,
                                alt: "",
                                layout: "fixed",
                                width: 1,
                                height: 1,
                                priority: true,
                                "aria-hidden": "true",
                                style: {
                                    display: "none"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: isHovered ? `/images/${slug}_2.png` : `/images/${slug}_1.png`,
                                alt: `${album.title} cover`,
                                width: 400,
                                height: 400,
                                priority: true,
                                onMouseEnter: handleMouseEnter,
                                onMouseLeave: handleMouseLeave
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Album_module_default())["album-info"],
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: (Album_module_default())["album-title-wrap"],
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: (Album_module_default())["album-title"],
                                                children: [
                                                    album.title,
                                                    "\xa0",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: (Album_module_default())["album-duration"],
                                                        children: album.duration
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "EP, ",
                                                    album.year
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Album_module_default())["album-description"],
                                        children: album.description
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Album_module_default()).credits,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "cover:\xa0",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: album.credits.designer
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "mastering:\xa0",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: album.credits.mastering
                                                        }
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "album not found."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Album_module_default()).socials,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://linktr.ee/miop.artist/",
                        target: "_blank",
                        className: (Album_module_default()).listen,
                        children: "listen"
                    })
                })
            ]
        })
    });
}
const getStaticProps = async ({ params  })=>{
    const { slug  } = params;
    // @ts-ignore
    const album = albums[slug];
    return {
        props: {
            album
        }
    };
};
const getStaticPaths = async ()=>{
    const paths = Object.keys(albums).map((slug)=>({
            params: {
                slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};


/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675,867], () => (__webpack_exec__(4228)));
module.exports = __webpack_exports__;

})();