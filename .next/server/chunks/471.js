"use strict";
exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 57696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ firestore)
});

// EXTERNAL MODULE: external "firebase-admin"
var external_firebase_admin_ = __webpack_require__(92509);
var external_firebase_admin_default = /*#__PURE__*/__webpack_require__.n(external_firebase_admin_);
// EXTERNAL MODULE: external "firebase-admin/app"
var app_ = __webpack_require__(60325);
;// CONCATENATED MODULE: ./src/firebase/config.ts
/* harmony default export */ const config = ({
    "type": process.env.FIREBASE_FIREBASE_TYPE,
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_PROJECT_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY,
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CLIENT_ID,
    "auth_uri": process.env.FIREBASE_AUTH_URI,
    "token_uri": process.env.FIREBASE_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
});

;// CONCATENATED MODULE: ./src/firebase/index.ts



if (!(0,app_.getApps)().length) {
    external_firebase_admin_default().initializeApp({
        credential: external_firebase_admin_default().credential.cert(config)
    });
}
const firestore = external_firebase_admin_default().firestore();


/***/ }),

/***/ 87471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jq: () => (/* binding */ getPosts),
/* harmony export */   xl: () => (/* binding */ getPost),
/* harmony export */   zS: () => (/* binding */ isPostValid)
/* harmony export */ });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57696);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64980);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);


async function getPosts() {
    const snapshot = await _firebase__WEBPACK_IMPORTED_MODULE_0__/* .firestore */ .R.collection("posts").orderBy("updatedAt", "desc").get();
    const posts = snapshot.docs.map((doc)=>{
        const { title, body } = doc.data();
        return {
            id: doc.id,
            title,
            body
        };
    });
    return posts;
}
async function getPost(postId) {
    const document = await _firebase__WEBPACK_IMPORTED_MODULE_0__/* .firestore */ .R.collection("posts").doc(postId).get();
    const data = document.data();
    if (!(document.exists && data)) {
        (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.redirect)("/posts");
    }
    return {
        id: document.id,
        title: data.title,
        body: data.body,
        updateBy: data.updatedBy,
        updatedAt: data.updatedAt
    };
}
function isPostValid(post) {
    return post.title && post.body && post.title.length > 3 && post.body.length > 3;
}


/***/ })

};
;