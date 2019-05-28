"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Direction = void 0;

var _IElement = require("../IElement");

var _ElementTypes = require("./ElementTypes");

var _rxjs = require("rxjs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Direction;
exports.Direction = Direction;

(function (Direction) {
  Direction[Direction["Column"] = 0] = "Column";
  Direction[Direction["Row"] = 1] = "Row";
})(Direction || (exports.Direction = Direction = {}));

var ContainerElement =
/*#__PURE__*/
function () {
  function ContainerElement() {
    _classCallCheck(this, ContainerElement);

    _defineProperty(this, "childrenContainer", void 0);

    _defineProperty(this, "directionValue", new _rxjs.BehaviorSubject(Direction.Column));
  }

  _createClass(ContainerElement, [{
    key: "dispose",
    value: function dispose() {}
  }, {
    key: "validate",
    value: function validate() {
      return new _IElement.ValidationResult(this.childrenContainer.value.map(function (i) {
        return i.validate().isValid;
      }).reduce(function (p, c) {
        return p && c;
      }));
    }
  }, {
    key: "childrenR",
    value: function childrenR(children) {
      if (this.children == null) this.childrenContainer = new _rxjs.BehaviorSubject([]);
      this.childrenContainer.next(children);
      return this;
    }
  }, {
    key: "childrenO",
    value: function childrenO(children) {
      var _this = this;

      if (this.children == null) this.childrenContainer = new _rxjs.BehaviorSubject([]);
      children.subscribe({
        next: function next(v) {
          return _this.childrenContainer.next(v);
        }
      });
      return this;
    }
  }, {
    key: "children",
    value: function children(children_) {
      if ((0, _IElement.areElements)(children_)) return this.childrenR(children_);
      if ((0, _rxjs.isObservable)(children_)) return this.childrenO(children_);
      throw new Error('given children type is not support');
    } // direction

  }, {
    key: "directionR",
    value: function directionR(dir) {
      this.directionValue.next(dir);
      return this;
    }
  }, {
    key: "directionO",
    value: function directionO(dir) {
      var _this2 = this;

      dir.subscribe({
        next: function next(v) {
          return _this2.directionValue.next(v);
        }
      });
      return this;
    }
  }, {
    key: "direction",
    value: function direction(dir) {
      if (typeof dir === 'number') return this.directionR(dir);
      if ((0, _rxjs.isObservable)(dir)) return this.directionO(dir);
      throw new Error('given dir type is not support');
    }
  }, {
    key: "type",
    get: function get() {
      return _ElementTypes.ElementTypes.Container;
    }
  }]);

  return ContainerElement;
}();

var Container = function Container(children) {
  var element = new ContainerElement();
  if (children) return element.children(children);
  return element;
};

var _default = Container;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Gb3JtQ29udHJvbGxlci9FbGVtZW50cy9Db250YWluZXJFbGVtZW50LnRzIl0sIm5hbWVzIjpbIkRpcmVjdGlvbiIsIkNvbnRhaW5lckVsZW1lbnQiLCJCZWhhdmlvclN1YmplY3QiLCJDb2x1bW4iLCJWYWxpZGF0aW9uUmVzdWx0IiwiY2hpbGRyZW5Db250YWluZXIiLCJ2YWx1ZSIsIm1hcCIsImkiLCJ2YWxpZGF0ZSIsImlzVmFsaWQiLCJyZWR1Y2UiLCJwIiwiYyIsImNoaWxkcmVuIiwibmV4dCIsInN1YnNjcmliZSIsInYiLCJjaGlsZHJlbl8iLCJjaGlsZHJlblIiLCJjaGlsZHJlbk8iLCJFcnJvciIsImRpciIsImRpcmVjdGlvblZhbHVlIiwiZGlyZWN0aW9uUiIsImRpcmVjdGlvbk8iLCJFbGVtZW50VHlwZXMiLCJDb250YWluZXIiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFWUEsUzs7O1dBQUFBLFM7QUFBQUEsRUFBQUEsUyxDQUFBQSxTO0FBQUFBLEVBQUFBLFMsQ0FBQUEsUztHQUFBQSxTLHlCQUFBQSxTOztJQUtOQyxnQjs7Ozs7Ozs7NENBbUNxQixJQUFJQyxxQkFBSixDQUErQkYsU0FBUyxDQUFDRyxNQUF6QyxDOzs7Ozs4QkFsQ1QsQ0FBRTs7OytCQVFXO0FBQzNCLGFBQU8sSUFBSUMsMEJBQUosQ0FBcUIsS0FBS0MsaUJBQUwsQ0FBdUJDLEtBQXZCLENBQTZCQyxHQUE3QixDQUFpQyxVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxRQUFGLEdBQWFDLE9BQWpCO0FBQUEsT0FBbEMsRUFBNERDLE1BQTVELENBQW1FLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVELENBQUMsSUFBSUMsQ0FBZjtBQUFBLE9BQW5FLENBQXJCLENBQVA7QUFDRDs7OzhCQUVpQkMsUSxFQUF3QztBQUN4RCxVQUFJLEtBQUtBLFFBQUwsSUFBaUIsSUFBckIsRUFBMkIsS0FBS1QsaUJBQUwsR0FBeUIsSUFBSUgscUJBQUosQ0FBZ0MsRUFBaEMsQ0FBekI7QUFDM0IsV0FBS0csaUJBQUwsQ0FBdUJVLElBQXZCLENBQTRCRCxRQUE1QjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7OEJBRWlCQSxRLEVBQW9EO0FBQUE7O0FBQ3BFLFVBQUksS0FBS0EsUUFBTCxJQUFpQixJQUFyQixFQUEyQixLQUFLVCxpQkFBTCxHQUF5QixJQUFJSCxxQkFBSixDQUFnQyxFQUFoQyxDQUF6QjtBQUMzQlksTUFBQUEsUUFBUSxDQUFDRSxTQUFULENBQW1CO0FBQ2pCRCxRQUFBQSxJQUFJLEVBQUUsY0FBQUUsQ0FBQztBQUFBLGlCQUFJLEtBQUksQ0FBQ1osaUJBQUwsQ0FBdUJVLElBQXZCLENBQTRCRSxDQUE1QixDQUFKO0FBQUE7QUFEVSxPQUFuQjtBQUdBLGFBQU8sSUFBUDtBQUNEOzs7NkJBRVFDLFMsRUFBa0U7QUFDekUsVUFBSSwyQkFBWUEsU0FBWixDQUFKLEVBQTRCLE9BQU8sS0FBS0MsU0FBTCxDQUFlRCxTQUFmLENBQVA7QUFDNUIsVUFBSSx3QkFBYUEsU0FBYixDQUFKLEVBQTZCLE9BQU8sS0FBS0UsU0FBTCxDQUFlRixTQUFmLENBQVA7QUFDN0IsWUFBTSxJQUFJRyxLQUFKLENBQVUsb0NBQVYsQ0FBTjtBQUNELEssQ0FFRDs7OzsrQkFJbUJDLEcsRUFBa0M7QUFDbkQsV0FBS0MsY0FBTCxDQUFvQlIsSUFBcEIsQ0FBeUJPLEdBQXpCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OzsrQkFFa0JBLEcsRUFBOEM7QUFBQTs7QUFDL0RBLE1BQUFBLEdBQUcsQ0FBQ04sU0FBSixDQUFjO0FBQ1pELFFBQUFBLElBQUksRUFBRSxjQUFBRSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDTSxjQUFMLENBQW9CUixJQUFwQixDQUF5QkUsQ0FBekIsQ0FBSjtBQUFBO0FBREssT0FBZDtBQUdBLGFBQU8sSUFBUDtBQUNEOzs7OEJBRVNLLEcsRUFBMEQ7QUFDbEUsVUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBbkIsRUFBNkIsT0FBTyxLQUFLRSxVQUFMLENBQWdCRixHQUFoQixDQUFQO0FBQzdCLFVBQUksd0JBQWFBLEdBQWIsQ0FBSixFQUF1QixPQUFPLEtBQUtHLFVBQUwsQ0FBZ0JILEdBQWhCLENBQVA7QUFDdkIsWUFBTSxJQUFJRCxLQUFKLENBQVUsK0JBQVYsQ0FBTjtBQUNEOzs7d0JBbERrQjtBQUNqQixhQUFPSywyQkFBYUMsU0FBcEI7QUFDRDs7Ozs7O0FBbURILElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNiLFFBQUQsRUFBc0U7QUFDdEYsTUFBSWMsT0FBTyxHQUFHLElBQUkzQixnQkFBSixFQUFkO0FBQ0EsTUFBSWEsUUFBSixFQUFjLE9BQU9jLE9BQU8sQ0FBQ2QsUUFBUixDQUFpQkEsUUFBakIsQ0FBUDtBQUNkLFNBQU9jLE9BQVA7QUFDRCxDQUpEOztlQU1lRCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElFbGVtZW50LCB7IFZhbGlkYXRpb25SZXN1bHQsIGFyZUVsZW1lbnRzIH0gZnJvbSAnLi4vSUVsZW1lbnQnO1xyXG5pbXBvcnQgeyBFbGVtZW50VHlwZXMgfSBmcm9tICcuL0VsZW1lbnRUeXBlcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgaXNPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xyXG4gIENvbHVtbiA9IDAsXHJcbiAgUm93ID0gMSxcclxufVxyXG5cclxuY2xhc3MgQ29udGFpbmVyRWxlbWVudCBpbXBsZW1lbnRzIElFbGVtZW50IHtcclxuICBkaXNwb3NlKCk6IHZvaWQge31cclxuXHJcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBFbGVtZW50VHlwZXMuQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGlsZHJlbkNvbnRhaW5lciE6IEJlaGF2aW9yU3ViamVjdDxJRWxlbWVudFtdPjtcclxuXHJcbiAgdmFsaWRhdGUoKTogVmFsaWRhdGlvblJlc3VsdCB7XHJcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQodGhpcy5jaGlsZHJlbkNvbnRhaW5lci52YWx1ZS5tYXAoaSA9PiBpLnZhbGlkYXRlKCkuaXNWYWxpZCkucmVkdWNlKChwLCBjKSA9PiBwICYmIGMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hpbGRyZW5SKGNoaWxkcmVuOiBJRWxlbWVudFtdKTogQ29udGFpbmVyRWxlbWVudCB7XHJcbiAgICBpZiAodGhpcy5jaGlsZHJlbiA9PSBudWxsKSB0aGlzLmNoaWxkcmVuQ29udGFpbmVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJRWxlbWVudFtdPihbXSk7XHJcbiAgICB0aGlzLmNoaWxkcmVuQ29udGFpbmVyLm5leHQoY2hpbGRyZW4pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoaWxkcmVuTyhjaGlsZHJlbjogT2JzZXJ2YWJsZTxJRWxlbWVudFtdPik6IENvbnRhaW5lckVsZW1lbnQge1xyXG4gICAgaWYgKHRoaXMuY2hpbGRyZW4gPT0gbnVsbCkgdGhpcy5jaGlsZHJlbkNvbnRhaW5lciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SUVsZW1lbnRbXT4oW10pO1xyXG4gICAgY2hpbGRyZW4uc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogdiA9PiB0aGlzLmNoaWxkcmVuQ29udGFpbmVyLm5leHQodiksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2hpbGRyZW4oY2hpbGRyZW5fOiBPYnNlcnZhYmxlPElFbGVtZW50W10+IHwgSUVsZW1lbnRbXSk6IENvbnRhaW5lckVsZW1lbnQge1xyXG4gICAgaWYgKGFyZUVsZW1lbnRzKGNoaWxkcmVuXykpIHJldHVybiB0aGlzLmNoaWxkcmVuUihjaGlsZHJlbl8pO1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZShjaGlsZHJlbl8pKSByZXR1cm4gdGhpcy5jaGlsZHJlbk8oY2hpbGRyZW5fKTtcclxuICAgIHRocm93IG5ldyBFcnJvcignZ2l2ZW4gY2hpbGRyZW4gdHlwZSBpcyBub3Qgc3VwcG9ydCcpO1xyXG4gIH1cclxuXHJcbiAgLy8gZGlyZWN0aW9uXHJcblxyXG4gIHByaXZhdGUgZGlyZWN0aW9uVmFsdWUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERpcmVjdGlvbj4oRGlyZWN0aW9uLkNvbHVtbik7XHJcblxyXG4gIHByaXZhdGUgZGlyZWN0aW9uUihkaXI6IERpcmVjdGlvbik6IENvbnRhaW5lckVsZW1lbnQge1xyXG4gICAgdGhpcy5kaXJlY3Rpb25WYWx1ZS5uZXh0KGRpcik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlyZWN0aW9uTyhkaXI6IE9ic2VydmFibGU8RGlyZWN0aW9uPik6IENvbnRhaW5lckVsZW1lbnQge1xyXG4gICAgZGlyLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IHYgPT4gdGhpcy5kaXJlY3Rpb25WYWx1ZS5uZXh0KHYpLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGRpcmVjdGlvbihkaXI6IE9ic2VydmFibGU8RGlyZWN0aW9uPiB8IERpcmVjdGlvbik6IENvbnRhaW5lckVsZW1lbnQge1xyXG4gICAgaWYgKHR5cGVvZiBkaXIgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcy5kaXJlY3Rpb25SKGRpcik7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlKGRpcikpIHJldHVybiB0aGlzLmRpcmVjdGlvbk8oZGlyKTtcclxuICAgIHRocm93IG5ldyBFcnJvcignZ2l2ZW4gZGlyIHR5cGUgaXMgbm90IHN1cHBvcnQnKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IChjaGlsZHJlbj86IE9ic2VydmFibGU8SUVsZW1lbnRbXT4gfCBJRWxlbWVudFtdKTogQ29udGFpbmVyRWxlbWVudCA9PiB7XHJcbiAgbGV0IGVsZW1lbnQgPSBuZXcgQ29udGFpbmVyRWxlbWVudCgpO1xyXG4gIGlmIChjaGlsZHJlbikgcmV0dXJuIGVsZW1lbnQuY2hpbGRyZW4oY2hpbGRyZW4pO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xyXG4iXX0=