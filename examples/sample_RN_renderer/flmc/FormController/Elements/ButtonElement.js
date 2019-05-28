"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _IElement = require("../IElement");

var _ElementTypes = require("./ElementTypes");

var _rxjs = require("rxjs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ButtonElement =
/*#__PURE__*/
function () {
  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    _defineProperty(this, "buttonText", new _rxjs.BehaviorSubject(''));

    _defineProperty(this, "buttonCallback", new _rxjs.BehaviorSubject(null));
  }

  _createClass(ButtonElement, [{
    key: "dispose",
    value: function dispose() {}
  }, {
    key: "validate",
    value: function validate() {
      return new _IElement.ValidationResult(true);
    } // text

  }, {
    key: "textR",
    value: function textR(text) {
      this.buttonText.next(text);
      return this;
    }
  }, {
    key: "textO",
    value: function textO(text) {
      var _this = this;

      text.subscribe({
        next: function next(v) {
          return _this.buttonText.next(v);
        }
      });
      return this;
    }
  }, {
    key: "text",
    value: function text(_text) {
      if (typeof _text === 'string') return this.textR(_text);
      if ((0, _rxjs.isObservable)(_text)) return this.textO(_text);
      throw new Error('given text type is not supported');
    } // callback

  }, {
    key: "onTapR",
    value: function onTapR(action) {
      this.buttonCallback.next(action);
      return this;
    }
  }, {
    key: "onTapO",
    value: function onTapO(action) {
      var _this2 = this;

      action.subscribe({
        next: function next(v) {
          return _this2.buttonCallback.next(v);
        }
      });
      return this;
    }
  }, {
    key: "onTap",
    value: function onTap(action) {
      if (typeof action === 'function') return this.onTapR(action);
      if ((0, _rxjs.isObservable)(action)) return this.onTapO(action);
      throw new Error('given action type is not supported');
    }
  }, {
    key: "type",
    get: function get() {
      return _ElementTypes.ElementTypes.Button;
    }
  }]);

  return ButtonElement;
}();

var Button = function Button(title) {
  var element = new ButtonElement();
  if (title == null) return element;
  return element.text(title);
};

