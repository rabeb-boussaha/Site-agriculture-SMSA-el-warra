"use strict";
exports.id = 604;
exports.ids = [604];
exports.modules = {

/***/ 5195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function CustomButton({ text , variant , prefixIcon , className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: ` f14  bold customButton text-white p-3 ${variant} ${className}`,
        children: [
            prefixIcon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: `bi bi-${prefixIcon} me-5`
            }) : null,
            text
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomButton);


/***/ }),

/***/ 8100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Home_Statistic)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "primereact/knob"
var knob_ = __webpack_require__(3978);
;// CONCATENATED MODULE: ./Components/Commun/Icons/Knob.jsx



function ColorDemo() {
    const [value, setValue] = useState(17);
    return /*#__PURE__*/ _jsx("div", {
        className: "",
        children: /*#__PURE__*/ _jsx(Knob, {
            value: value,
            onChange: (e)=>setValue(e.value),
            valueColor: "#f8f6ef",
            rangeColor: "#eece38"
        })
    });
}

;// CONCATENATED MODULE: ./Components/Home/Statistic.jsx



function Statistic() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "statistic",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "big-text ",
                children: "Statistiques"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " staticfied container mx-auto w100 d-flex gap-5 alignC",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w25 counter-inner ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "alignC",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "number  text-nowrap",
                                        children: " 17 000 ha"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "f20  text-center  text-nowrap ",
                                children: "de surface couverte "
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w25 counter-inner  ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "alignC",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "number text-nowrap",
                                        children: " 850 000 L "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "f17   text-start text-nowrap ",
                                children: [
                                    "Potentiel de production ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "d'huile d'olive",
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w25 counter-inner ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "alignC",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "number",
                                        children: " 727 "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "f20  text-center",
                                children: " Agriculteurs "
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w25 counter-inner ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "alignC",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "number",
                                        children: "29 ans"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "f20  text-center",
                                children: "d'existence "
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Home_Statistic = (Statistic);


/***/ })

};
;