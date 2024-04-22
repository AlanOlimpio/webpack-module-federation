"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemodule_federation_host"]("src_bootstrap_js-data_image_svg_xml_3csvg_xmlns_27http_www_w3_org_2000_svg_27_viewBox_27-4_-4-5ee189",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c217\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Loading */ \"./src/components/Loading/index.js\");\n\n\n\n\n\nconst DashboardPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_DashboardApp_DashboardPage\").then(__webpack_require__.t.bind(__webpack_require__, /*! DashboardApp/DashboardPage */ \"webpack/container/remote/DashboardApp/DashboardPage\", 23)));\nconst ListPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_ListApp_ListPage\").then(__webpack_require__.t.bind(__webpack_require__, /*! ListApp/ListPage */ \"webpack/container/remote/ListApp/ListPage\", 23)));\nconst RegisterPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_RegisterApp_RegisterPage\").then(__webpack_require__.t.bind(__webpack_require__, /*! RegisterApp/RegisterPage */ \"webpack/container/remote/RegisterApp/RegisterPage\", 23)));\nconst ModalRegister = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_RegisterApp_ModalRegister\").then(__webpack_require__.t.bind(__webpack_require__, /*! RegisterApp/ModalRegister */ \"webpack/container/remote/RegisterApp/ModalRegister\", 23)));\nconst App = () => {\n  const routes = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.createBrowserRouter)([{\n    path: '/',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)),\n    errorElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Error\"),\n    children: [{\n      index: true,\n      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DashboardPage, null))\n    }, {\n      path: '/list',\n      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ListPage, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null)),\n      children: [{\n        path: 'register',\n        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n          fsallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ModalRegister, null)))\n      }]\n    }, {\n      path: 'register',\n      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RegisterPage, null))\n    }]\n  }]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.RouterProvider, {\n    router: routes\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://module_federation_host/./src/App.js?");

/***/ })

});