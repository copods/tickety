"use strict";
exports.id = 494;
exports.ids = [494];
exports.modules = {

/***/ 7417:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



const _excluded = ["children"],
      _excluded2 = ["isInvalid", "isReadOnly", "isIndeterminate"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Checkbox = void 0;

var _react = _interopRequireWildcard(__webpack_require__(16689));

var _CheckboxProvider = __webpack_require__(51890);

var _focus = __webpack_require__(19310);

var _interactions = __webpack_require__(30811);

var _toggle = __webpack_require__(9041);

var _checkbox = __webpack_require__(76350);

var _CheckboxGroup = __webpack_require__(33862);

var _utils = __webpack_require__(63605);

var _formControl = __webpack_require__(94410);

var _visuallyHidden = __webpack_require__(18223);

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

const Checkbox = StyledCheckbox => /*#__PURE__*/(0, _react.forwardRef)((_ref2, ref) => {
  let {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded);

  const {
    isHovered: isHoveredProp,
    isFocusVisible: isFocusVisibleProp,
    isChecked: isCheckedProp,
    isDisabled: isDisabledProp,
    isInvalid: isInvalidProp,
    isReadOnly: isReadOnlyProp,
    isIndeterminate: isIndeterminateProp,
    isFocused,
    isPressed
  } = props;
  const formControlContext = (0, _formControl.useFormControlContext)();

  const _ref3 = (0, _utils.combineContextAndProps)(formControlContext, props),
        {
    isInvalid,
    isReadOnly,
    isIndeterminate
  } = _ref3,
        combinedProps = _objectWithoutProperties(_ref3, _excluded2);

  const checkboxGroupContext = (0, _react.useContext)(_CheckboxGroup.CheckboxGroupContext);
  const state = (0, _toggle.useToggleState)(_objectSpread(_objectSpread({}, combinedProps), {}, {
    defaultSelected: props.defaultIsChecked,
    isSelected: isCheckedProp
  })); //aria-state-hook

  const _ref = _react.default.useRef(null);

  const {
    isHovered
  } = (0, _interactions.useHover)({}, _ref);
  const {
    focusProps,
    isFocusVisible
  } = (0, _focus.useFocusRing)();
  const mergedRef = (0, _utils.mergeRefs)([ref, _ref]);
  const {
    inputProps: groupItemInputProps
  } = checkboxGroupContext ? // eslint-disable-next-line react-hooks/rules-of-hooks
  (0, _checkbox.useCheckboxGroupItem)(_objectSpread(_objectSpread({}, combinedProps), {}, {
    'aria-label': combinedProps['aria-label'],
    'value': combinedProps.value
  }), checkboxGroupContext.state, //@ts-ignore
  mergedRef) : // eslint-disable-next-line react-hooks/rules-of-hooks
  (0, _checkbox.useCheckbox)(_objectSpread(_objectSpread({}, combinedProps), {}, {
    'aria-label': combinedProps['aria-label']
  }), state, //@ts-ignore
  mergedRef);

  const inputProps = _react.default.useMemo(() => groupItemInputProps, // eslint-disable-next-line react-hooks/exhaustive-deps
  [groupItemInputProps.checked, groupItemInputProps.disabled, groupItemInputProps]);

  const contextCombinedProps = _react.default.useMemo(() => {
    return _objectSpread(_objectSpread({}, checkboxGroupContext), combinedProps); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(0, _utils.stableHash)(combinedProps)]);

  const {
    checked: isChecked,
    disabled: isDisabled
  } = inputProps;
  return /*#__PURE__*/_react.default.createElement(StyledCheckbox, _extends({}, contextCombinedProps, {
    role: "label" // remove in future, role="label" is not supported in react-native-web, PR is open
    ,
    accessibilityRole: "label",
    ref: mergedRef,
    states: {
      checked: isChecked || isCheckedProp,
      disabled: isDisabled || isDisabledProp,
      hover: isHovered || isHoveredProp,
      invalid: isInvalid || isInvalidProp,
      readonly: isReadOnly || isReadOnlyProp,
      active: isPressed,
      focus: isFocused,
      indeterminate: isIndeterminate || isIndeterminateProp,
      focusVisible: isFocusVisible || isFocusVisibleProp
    }
  }), /*#__PURE__*/_react.default.createElement(_CheckboxProvider.CheckboxProvider, {
    isChecked: isChecked || isCheckedProp,
    isDisabled: isDisabled || isDisabledProp,
    isFocusVisible: isFocusVisible || isFocusVisibleProp,
    isHovered: isHovered || isHoveredProp,
    isInvalid: isInvalid || isInvalidProp,
    isReadOnly: isReadOnly || isReadOnlyProp,
    isIndeterminate: isIndeterminate || isIndeterminateProp,
    isPressed: isPressed
  }, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, /*#__PURE__*/_react.default.createElement("input", _extends({}, inputProps, focusProps, {
    ref: mergedRef
  }))), children));
});

exports.Checkbox = Checkbox;

/***/ }),

