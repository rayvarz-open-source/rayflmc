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

var LabelElement =
/*#__PURE__*/
function () {
  function LabelElement() {
    _classCallCheck(this, LabelElement);

    _defineProperty(this, "value", new _rxjs.BehaviorSubject(''));
  }

  _createClass(LabelElement, [{
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
      this.value.next(text);
      return this;
    }
  }, {
    key: "textO",
    value: function textO(text) {
      var _this = this;

      text.subscribe({
        next: function next(v) {
          return _this.value.next(v);
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
    }
  }, {
    key: "type",
    get: function get() {
      return _ElementTypes.ElementTypes.Label;
    }
  }]);

  return LabelElement;
}();

var Label = function Label(value) {
  var element = new LabelElement();
  if (value == null) return element;
  return element.text(value);
};

var _default = Label;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Gb3JtQ29udHJvbGxlci9FbGVtZW50cy9MYWJlbEVsZW1lbnQudHMiXSwibmFtZXMiOlsiTGFiZWxFbGVtZW50IiwiQmVoYXZpb3JTdWJqZWN0IiwiVmFsaWRhdGlvblJlc3VsdCIsInRleHQiLCJ2YWx1ZSIsIm5leHQiLCJzdWJzY3JpYmUiLCJ2IiwidGV4dFIiLCJ0ZXh0TyIsIkVycm9yIiwiRWxlbWVudFR5cGVzIiwiTGFiZWwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7O21DQWFZLElBQUlDLHFCQUFKLENBQTRCLEVBQTVCLEM7Ozs7OzhCQVpBLENBQUU7OzsrQkFNVztBQUMzQixhQUFPLElBQUlDLDBCQUFKLENBQXFCLElBQXJCLENBQVA7QUFDRCxLLENBRUQ7Ozs7MEJBSWNDLEksRUFBNEI7QUFDeEMsV0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCRixJQUFoQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7MEJBRWFBLEksRUFBd0M7QUFBQTs7QUFDcERBLE1BQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlO0FBQ2JELFFBQUFBLElBQUksRUFBRSxjQUFBRSxDQUFDO0FBQUEsaUJBQUksS0FBSSxDQUFDSCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JFLENBQWhCLENBQUo7QUFBQTtBQURNLE9BQWY7QUFHQSxhQUFPLElBQVA7QUFDRDs7O3lCQUVJSixLLEVBQWlEO0FBQ3BELFVBQUksT0FBT0EsS0FBUCxLQUFnQixRQUFwQixFQUE4QixPQUFPLEtBQUtLLEtBQUwsQ0FBV0wsS0FBWCxDQUFQO0FBQzlCLFVBQUksd0JBQWFBLEtBQWIsQ0FBSixFQUF3QixPQUFPLEtBQUtNLEtBQUwsQ0FBV04sS0FBWCxDQUFQO0FBQ3hCLFlBQU0sSUFBSU8sS0FBSixDQUFVLGtDQUFWLENBQU47QUFDRDs7O3dCQTVCa0I7QUFDakIsYUFBT0MsMkJBQWFDLEtBQXBCO0FBQ0Q7Ozs7OztBQTZCSCxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDUixLQUFELEVBQXdDO0FBQ3BELE1BQUlTLE9BQU8sR0FBRyxJQUFJYixZQUFKLEVBQWQ7QUFDQSxNQUFJSSxLQUFLLElBQUksSUFBYixFQUFtQixPQUFPUyxPQUFQO0FBQ25CLFNBQU9BLE9BQU8sQ0FBQ1YsSUFBUixDQUFhQyxLQUFiLENBQVA7QUFDRCxDQUpEOztlQU1lUSxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElFbGVtZW50LCB7IFZhbGlkYXRpb25SZXN1bHQgfSBmcm9tICcuLi9JRWxlbWVudCc7XHJcbmltcG9ydCB7IEVsZW1lbnRUeXBlcyB9IGZyb20gJy4vRWxlbWVudFR5cGVzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBpc09ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmNsYXNzIExhYmVsRWxlbWVudCBpbXBsZW1lbnRzIElFbGVtZW50IHtcclxuICBkaXNwb3NlKCk6IHZvaWQge31cclxuXHJcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBFbGVtZW50VHlwZXMuTGFiZWw7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZSgpOiBWYWxpZGF0aW9uUmVzdWx0IHtcclxuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIC8vIHRleHRcclxuXHJcbiAgcHJpdmF0ZSB2YWx1ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XHJcblxyXG4gIHByaXZhdGUgdGV4dFIodGV4dDogc3RyaW5nKTogTGFiZWxFbGVtZW50IHtcclxuICAgIHRoaXMudmFsdWUubmV4dCh0ZXh0KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0ZXh0Tyh0ZXh0OiBPYnNlcnZhYmxlPHN0cmluZz4pOiBMYWJlbEVsZW1lbnQge1xyXG4gICAgdGV4dC5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiB2ID0+IHRoaXMudmFsdWUubmV4dCh2KSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0ZXh0KHRleHQ6IE9ic2VydmFibGU8c3RyaW5nPiB8IHN0cmluZyk6IExhYmVsRWxlbWVudCB7XHJcbiAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSByZXR1cm4gdGhpcy50ZXh0Uih0ZXh0KTtcclxuICAgIGlmIChpc09ic2VydmFibGUodGV4dCkpIHJldHVybiB0aGlzLnRleHRPKHRleHQpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdnaXZlbiB0ZXh0IHR5cGUgaXMgbm90IHN1cHBvcnRlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgTGFiZWwgPSAodmFsdWU6IHN0cmluZyB8IG51bGwpOiBMYWJlbEVsZW1lbnQgPT4ge1xyXG4gIGxldCBlbGVtZW50ID0gbmV3IExhYmVsRWxlbWVudCgpO1xyXG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gZWxlbWVudDtcclxuICByZXR1cm4gZWxlbWVudC50ZXh0KHZhbHVlKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xyXG4iXX0=