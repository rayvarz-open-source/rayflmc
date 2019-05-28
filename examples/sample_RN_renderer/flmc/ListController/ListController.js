"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require("..");

var _Pagable = require("../DataSource/Pagable");

var _Searchable = require("../DataSource/Searchable");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RawListController =
/*#__PURE__*/
function () {
  function RawListController(datasource) {
    _classCallCheck(this, RawListController);

    this.datasource = datasource;
  }

  _createClass(RawListController, [{
    key: "beforeDispose",
    value: function beforeDispose() {
      this.datasource.dispose();
    }
  }, {
    key: "afterDispose",
    value: function afterDispose() {}
  }, {
    key: "init",
    value: function init() {}
  }, {
    key: "type",
    get: function get() {
      return _.DataControllerTypes.ListController;
    }
  }]);

  return RawListController;
}();

var ListController = (0, _Searchable.SearchableMixin)((0, _Pagable.PagableMixin)(RawListController));
var _default = ListController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0Q29udHJvbGxlci9MaXN0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJSYXdMaXN0Q29udHJvbGxlciIsImRhdGFzb3VyY2UiLCJkaXNwb3NlIiwiRGF0YUNvbnRyb2xsZXJUeXBlcyIsIkxpc3RDb250cm9sbGVyIiwiRm9ybUNvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFJQTs7QUFDQTs7Ozs7Ozs7SUFFTUEsaUI7OztBQUNKLDZCQUFtQkMsVUFBbkIsRUFBbUM7QUFBQTs7QUFBQTtBQUFFOzs7O29DQUVmO0FBQ3BCLFdBQUtBLFVBQUwsQ0FBZ0JDLE9BQWhCO0FBQ0Q7OzttQ0FFb0IsQ0FBRTs7OzJCQUVWLENBQUU7Ozt3QkFFSTtBQUNqQixhQUFPQyxzQkFBb0JDLGNBQTNCO0FBQ0Q7Ozs7OztBQUdILElBQU1DLGNBQWMsR0FBRyxpQ0FBZ0IsMkJBQWFMLGlCQUFiLENBQWhCLENBQXZCO2VBRWVLLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhQ29udHJvbGxlclR5cGVzIH0gZnJvbSAnLi4nO1xyXG5pbXBvcnQgSURhdGFDb250cm9sbGVyIGZyb20gJy4uL0Jhc2UvSURhdGFDb250cm9sbGVyJztcclxuaW1wb3J0IHsgTGlzdERhdGFTb3VyY2UgfSBmcm9tICcuLi9EYXRhU291cmNlL0RhdGFTb3VyY2UnO1xyXG5pbXBvcnQgeyBJRW5jb2RhYmxlIH0gZnJvbSAnLi4vQmFzZS9JTW9kZWwnO1xyXG5pbXBvcnQgeyBQYWdhYmxlTWl4aW4gfSBmcm9tICcuLi9EYXRhU291cmNlL1BhZ2FibGUnO1xyXG5pbXBvcnQgeyBTZWFyY2hhYmxlTWl4aW4gfSBmcm9tICcuLi9EYXRhU291cmNlL1NlYXJjaGFibGUnO1xyXG5cclxuY2xhc3MgUmF3TGlzdENvbnRyb2xsZXI8VCBleHRlbmRzIElFbmNvZGFibGUsIERTIGV4dGVuZHMgTGlzdERhdGFTb3VyY2U8VD4+IGltcGxlbWVudHMgSURhdGFDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YXNvdXJjZTogRFMpIHt9XHJcblxyXG4gIGJlZm9yZURpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGFzb3VyY2UuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgYWZ0ZXJEaXNwb3NlKCk6IHZvaWQge31cclxuXHJcbiAgaW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gRGF0YUNvbnRyb2xsZXJUeXBlcy5MaXN0Q29udHJvbGxlcjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEZvcm1Db250cm9sbGVyID0gU2VhcmNoYWJsZU1peGluKFBhZ2FibGVNaXhpbihSYXdMaXN0Q29udHJvbGxlcikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRyb2xsZXI7XHJcbiJdfQ==