"use strict";
exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 66022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GuestLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25183);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73652);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93627);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11726);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52322);




function GuestLayout(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
    sx: {
      _web: {
        height: "100vh",
        overflow: "hidden"
      }
    },
    height: "$full",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_3__/* .StatusBar */ .A, {
      translucent: true,
      backgroundColor: "transparent",
      barStyle: "light-content"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_4__/* .ScrollView */ .p, {
      flex: 1,
      contentContainerStyle: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center"
      },
      sx: {
        "@base": {
          _light: {
            bg: "$primary500"
          }
        },
        "@md": {
          _light: {
            bg: "$primary900"
          },
          p: "$8"
        },
        _dark: {
          bg: "$backgroundDark900"
        }
      },
      bounces: false,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__/* .VStack */ .g, {
        w: "$full",
        flex: 1,
        overflow: "hidden",
        sx: {
          "@md": {
            maxWidth: "$containerWidth",
            flexDirection: "row",
            rounded: "$xl",
            flex: undefined
          }
        },
        children: props.children
      })
    })]
  });
}

/***/ })

};
;