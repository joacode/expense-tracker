"use strict";
(() => {
var exports = {};
exports.id = 959;
exports.ids = [959];
exports.modules = {

/***/ 460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ records)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/components/UI/Layout/Layout.tsx + 2 modules
var Layout = __webpack_require__(642);
// EXTERNAL MODULE: external "rsuite"
var external_rsuite_ = __webpack_require__(210);
// EXTERNAL MODULE: ./src/services/recordsService.ts + 1 modules
var recordsService = __webpack_require__(954);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/UI/Layout/Loading.tsx
var Loading = __webpack_require__(362);
// EXTERNAL MODULE: ./src/components/UI/Button.tsx
var Button = __webpack_require__(301);
;// CONCATENATED MODULE: ./src/components/UI/RecordsFilter.tsx





const Container = (external_styled_components_default()).div`
    margin: 10px;
    display: inline-block;
`;
const RecordsFilter = ({ records , filteredRecords , setFilteredRecords ,  })=>{
    const { 0: filters , 1: setFilters  } = (0,external_react_.useState)(undefined);
    const onChangeTitleFilter = (value)=>{
        setFilters((prevState)=>({
                ...prevState,
                title: value
            }));
    };
    const onChangeAmountFilter = (value)=>{
        setFilters((prevState)=>({
                ...prevState,
                amount: parseFloat(value)
            }));
    };
    const onChangeDateFilter = (date)=>{
        setFilters((prevState)=>({
                ...prevState,
                date: date.toString()
            }));
    };
    const filterRecords = ()=>{
        let fRecords = filteredRecords;
        if (filters?.title) {
            fRecords = fRecords.filter((r)=>r.title === filters.title);
        }
        if (filters?.amount) {
            fRecords = fRecords.filter((r)=>r.amount === filters.amount);
        }
        if (filters?.date) {
            fRecords = fRecords.filter((r)=>r.date === filters.date);
        }
        setFilteredRecords(fRecords);
    };
    const clearFilters = ()=>{
        setFilteredRecords(records);
        setFilters(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: "inline-block"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Title: "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.Input, {
                        style: {
                            width: "100px",
                            display: "inline-block"
                        },
                        onChange: onChangeTitleFilter
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Amount: "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.Input, {
                        style: {
                            width: "100px",
                            display: "inline-block"
                        },
                        onChange: onChangeAmountFilter
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Date: "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.DatePicker, {
                        style: {
                            width: 170
                        },
                        onSelect: onChangeDateFilter,
                        oneTap: true,
                        format: "yyyy-MM-dd",
                        placeholder: "Select Date:"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                appearance: "primary",
                style: {
                    margin: "10px"
                },
                onClick: filterRecords,
                children: "Filter"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                appearance: "ghost",
                onClick: clearFilters,
                children: "Clear Filters"
            })
        ]
    });
};
/* harmony default export */ const UI_RecordsFilter = (RecordsFilter);

// EXTERNAL MODULE: ./src/components/UI/Box.tsx
var Box = __webpack_require__(202);
// EXTERNAL MODULE: ./src/components/UI/ItemDetail.tsx
var ItemDetail = __webpack_require__(737);
// EXTERNAL MODULE: ./src/components/UI/InputItem.tsx
var InputItem = __webpack_require__(658);
;// CONCATENATED MODULE: ./src/components/Modals/AddRecordModal.tsx







