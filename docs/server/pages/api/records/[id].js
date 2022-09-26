"use strict";
(() => {
var exports = {};
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 240:
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
                const record = await src_models_record__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(req.query.id).exec();
                const data = JSON.parse(JSON.stringify(record));
                res.status(200).json(data);
                break;
            }
        case "PUT":
            {
                await (0,utils_connectMongo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
                const record1 = await src_models_record__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateOne */ .Z.updateOne(// eslint-disable-next-line no-underscore-dangle
                {
                    id: req.body._id
                }, {
                    title: req.body.title,
                    detail: req.body.detail,
                    amount: req.body.amount,
                    date: req.body.date
                });
                const data1 = JSON.parse(JSON.stringify(record1));
                res.status(200).json(data1);
                break;
            }
        case "DELETE":
            {
                await (0,utils_connectMongo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
                const record2 = await src_models_record__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteOne */ .Z.deleteOne({
                    _id: req.query.id
                });
                const data2 = JSON.parse(JSON.stringify(record2));
                res.status(200).json(data2);
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(240));
module.exports = __webpack_exports__;

})();