"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Menu = _interopRequireDefault(require("./Menu"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Menu items',
  component: _Menu.default,
  argTypes: {
    pages: {
      control: 'array'
    },
    width: {
      control: 'text'
    },
    cornerRadius: {
      control: 'text'
    }
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Menu.default, args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  pages: ['home', 'about', 'contact'],
  width: '80%',
  cornerRadius: '20px'
};