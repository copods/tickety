"use strict";
exports.id = 696;
exports.ids = [696];
exports.modules = {

/***/ 8732:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



const _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _focus = __webpack_require__(19310);

var _react = _interopRequireWildcard(__webpack_require__(16689));

var _interactions = __webpack_require__(30811);

var _utils = __webpack_require__(63605);

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

function Pressable(StyledPressable) {
  return /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
    let {
      children
    } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

    const {
      focusProps: focusRingProps,
      isFocusVisible
    } = (0, _focus.useFocusRing)();
    const {
      pressProps,
      isPressed
    } = (0, _interactions.usePress)({
      isDisabled: props.disabled ?? undefined
    });
    const {
      isFocused,
      focusProps
    } = (0, _focus.useFocus)();
    const {
      isHovered,
      hoverProps
    } = (0, _interactions.useHover)();
    return /*#__PURE__*/_react.default.createElement(StyledPressable, _extends({
      ref: ref,
      states: {
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
        disabled: props.disabled,
        focusVisible: isFocusVisible
      }
    }, props, {
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
    }), typeof children === 'function' ? children({
      hovered: isHovered,
      focused: isFocused,
      pressed: isPressed,
      disabled: props.disabled ?? undefined,
      focusVisible: isFocusVisible
    }) : children);
  });
}

var _default = Pressable;
exports["default"] = _default;

/***/ }),

/***/ 56852:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Y = createPressable;

var _Pressable = _interopRequireDefault(__webpack_require__(8732));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createPressable(_ref) {
  let {
    Root
  } = _ref;
  const Pressable = (0, _Pressable.default)(Root);
  Pressable.displayName = 'Pressable';
  return Pressable;
}

/***/ }),

/***/ 31696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ styled_components_Pressable)
});

// EXTERNAL MODULE: ../../node_modules/@gluestack-style/react/lib/commonjs/index.js
var commonjs = __webpack_require__(15493);
// EXTERNAL MODULE: ../../node_modules/react-native-web/dist/cjs/exports/Pressable/index.js
var Pressable = __webpack_require__(9644);
var Pressable_default = /*#__PURE__*/__webpack_require__.n(Pressable);
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Pressable/styled-components/Root.js


/* harmony default export */ const Root = ((0,commonjs.styled)((Pressable_default()), {}, {
  componentName: 'Pressable'
}));
// EXTERNAL MODULE: ../../node_modules/@gluestack-ui/pressable/lib/commonjs/index.js
var lib_commonjs = __webpack_require__(56852);
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Pressable/styled-components/index.js


const styled_components_Pressable = (0,lib_commonjs/* createPressable */.Y)({
  Root: Root
});

/***/ })

};
;