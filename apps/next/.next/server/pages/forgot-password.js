"use strict";
(() => {
var exports = {};
exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 42229:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_copods_Documents_Projects_EXPO_gluestack_demo_packages_app_screens_Login_ForgotPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51935);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Users_copods_Documents_Projects_EXPO_gluestack_demo_packages_app_screens_Login_ForgotPassword__WEBPACK_IMPORTED_MODULE_1__]);
_Users_copods_Documents_Projects_EXPO_gluestack_demo_packages_app_screens_Login_ForgotPassword__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Screen = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Users_copods_Documents_Projects_EXPO_gluestack_demo_packages_app_screens_Login_ForgotPassword__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Screen);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51935:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ForgotPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15512);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71756);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6395);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38706);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15312);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34869);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45991);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11726);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25183);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9026);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(10349);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(62867);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(50657);
/* harmony import */ var solito_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71939);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45641);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1656);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9926);
/* harmony import */ var react_native_web_dist_cjs_exports_Keyboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12447);
/* harmony import */ var react_native_web_dist_cjs_exports_Keyboard__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Keyboard__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lucide_react_native__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(91602);
/* harmony import */ var _layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(66022);
/* harmony import */ var solito_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2042);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__, zod__WEBPACK_IMPORTED_MODULE_3__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__, zod__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const forgotPasswordSchema = zod__WEBPACK_IMPORTED_MODULE_3__.z.object({
  email: zod__WEBPACK_IMPORTED_MODULE_3__.z.string().min(1, 'Email is required').email()
});

function Header() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_5__/* .HStack */ .U, {
    space: "md",
    px: "$3",
    py: "$4.5",
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(solito_link__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .r, {
      href: "#",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_7__/* .Icon */ .JO, {
        size: "md",
        as: _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_8__/* .ArrowLeftIcon */ .Y4,
        color: "$textLight50",
        sx: {
          _dark: {
            color: '$textDark50'
          }
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      color: "$textLight50",
      fontSize: "$lg",
      sx: {
        _dark: {
          color: '$textDark50'
        }
      },
      children: "Forgot Password"
    })]
  });
}

function SideContainerWeb() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_10__/* .Center */ .M, {
    sx: {
      '@base': {
        _light: {
          bg: '$backgroundLight0'
        },
        _dark: {
          bg: '$backgroundDark800'
        }
      },
      '@md': {
        flex: 1,
        _light: {
          bg: '$primary500'
        },
        _dark: {
          bg: '$primary500'
        },
        py: '$48'
      }
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_11__/* .Image */ .E, {
      resizeMode: "contain",
      w: 200,
      h: "$40",
      source: __webpack_require__(32032),
      alt: "Alternate Text"
    })
  });
}

function MobileScreenImage() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_10__/* .Center */ .M, {
    px: "$4",
    mb: -0.5,
    sx: {
      '@base': {
        _light: {
          bg: '$backgroundLight0'
        },
        _dark: {
          bg: '$backgroundDark800'
        }
      },
      '@md': {
        py: '$48',
        px: '$12',
        _light: {
          bg: '$primary500'
        },
        _dark: {
          bg: '$primary700'
        }
      }
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_11__/* .Image */ .E, {
      sx: {
        '@base': {
          _light: {
            display: 'flex'
          },
          _dark: {
            display: 'none'
          },
          mt: '$12'
        },
        '@md': {
          _light: {
            display: 'none'
          },
          _dark: {
            display: 'none'
          }
        }
      },
      source: __webpack_require__(99260),
      h: "$40",
      w: "$48",
      resizeMode: "contain",
      alignSelf: "center",
      alt: "Forgot Password"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_11__/* .Image */ .E, {
      sx: {
        '@base': {
          _light: {
            display: 'none',
            _dark: {
              display: 'flex'
            }
          },
          mt: '$12'
        },
        '@md': {
          display: 'none'
        }
      },
      source: __webpack_require__(53455),
      h: "$40",
      w: "$48",
      resizeMode: "contain",
      alignSelf: "center",
      alt: "Forgot Password"
    })]
  });
}

