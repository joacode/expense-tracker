"use strict";
exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "rsuite/Container"
var Container_ = __webpack_require__(356);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "rsuite/Content"
var Content_ = __webpack_require__(521);
var Content_default = /*#__PURE__*/__webpack_require__.n(Content_);
// EXTERNAL MODULE: external "rsuite/Footer"
var Footer_ = __webpack_require__(206);
var Footer_default = /*#__PURE__*/__webpack_require__.n(Footer_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./styles/theme.ts
const theme = {
    colors: {
        blue: {
            light: "#d6efff",
            normal: "#8ed2ff"
        },
        green: "#aeffb4",
        grey: "#403e59"
    }
};

;// CONCATENATED MODULE: ./src/components/UI/Layout/Header.tsx





const Container = (external_styled_components_default()).div`
    display: flex;
    width: 100%;
    background: ${theme.colors.blue.normal};
`;
const HeaderItem = (external_styled_components_default()).div`
    background: ${theme.colors.grey};
    color: white;
    padding: 10px;
    margin: 0 10px;
    cursor: pointer;
    width: fit-content;
    height: 100%;
`;
const Header = ()=>{
    const router = (0,router_.useRouter)();
    const handleClick = (e, path)=>{
        e.stopPropagation();
        router.push(`/${path}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                onClick: (e)=>handleClick(e, "records"),
                children: "Home"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderItem, {
                onClick: (e)=>handleClick(e, "records"),
                children: "About"
            })
        ]
    });
};
/* harmony default export */ const Layout_Header = (Header);

// EXTERNAL MODULE: ./src/components/UI/Layout/Loading.tsx
var Loading = __webpack_require__(362);
;// CONCATENATED MODULE: ./src/components/UI/Layout/Layout.tsx









const StyledContainer = external_styled_components_default()((Container_default()))`
    min-height: 100vh;
    max-width: 100%;
    background: ${theme.colors.green};
`;
const Layout = ({ children , loading  })=>{
    if (loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Loading/* Loading */.g, {});
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((Content_default()), {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Footer_default()), {})
        ]
    });
};
Layout.defaultProps = {
    children: undefined,
    loading: false
};
/* harmony default export */ const Layout_Layout = (Layout);


/***/ }),

/***/ 362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rsuite__WEBPACK_IMPORTED_MODULE_2__);



const Loading = ({ label  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_2__.Loader, {
        center: true,
        content: label,
        vertical: true,
        size: "lg"
    });
};
Loading.defaultProps = {
    label: "Loading..."
};


/***/ })

};
;