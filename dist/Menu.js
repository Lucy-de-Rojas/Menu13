"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Menu.css");
var _animejs = _interopRequireDefault(require("animejs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Menu(_ref) {
  var pages = _ref.pages,
    width = _ref.width,
    cornerRadius = _ref.cornerRadius,
    align = _ref.align,
    backgroundBasic = _ref.backgroundBasic,
    colorBasic = _ref.colorBasic,
    backgroundHover = _ref.backgroundHover,
    colorHover = _ref.colorHover,
    backgroundSelected = _ref.backgroundSelected,
    colorSelected = _ref.colorSelected;
  var _useState = (0, _react.useState)('home'),
    _useState2 = _slicedToArray(_useState, 2),
    activePage = _useState2[0],
    setActivePage = _useState2[1];
  (0, _react.useEffect)(function () {
    console.clear();
    var pathname = window.location.pathname;
    pathname = pathname.replace(/\//, '');
    if (pathname == '') {
      pathname = 'home';
    }
    setActivePage(pathname);

    // highlight ative page link:

    var target = document.querySelector(".".concat(pathname));
    console.log('target:>>>>', target);
    target.style.padding = '30px 5px';
    target.style.fontSize = '2rem';
    target.style.backgroundColor = "".concat(backgroundSelected);
    target.style.color = "".concat(colorSelected);
  }, []);

  // resets:
  if (!pages) {
    pages = ['home', 'about', 'contact'];
  }
  if (!width) {
    width = '80%';
  }
  if (!cornerRadius) {
    cornerRadius = '20px';
  }
  if (!align) {
    align = 'center';
  }
  if (align == 'left') {
    align = 'flex-start';
  }
  if (align == 'right') {
    align = 'flex-end';
  }

  // basic colors:
  if (!backgroundBasic) {
    backgroundBasic = '#b8e1ffff';
  }
  if (!colorBasic) {
    colorBasic = '#363457ff';
  }

  // on hover:
  if (!backgroundHover) {
    backgroundHover = '#465c69ff';
  }
  if (!colorHover) {
    colorHover = "WHITE";
  }

  // on selected:
  if (!backgroundSelected) {
    backgroundSelected = '#e8aeb7ff';
  }
  if (!colorSelected) {
    colorSelected = 'white';
  }

  // end of colours

  function onMouseOver(event) {
    // event.preventDefault();
    // console.clear();
    // console.log(event.target);
    event.target.style.padding = '30px 5px';
    event.target.style.fontSize = '2rem';
    event.target.style.backgroundColor = "".concat(backgroundHover);
    event.target.style.color = "".concat(colorHover);
  }
  function onMouseOut(event) {
    // go back to normal:
    event.target.style.padding = '10px 5px';
    event.target.style.backgroundColor = "".concat(backgroundBasic);
    event.target.style.color = "".concat(colorBasic);
    event.target.style.fontSize = '1.5rem';

    // keep active page link highlighted:
    var target = document.querySelector(".".concat(activePage));
    target.style.padding = '30px 5px';
    target.style.backgroundColor = "".concat(backgroundSelected);
    target.style.color = "".concat(colorSelected);
    target.style.fontSize = '2rem';
  }
  function handleClick(event) {
    var target = event.target.style;
    // event.preventDefault();

    // console.log('on click:>>>>', event.target.className);
    target.transition = 'padding 0.7s, color 0.7s, background-color 0.7s, font-size 0.7s';
    target.padding = '10px 5px';
  }
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "menuWrapper",
    style: {
      // width: width,
      alignItems: "".concat(align)
    }
  }, pages.map(function (item, index) {
    var itemName = item[0].toUpperCase() + item.slice(1);
    var href = "/".concat(item);
    var classNameLong = "link ".concat(item);
    var classNameShort = "".concat(item);
    if (item == 'home') {
      href = '/';
    }
    return /*#__PURE__*/_react.default.createElement("a", {
      href: href,
      style: {
        borderRadius: cornerRadius,
        width: "".concat(width),
        backgroundColor: "".concat(backgroundBasic),
        color: "".concat(colorBasic)
      },
      className: classNameLong,
      onMouseOver: onMouseOver,
      onMouseOut: onMouseOut,
      onClick: handleClick
    }, "  ", itemName);
  })));
}
Menu.propTypes = {
  pages: _propTypes.default.array,
  width: _propTypes.default.string
};
Menu.defaultProps = {
  pages: ['home', 'about', 'contact'],
  width: '80%'
};