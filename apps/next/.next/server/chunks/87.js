"use strict";
exports.id = 87;
exports.ids = [87];
exports.modules = {

/***/ 81068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "raf/polyfill"
var polyfill_ = __webpack_require__(40106);
// EXTERNAL MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Provider/index.js
var Provider = __webpack_require__(25411);
// EXTERNAL MODULE: ../../node_modules/@gluestack-ui/config/build/gluestack-ui.config.js + 142 modules
var gluestack_ui_config = __webpack_require__(92278);
// EXTERNAL MODULE: ../../node_modules/@gluestack-style/react/lib/commonjs/index.js
var commonjs = __webpack_require__(15493);
;// CONCATENATED MODULE: ../../packages/app/provider/gluestack-ui.config.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const config = (0,commonjs.createConfig)(_objectSpread(_objectSpread({}, gluestack_ui_config/* config */.vc), {}, {
  tokens: _objectSpread(_objectSpread({}, gluestack_ui_config/* config */.vc.tokens), {}, {
    colors: _objectSpread(_objectSpread({}, gluestack_ui_config/* config */.vc.tokens.colors), {}, {
      white: '#FFFFFF',
      black: '#000000',
      primary0: '#F5F3FF',
      primary50: '#F5F3FF',
      primary100: '#DDD6FE',
      primary200: '#C4B5FD',
      primary300: '#A78BFA',
      primary400: '#8B5CF6',
      primary500: '#7C3AED',
      primary600: '#6D28D9',
      primary700: '#5B21B6',
      primary800: '#4C1D95',
      primary900: '#441e7d',
      primary950: '#441E7D',
      secondary0: '#FCFCFC',
      secondary50: '#f9fafb',
      secondary100: '#f3f4f6',
      secondary200: '#e4e7eb',
      secondary300: '#d1d5da',
      secondary400: '#9ca3af',
      secondary500: '#6b7280',
      secondary600: '#4b5563',
      secondary700: '#374151',
      secondary800: '#1f2937',
      secondary900: '#111827',
      secondary950: '#171717',
      backgroundDark0: '#FFFFFF',
      backgroundDark50: '#f9fafb',
      backgroundDark100: '#f3f4f6',
      backgroundDark200: '#e4e7eb',
      backgroundDark300: '#d1d5da',
      backgroundDark400: '#9ca3af',
      backgroundDark500: '#6b7280',
      backgroundDark600: '#4b5563',
      backgroundDark700: '#374151',
      backgroundDark800: '#1f2937',
      backgroundDark900: '#111827',
      backgroundDark950: '#171717',
      backgroundLight0: '#FFFFFF',
      backgroundLight50: '#f9fafb',
      backgroundLight100: '#f3f4f6',
      backgroundLight200: '#e4e7eb',
      backgroundLight300: '#d1d5da',
      backgroundLight400: '#9ca3af',
      backgroundLight500: '#6b7280',
      backgroundLight600: '#4b5563',
      backgroundLight700: '#374151',
      backgroundLight800: '#1f2937',
      backgroundLight900: '#111827',
      backgroundLight950: '#171717',
      backgroundLightError: '#FEF1F1',
      backgroundDarkError: '#2E2020',
      backgroundLightWarning: '#FFF4EB',
      backgroundDarkWarning: '#2E231B',
      backgroundLightSuccess: '#EDFCF2',
      backgroundDarkSuccess: '#1C2B21',
      backgroundLightInfo: '#EBF8FE',
      backgroundDarkInfo: '#1A282E',
      backgroundLightMuted: '#F6F6F7',
      backgroundDarkMuted: '#252526',
      textLight0: '#FFFFFF',
      textLight50: '#f9fafb',
      textLight100: '#f3f4f6',
      textLight200: '#e4e7eb',
      textLight300: '#d1d5da',
      textLight400: '#9ca3af',
      textLight500: '#6b7280',
      textLight600: '#4b5563',
      textLight700: '#374151',
      textLight800: '#1f2937',
      textLight900: '#111827',
      textLight950: '#171717',
      textDark0: '#FFFFFF',
      textDark50: '#f9fafb',
      textDark100: '#f3f4f6',
      textDark200: '#e4e7eb',
      textDark300: '#d1d5da',
      textDark400: '#9ca3af',
      textDark500: '#6b7280',
      textDark600: '#4b5563',
      textDark700: '#374151',
      textDark800: '#1f2937',
      textDark900: '#111827',
      textDark950: '#171717',
      borderLight0: '#FFFFFF',
      borderLight50: '#f9fafb',
      borderLight100: '#f3f4f6',
      borderLight200: '#e4e7eb',
      borderLight300: '#d1d5da',
      borderLight400: '#9ca3af',
      borderLight500: '#6b7280',
      borderLight600: '#4b5563',
      borderLight700: '#374151',
      borderLight800: '#1f2937',
      borderLight900: '#111827',
      borderLight950: '#171717',
      borderDark0: '#FFFFFF',
      borderDark50: '#f9fafb',
      borderDark100: '#f3f4f6',
      borderDark200: '#e4e7eb',
      borderDark300: '#d1d5da',
      borderDark400: '#9ca3af',
      borderDark500: '#6b7280',
      borderDark600: '#4b5563',
      borderDark700: '#374151',
      borderDark800: '#1f2937',
      borderDark900: '#111827',
      borderDark950: '#171717',
      info50: '#F5F3FF',
      info100: '#DDD6FE',
      info200: '#C4B5FD',
      info300: '#A78BFA',
      info400: '#8B5CF6',
      info500: '#7C3AED',
      info600: '#6D28D9',
      info700: '#5B21B6',
      info800: '#4C1D95',
      info900: '#441e7d'
    }),
    space: _objectSpread(_objectSpread({}, gluestack_ui_config/* config */.vc.tokens.space), {}, {
      px: '1px',
      '0': 0,
      '0.5': 2,
      '1': 4,
      '1.5': 6,
      '2': 8,
      '2.5': 10,
      '3': 12,
      '3.5': 14,
      '4': 16,
      '4.5': 18,
      '5': 20,
      '6': 24,
      '7': 28,
      '8': 32,
      '9': 36,
      '10': 40,
      '11': 44,
      '12': 48,
      '16': 64,
      '20': 80,
      '24': 96,
      '32': 128,
      '35': 140,
      '40': 160,
      '48': 192,
      '56': 224,
      '64': 256,
      '72': 288,
      '80': 320,
      '96': 384,
      '1/2': '50%',
      '1/3': '33.333%',
      '2/3': '66.666%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666%',
      '2/6': '33.333%',
      '3/6': '50%',
      '4/6': '66.666%',
      '5/6': '83.333%',
      full: '100%',
      '25/2': '12%',
      '100/7': '14%',
      '6/25': '24%',
      '3/10': '30%',
      '9/20': '45%',
      '12/25': '48%',
      '7/10': '70%',
      '60': 60,
      '74': 74,
      '70': 70,
      '90': 90,
      '122': 122,
      '141': 141,
      '170': 170,
      '182': 182,
      '200': 200,
      '212': 212,
      //layoutPadding
      '234': 234,
      //qrBoxInner
      '275': 275,
      '354': 354,
      '384': 384,
      '372': 372,
      //imgWidth
      '422': 422,
      '441': 441,
      '480': 480,
      '508': 508,
      //boxSize
      '544': 544,
      authcard: 544,
      '622': 622,
      '736': 736,
      '764': 764,
      containerWidth: 1016
    }),
    borderWidths: _objectSpread(_objectSpread({}, gluestack_ui_config/* config */.vc.tokens.borderWidths), {}, {
      '20': 20,
      '50': 50
    }),
    opacity: _objectSpread({}, gluestack_ui_config/* config */.vc.tokens.opacity)
  })
}));
 // Get the type of Config
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52322);
;// CONCATENATED MODULE: ../../packages/app/provider/gluestack-ui.tsx



