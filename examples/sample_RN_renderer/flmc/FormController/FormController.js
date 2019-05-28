"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DataControllerTypes = require("../DataControllerTypes");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormController =
/*#__PURE__*/
function () {
  function FormController() {
    _classCallCheck(this, FormController);

    _defineProperty(this, "elements", void 0);
  }

  _createClass(FormController, [{
    key: "validate",
    value: function validate() {
      return this.elements.map(function (element) {
        return element.validate();
      });
    }
  }, {
    key: "beforeDispose",
    value: function beforeDispose() {
      this.elements.forEach(function (element) {
        return element.dispose();
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {}
  }, {
    key: "afterDispose",
    value: function afterDispose() {
      this.dispose();
    }
  }, {
    key: "init",
    value: function init() {
      if (this.elements.length == 0) throw new Error('Must have atleast one element');
    }
  }, {
    key: "type",
    get: function get() {
      return _DataControllerTypes.DataControllerTypes.FormController;
    }
  }]);

  return FormController;
}();

exports["default"] = FormController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtQ29udHJvbGxlci9Gb3JtQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJGb3JtQ29udHJvbGxlciIsImVsZW1lbnRzIiwibWFwIiwiZWxlbWVudCIsInZhbGlkYXRlIiwiZm9yRWFjaCIsImRpc3Bvc2UiLCJsZW5ndGgiLCJFcnJvciIsIkRhdGFDb250cm9sbGVyVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsYzs7Ozs7Ozs7Ozs7K0JBT1k7QUFDN0IsYUFBTyxLQUFLQyxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0MsUUFBUixFQUFKO0FBQUEsT0FBekIsQ0FBUDtBQUNEOzs7b0NBRXFCO0FBQ3BCLFdBQUtILFFBQUwsQ0FBY0ksT0FBZCxDQUFzQixVQUFBRixPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDRyxPQUFSLEVBQUo7QUFBQSxPQUE3QjtBQUNEOzs7OEJBRWUsQ0FBRTs7O21DQUVHO0FBQ25CLFdBQUtBLE9BQUw7QUFDRDs7OzJCQUVZO0FBQ1gsVUFBSSxLQUFLTCxRQUFMLENBQWNNLE1BQWQsSUFBd0IsQ0FBNUIsRUFBK0IsTUFBTSxJQUFJQyxLQUFKLENBQVUsK0JBQVYsQ0FBTjtBQUNoQzs7O3dCQXRCa0I7QUFDakIsYUFBT0MseUNBQW9CVCxjQUEzQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElEYXRhQ29udHJvbGxlciBmcm9tICcuLi9CYXNlL0lEYXRhQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IERhdGFDb250cm9sbGVyVHlwZXMgfSBmcm9tICcuLi9EYXRhQ29udHJvbGxlclR5cGVzJztcclxuaW1wb3J0IElFbGVtZW50LCB7IFZhbGlkYXRpb25SZXN1bHQgfSBmcm9tICcuL0lFbGVtZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1Db250cm9sbGVyIGltcGxlbWVudHMgSURhdGFDb250cm9sbGVyIHtcclxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIERhdGFDb250cm9sbGVyVHlwZXMuRm9ybUNvbnRyb2xsZXI7XHJcbiAgfVxyXG5cclxuICBlbGVtZW50cyE6IElFbGVtZW50W107XHJcblxyXG4gIHZhbGlkYXRlKCk6IFZhbGlkYXRpb25SZXN1bHRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LnZhbGlkYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlRGlzcG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuZGlzcG9zZSgpKTtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKTogdm9pZCB7fVxyXG5cclxuICBhZnRlckRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT0gMCkgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGhhdmUgYXRsZWFzdCBvbmUgZWxlbWVudCcpO1xyXG4gIH1cclxufVxyXG4iXX0=