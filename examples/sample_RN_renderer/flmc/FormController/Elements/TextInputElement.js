"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _IElement = require("../IElement");

var _ElementTypes = require("./ElementTypes");

var _rxjs = require("rxjs");

var _RxUtils = require("./RxUtils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextInputElement =
/*#__PURE__*/
function () {
  function TextInputElement() {
    _classCallCheck(this, TextInputElement);

    _defineProperty(this, "value", void 0);
  }

  _createClass(TextInputElement, [{
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
      if (this.value == null) this.value = new _rxjs.BehaviorSubject('');
      this.value.next(text);
      return this;
    }
  }, {
    key: "textO",
    value: function textO(text) {
      var _this = this;

      if (this.value == null) this.value = new _rxjs.BehaviorSubject('');
      text.subscribe({
        next: function next(v) {
          return _this.value.next(v);
        }
      });
      return this;
    }
  }, {
    key: "textB",
    value: function textB(text) {
      this.value = text;
      return this;
    }
  }, {
    key: "text",
    value: function text(_text) {
      if (typeof _text === 'string') return this.textR(_text);
      if ((0, _RxUtils.isSubject)(_text)) return this.textB(_text);
      if ((0, _rxjs.isObservable)(_text)) return this.textO(_text);
      throw new Error('given text type is not supported');
    }
  }, {
    key: "type",
    get: function get() {
      return _ElementTypes.ElementTypes.TextInput;
    }
  }]);

  return TextInputElement;
}();

var TextInput = function TextInput(controller) {
  return new TextInputElement().text(controller);
};

