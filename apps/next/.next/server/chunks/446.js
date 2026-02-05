"use strict";
exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 66577:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



const _excluded = ["children", "isDisabled", "isHovered", "isPressed", "isFocused", "isFocusVisible", "isExternal", "href", "onPress"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Link = void 0;

var _react = _interopRequireWildcard(__webpack_require__(16689));

var _useLink = __webpack_require__(10491);

var _utils = __webpack_require__(63605);

var _focus = __webpack_require__(19310);

var _interactions = __webpack_require__(30811);

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

const Link = StyledLink => /*#__PURE__*/(0, _react.forwardRef)((_ref2, ref) => {
  let {
    children,
    isDisabled,
    isHovered: isHoveredProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    isExternal,
    href,
    onPress
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded);

  const {
    isFocusVisible,
    focusProps: focusRingProps
  } = (0, _focus.useFocusRing)();
  const {
    pressProps,
    isPressed
  } = (0, _interactions.usePress)({
    isDisabled
  });
  const {
    isFocused,
    focusProps
  } = (0, _focus.useFocus)();
  const {
    isHovered,
    hoverProps
  } = (0, _interactions.useHover)();

  const _ref = _react.default.useRef(null);

  const {
    linkProps
  } = (0, _useLink.useLink)({
    isExternal,
    href,
    onPress,
    _ref
  });
  return /*#__PURE__*/_react.default.createElement(StyledLink, _extends({
    ref: (0, _utils.mergeRefs)([_ref, ref]),
    states: {
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      active: isPressedProp || isPressed,
      disabled: isDisabled,
      focusVisible: isFocusVisibleProp || isFocusVisible
    },
    disabled: isDisabled
  }, linkProps, props, {
    onPressIn: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onPressIn, pressProps.onPressIn),
    onPressOut: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onPressOut, pressProps.onPressOut) // @ts-ignore - web only
    ,
    onHoverIn: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onHoverIn, hoverProps.onHoverIn) // @ts-ignore - web only
    ,
    onHoverOut: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onHoverOut, hoverProps.onHoverOut) // @ts-ignore - web only
    ,
    onFocus: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus) // @ts-ignore - web only
    ,
    onBlur: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur)
  }), children);
});

exports.Link = Link;

/***/ }),

/***/ 56019:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



const _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LinkText = void 0;

var _react = _interopRequireWildcard(__webpack_require__(16689));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

const LinkText = StyledButtonText => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(StyledButtonText, _extends({
    ref: ref
  }, props), children);
});

exports.LinkText = LinkText;

/***/ }),

/***/ 56247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.EW = void 0;
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _useLink.useLink;
  }
});

var _Link = __webpack_require__(66577);

var _LinkText = __webpack_require__(56019);

var _useLink = __webpack_require__(10491);

const createLink = _ref => {
  let {
    Root,
    Text
  } = _ref;
  const Link = (0, _Link.Link)(Root); //ts-ignore

  Link.Text = (0, _LinkText.LinkText)(Text);
  Link.Text.displayName = 'Link.Text';
  return Link;
};

exports.EW = createLink;

/***/ }),

/***/ 10491:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useLink = useLink;

var _reactNative = __webpack_require__(45958);

const linkToHREF = URL => {
  _reactNative.Linking.openURL(URL).catch(err => console.error('An error occurred', err));
};

const addOnPressFunctionality = (href, callback) => {
  href ? linkToHREF(href) : '';
  callback ? callback() : () => {};
};

function useLink(props) {
  const {
    href,
    isExternal,
    onPress,
    _ref
  } = props;
  let platformLinkProps = {};

  if (_reactNative.Platform.OS === 'web') {
    platformLinkProps = {
      href,
      onPress: onPress
    }; // Adding target to a tag created by RN-Web

    if (isExternal && _ref.current) {
      _ref.current.target = '_blank';
      _ref.current.rel = 'noopener';
    }
  } else {
    platformLinkProps = {
      onPress: () => {
        addOnPressFunctionality(href, onPress);
      }
    };
  }

  return {
    linkProps: _objectSpread(_objectSpread({}, platformLinkProps), {}, {
      role: 'link',
      accessible: true
    })
  };
}

/***/ }),

/***/ 78446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ LinkText)
});

// UNUSED EXPORTS: Link

// EXTERNAL MODULE: ../../node_modules/@gluestack-style/react/lib/commonjs/index.js
var commonjs = __webpack_require__(15493);
// EXTERNAL MODULE: ../../node_modules/react-native-web/dist/cjs/exports/Pressable/index.js
var Pressable = __webpack_require__(9644);
var Pressable_default = /*#__PURE__*/__webpack_require__.n(Pressable);
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Link/styled-components/Root.js


/* harmony default export */ const Root = ((0,commonjs.styled)((Pressable_default()), {}, {
  componentName: 'Link',
  descendantStyle: ['_text']
}));
// EXTERNAL MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Text/styled-components/Root.js
var styled_components_Root = __webpack_require__(38706);
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Link/styled-components/Text.js


/* harmony default export */ const Text = ((0,commonjs.styled)(styled_components_Root/* default */.Z, {}, {
  componentName: 'LinkText',
  ancestorStyle: ['_text']
}));
// EXTERNAL MODULE: ../../node_modules/@gluestack-ui/link/lib/commonjs/index.js
var lib_commonjs = __webpack_require__(56247);
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Link/index.js


const Link = (0,lib_commonjs/* createLink */.EW)({
  Root: Root,
  Text: Text
});
const LinkText = Link.Text;

/***/ })

};
;