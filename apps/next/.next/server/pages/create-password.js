"use strict";
(() => {
var exports = {};
exports.id = 682;
exports.ids = [682];
exports.modules = {

/***/ 91116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_copods_Documents_Projects_EXPO_gluestack_demo_packages_app_screens_Login_CreatePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83449);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Users_copods_Documents_Projects_EXPO_gluestack_demo_packages_app_screens_Login_CreatePassword__WEBPACK_IMPORTED_MODULE_1__]);
_Users_copods_Documents_Projects_EXPO_gluestack_demo_packages_app_screens_Login_CreatePassword__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Screen = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Users_copods_Documents_Projects_EXPO_gluestack_demo_packages_app_screens_Login_CreatePassword__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Screen);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83449:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CreatePassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45991);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15512);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71756);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6395);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38706);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11726);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9026);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15312);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(34869);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(25183);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(93627);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(10349);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(62867);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(50307);
/* harmony import */ var _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(50657);
/* harmony import */ var solito_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71939);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45641);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9926);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1656);
/* harmony import */ var react_native_web_dist_cjs_exports_Keyboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12447);
/* harmony import */ var react_native_web_dist_cjs_exports_Keyboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Keyboard__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lucide_react_native__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(91602);
/* harmony import */ var _layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(66022);
/* harmony import */ var solito_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2042);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, zod__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, zod__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const createPasswordSchema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({
  password: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().min(6, 'Must be at least 8 characters in length').regex(new RegExp('.*[A-Z].*'), 'One uppercase character').regex(new RegExp('.*[a-z].*'), 'One lowercase character').regex(new RegExp('.*\\d.*'), 'One number').regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'), 'One special character'),
  confirmpassword: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().min(6, 'Must be at least 8 characters in length').regex(new RegExp('.*[A-Z].*'), 'One uppercase character').regex(new RegExp('.*[a-z].*'), 'One lowercase character').regex(new RegExp('.*\\d.*'), 'One number').regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'), 'One special character')
});
function CreatePassword() {
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    reset
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__.zodResolver)(createPasswordSchema)
  });
  const router = (0,solito_router__WEBPACK_IMPORTED_MODULE_5__/* .useRouter */ .t)();
  const toast = (0,_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_6__/* .useToast */ .pm)();

  const onSubmit = data => {
    if (data.password === data.confirmpassword) {
      // Implement your own onSubmit logic and navigation logic here.
      router.replace('/login');
      toast.show({
        placement: 'bottom right',
        render: ({
          id
        }) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_6__/* .Toast */ .FN, {
            nativeID: id,
            variant: "accent",
            action: "success",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_6__/* .ToastTitle */ .Mi, {
              children: "Passwords matched, update successful"
            })
          });
        }
      });
      reset();
    } else {
      toast.show({
        placement: 'bottom right',
        render: ({
          id
        }) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_6__/* .Toast */ .FN, {
            nativeID: id,
            variant: "accent",
            action: "error",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_6__/* .ToastTitle */ .Mi, {
              children: "Passwords do not match"
            })
          });
        }
      });
    }
  };

  const handleKeyPress = () => {
    react_native_web_dist_cjs_exports_Keyboard__WEBPACK_IMPORTED_MODULE_7___default().dismiss();
    handleSubmit(onSubmit)();
  };

  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showConfirmPassword,
    1: setShowConfirmPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleState = () => {
    setShowPassword(showState => {
      return !showState;
    });
  };

  const handleConfirmPasswordState = () => {
    setShowConfirmPassword(showConfirmPassword => {
      return !showConfirmPassword;
    });
  };

  function Header() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_8__/* .HStack */ .U, {
      space: "md",
      px: "$3",
      my: "$4.5",
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(solito_link__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .r, {
        href: "#",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_10__/* .Icon */ .JO, {
          size: "md",
          as: _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_11__/* .ArrowLeftIcon */ .Y4,
          color: "$textLight50",
          sx: {
            _dark: {
              color: '$textDark50'
            }
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        color: "$textLight50",
        fontSize: "$lg",
        sx: {
          _dark: {
            color: '$textDark50'
          }
        },
        children: "Create Password"
      })]
    });
  }

  function ScreenText() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_13__/* .VStack */ .g, {
      space: "md",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        fontSize: "$xl",
        sx: {
          '@md': {
            fontSize: '$2xl'
          }
        },
        children: "Create new password"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        fontSize: "$sm",
        children: "Your new password must be different from previous used passwords and must be of at least 8 characters."
      })]
    });
  }

  function WebSideContainer() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_15__/* .Center */ .M, {
      flex: 1,
      bg: "$primary500",
      sx: {
        _dark: {
          bg: '$primary500'
        }
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_16__/* .Image */ .E, {
        w: "$80",
        h: "$10",
        alt: "gluestack-ui Pro",
        resizeMode: "contain",
        source: __webpack_require__(78015)
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .x, {
      sx: {
        '@md': {
          display: 'none'
        }
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Header, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .x, {
      display: "none",
      sx: {
        '@md': {
          display: 'flex'
        }
      },
      flex: 1,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(WebSideContainer, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_19__/* .ScrollView */ .p, {
      contentContainerStyle: {
        flexGrow: 1
      },
      flex: 1,
      bounces: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .x, {
        bg: "$backgroundLight0",
        pt: "$8",
        pb: "$4",
        px: "$4",
        sx: {
          '@md': {
            p: '$8'
          },
          _dark: {
            bg: '$backgroundDark800'
          }
        },
        flex: 1,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ScreenText, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_13__/* .VStack */ .g, {
          mt: "$7",
          space: "md",
          sx: {
            '@md': {
              mt: '$8'
            }
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .x, {
            sx: {
              '@base': {
                w: '$full'
              },
              '@md': {
                width: '$80'
              }
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .FormControl */ .NI, {
              isInvalid: !!errors.password,
              isRequired: true,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
                defaultValue: "",
                name: "password",
                control: control,
                rules: {
                  validate: async value => {
                    try {
                      await createPasswordSchema.parseAsync({
                        password: value
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
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_21__/* .Input */ .II, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_21__/* .InputField */ .UP, {
                    fontSize: "$sm",
                    placeholder: "Password",
                    value: value,
                    onChangeText: onChange,
                    onBlur: onBlur,
                    onSubmitEditing: handleKeyPress,
                    returnKeyType: "done",
                    type: showPassword ? 'text' : 'password'
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_21__/* .InputSlot */ .yj, {
                    onPress: handleState,
                    mr: "$2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_21__/* .InputIcon */ .SQ, {
                      as: showPassword ? _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_22__/* .EyeIcon */ .t : _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_22__/* .EyeOffIcon */ .X
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .FormControlError */ .eF, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .FormControlErrorIcon */ .N3, {
                  as: lucide_react_native__WEBPACK_IMPORTED_MODULE_23__/* .AlertTriangle */ .uyG,
                  size: "md"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .FormControlErrorText */ .EU, {
                  children: errors?.password?.message
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .FormControlHelperText */ .zL, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  size: "xs",
                  children: "Must be at least 8 characters"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .FormControlHelper */ .cy, {})]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .x, {
            sx: {
              '@base': {
                w: '$full'
              },
              '@md': {
                width: '$80'
              }
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .FormControl */ .NI, {
              isInvalid: !!errors.confirmpassword,
              isRequired: true,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
                defaultValue: "",
                name: "confirmpassword",
                control: control,
                rules: {
                  validate: async value => {
                    try {
                      await createPasswordSchema.parseAsync({
                        confirmpassword: value
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
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_21__/* .Input */ .II, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_21__/* .InputField */ .UP, {
                    fontSize: "$sm",
                    placeholder: "Confirm Password",
                    value: value,
                    onChangeText: onChange,
                    onBlur: onBlur,
                    onSubmitEditing: handleKeyPress,
                    returnKeyType: "done",
                    type: showConfirmPassword ? 'text' : 'password'
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_21__/* .InputSlot */ .yj, {
                    onPress: handleConfirmPasswordState,
                    mr: "$2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_21__/* .InputIcon */ .SQ, {
                      as: showConfirmPassword ? _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_22__/* .EyeIcon */ .t : _gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_22__/* .EyeOffIcon */ .X
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .FormControlError */ .eF, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .FormControlErrorIcon */ .N3, {
                  as: lucide_react_native__WEBPACK_IMPORTED_MODULE_23__/* .AlertTriangle */ .uyG,
                  size: "md"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .FormControlErrorText */ .EU, {
                  children: errors?.confirmpassword?.message
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .FormControlHelperText */ .zL, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  size: "xs",
                  children: " Both Password must match"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_20__/* .FormControlErrorText */ .EU, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  size: "xs",
                  children: errors.confirmpassword?.message
                })
              })]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_24__/* .Button */ .zx, {
          variant: "solid",
          size: "lg",
          mt: "auto",
          sx: {
            '@md': {
              mt: '$40'
            }
          },
          onPress: handleSubmit(onSubmit),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_gluestack_ui_themed__WEBPACK_IMPORTED_MODULE_24__/* .ButtonText */ .oD, {
            fontSize: "$sm",
            children: "UPDATE PASSWORD"
          })
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/gluestackUiProLogo_web_light.003a7f27.svg","height":24,"width":198,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 23151:
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
/* harmony import */ var private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91116);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/create-password",
        pathname: "/create-password",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_js__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_create_password_index_tsx__WEBPACK_IMPORTED_MODULE_5__
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
var __webpack_exports__ = __webpack_require__.X(0, [104,255,762,307,87,22], () => (__webpack_exec__(23151)));
module.exports = __webpack_exports__;

})();