var _default = TextInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Gb3JtQ29udHJvbGxlci9FbGVtZW50cy9UZXh0SW5wdXRFbGVtZW50LnRzIl0sIm5hbWVzIjpbIlRleHRJbnB1dEVsZW1lbnQiLCJWYWxpZGF0aW9uUmVzdWx0IiwidGV4dCIsInZhbHVlIiwiQmVoYXZpb3JTdWJqZWN0IiwibmV4dCIsInN1YnNjcmliZSIsInYiLCJ0ZXh0UiIsInRleHRCIiwidGV4dE8iLCJFcnJvciIsIkVsZW1lbnRUeXBlcyIsIlRleHRJbnB1dCIsImNvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxnQjs7Ozs7Ozs7Ozs7OEJBQ1ksQ0FBRTs7OytCQU1XO0FBQzNCLGFBQU8sSUFBSUMsMEJBQUosQ0FBcUIsSUFBckIsQ0FBUDtBQUNELEssQ0FFRDs7OzswQkFJY0MsSSxFQUFnQztBQUM1QyxVQUFJLEtBQUtDLEtBQUwsSUFBYyxJQUFsQixFQUF3QixLQUFLQSxLQUFMLEdBQWEsSUFBSUMscUJBQUosQ0FBNEIsRUFBNUIsQ0FBYjtBQUN4QixXQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JILElBQWhCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OzswQkFFYUEsSSxFQUE0QztBQUFBOztBQUN4RCxVQUFJLEtBQUtDLEtBQUwsSUFBYyxJQUFsQixFQUF3QixLQUFLQSxLQUFMLEdBQWEsSUFBSUMscUJBQUosQ0FBNEIsRUFBNUIsQ0FBYjtBQUN4QkYsTUFBQUEsSUFBSSxDQUFDSSxTQUFMLENBQWU7QUFDYkQsUUFBQUEsSUFBSSxFQUFFLGNBQUFFLENBQUM7QUFBQSxpQkFBSSxLQUFJLENBQUNKLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkUsQ0FBaEIsQ0FBSjtBQUFBO0FBRE0sT0FBZjtBQUdBLGFBQU8sSUFBUDtBQUNEOzs7MEJBRWFMLEksRUFBaUQ7QUFDN0QsV0FBS0MsS0FBTCxHQUFhRCxJQUFiO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozt5QkFFSUEsSyxFQUErRTtBQUNsRixVQUFJLE9BQU9BLEtBQVAsS0FBZ0IsUUFBcEIsRUFBOEIsT0FBTyxLQUFLTSxLQUFMLENBQVdOLEtBQVgsQ0FBUDtBQUM5QixVQUFJLHdCQUFVQSxLQUFWLENBQUosRUFBcUIsT0FBTyxLQUFLTyxLQUFMLENBQVdQLEtBQVgsQ0FBUDtBQUNyQixVQUFJLHdCQUFhQSxLQUFiLENBQUosRUFBd0IsT0FBTyxLQUFLUSxLQUFMLENBQVdSLEtBQVgsQ0FBUDtBQUN4QixZQUFNLElBQUlTLEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0Q7Ozt3QkFwQ2tCO0FBQ2pCLGFBQU9DLDJCQUFhQyxTQUFwQjtBQUNEOzs7Ozs7QUFxQ0gsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsVUFBRCxFQUF5RjtBQUN6RyxTQUFPLElBQUlkLGdCQUFKLEdBQXVCRSxJQUF2QixDQUE0QlksVUFBNUIsQ0FBUDtBQUNELENBRkQ7O2VBSWVELFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUVsZW1lbnQsIHsgVmFsaWRhdGlvblJlc3VsdCB9IGZyb20gJy4uL0lFbGVtZW50JztcclxuaW1wb3J0IHsgRWxlbWVudFR5cGVzIH0gZnJvbSAnLi9FbGVtZW50VHlwZXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBpc1N1YmplY3QgfSBmcm9tICcuL1J4VXRpbHMnO1xyXG5cclxuY2xhc3MgVGV4dElucHV0RWxlbWVudCBpbXBsZW1lbnRzIElFbGVtZW50IHtcclxuICBkaXNwb3NlKCk6IHZvaWQge31cclxuXHJcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBFbGVtZW50VHlwZXMuVGV4dElucHV0O1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoKTogVmFsaWRhdGlvblJlc3VsdCB7XHJcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyB0ZXh0XHJcblxyXG4gIHByaXZhdGUgdmFsdWUhOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPjtcclxuXHJcbiAgcHJpdmF0ZSB0ZXh0Uih0ZXh0OiBzdHJpbmcpOiBUZXh0SW5wdXRFbGVtZW50IHtcclxuICAgIGlmICh0aGlzLnZhbHVlID09IG51bGwpIHRoaXMudmFsdWUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xyXG4gICAgdGhpcy52YWx1ZS5uZXh0KHRleHQpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRleHRPKHRleHQ6IE9ic2VydmFibGU8c3RyaW5nPik6IFRleHRJbnB1dEVsZW1lbnQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUgPT0gbnVsbCkgdGhpcy52YWx1ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XHJcbiAgICB0ZXh0LnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IHYgPT4gdGhpcy52YWx1ZS5uZXh0KHYpLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGV4dEIodGV4dDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4pOiBUZXh0SW5wdXRFbGVtZW50IHtcclxuICAgIHRoaXMudmFsdWUgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0ZXh0KHRleHQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+IHwgT2JzZXJ2YWJsZTxzdHJpbmc+IHwgc3RyaW5nKTogVGV4dElucHV0RWxlbWVudCB7XHJcbiAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSByZXR1cm4gdGhpcy50ZXh0Uih0ZXh0KTtcclxuICAgIGlmIChpc1N1YmplY3QodGV4dCkpIHJldHVybiB0aGlzLnRleHRCKHRleHQpO1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh0ZXh0KSkgcmV0dXJuIHRoaXMudGV4dE8odGV4dCk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dpdmVuIHRleHQgdHlwZSBpcyBub3Qgc3VwcG9ydGVkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBUZXh0SW5wdXQgPSAoY29udHJvbGxlcjogc3RyaW5nIHwgT2JzZXJ2YWJsZTxzdHJpbmc+IHwgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4pOiBUZXh0SW5wdXRFbGVtZW50ID0+IHtcclxuICByZXR1cm4gbmV3IFRleHRJbnB1dEVsZW1lbnQoKS50ZXh0KGNvbnRyb2xsZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xyXG4iXX0=