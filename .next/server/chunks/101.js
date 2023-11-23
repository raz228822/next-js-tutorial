exports.id = 101;
exports.ids = [101];
exports.modules = {

/***/ 77396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ savePost),
/* harmony export */   f: () => (/* binding */ deletePost)
/* harmony export */ });
async function savePost(post) {
    try {
        const method = post?.id ? "PUT" : "POST";
        const response = await fetch(`http://localhost:3000/api/posts/${post?.id || ""}`, {
            method,
            headers: {
                "Context-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        if (!response.ok) {
            alert("Network response was not ok");
            return;
        }
        return response.json();
    } catch (e) {
        console.error(e);
        alert("Error!");
    }
}
async function deletePost(postId) {
    try {
        const response = await fetch(`/api/posts/${postId}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            alert("Network response was not ok") //24:50
            ;
            return {
                message: "Error!!"
            };
        }
        return response.json();
    } catch (error) {
        console.error(error);
        alert("Error!");
    }
}


/***/ }),

/***/ 57114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(90696)


/***/ })

};
;