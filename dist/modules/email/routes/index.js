"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _express = require("express");

var TodoRoutes = /*#__PURE__*/function () {
  function TodoRoutes() {
    (0, _classCallCheck2["default"])(this, TodoRoutes);
  }

  (0, _createClass2["default"])(TodoRoutes, null, [{
    key: "configure",
    value: function configure(emailController) {
      var route = (0, _express.Router)();
      route.post("/", emailController.teste);
      return route;
    }
  }]);
  return TodoRoutes;
}();

var _default = TodoRoutes;
exports["default"] = _default;