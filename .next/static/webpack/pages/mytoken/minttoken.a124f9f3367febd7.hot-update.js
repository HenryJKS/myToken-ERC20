"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mytoken/minttoken",{

/***/ "./pages/mytoken/minttoken.js":
/*!************************************!*\
  !*** ./pages/mytoken/minttoken.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_mytoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/mytoken */ \"./ethereum/mytoken.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\nclass MintToken extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps(props) {\n        return {\n            address: props.query.address\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Mint Token\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                    onSubmit: this.onSubmit,\n                    error: !!this.state.errorMessage,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Mint Token HJK\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    placeholder: \"Quantity\",\n                                    value: this.state.quantityToken,\n                                    onChange: (event)=>this.setState({\n                                            quantityToken: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    primary: true,\n                                    children: \"Mint\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {\n                                    error: true,\n                                    header: \"Erro\",\n                                    content: this.state.errorMessage\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            quantityToken: \"\",\n            errorMessage: \"\"\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const mytoken = (0,_ethereum_mytoken__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this.props.address);\n            this.setState({\n                errorMessage: \"\"\n            });\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts();\n                await mytoken.methods.mint(_ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].utils.fromWei(this.state.quantityToken, \"wei\")).send({\n                    from: accounts[0]\n                });\n            } catch (error) {\n                this.setState({\n                    errorMessage: error.message\n                });\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintToken);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9teXRva2VuL21pbnR0b2tlbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ1c7QUFDTjtBQUNNO0FBQ2E7QUFFMUQsTUFBTU8sa0JBQWtCUCw0Q0FBU0E7SUFNL0IsYUFBYVEsZ0JBQWdCQyxLQUFLLEVBQUU7UUFDbEMsT0FBTztZQUFDQyxTQUFTRCxNQUFNRSxLQUFLLENBQUNELE9BQU87UUFBQTtJQUN0QztJQXVCQUUsU0FBUztRQUNQLHFCQUNFLDhEQUFDWCwwREFBTUE7OzhCQUNMLDhEQUFDWTs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDUixtREFBSUE7b0JBQUNTLFVBQVUsSUFBSSxDQUFDQSxRQUFRO29CQUFFQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWTs7c0NBQzdELDhEQUFDWixtREFBSUEsQ0FBQ2EsS0FBSzs7OENBQ1QsOERBQUNDOzhDQUFNOzs7Ozs7OENBQ1AsOERBQUNDO29DQUNDQyxhQUFZO29DQUNaQyxPQUFPLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxhQUFhO29DQUMvQkMsVUFBVSxDQUFDQyxRQUNULElBQUksQ0FBQ0MsUUFBUSxDQUFDOzRDQUFFSCxlQUFlRSxNQUFNRSxNQUFNLENBQUNMLEtBQUs7d0NBQUM7Ozs7Ozs7Ozs7OztzQ0FJeEQsOERBQUNqQixtREFBSUEsQ0FBQ2EsS0FBSzs7OENBQ1QsOERBQUNkLHFEQUFNQTtvQ0FBQ3dCLE9BQU87OENBQUM7Ozs7Ozs4Q0FDaEIsOERBQUN0QixzREFBT0E7b0NBQUNTLEtBQUs7b0NBQUNjLFFBQU87b0NBQU9DLFNBQVMsSUFBSSxDQUFDZCxLQUFLLENBQUNDLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUt2RTs7O2FBcERBRCxRQUFRO1lBQ05PLGVBQWU7WUFDZk4sY0FBYztRQUNoQjthQU9BSCxXQUFXLE9BQU9XO1lBQ2hCQSxNQUFNTSxjQUFjO1lBRXBCLE1BQU1DLFVBQVU3Qiw2REFBT0EsQ0FBQyxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsT0FBTztZQUUxQyxJQUFJLENBQUNnQixRQUFRLENBQUM7Z0JBQUNULGNBQWM7WUFBRTtZQUUvQixJQUFJO2dCQUNBLE1BQU1nQixXQUFXLE1BQU0vQiwwREFBUSxDQUFDaUMsV0FBVztnQkFDM0MsTUFBTUgsUUFBUUksT0FBTyxDQUNoQkMsSUFBSSxDQUFDbkMsNERBQVUsQ0FBQ3FDLE9BQU8sQ0FBQyxJQUFJLENBQUN2QixLQUFLLENBQUNPLGFBQWEsRUFBRSxRQUNsRGlCLElBQUksQ0FBQztvQkFDRkMsTUFBS1IsUUFBUSxDQUFDLEVBQUU7Z0JBQ3BCO1lBRVIsRUFBRSxPQUFPbEIsT0FBTztnQkFDWixJQUFJLENBQUNXLFFBQVEsQ0FBQztvQkFBQ1QsY0FBY0YsTUFBTTJCLE9BQU87Z0JBQUE7WUFDOUM7UUFDRjs7QUF5QkY7QUFHQSwrREFBZW5DLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXl0b2tlbi9taW50dG9rZW4uanM/MjA1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IE15VG9rZW4gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL215dG9rZW5cIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5jbGFzcyBNaW50VG9rZW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgcXVhbnRpdHlUb2tlbjogXCJcIixcclxuICAgIGVycm9yTWVzc2FnZTogXCJcIlxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIHJldHVybiB7YWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzc31cclxuICB9XHJcblxyXG5cclxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBteXRva2VuID0gTXlUb2tlbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogXCJcIn0pXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgbXl0b2tlbi5tZXRob2RzXHJcbiAgICAgICAgICAgIC5taW50KHdlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnN0YXRlLnF1YW50aXR5VG9rZW4sICd3ZWknKSlcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTphY2NvdW50c1swXSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6IGVycm9yLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+TWludCBUb2tlbjwvaDE+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8bGFiZWw+TWludCBUb2tlbiBISks8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdWFudGl0eVRva2VufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcXVhbnRpdHlUb2tlbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5NaW50PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj0nRXJybycgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9Lz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW50VG9rZW47XHJcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJMYXlvdXQiLCJ3ZWIzIiwiTXlUb2tlbiIsIkJ1dHRvbiIsIkZvcm0iLCJNZXNzYWdlIiwiTWludFRva2VuIiwiZ2V0SW5pdGlhbFByb3BzIiwicHJvcHMiLCJhZGRyZXNzIiwicXVlcnkiLCJyZW5kZXIiLCJoMSIsIm9uU3VibWl0IiwiZXJyb3IiLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsIkZpZWxkIiwibGFiZWwiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJxdWFudGl0eVRva2VuIiwib25DaGFuZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwicHJpbWFyeSIsImhlYWRlciIsImNvbnRlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm15dG9rZW4iLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsIm1pbnQiLCJ1dGlscyIsImZyb21XZWkiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mytoken/minttoken.js\n"));

/***/ })

});