/***/ 33862:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.CheckboxGroupContext = void 0;

var _react = _interopRequireWildcard(__webpack_require__(16689));

var _checkbox = __webpack_require__(76350);

var _checkbox2 = __webpack_require__(69550);

var _formControl = __webpack_require__(94410);

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

const CheckboxGroupContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.CheckboxGroupContext = CheckboxGroupContext;

const CheckboxGroup = StyledCheckboxGroup => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const state = (0, _checkbox2.useCheckboxGroupState)(_objectSpread(_objectSpread({}, props), {}, {
    validationState: props.isInvalid ? 'invalid' : 'valid'
  }));
  const {
    groupProps
  } = (0, _checkbox.useCheckboxGroup)(_objectSpread(_objectSpread({}, props), {}, {
    'aria-label': props['aria-label']
  }), //@ts-ignore
  state);
  const formControlContext = (0, _formControl.useFormControlContext)();
  return /*#__PURE__*/_react.default.createElement(CheckboxGroupContext.Provider, {
    value: {
      state: _objectSpread(_objectSpread({}, formControlContext), state)
    }
  }, /*#__PURE__*/_react.default.createElement(StyledCheckboxGroup, _extends({}, groupProps, props, {
    ref: ref
  }), children));
});

var _default = CheckboxGroup;
exports["default"] = _default;

/***/ }),

/***/ 96550:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



const _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(16689));

var _CheckboxProvider = __webpack_require__(51890);

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

const CheckboxIcon = StyledCheckboxIcon => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    isChecked,
    isDisabled,
    isHovered,
    isInvalid,
    isReadOnly,
    isPressed,
    isFocused,
    isIndeterminate,
    isFocusVisible
  } = (0, _CheckboxProvider.useCheckbox)('CheckboxContext');
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isChecked && /*#__PURE__*/_react.default.createElement(StyledCheckboxIcon, _extends({
    states: {
      hover: isHovered,
      checked: isChecked,
      disabled: isDisabled,
      focusVisible: isFocusVisible,
      invalid: isInvalid,
      readOnly: isReadOnly,
      pressed: isPressed,
      focused: isFocused,
      indeterminate: isIndeterminate
    }
  }, props, {
    ref: ref
  }), children));
});

var _default = CheckboxIcon;
exports["default"] = _default;

/***/ }),

/***/ 50777:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



const _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(16689));

var _CheckboxProvider = __webpack_require__(51890);

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

const CheckboxIndicator = StyledCheckboxIndicator => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    isChecked,
    isDisabled,
    isHovered,
    isInvalid,
    isReadOnly,
    isPressed,
    isFocused,
    isIndeterminate,
    isFocusVisible
  } = (0, _CheckboxProvider.useCheckbox)('CheckboxContext');
  return /*#__PURE__*/_react.default.createElement(StyledCheckboxIndicator, _extends({
    states: {
      hover: isHovered,
      checked: isChecked,
      disabled: isDisabled,
      focusVisible: isFocusVisible,
      invalid: isInvalid,
      readOnly: isReadOnly,
      active: isPressed,
      focused: isFocused,
      indeterminate: isIndeterminate
    }
  }, props, {
    ref: ref
  }), children);
});

var _default = CheckboxIndicator;
exports["default"] = _default;

/***/ }),

/***/ 28436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



const _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(16689));

var _CheckboxProvider = __webpack_require__(51890);

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

const CheckboxLabel = StyledCheckboxLabel => /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    isChecked,
    isDisabled,
    isHovered,
    isInvalid,
    isReadOnly,
    isPressed,
    isFocused,
    isIndeterminate,
    isFocusVisible
  } = (0, _CheckboxProvider.useCheckbox)('CheckboxContext');
  return /*#__PURE__*/_react.default.createElement(StyledCheckboxLabel, _extends({
    states: {
      hover: isHovered,
      checked: isChecked,
      disabled: isDisabled,
      focusVisible: isFocusVisible,
      invalid: isInvalid,
      readOnly: isReadOnly,
      pressed: isPressed,
      focused: isFocused,
      indeterminate: isIndeterminate
    }
  }, props, {
    ref: ref
  }), children);
});