function GluestackUI({
  children
}) {
  return /*#__PURE__*/jsx_runtime.jsx(Provider/* GluestackUIProvider */.A, {
    config: config,
    children: children
  });
}
;// CONCATENATED MODULE: ../../packages/app/provider/index.tsx


function provider_Provider({
  children
}) {
  return /*#__PURE__*/jsx_runtime.jsx(GluestackUI, {
    children: children
  });
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(40968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _app_ownKeys(Object(source), !0).forEach(function (key) { _app_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const metadata = {
  title: 'Next.js head starter kit with gluestack-ui',
  description: 'A comprehensive starter kit to kick-start your next.js application using gluestack-ui - your one-stop solution for faster, smoother, and better web development.'
};

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime.jsx("title", {
        children: "Solito Example App"
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        name: "description",
        content: "Expo + Next.js with Solito. By Fernando Rojo."
      }), /*#__PURE__*/jsx_runtime.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/jsx_runtime.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }), /*#__PURE__*/jsx_runtime.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(provider_Provider, {
      children: /*#__PURE__*/jsx_runtime.jsx(Component, _app_objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 39310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(331);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19615);
/* harmony import */ var react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _gluestack_style_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15493);
/* harmony import */ var _gluestack_style_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gluestack_style_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52322);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Document() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
    className: "gs",
    lang: "en",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
        rel: "stylesheet"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("body", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})]
    })]
  });
}

Document.getInitialProps = async ({
  renderPage
}) => {
  react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_4___default().registerComponent('Main', () => next_document__WEBPACK_IMPORTED_MODULE_1__.Main);
  const {
    getStyleElement
  } = react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_4___default().getApplication('Main');
  const page = await renderPage();
  const styles = [getStyleElement(), ...(0,_gluestack_style_react__WEBPACK_IMPORTED_MODULE_2__.flush)()];
  return _objectSpread(_objectSpread({}, page), {}, {
    styles: react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(styles)
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Document);

/***/ })

};
;