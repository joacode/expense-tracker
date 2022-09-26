"use strict";
(() => {
var exports = {};
exports.id = 372;
exports.ids = [372];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var src_models_record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(984);
/* harmony import */ var utils_connectMongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(910);


/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */ async function handler(req, res) {
    switch(req.method){
        case "GET":
            {
                await (0,utils_connectMongo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
                const records = await src_models_record__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find({});
                const data = JSON.parse(JSON.stringify(records));
                res.status(200).json(data);
                break;
            }
        case "POST":
            {
                await (0,utils_connectMongo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
                const record = await new src_models_record__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(req.body).save();
                res.status(200).json({
                    record
                });
                break;
            }
        default:
            break;
    }
};


/***/ }),

/***/ 984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const recordSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    title: {
        type: String,
        required: true
    },
    detail: String,
    amount: {
        type: Number,
        required: true
    },
    date: String
});
const Record = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Record) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Record", recordSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Record);


/***/ }),

/***/ 910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectMongo = async ()=>{
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(189));
module.exports = __webpack_exports__;

})();