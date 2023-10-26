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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_mytoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/mytoken */ \"./ethereum/mytoken.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nclass MintToken extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps(props) {\n        return {\n            address: props.query.address\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Mint Token\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    error: !!this.state.errorMessage,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Mint Token HJK\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    placeholder: \"Quantity\",\n                                    value: this.state.quantityToken,\n                                    onChange: (event)=>this.setState({\n                                            quantityToken: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    primary: true,\n                                    children: \"Mint\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                                    error: true,\n                                    header: \"Erro\",\n                                    content: this.state.errorMessage\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Henry\\\\Desktop\\\\myToken-ERC20\\\\pages\\\\mytoken\\\\minttoken.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            quantityToken: \"\",\n            errorMessage: \"\",\n            loading: true\n        };\n        this.onSubmit = async (event)=>{\n            event.preventDefault();\n            const mytoken = (0,_ethereum_mytoken__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this.props.address);\n            this.setState({\n                errorMessage: \"\"\n            });\n            try {\n                const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts();\n                await mytoken.methods.mint(this.state.quantityToken).send({\n                    from: accounts[0]\n                });\n                _routes__WEBPACK_IMPORTED_MODULE_5__.Router.pushRoute(\"/\");\n            } catch (error) {\n                this.setState({\n                    errorMessage: error.message\n                });\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintToken);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9teXRva2VuL21pbnR0b2tlbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0M7QUFDVztBQUNOO0FBQ007QUFDYTtBQUNwQjtBQUV0QyxNQUFNUSxrQkFBa0JSLDRDQUFTQTtJQU8vQixhQUFhUyxnQkFBZ0JDLEtBQUssRUFBRTtRQUNsQyxPQUFPO1lBQUVDLFNBQVNELE1BQU1FLEtBQUssQ0FBQ0QsT0FBTztRQUFDO0lBQ3hDO0lBcUJBRSxTQUFTO1FBQ1AscUJBQ0UsOERBQUNaLDBEQUFNQTs7OEJBQ0wsOERBQUNhOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNULG1EQUFJQTtvQkFBQ1UsVUFBVSxJQUFJLENBQUNBLFFBQVE7b0JBQUVDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZOztzQ0FDN0QsOERBQUNiLG1EQUFJQSxDQUFDYyxLQUFLOzs4Q0FDVCw4REFBQ0M7OENBQU07Ozs7Ozs4Q0FDUCw4REFBQ0M7b0NBQ0NDLGFBQVk7b0NBQ1pDLE9BQU8sSUFBSSxDQUFDTixLQUFLLENBQUNPLGFBQWE7b0NBQy9CQyxVQUFVLENBQUNDLFFBQ1QsSUFBSSxDQUFDQyxRQUFRLENBQUM7NENBQUVILGVBQWVFLE1BQU1FLE1BQU0sQ0FBQ0wsS0FBSzt3Q0FBQzs7Ozs7Ozs7Ozs7O3NDQUl4RCw4REFBQ2xCLG1EQUFJQSxDQUFDYyxLQUFLOzs4Q0FDVCw4REFBQ2YscURBQU1BO29DQUFDeUIsT0FBTzs4Q0FBQzs7Ozs7OzhDQUNoQiw4REFBQ3ZCLHNEQUFPQTtvQ0FBQ1UsS0FBSztvQ0FBQ2MsUUFBTztvQ0FBT0MsU0FBUyxJQUFJLENBQUNkLEtBQUssQ0FBQ0MsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3ZFOzs7YUFuREFELFFBQVE7WUFDTk8sZUFBZTtZQUNmTixjQUFjO1lBQ2RjLFNBQVM7UUFDWDthQU1BakIsV0FBVyxPQUFPVztZQUNoQkEsTUFBTU8sY0FBYztZQUVwQixNQUFNQyxVQUFVL0IsNkRBQU9BLENBQUMsSUFBSSxDQUFDTyxLQUFLLENBQUNDLE9BQU87WUFFMUMsSUFBSSxDQUFDZ0IsUUFBUSxDQUFDO2dCQUFFVCxjQUFjO1lBQUc7WUFFakMsSUFBSTtnQkFDRixNQUFNaUIsV0FBVyxNQUFNakMsMERBQVEsQ0FBQ21DLFdBQVc7Z0JBQzNDLE1BQU1ILFFBQVFJLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ3RCLEtBQUssQ0FBQ08sYUFBYSxFQUFFZ0IsSUFBSSxDQUFDO29CQUN4REMsTUFBTU4sUUFBUSxDQUFDLEVBQUU7Z0JBQ25CO2dCQUVBNUIsMkNBQU1BLENBQUNtQyxTQUFTLENBQUM7WUFDbkIsRUFBRSxPQUFPMUIsT0FBTztnQkFDZCxJQUFJLENBQUNXLFFBQVEsQ0FBQztvQkFBRVQsY0FBY0YsTUFBTTJCLE9BQU87Z0JBQUM7WUFDOUM7UUFDRjs7QUF5QkY7QUFFQSwrREFBZW5DLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXl0b2tlbi9taW50dG9rZW4uanM/MjA1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IE15VG9rZW4gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL215dG9rZW5cIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmNsYXNzIE1pbnRUb2tlbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBxdWFudGl0eVRva2VuOiBcIlwiLFxyXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgbG9hZGluZzogdHJ1ZVxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIHJldHVybiB7IGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MgfTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IG15dG9rZW4gPSBNeVRva2VuKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogXCJcIiB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IG15dG9rZW4ubWV0aG9kcy5taW50KHRoaXMuc3RhdGUucXVhbnRpdHlUb2tlbikuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUm91dGVyLnB1c2hSb3V0ZShcIi9cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgxPk1pbnQgVG9rZW48L2gxPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPk1pbnQgVG9rZW4gSEpLPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVhbnRpdHlUb2tlbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHF1YW50aXR5VG9rZW46IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+TWludDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJFcnJvXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW50VG9rZW47XHJcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJMYXlvdXQiLCJ3ZWIzIiwiTXlUb2tlbiIsIkJ1dHRvbiIsIkZvcm0iLCJNZXNzYWdlIiwiUm91dGVyIiwiTWludFRva2VuIiwiZ2V0SW5pdGlhbFByb3BzIiwicHJvcHMiLCJhZGRyZXNzIiwicXVlcnkiLCJyZW5kZXIiLCJoMSIsIm9uU3VibWl0IiwiZXJyb3IiLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsIkZpZWxkIiwibGFiZWwiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJxdWFudGl0eVRva2VuIiwib25DaGFuZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwicHJpbWFyeSIsImhlYWRlciIsImNvbnRlbnQiLCJsb2FkaW5nIiwicHJldmVudERlZmF1bHQiLCJteXRva2VuIiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJtaW50Iiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mytoken/minttoken.js\n"));

/***/ })

});