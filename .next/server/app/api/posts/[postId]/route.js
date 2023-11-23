"use strict";
(() => {
var exports = {};
exports.id = 924;
exports.ids = [924];
exports.modules = {

/***/ 92509:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ 60325:
/***/ ((module) => {

module.exports = require("firebase-admin/app");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 10302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/posts/[postId]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./src/firebase/index.ts + 1 modules
var firebase = __webpack_require__(57696);
// EXTERNAL MODULE: external "firebase-admin"
var external_firebase_admin_ = __webpack_require__(92509);
var external_firebase_admin_default = /*#__PURE__*/__webpack_require__.n(external_firebase_admin_);
// EXTERNAL MODULE: ./src/services/posts.server.ts
var posts_server = __webpack_require__(87471);
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(49861);
// EXTERNAL MODULE: ./src/lib/auth.ts
var auth = __webpack_require__(95536);
;// CONCATENATED MODULE: ./src/app/api/posts/[postId]/route.ts






//PUT /api/posts/:postId
async function PUT(request, context) {
    try {
        const { postId } = context.params;
        const post = await request.json();
        const session = await (0,next_auth.getServerSession)(auth/* authOptions */.L);
        if (!(postId && (0,posts_server/* isPostValid */.zS)(post))) {
            return new next_response/* default */.Z("Bad request", {
                status: 400
            });
        }
        await firebase/* firestore */.R.collection("posts").doc(postId).set({
            title: post.title,
            body: post.body,
            updatedBy: session?.user,
            updatedAt: external_firebase_admin_default().firestore.Timestamp.now()
        });
        //adding {merge: true} argument to 'set' function will update the postId data(replacing title only) in the database,
        //and without this argument the postId data will be erased and the new data will replace it(replacing all and not only title)
        console.log("Post edited successfully");
        return next_response/* default */.Z.json({
            message: "Post edited successfully"
        });
    } catch (error) {
        console.error("Error editing post: ", error);
        return new next_response/* default */.Z("Internal Server Error", {
            status: 500
        });
    }
}
// DELETE /api/posts/:postId
async function DELETE(request, context) {
    const { postId } = context.params;
    if (!postId) {
        return new next_response/* default */.Z("Bad Request", {
            status: 400
        });
    }
    try {
        await firebase/* firestore */.R.collection("posts").doc(postId).delete();
        console.log("Post deleted successfully");
        return next_response/* default */.Z.json({
            message: "Post deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting post: ", error);
        return new next_response/* default */.Z("Internal Server Error", {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fposts%2F%5BpostId%5D%2Froute&name=app%2Fapi%2Fposts%2F%5BpostId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fposts%2F%5BpostId%5D%2Froute.ts&appDir=%2FUsers%2Fraz_ben-aharon%2FDesktop%2FProjects%2FNextJS-Tutorial%2Fsrc%2Fapp&appPaths=%2Fapi%2Fposts%2F%5BpostId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/posts/[postId]/route","pathname":"/api/posts/[postId]","filename":"route","bundlePath":"app/api/posts/[postId]/route"},"resolvedPagePath":"/Users/raz_ben-aharon/Desktop/Projects/NextJS-Tutorial/src/app/api/posts/[postId]/route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/posts/[postId]/route"

    

/***/ }),

/***/ 95536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51989);

const authOptions = {
    providers: [
        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin"
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [427,934,565,980,501,335,471], () => (__webpack_exec__(10302)));
module.exports = __webpack_exports__;

})();