var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Gb3JtQ29udHJvbGxlci9FbGVtZW50cy9CdXR0b25FbGVtZW50LnRzIl0sIm5hbWVzIjpbIkJ1dHRvbkVsZW1lbnQiLCJCZWhhdmlvclN1YmplY3QiLCJWYWxpZGF0aW9uUmVzdWx0IiwidGV4dCIsImJ1dHRvblRleHQiLCJuZXh0Iiwic3Vic2NyaWJlIiwidiIsInRleHRSIiwidGV4dE8iLCJFcnJvciIsImFjdGlvbiIsImJ1dHRvbkNhbGxiYWNrIiwib25UYXBSIiwib25UYXBPIiwiRWxlbWVudFR5cGVzIiwiQnV0dG9uIiwidGl0bGUiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFNTUEsYTs7Ozs7O3dDQWFpQixJQUFJQyxxQkFBSixDQUE0QixFQUE1QixDOzs0Q0FxQkksSUFBSUEscUJBQUosQ0FBMEMsSUFBMUMsQzs7Ozs7OEJBakNULENBQUU7OzsrQkFNVztBQUMzQixhQUFPLElBQUlDLDBCQUFKLENBQXFCLElBQXJCLENBQVA7QUFDRCxLLENBRUQ7Ozs7MEJBSU1DLEksRUFBNkI7QUFDakMsV0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUJGLElBQXJCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OzswQkFFS0EsSSxFQUF5QztBQUFBOztBQUM3Q0EsTUFBQUEsSUFBSSxDQUFDRyxTQUFMLENBQWU7QUFDYkQsUUFBQUEsSUFBSSxFQUFFLGNBQUFFLENBQUM7QUFBQSxpQkFBSSxLQUFJLENBQUNILFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCRSxDQUFyQixDQUFKO0FBQUE7QUFETSxPQUFmO0FBR0EsYUFBTyxJQUFQO0FBQ0Q7Ozt5QkFFSUosSyxFQUFrRDtBQUNyRCxVQUFJLE9BQU9BLEtBQVAsS0FBZ0IsUUFBcEIsRUFBOEIsT0FBTyxLQUFLSyxLQUFMLENBQVdMLEtBQVgsQ0FBUDtBQUM5QixVQUFJLHdCQUFhQSxLQUFiLENBQUosRUFBd0IsT0FBTyxLQUFLTSxLQUFMLENBQVdOLEtBQVgsQ0FBUDtBQUN4QixZQUFNLElBQUlPLEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0QsSyxDQUNEOzs7OzJCQUlPQyxNLEVBQXNDO0FBQzNDLFdBQUtDLGNBQUwsQ0FBb0JQLElBQXBCLENBQXlCTSxNQUF6QjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7MkJBRU1BLE0sRUFBa0Q7QUFBQTs7QUFDdkRBLE1BQUFBLE1BQU0sQ0FBQ0wsU0FBUCxDQUFpQjtBQUNmRCxRQUFBQSxJQUFJLEVBQUUsY0FBQUUsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ0ssY0FBTCxDQUFvQlAsSUFBcEIsQ0FBeUJFLENBQXpCLENBQUo7QUFBQTtBQURRLE9BQWpCO0FBR0EsYUFBTyxJQUFQO0FBQ0Q7OzswQkFFS0ksTSxFQUFrRTtBQUN0RSxVQUFJLE9BQU9BLE1BQVAsS0FBa0IsVUFBdEIsRUFBa0MsT0FBTyxLQUFLRSxNQUFMLENBQVlGLE1BQVosQ0FBUDtBQUNsQyxVQUFJLHdCQUFhQSxNQUFiLENBQUosRUFBMEIsT0FBTyxLQUFLRyxNQUFMLENBQVlILE1BQVosQ0FBUDtBQUMxQixZQUFNLElBQUlELEtBQUosQ0FBVSxvQ0FBVixDQUFOO0FBQ0Q7Ozt3QkFqRGtCO0FBQ2pCLGFBQU9LLDJCQUFhQyxNQUFwQjtBQUNEOzs7Ozs7QUFrREgsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUF5QztBQUN0RCxNQUFJQyxPQUFPLEdBQUcsSUFBSWxCLGFBQUosRUFBZDtBQUNBLE1BQUlpQixLQUFLLElBQUksSUFBYixFQUFtQixPQUFPQyxPQUFQO0FBQ25CLFNBQU9BLE9BQU8sQ0FBQ2YsSUFBUixDQUFhYyxLQUFiLENBQVA7QUFDRCxDQUpEOztlQU1lRCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElFbGVtZW50LCB7IFZhbGlkYXRpb25SZXN1bHQgfSBmcm9tICcuLi9JRWxlbWVudCc7XHJcbmltcG9ydCB7IEVsZW1lbnRUeXBlcyB9IGZyb20gJy4vRWxlbWVudFR5cGVzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBpc09ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmludGVyZmFjZSBPblRhcENhbGxCYWNrIHtcclxuICAoKTogdm9pZDtcclxufVxyXG5cclxuY2xhc3MgQnV0dG9uRWxlbWVudCBpbXBsZW1lbnRzIElFbGVtZW50IHtcclxuICBkaXNwb3NlKCk6IHZvaWQge31cclxuXHJcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBFbGVtZW50VHlwZXMuQnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoKTogVmFsaWRhdGlvblJlc3VsdCB7XHJcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyB0ZXh0XHJcblxyXG4gIHByaXZhdGUgYnV0dG9uVGV4dCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XHJcblxyXG4gIHRleHRSKHRleHQ6IHN0cmluZyk6IEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgdGhpcy5idXR0b25UZXh0Lm5leHQodGV4dCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRleHRPKHRleHQ6IE9ic2VydmFibGU8c3RyaW5nPik6IEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgdGV4dC5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiB2ID0+IHRoaXMuYnV0dG9uVGV4dC5uZXh0KHYpLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRleHQodGV4dDogT2JzZXJ2YWJsZTxzdHJpbmc+IHwgc3RyaW5nKTogQnV0dG9uRWxlbWVudCB7XHJcbiAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSByZXR1cm4gdGhpcy50ZXh0Uih0ZXh0KTtcclxuICAgIGlmIChpc09ic2VydmFibGUodGV4dCkpIHJldHVybiB0aGlzLnRleHRPKHRleHQpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdnaXZlbiB0ZXh0IHR5cGUgaXMgbm90IHN1cHBvcnRlZCcpO1xyXG4gIH1cclxuICAvLyBjYWxsYmFja1xyXG5cclxuICBwcml2YXRlIGJ1dHRvbkNhbGxiYWNrID0gbmV3IEJlaGF2aW9yU3ViamVjdDxPblRhcENhbGxCYWNrIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIG9uVGFwUihhY3Rpb246IE9uVGFwQ2FsbEJhY2spOiBCdXR0b25FbGVtZW50IHtcclxuICAgIHRoaXMuYnV0dG9uQ2FsbGJhY2submV4dChhY3Rpb24pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBvblRhcE8oYWN0aW9uOiBPYnNlcnZhYmxlPE9uVGFwQ2FsbEJhY2s+KTogQnV0dG9uRWxlbWVudCB7XHJcbiAgICBhY3Rpb24uc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogdiA9PiB0aGlzLmJ1dHRvbkNhbGxiYWNrLm5leHQodiksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgb25UYXAoYWN0aW9uOiBPYnNlcnZhYmxlPE9uVGFwQ2FsbEJhY2s+IHwgT25UYXBDYWxsQmFjayk6IEJ1dHRvbkVsZW1lbnQge1xyXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHJldHVybiB0aGlzLm9uVGFwUihhY3Rpb24pO1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZShhY3Rpb24pKSByZXR1cm4gdGhpcy5vblRhcE8oYWN0aW9uKTtcclxuICAgIHRocm93IG5ldyBFcnJvcignZ2l2ZW4gYWN0aW9uIHR5cGUgaXMgbm90IHN1cHBvcnRlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgQnV0dG9uID0gKHRpdGxlOiBzdHJpbmcgfCBudWxsKTogQnV0dG9uRWxlbWVudCA9PiB7XHJcbiAgbGV0IGVsZW1lbnQgPSBuZXcgQnV0dG9uRWxlbWVudCgpO1xyXG4gIGlmICh0aXRsZSA9PSBudWxsKSByZXR1cm4gZWxlbWVudDtcclxuICByZXR1cm4gZWxlbWVudC50ZXh0KHRpdGxlKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIl19