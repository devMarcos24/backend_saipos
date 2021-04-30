"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../../config/database"));

var _todos = _interopRequireDefault(require("../Models/todos"));

var models = [_todos["default"]];

var Database = /*#__PURE__*/function () {
  function Database() {
    (0, _classCallCheck2["default"])(this, Database);
    this.init();
  }

  (0, _createClass2["default"])(Database, [{
    key: "init",
    value: function init() {
      var sequelize = new _sequelize.Sequelize(_database["default"]);
      models.map(function (model) {
        return model.init(sequelize);
      }).map(function (model) {
        return model.associate && model.associate(sequelize.models);
      });
    }
  }]);
  return Database;
}();

var _default = new Database();

exports["default"] = _default;