var _default = CheckboxLabel;
exports["default"] = _default;

/***/ }),

/***/ 51890:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useCheckbox = exports.CheckboxProvider = void 0;

var _utils = __webpack_require__(63605);

const [CheckboxProvider, useCheckbox] = (0, _utils.createContext)('CheckboxContext');
exports.useCheckbox = useCheckbox;
exports.CheckboxProvider = CheckboxProvider;

/***/ }),

/***/ 43910:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.N = void 0;

var _Checkbox = __webpack_require__(7417);

var _CheckboxIcon = _interopRequireDefault(__webpack_require__(96550));

var _CheckboxIndicator = _interopRequireDefault(__webpack_require__(50777));

var _CheckboxLabel = _interopRequireDefault(__webpack_require__(28436));

var _CheckboxGroup = _interopRequireDefault(__webpack_require__(33862));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const createCheckbox = _ref => {
  let {
    Root,
    Indicator,
    Icon,
    Label,
    Group
  } = _ref;
  const Checkbox = (0, _Checkbox.Checkbox)(Root);
  Checkbox.Indicator = (0, _CheckboxIndicator.default)(Indicator);
  Checkbox.Icon = (0, _CheckboxIcon.default)(Icon);
  Checkbox.Label = (0, _CheckboxLabel.default)(Label);
  Checkbox.Group = (0, _CheckboxGroup.default)(Group);
  Checkbox.displayName = 'Checkbox';
  Checkbox.Indicator.displayName = 'Checkbox.Indicator';
  Checkbox.Icon.displayName = 'Checkbox.Icon';
  Checkbox.Label.displayName = 'Checkbox.Label';
  Checkbox.Group.displayName = 'Checkbox.Group';
  return Checkbox;
};

exports.N = createCheckbox;

/***/ }),

/***/ 12808:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



const _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Divider = Divider;

var _react = _interopRequireWildcard(__webpack_require__(16689));

var _reactNative = __webpack_require__(45958);

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

function Divider(StyledDivider) {
  return /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
    let {
      children
    } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

    const {
      orientation
    } = props;
    return /*#__PURE__*/_react.default.createElement(StyledDivider, _extends({
      ref: ref
    }, props, {
      "aria-orientation": orientation //@ts-ignore web only role
      ,
      role: _reactNative.Platform.OS === 'web' ? 'separator' : undefined
    }), children);
  });
}

/***/ }),

/***/ 7674:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.e = createDivider;

var _Divider = __webpack_require__(12808);

function createDivider(_ref) {
  let {
    Root
  } = _ref;
  const Divider = (0, _Divider.Divider)(Root);
  Divider.displayName = 'Divider';
  return Divider;
}

/***/ }),

/***/ 84981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  XZ: () => (/* binding */ Checkbox),
  PD: () => (/* binding */ CheckboxIcon),
  FZ: () => (/* binding */ CheckboxIndicator),
  ke: () => (/* binding */ CheckboxLabel)
});

// UNUSED EXPORTS: CheckboxGroup

// EXTERNAL MODULE: ../../node_modules/react-native-web/dist/cjs/exports/View/index.js
var View = __webpack_require__(22966);
var View_default = /*#__PURE__*/__webpack_require__.n(View);
// EXTERNAL MODULE: ../../node_modules/@gluestack-style/react/lib/commonjs/index.js
var commonjs = __webpack_require__(15493);
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Checkbox/styled-components/Root.web.js


/* harmony default export */ const Root_web = ((0,commonjs.styled)((View_default()), {}, {
  componentName: 'Checkbox',
  descendantStyle: ['_icon', '_text', '_indicator']
}));
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Checkbox/styled-components/Indicator.js


/* harmony default export */ const Indicator = ((0,commonjs.styled)((View_default()), {}, {
  componentName: 'CheckboxIndicator',
  ancestorStyle: ['_indicator']
}));
// EXTERNAL MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Icons/styled-components/Root.js
var Root = __webpack_require__(11362);
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Checkbox/styled-components/Icon.js
// @ts-nocheck


/* harmony default export */ const Icon = ((0,commonjs.styled)(Root/* BaseIcon */.s, {}, {
  componentName: 'CheckboxIcon',
  ancestorStyle: ['_icon']
}, {
  propertyTokenMap: {
    stroke: 'colors'
  }
}));
// EXTERNAL MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Text/styled-components/Root.js
var styled_components_Root = __webpack_require__(38706);
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Checkbox/styled-components/Label.js


