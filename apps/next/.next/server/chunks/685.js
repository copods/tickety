"use strict";
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 58685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var app_features_simple_form_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88291);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([app_features_simple_form_screen__WEBPACK_IMPORTED_MODULE_2__]);
app_features_simple_form_screen__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Page() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("title", {
        children: "Gluestack Form"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(app_features_simple_form_screen__WEBPACK_IMPORTED_MODULE_2__/* .SimpleFormScreen */ ._, {})]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ SimpleFormScreen)
/* harmony export */ });
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25183);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11726);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9026);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10349);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62867);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50657);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45641);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_0__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function SimpleFormScreen() {
  const {
    control,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useForm)({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = data => console.log('Form data:', data);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    p: "$4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_3__/* .VStack */ .g, {
      space: "md",
      width: "100%",
      maxWidth: 400,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: "Login"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__/* .FormControl */ .NI, {
        isInvalid: !!errors.email,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__/* .FormControlLabel */ .D8, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__/* .FormControlLabelText */ .e, {
            children: "Email"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_0__.Controller, {
          control: control,
          rules: {
            required: true
          },
          render: ({
            field: {
              onChange,
              onBlur,
              value
            }
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_6__/* .Input */ .II, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_6__/* .InputField */ .UP, {
              placeholder: "Enter email",
              onBlur: onBlur,
              onChangeText: onChange,
              value: value
            })
          }),
          name: "email"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__/* .FormControlError */ .eF, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__/* .FormControlErrorText */ .EU, {
            children: "Email is required."
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__/* .FormControl */ .NI, {
        isInvalid: !!errors.password,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__/* .FormControlLabel */ .D8, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__/* .FormControlLabelText */ .e, {
            children: "Password"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_0__.Controller, {
          control: control,
          rules: {
            required: true
          },
          render: ({
            field: {
              onChange,
              onBlur,
              value
            }
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_6__/* .Input */ .II, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_6__/* .InputField */ .UP, {
              type: "password",
              placeholder: "Enter password",
              onBlur: onBlur,
              onChangeText: onChange,
              value: value
            })
          }),
          name: "password"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__/* .FormControlError */ .eF, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__/* .FormControlErrorText */ .EU, {
            children: "Password is required."
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .zx, {
        onPress: handleSubmit(onSubmit),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_7__/* .ButtonText */ .oD, {
          children: "Submit"
        })
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;