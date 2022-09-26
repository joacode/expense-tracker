"use strict";
exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_RecordDetail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "rsuite"
var external_rsuite_ = __webpack_require__(210);
// EXTERNAL MODULE: external "@rsuite/icons/Edit"
var Edit_ = __webpack_require__(65);
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);
// EXTERNAL MODULE: ./src/services/recordsService.ts + 1 modules
var recordsService = __webpack_require__(954);
// EXTERNAL MODULE: ./src/components/UI/Button.tsx
var Button = __webpack_require__(301);
// EXTERNAL MODULE: ./src/components/UI/Layout/Loading.tsx
var Loading = __webpack_require__(362);
// EXTERNAL MODULE: ./src/components/UI/message.tsx
var message = __webpack_require__(316);
;// CONCATENATED MODULE: ./src/components/UI/Title.tsx


const Title = ({ style , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        style: {
            textAlign: "center",
            ...style
        },
        children: children
    });
};
/* harmony default export */ const UI_Title = (Title);
Title.defaultProps = {
    style: null
};

// EXTERNAL MODULE: ./src/components/UI/ItemDetail.tsx
var ItemDetail = __webpack_require__(737);
// EXTERNAL MODULE: ./src/components/UI/Box.tsx
var Box = __webpack_require__(202);
// EXTERNAL MODULE: ./src/components/UI/InputItem.tsx
var InputItem = __webpack_require__(658);
;// CONCATENATED MODULE: ./src/components/RecordDetail.tsx





// eslint-disable-next-line import/no-extraneous-dependencies









const Grid = external_styled_components_default()(external_rsuite_.Grid)`
    height: 100%;
`;
const Container = (external_styled_components_default()).div`
    margin: 20px;
    padding: 20px;
    border-bottom: 0.5px solid #575a5b4d;
    justify-content: space-between;
    display: flex;
`;
const RecordDetail = ({ edit =false  })=>{
    const router = (0,router_.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: record , 1: setRecord  } = (0,external_react_.useState)(null);
    const handleEdit = ()=>{
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        router.push(`/${record._id}/edit`);
    };
    const titleChange = (value)=>{
        setRecord((prevState)=>({
                ...prevState,
                title: value
            }));
    };
    const detailChange = (value)=>{
        setRecord((prevState)=>({
                ...prevState,
                detail: value
            }));
    };
    const amountChange = (value)=>{
        setRecord((prevState)=>({
                ...prevState,
                amount: parseFloat(value)
            }));
    };
    const dateChange = (date)=>{
        setRecord((prevState)=>({
                ...prevState,
                date: date.toString()
            }));
    };
    const checkAndSubmit = (e)=>{
        e.stopPropagation();
        if (record.title !== "" && !Number.isNaN(record.amount)) {
            setLoading(true);
            recordsService/* RecordsService.update */.$.update(record).then(()=>(0,message/* updateRecordMessage */.RV)("success")).catch(()=>(0,message/* updateRecordMessage */.RV)("error")).finally(()=>{
                setLoading(false);
                router.push("/records");
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        setLoading(true);
        recordsService/* RecordsService.findById */.$.findById(router.query.id).then(setRecord).catch(()=>(0,message/* fetchRecordMessage */.Ch)("error")).finally(()=>setLoading(false));
    }, []);
    if (loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Loading/* Loading */.g, {
            label: "Handling request..."
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
        width: "fit-content",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
            style: {
                width: 400
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(UI_Title, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            record?.title,
                            !edit && /*#__PURE__*/ jsx_runtime_.jsx((Edit_default()), {
                                width: "30px",
                                style: {
                                    marginLeft: 20,
                                    cursor: "pointer"
                                },
                                onClick: handleEdit
                            })
                        ]
                    })
                }),
                record && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(InputItem/* default */.Z, {
                            label: "Title:",
                            onChange: titleChange,
                            defaultValue: record.title,
                            edit: edit
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(InputItem/* default */.Z, {
                            label: "Detail:",
                            onChange: detailChange,
                            defaultValue: record.detail,
                            edit: edit
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(InputItem/* default */.Z, {
                            label: "Amount:",
                            onChange: amountChange,
                            defaultValue: record.amount,
                            edit: edit
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ItemDetail/* default */.Z, {
                                    bolder: true,
                                    children: "Date:"
                                }),
                                edit ? /*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.DatePicker, {
                                    placeholder: "Select Date",
                                    style: {
                                        width: 170
                                    },
                                    onSelect: dateChange,
                                    readOnly: !edit,
                                    oneTap: true,
                                    format: "yyyy-MM-dd"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(ItemDetail/* default */.Z, {
                                    children: record?.date?.slice(0, record?.date?.indexOf("T"))
                                })
                            ]
                        }),
                        edit && /*#__PURE__*/ jsx_runtime_.jsx(Container, {
                            style: {
                                borderBottom: "none",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                appearance: "primary",
                                onClick: (e)=>checkAndSubmit(e),
                                children: "Submit"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_RecordDetail = (RecordDetail);
RecordDetail.defaultProps = {
    edit: false
};


/***/ })

};
;