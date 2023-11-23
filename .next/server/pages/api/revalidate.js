"use strict";
(() => {
var exports = {};
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 36402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(request, response) {
    if (false) {}
    if (request.method == "POST") {
        const { secret, paths } = request.body;
        if (secret !== process.env.REVALIDATE_SECRET) {
            return response.status(401).json({
                message: "Invalid Secret"
            });
        }
        try {
            await Promise.all(paths.map(response.revalidate));
            console.log("Revalidated successfully");
            return response.json({
                message: "Revalidated successfully"
            });
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Internal Server Error"
            });
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(36402));
module.exports = __webpack_exports__;

})();