const AddRecordModal_Container = (external_styled_components_default()).div`
    margin: 20px;
    padding: 20px;
    border-bottom: 0.5px solid #575a5b4d;
    justify-content: space-between;
    display: flex;
`;
const AddRecordModal = ({ open , onClose , onSubmit , setRecord ,  })=>{
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_rsuite_.Modal, {
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.Modal.Header, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.Modal.Title, {
                    children: "Add record"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.Modal.Body, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(InputItem/* default */.Z, {
                            label: "Title:",
                            onChange: titleChange,
                            edit: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(InputItem/* default */.Z, {
                            label: "Detail:",
                            onChange: detailChange,
                            edit: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(InputItem/* default */.Z, {
                            label: "Amount:",
                            onChange: amountChange,
                            edit: true
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AddRecordModal_Container, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ItemDetail/* default */.Z, {
                                    bolder: true,
                                    children: "Date:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.DatePicker, {
                                    placeholder: "Select Date",
                                    style: {
                                        width: 170
                                    },
                                    onSelect: dateChange,
                                    oneTap: true,
                                    format: "yyyy-MM-dd"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_rsuite_.Modal.Footer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        appearance: "ghost",
                        onClick: ()=>onClose(),
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        appearance: "primary",
                        onClick: ()=>onSubmit(),
                        children: "Submit"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Modals_AddRecordModal = (AddRecordModal);

// EXTERNAL MODULE: ./src/components/UI/message.tsx
var message = __webpack_require__(316);
;// CONCATENATED MODULE: ./src/components/UI/RecordsActions.tsx









const RecordsActions = ({ records , filteredRecords , setFilteredRecords ,  })=>{
    const router = (0,router_.useRouter)();
    const { 0: record , 1: setRecord  } = (0,external_react_.useState)(null);
    const { 0: showAddRecordModal , 1: setShowAddRecordModal  } = (0,external_react_.useState)(false);
    const checkAndSubmit = ()=>{
        if (record.title !== "" && !Number.isNaN(record.amount)) {
            recordsService/* RecordsService.create */.$.create(record).then(()=>(0,message/* addRecordMessage */.bj)("success")).catch(()=>(0,message/* addRecordMessage */.bj)("error")).finally(()=>{
                router.reload();
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(UI_RecordsFilter, {
                records: records,
                filteredRecords: filteredRecords,
                setFilteredRecords: setFilteredRecords
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                appearance: "primary",
                onClick: ()=>setShowAddRecordModal(true),
                children: "Add Record"
            }),
            showAddRecordModal && /*#__PURE__*/ jsx_runtime_.jsx(Modals_AddRecordModal, {
                open: showAddRecordModal,
                onClose: ()=>setShowAddRecordModal(false),
                onSubmit: ()=>checkAndSubmit(),
                setRecord: setRecord
            })
        ]
    });
};
/* harmony default export */ const UI_RecordsActions = (RecordsActions);

;// CONCATENATED MODULE: ./src/components/Modals/DeleteRecordModal.tsx




const DeleteRecordModal = ({ open , onClose , onSubmit ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_rsuite_.Modal, {
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.Modal.Header, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.Modal.Title, {
                    children: "Delete Record"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.Modal.Body, {
                children: "Are you sure you want to delete this record? This action cannot be undone"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_rsuite_.Modal.Footer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        appearance: "ghost",
                        onClick: ()=>onClose(),
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        appearance: "primary",
                        onClick: ()=>onSubmit(),
                        children: "Submit"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Modals_DeleteRecordModal = (DeleteRecordModal);

;// CONCATENATED MODULE: ./src/components/RecordsTable.tsx










const { Column , HeaderCell , Cell  } = external_rsuite_.Table;
const RecordsTable_Container = (external_styled_components_default()).div``;
const ActionContainer = (external_styled_components_default()).span`
    cursor: pointer;
`;
const RecordsTable = ()=>{
    const router = (0,router_.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: records , 1: setRecords  } = (0,external_react_.useState)([]);
    const { 0: filteredRecords , 1: setFilteredRecords  } = (0,external_react_.useState)([]);
    const { 0: showDeleteRecordModal , 1: setShowDeleteRecordModal  } = (0,external_react_.useState)(false);
    const { 0: deleteId , 1: setDeleteId  } = (0,external_react_.useState)(null);
    const onRowClick = (id, edit)=>{
        if (edit) {
            router.push(`/${id}/edit`);
        } else {
            router.push(`/${id}`);
        }
    };
    const onDelete = (recordId)=>{
        recordsService/* RecordsService.delete */.$["delete"](recordId).then(()=>(0,message/* addRecordMessage */.bj)("success")).catch(()=>(0,message/* addRecordMessage */.bj)("error")).finally(()=>{
            router.reload();
        });
    };
    (0,external_react_.useEffect)(()=>{
        setLoading(true);
        recordsService/* RecordsService.find */.$.find().then((response)=>{
            setRecords(response);
            setFilteredRecords(response);
        }).catch(()=>{
            external_rsuite_.toaster.push(/*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.Message, {
                type: "error",
                children: "There was an error fetching the records"
            }));
        }).finally(()=>setLoading(false));
    }, []);
    if (loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Loading/* Loading */.g, {
            label: "Fetching records..."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RecordsTable_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(UI_RecordsActions, {
                records: records,
                filteredRecords: filteredRecords,
                setFilteredRecords: setFilteredRecords
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_rsuite_.Grid, {
                style: {
                    width: "fit-content"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_rsuite_.Table, {
                    autoHeight: true,
                    width: 600,
                    data: filteredRecords,
                    onRowClick: (rowData)=>{
                        // eslint-disable-next-line no-underscore-dangle
                        onRowClick(rowData._id);
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Column, {
                            width: 150,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Title"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                                    dataKey: "title"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Column, {
                            width: 150,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Detail"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                                    dataKey: "detail"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Column, {
                            width: 100,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Amount"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                                    dataKey: "amount"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Column, {
                            width: 110,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Date"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                                    dataKey: "date",
                                    children: (rowData)=>{
                                        return rowData?.date?.slice(0, rowData?.date.indexOf("T")) || "";
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Column, {
                            width: 80,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Actions"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                                    children: (rowData)=>// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx(ActionContainer, {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        // eslint-disable-next-line no-underscore-dangle
                                                        onRowClick(rowData._id, true);
                                                    },
                                                    children: "Edit"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ActionContainer, {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        // eslint-disable-next-line no-underscore-dangle
                                                        setDeleteId(rowData._id);
                                                        setShowDeleteRecordModal(true);
                                                    },
                                                    children: "Delete"
                                                })
                                            ]
                                        })
                                })
                            ]
                        })
                    ]
                })
            }),
            showDeleteRecordModal && /*#__PURE__*/ jsx_runtime_.jsx(Modals_DeleteRecordModal, {
                open: showDeleteRecordModal,
                onClose: ()=>setShowDeleteRecordModal(false),
                onSubmit: ()=>onDelete(deleteId)
            })
        ]
    });
};
/* harmony default export */ const components_RecordsTable = (RecordsTable);

;// CONCATENATED MODULE: ./pages/records.tsx




const Records = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_RecordsTable, {})
    });
};
/* harmony default export */ const records = (Records);


/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 210:
/***/ ((module) => {

module.exports = require("rsuite");

/***/ }),

/***/ 356:
/***/ ((module) => {

module.exports = require("rsuite/Container");

/***/ }),

/***/ 521:
/***/ ((module) => {

module.exports = require("rsuite/Content");

/***/ }),

/***/ 206:
/***/ ((module) => {

module.exports = require("rsuite/Footer");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [642,14], () => (__webpack_exec__(460)));
module.exports = __webpack_exports__;

})();