function ForgotPassword() {
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    reset
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(forgotPasswordSchema)
  });
  const {
    0: isEmailFocused,
    1: setIsEmailFocused
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const router = (0,solito_router__WEBPACK_IMPORTED_MODULE_12__/* .useRouter */ .t)();
  const toast = (0,_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_13__/* .useToast */ .pm)();

  const onSubmit = _data => {
    router.push('/verify-otp');
    reset();
    toast.show({
      placement: 'bottom right',
      render: ({
        id
      }) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_13__/* .Toast */ .FN, {
          nativeID: id,
          variant: "accent",
          action: "success",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_13__/* .ToastTitle */ .Mi, {
            children: "OTP Send Successfully"
          })
        });
      }
    });
    reset();
  };

  const handleKeyPress = () => {
    react_native_web_dist_cjs_exports_Keyboard__WEBPACK_IMPORTED_MODULE_14___default().dismiss();
    handleSubmit(onSubmit)();
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_16__/* .VStack */ .g, {
      sx: {
        '@md': {
          flexDirection: 'row'
        },
        _dark: {
          bg: '$backgroundDark900'
        }
      },
      flex: 1,
      bg: "$primary500",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .x, {
        sx: {
          '@md': {
            display: 'none'
          }
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Header, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(MobileScreenImage, {})]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .x, {
        sx: {
          '@md': {
            display: 'flex'
          }
        },
        display: "none",
        flex: 1,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SideContainerWeb, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .x, {
        maxWidth: 508,
        pt: "$0",
        pb: "$8",
        px: "$4",
        bg: "$backgroundLight0",
        flex: 1,
        sx: {
          '@md': {
            pt: '$8',
            px: '$8'
          },
          _dark: {
            bg: '$backgroundDark800'
          }
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_16__/* .VStack */ .g, {
          space: "md",
          alignItems: "center",
          sx: {
            '@md': {
              alignItems: 'flex-start'
            }
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            fontSize: "$xl",
            textAlign: "center",
            sx: {
              '@md': {
                textAlign: 'left',
                fontSize: '$2xl'
              }
            },
            children: "Forgot Password?"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            fontSize: "$sm",
            fontWeight: "normal",
            textAlign: "center",
            sx: {
              '@md': {
                textAlign: 'left'
              }
            },
            children: "Not to worry! Enter email address associated with your account and we'll send a link to reset your password."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_19__/* .FormControl */ .NI, {
          my: "$8",
          isInvalid: (!!errors.email || isEmailFocused) && !!errors.email,
          isRequired: true,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
            defaultValue: "",
            name: "email",
            control: control,
            rules: {
              validate: async value => {
                try {
                  await forgotPasswordSchema.parseAsync({
                    email: value
                  });
                  return true;
                } catch (error) {
                  return error.message;
                }
              }
            },
            render: ({
              field: {
                onChange,
                onBlur,
                value
              }
            }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .Input */ .II, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .InputField */ .UP, {
                fontSize: "$sm",
                placeholder: "Email",
                type: "text",
                value: value,
                onChangeText: onChange,
                onBlur: onBlur,
                onSubmitEditing: handleKeyPress,
                returnKeyType: "done"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_19__/* .FormControlError */ .eF, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_19__/* .FormControlErrorIcon */ .N3, {
              as: lucide_react_native__WEBPACK_IMPORTED_MODULE_21__/* .AlertTriangle */ .uyG,
              size: "md"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_19__/* .FormControlErrorText */ .EU, {
              children: errors?.email?.message
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_22__/* .Button */ .zx, {
          variant: "solid",
          size: "md",
          onPress: handleSubmit(onSubmit),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_22__/* .ButtonText */ .oD, {
            fontSize: "$sm",
            children: "SUBMIT"
          })
        })]
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/forgotPassword_mobile_dark.13b37975.png","height":160,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAuklEQVR42mN4+/If45sXfxmAWAKIjwHxEyDW+/T2PwMQMzEsmfiYqaizlQ2qyAKIv714/Fvt+dMvDEDMyvDl0z8QNn/3+h8DECd+/vDf+////9K/vv0XOnj8NA9DX/4DpUd3fv48c+hD54vHf7qvnfuSe+/69z/PH/3JZoCAizqLeh5+Xzrh4e+N8975r539ZM3SCY/+hzNcr2MAgYkl90B41sz6hyu6c28xALF5V8a9e6lKF50YGBgYAHdYfEFbEifjAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 99260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/forgotPassword_mobile_light.6772575d.png","height":160,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAuklEQVR42mNwZJjI6C0zhQGIJXxkphwD0k+AWI+BoZYBiJkYvD1KmP7//8/mJTmFAYgtfOSmfAvUn6LWUbeeAYhZGVK9F4Owub/KdAYgTnRjmObNwDBNWoFhgtCL9694GIQFwpSCTCf+jPbt6nRi6O8Od+7NjXGf/MeVd0I2AxTo9E+c/n3W3AW/GRh4/JuaJq2ZMXvefwYGkToGECitagThWVW1rSsa2toZgNg8Nav4nplzsBMDAwMDACbDQs7PcJ/PAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 32032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/forgotPassword_web_dark.9c06f3cf.png","height":160,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAuUlEQVR42mN4+/If45sXfxmAWAKIjwHxEyDW+/T2PwMQMzGsmvKeqay7nw2qyAKIv714/Eft+dMvDEDMyvD50x8QNn/3+h8DECd+ev/f+////9I/v/0XOnj8LA/D9JIPSo/u/P55/vC3zheP/3bfOP8j9/6NX39ePPqbzQABb3RWTnj/fc2U97+3Lfjpv3nehzVA9v9shrd1DCAwq/ItCM9a0Px+xeTilwxAbD457929EpMnTgwMDAwA0yR+LwwVjbYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 81377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59800);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84591);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49655);
/* harmony import */ var private_next_pages_document_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39310);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81068);
/* harmony import */ var private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/forgot-password",
        pathname: "/forgot-password",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_js__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_forgot_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73888:
/***/ ((module) => {

module.exports = require("@react-aria/focus");

/***/ }),

/***/ 44533:
/***/ ((module) => {

module.exports = require("@react-aria/interactions");

/***/ }),

/***/ 10292:
/***/ ((module) => {

module.exports = require("@react-aria/overlays");

/***/ }),

/***/ 78896:
/***/ ((module) => {

module.exports = require("@react-aria/ssr");

/***/ }),

/***/ 76278:
/***/ ((module) => {

module.exports = require("@react-aria/utils");

/***/ }),

/***/ 28009:
/***/ ((module) => {

module.exports = require("@react-native/normalize-color");

/***/ }),

/***/ 67836:
/***/ ((module) => {

module.exports = require("dom-helpers/css");

/***/ }),

/***/ 82211:
/***/ ((module) => {

module.exports = require("dom-helpers/getComputedStyle");

/***/ }),

/***/ 71307:
/***/ ((module) => {

module.exports = require("dom-helpers/offset");

/***/ }),

/***/ 82902:
/***/ ((module) => {

module.exports = require("dom-helpers/ownerDocument");

/***/ }),

/***/ 93071:
/***/ ((module) => {

module.exports = require("dom-helpers/position");

/***/ }),

/***/ 69376:
/***/ ((module) => {

module.exports = require("dom-helpers/scrollLeft");

/***/ }),

/***/ 77641:
/***/ ((module) => {

module.exports = require("dom-helpers/scrollTop");

/***/ }),

/***/ 44505:
/***/ ((module) => {

module.exports = require("fbjs/lib/invariant");

/***/ }),

/***/ 99905:
/***/ ((module) => {

module.exports = require("fbjs/lib/warning");

/***/ }),

/***/ 12150:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/createPrefixer");

/***/ }),

/***/ 60998:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/backgroundClip");

/***/ }),

/***/ 45539:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/crossFade");

/***/ }),

/***/ 49308:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/cursor");

/***/ }),

/***/ 38739:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/filter");

/***/ }),

/***/ 34845:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/imageSet");

/***/ }),

/***/ 21764:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/logical");

/***/ }),

/***/ 43358:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/position");

/***/ }),

/***/ 12196:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/sizing");

/***/ }),

/***/ 73763:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/transition");

/***/ }),

/***/ 43076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 94140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 89716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 33100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 76368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 71109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 87782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 15002:
/***/ ((module) => {

module.exports = require("normalize-css-color");

/***/ }),

/***/ 66036:
/***/ ((module) => {

module.exports = require("nullthrows");

/***/ }),

/***/ 460:
/***/ ((module) => {

module.exports = require("postcss-value-parser");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 40106:
/***/ ((module) => {

module.exports = require("raf/polyfill");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 7849:
/***/ ((module) => {

module.exports = require("react-dom/client");

/***/ }),

/***/ 78616:
/***/ ((module) => {

module.exports = require("styleq");

/***/ }),

/***/ 58688:
/***/ ((module) => {

module.exports = require("styleq/transform-localize-style");

/***/ }),

/***/ 1656:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/zod");;

/***/ }),

/***/ 45641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [104,255,762,87,22], () => (__webpack_exec__(81377)));
module.exports = __webpack_exports__;

})();