/* harmony default export */ const Label = ((0,commonjs.styled)(styled_components_Root/* default */.Z, {}, {
  componentName: 'CheckboxLabel',
  ancestorStyle: ['_text']
}));
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Checkbox/styled-components/Group.js


/* harmony default export */ const Group = ((0,commonjs.styled)((View_default()), {}, {
  componentName: 'CheckboxGroup'
}));
// EXTERNAL MODULE: ../../node_modules/@gluestack-ui/checkbox/lib/commonjs/index.js
var lib_commonjs = __webpack_require__(43910);
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Checkbox/index.js


const Checkbox = (0,lib_commonjs/* createCheckbox */.N)({
  Root: Root_web,
  Indicator: Indicator,
  Icon: Icon,
  Label: Label,
  Group: Group
});
const CheckboxIndicator = Checkbox.Indicator;
const CheckboxIcon = Checkbox.Icon;
const CheckboxLabel = Checkbox.Label;
const CheckboxGroup = Checkbox.Group;

/***/ }),

/***/ 97612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: () => (/* binding */ Divider)
});

// EXTERNAL MODULE: ../../node_modules/react-native-web/dist/cjs/exports/View/index.js
var View = __webpack_require__(22966);
var View_default = /*#__PURE__*/__webpack_require__.n(View);
// EXTERNAL MODULE: ../../node_modules/@gluestack-style/react/lib/commonjs/index.js
var commonjs = __webpack_require__(15493);
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Divider/styled-components/Root.js


/* harmony default export */ const Root = ((0,commonjs.styled)((View_default()), {}, {
  componentName: 'Divider'
}));
// EXTERNAL MODULE: ../../node_modules/@gluestack-ui/divider/lib/commonjs/index.js
var lib_commonjs = __webpack_require__(7674);
;// CONCATENATED MODULE: ../../node_modules/@gluestack-ui/themed/build/components/Divider/index.js


const Divider = (0,lib_commonjs/* createDivider */.e)({
  Root: Root
});

/***/ }),

/***/ 21558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ CheckIcon)
/* harmony export */ });
/* unused harmony export CheckCircleIcon */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gluestack_ui_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75664);
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11362);
/* harmony import */ var react_native_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52824);
/* harmony import */ var react_native_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_svg__WEBPACK_IMPORTED_MODULE_2__);




const CheckIcon = (0,_gluestack_ui_icon__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)({
  Root: _styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  viewBox: '0 0 24 24',
  path: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_native_svg__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M20 6L9 17L4 12",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
});
const CheckCircleIcon = (0,_gluestack_ui_icon__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)({
  Root: _styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  viewBox: '0 0 24 24',
  path: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_native_svg__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_native_svg__WEBPACK_IMPORTED_MODULE_2__.Path, {
    d: "M9 12L11 14L15 10",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
});
CheckIcon.displayName = 'CheckIcon';
CheckCircleIcon.displayName = 'CheckCircleIcon';


/***/ }),

/***/ 76350:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "useCheckbox", ({
  enumerable: true,
  get: function () {
    return _checkbox.useCheckbox;
  }
}));
Object.defineProperty(exports, "useCheckboxGroupItem", ({
  enumerable: true,
  get: function () {
    return _checkbox.useCheckboxGroupItem;
  }
}));
Object.defineProperty(exports, "useCheckboxGroup", ({
  enumerable: true,
  get: function () {
    return _useCheckboxGroup.useCheckboxGroup;
  }
}));

var _checkbox = __webpack_require__(17615);

var _useCheckboxGroup = __webpack_require__(4881);

/***/ }),

/***/ 4881:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useCheckboxGroup = useCheckboxGroup;

var _checkbox = __webpack_require__(17615);

var _utils = __webpack_require__(24103);
/**
 * Provides the behavior and accessibility implementation for a checkbox group component.
 * Checkbox groups allow users to select multiple items from a list of options.
 * @param props - Props for the checkbox group.
 * @param state - State for the checkbox group, as returned by `useCheckboxGroupState`.
 */


function useCheckboxGroup(props, state) {
  const params = (0, _checkbox.useCheckboxGroup)(props, state);
  return {
    labelProps: _objectSpread(_objectSpread({}, params.labelProps), (0, _utils.mapDomPropsToRN)(params.labelProps)),
    groupProps: _objectSpread(_objectSpread({}, params.groupProps), (0, _utils.mapDomPropsToRN)(params.groupProps))
  };
}

/***/ })

};
;