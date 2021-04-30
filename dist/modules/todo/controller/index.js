"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _createTodoSevice = _interopRequireDefault(require("../services/createTodoSevice"));

var _createNothingTodoSevice = _interopRequireDefault(require("../services/createNothingTodoSevice"));

var _getTodoServices = _interopRequireDefault(require("../services/getTodoServices"));

var _deleteTodoService = _interopRequireDefault(require("../services/deleteTodoService"));

var _updateTodoService = _interopRequireDefault(require("../services/updateTodoService"));

var database;

var TodoController = /*#__PURE__*/function () {
  function TodoController(db) {
    (0, _classCallCheck2["default"])(this, TodoController);
    database = db;
  }

  (0, _createClass2["default"])(TodoController, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var todo, createTodoService, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                todo = req.body;
                _context.prev = 1;
                createTodoService = new _createTodoSevice["default"](database);
                _context.next = 5;
                return createTodoService.execute(todo);

              case 5:
                response = _context.sent;
                return _context.abrupt("return", res.status(201).json(response));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", res.status(400).json({
                  error: _context.t0.message
                }));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "index",
    value: function () {
      var _index = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var getTodoServices, response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                getTodoServices = new _getTodoServices["default"](database);
                _context2.next = 4;
                return getTodoServices.execute();

              case 4:
                response = _context2.sent;
                return _context2.abrupt("return", res.status(200).json(response));

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(400).json({
                  error: _context2.t0.message
                }));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      function index(_x3, _x4) {
        return _index.apply(this, arguments);
      }

      return index;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var deleteTodoServices;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                deleteTodoServices = new _deleteTodoService["default"](database);
                _context3.next = 4;
                return deleteTodoServices.execute({
                  id: req.params.id
                });

              case 4:
                return _context3.abrupt("return", res.status(200).json({
                  message: "to-do deleted",
                  statusCode: 200
                }));

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(400).json({
                  error: _context3.t0.message,
                  statusCode: 400
                }));

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function _delete(_x5, _x6) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var updateTodoService, response;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                updateTodoService = new _updateTodoService["default"](database);
                _context4.next = 4;
                return updateTodoService.execute({
                  id: req.params.id,
                  status: req.body.status,
                  back: req.body.back
                });

              case 4:
                response = _context4.sent;
                return _context4.abrupt("return", res.status(200).json(response));

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.status(400).json({
                  error: _context4.t0.message
                }));

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));

      function update(_x7, _x8) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "nothing",
    value: function () {
      var _nothing = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var createNothingTodoService, response;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                createNothingTodoService = new _createNothingTodoSevice["default"](database);
                _context5.next = 4;
                return createNothingTodoService.execute();

              case 4:
                response = _context5.sent;
                return _context5.abrupt("return", res.status(200).json({
                  statusCode: 200,
                  data: response
                }));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.status(400).json({
                  statusCode: 400,
                  error: _context5.t0.message
                }));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      function nothing(_x9, _x10) {
        return _nothing.apply(this, arguments);
      }

      return nothing;
    }()
  }]);
  return TodoController;
}();

var _default = TodoController;
exports["default"] = _default;