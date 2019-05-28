"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RawListController = void 0;

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

exports.RawListController = RawListController;
var ListController = (0, _Searchable.SearchableMixin)((0, _Pagable.PagableMixin)(RawListController));
var _default = ListController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0Q29udHJvbGxlci9MaXN0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJSYXdMaXN0Q29udHJvbGxlciIsImRhdGFzb3VyY2UiLCJkaXNwb3NlIiwiRGF0YUNvbnRyb2xsZXJUeXBlcyIsIkxpc3RDb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7Ozs7Ozs7O0lBRWFBLGlCOzs7QUFDWCw2QkFBbUJDLFVBQW5CLEVBQW1DO0FBQUE7O0FBQUE7QUFBRTs7OztvQ0FFZjtBQUNwQixXQUFLQSxVQUFMLENBQWdCQyxPQUFoQjtBQUNEOzs7bUNBRW9CLENBQUU7OzsyQkFFVixDQUFFOzs7d0JBRUk7QUFDakIsYUFBT0Msc0JBQW9CQyxjQUEzQjtBQUNEOzs7Ozs7O0FBR0gsSUFBTUEsY0FBYyxHQUFHLGlDQUFnQiwyQkFBYUosaUJBQWIsQ0FBaEIsQ0FBdkI7ZUFFZUksYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFDb250cm9sbGVyVHlwZXMgfSBmcm9tICcuLic7XHJcbmltcG9ydCBJRGF0YUNvbnRyb2xsZXIgZnJvbSAnLi4vQmFzZS9JRGF0YUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBMaXN0RGF0YVNvdXJjZSB9IGZyb20gJy4uL0RhdGFTb3VyY2UvRGF0YVNvdXJjZSc7XHJcbmltcG9ydCB7IElFbmNvZGFibGUgfSBmcm9tICcuLi9CYXNlL0lNb2RlbCc7XHJcbmltcG9ydCB7IFBhZ2FibGVNaXhpbiB9IGZyb20gJy4uL0RhdGFTb3VyY2UvUGFnYWJsZSc7XHJcbmltcG9ydCB7IFNlYXJjaGFibGVNaXhpbiB9IGZyb20gJy4uL0RhdGFTb3VyY2UvU2VhcmNoYWJsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmF3TGlzdENvbnRyb2xsZXI8VCBleHRlbmRzIElFbmNvZGFibGUsIERTIGV4dGVuZHMgTGlzdERhdGFTb3VyY2U8YW55Pj4gaW1wbGVtZW50cyBJRGF0YUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhc291cmNlOiBEUykge31cclxuXHJcbiAgYmVmb3JlRGlzcG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YXNvdXJjZS5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBhZnRlckRpc3Bvc2UoKTogdm9pZCB7fVxyXG5cclxuICBpbml0KCk6IHZvaWQge31cclxuXHJcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBEYXRhQ29udHJvbGxlclR5cGVzLkxpc3RDb250cm9sbGVyO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgTGlzdENvbnRyb2xsZXIgPSBTZWFyY2hhYmxlTWl4aW4oUGFnYWJsZU1peGluKFJhd0xpc3RDb250cm9sbGVyKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0Q29udHJvbGxlcjtcclxuIl19