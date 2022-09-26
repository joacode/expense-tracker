"use strict";
exports.id = 14;
exports.ids = [14];
exports.modules = {

/***/ 202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const BoxContainer = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    background: white;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px auto 40px;
    padding: 30px;
    width: 60rem;
    width: ${(props)=>props?.width || "60rem"};
`;
const Box = ({ children , width  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxContainer, {
        width: width,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);
Box.defaultProps = {
    width: "60rem"
};


/***/ }),

/***/ 301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rsuite__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({ onClick , style , appearance , children ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_2__.Button, {
        appearance: appearance,
        style: style,
        onClick: onClick,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);
Button.defaultProps = {
    style: null
};


/***/ }),

/***/ 658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(210);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rsuite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ItemDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(737);





const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(rsuite__WEBPACK_IMPORTED_MODULE_3__.Input)`
    width: auto;
    display: inline-block;
`;
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    margin: 20px;
    padding: 20px;
    border-bottom: 0.5px solid #575a5b4d;
    justify-content: space-between;
    display: flex;
`;
const InputItem = ({ label , onChange , defaultValue , edit ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ItemDetail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                bolder: true,
                children: label
            }),
            edit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                defaultValue: defaultValue,
                onChange: onChange
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ItemDetail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: defaultValue
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputItem);
InputItem.defaultProps = {
    defaultValue: ""
};


/***/ }),

/***/ 737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const Container = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().span)`
    font-weight: ${(props)=>props.bolder ? "bolder" : "normal"};
    margin: 10px;
`;
const ItemDetail = ({ children , bolder  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        bolder: bolder,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemDetail);
ItemDetail.defaultProps = {
    bolder: false
};


/***/ }),

/***/ 316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ch": () => (/* binding */ fetchRecordMessage),
/* harmony export */   "RV": () => (/* binding */ updateRecordMessage),
/* harmony export */   "bj": () => (/* binding */ addRecordMessage)
/* harmony export */ });
/* unused harmony export deleteRecordMessage */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(210);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rsuite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const updateRecordMessage = (p)=>{
    switch(p){
        case "success":
            {
                rsuite__WEBPACK_IMPORTED_MODULE_1__.toaster.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_1__.Message, {
                    type: "success",
                    showIcon: true,
                    children: "Record updated successfully"
                }));
                break;
            }
        case "error":
            {
                rsuite__WEBPACK_IMPORTED_MODULE_1__.toaster.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_1__.Message, {
                    type: "error",
                    showIcon: true,
                    children: "Couldn't update record"
                }));
                break;
            }
        default:
            break;
    }
};
const fetchRecordMessage = (p)=>{
    switch(p){
        case "success":
            {
                rsuite__WEBPACK_IMPORTED_MODULE_1__.toaster.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_1__.Message, {
                    type: "success",
                    showIcon: true,
                    children: "Record updated successfully"
                }));
                break;
            }
        case "error":
            {
                rsuite__WEBPACK_IMPORTED_MODULE_1__.toaster.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_1__.Message, {
                    type: "error",
                    showIcon: true,
                    children: "There was an error fetching the records"
                }));
                break;
            }
        default:
            break;
    }
};
const addRecordMessage = (p)=>{
    switch(p){
        case "success":
            {
                rsuite__WEBPACK_IMPORTED_MODULE_1__.toaster.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_1__.Message, {
                    type: "success",
                    showIcon: true,
                    children: "Record added successfully"
                }));
                break;
            }
        case "error":
            {
                rsuite__WEBPACK_IMPORTED_MODULE_1__.toaster.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_1__.Message, {
                    type: "error",
                    showIcon: true,
                    children: "There was an error adding the record"
                }));
                break;
            }
        default:
            break;
    }
};
const deleteRecordMessage = (p)=>{
    switch(p){
        case "success":
            {
                toaster.push(/*#__PURE__*/ _jsx(Message, {
                    type: "success",
                    showIcon: true,
                    children: "Record deleted successfully"
                }));
                break;
            }
        case "error":
            {
                toaster.push(/*#__PURE__*/ _jsx(Message, {
                    type: "error",
                    showIcon: true,
                    children: "There was an error deleting the record"
                }));
                break;
            }
        default:
            break;
    }
};


/***/ }),

/***/ 954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ RecordsService)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
;// CONCATENATED MODULE: ./utils/apiClient.ts


const { publicRuntimeConfig  } = config_default()();
const apiClient = external_axios_default().create({
    headers: {
        "Content-Type": "application/json"
    },
    baseURL: publicRuntimeConfig.baseURL
});
/* harmony default export */ const utils_apiClient = (apiClient);

;// CONCATENATED MODULE: ./src/services/recordsService.ts

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */ const path = "/api/records";
const RecordsService = {
    find: async ()=>{
        const { data  } = await utils_apiClient.get(path);
        return data;
    },
    findById: async (id)=>{
        const { data  } = await utils_apiClient.get(`${path}/${id}`);
        return data;
    },
    create: async (record)=>{
        const { data  } = await utils_apiClient.post(path, record);
        return data;
    },
    update: async (record)=>{
        // eslint-disable-next-line no-underscore-dangle
        const { data  } = await utils_apiClient.put(`${path}/${record._id}`, record);
        return data;
    },
    delete: async (id)=>{
        const { data  } = await utils_apiClient["delete"](`${path}/${id}`);
        return data;
    }
};


/***/ })

};
;