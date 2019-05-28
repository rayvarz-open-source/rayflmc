"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EncodableModelMixin = EncodableModelMixin;
exports.DecodableModelMixin = DecodableModelMixin;

var _IModel = require("./IModel");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function EncodableModelMixin(Base) {
  return (
    /*#__PURE__*/
    function (_Base) {
      _inherits(_class, _Base);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "encode",
        value: function encode(data) {
          var dataObject = data;
          if (typeof data == 'string') dataObject = JSON.parse(data);
          Object.assign(this, dataObject); // TODO: add support for null properties
          // TODO: add support for list properties
          // TODO: add support for nested model properties
        }
      }]);

      return _class;
    }(Base)
  );
}

function DecodableModelMixin(Base) {
  return (
    /*#__PURE__*/
    function (_Base2) {
      _inherits(_class2, _Base2);

      function _class2() {
        _classCallCheck(this, _class2);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class2).apply(this, arguments));
      }

      _createClass(_class2, [{
        key: "decode",
        value: function decode() {
          var output = {};

          for (var prop in this) {
            var propValue = this[prop];

            switch (_typeof(propValue)) {
              case 'boolean':
              case 'number':
              case 'string':
              case 'bigint':
                output[prop] = propValue;
                break;

              case 'undefined':
                output[prop] = null;
                break;

              case 'object':
                // TODO: support lists
                if (propValue == null) {
                  output[prop] = null;
                } else if ((0, _IModel.isDecodable)(propValue)) {
                  output[prop] = propValue.decode();
                }

                break;

              default:
                break;
            }
          }

          return output;
        }
      }]);

      return _class2;
    }(Base)
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CYXNlL0pTT05Db2RhYmxlLnRzIl0sIm5hbWVzIjpbIkVuY29kYWJsZU1vZGVsTWl4aW4iLCJCYXNlIiwiZGF0YSIsImRhdGFPYmplY3QiLCJKU09OIiwicGFyc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJEZWNvZGFibGVNb2RlbE1peGluIiwib3V0cHV0IiwicHJvcCIsInByb3BWYWx1ZSIsImRlY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTyxTQUFTQSxtQkFBVCxDQUF3REMsSUFBeEQsRUFBcUU7QUFDMUU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFDZ0JDLElBRGhCLEVBQ2lDO0FBQzdCLGNBQUlDLFVBQWtCLEdBQUdELElBQXpCO0FBQ0EsY0FBSSxPQUFPQSxJQUFQLElBQWUsUUFBbkIsRUFBNkJDLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILElBQVgsQ0FBYjtBQUU3QkksVUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxFQUFvQkosVUFBcEIsRUFKNkIsQ0FNN0I7QUFDQTtBQUNBO0FBQ0Q7QUFWSDs7QUFBQTtBQUFBLE1BQXFCRixJQUFyQjtBQUFBO0FBWUQ7O0FBRU0sU0FBU08sbUJBQVQsQ0FBd0RQLElBQXhELEVBQXFFO0FBQzFFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsaUNBQzBCO0FBQ3RCLGNBQU1RLE1BQTRCLEdBQUcsRUFBckM7O0FBQ0EsZUFBSyxJQUFNQyxJQUFYLElBQW1CLElBQW5CLEVBQXlCO0FBQ3ZCLGdCQUFNQyxTQUFTLEdBQUcsS0FBS0QsSUFBTCxDQUFsQjs7QUFDQSw0QkFBZUMsU0FBZjtBQUNFLG1CQUFLLFNBQUw7QUFDQSxtQkFBSyxRQUFMO0FBQ0EsbUJBQUssUUFBTDtBQUNBLG1CQUFLLFFBQUw7QUFDRUYsZ0JBQUFBLE1BQU0sQ0FBQ0MsSUFBRCxDQUFOLEdBQWVDLFNBQWY7QUFDQTs7QUFDRixtQkFBSyxXQUFMO0FBQ0VGLGdCQUFBQSxNQUFNLENBQUNDLElBQUQsQ0FBTixHQUFlLElBQWY7QUFDQTs7QUFDRixtQkFBSyxRQUFMO0FBQWU7QUFDYixvQkFBSUMsU0FBUyxJQUFJLElBQWpCLEVBQXVCO0FBQ3JCRixrQkFBQUEsTUFBTSxDQUFDQyxJQUFELENBQU4sR0FBZSxJQUFmO0FBQ0QsaUJBRkQsTUFFTyxJQUFJLHlCQUFZQyxTQUFaLENBQUosRUFBNEI7QUFDakNGLGtCQUFBQSxNQUFNLENBQUNDLElBQUQsQ0FBTixHQUFlQyxTQUFTLENBQUNDLE1BQVYsRUFBZjtBQUNEOztBQUNEOztBQUNGO0FBQ0U7QUFsQko7QUFvQkQ7O0FBRUQsaUJBQU9ILE1BQVA7QUFDRDtBQTVCSDs7QUFBQTtBQUFBLE1BQXFCUixJQUFyQjtBQUFBO0FBOEJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUVuY29kYWJsZSwgSURlY29kYWJsZSwgaXNEZWNvZGFibGUgfSBmcm9tICcuL0lNb2RlbCc7XHJcblxyXG50eXBlIENvbnN0cnVjdG9yPFQgPSB7fT4gPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEVuY29kYWJsZU1vZGVsTWl4aW48VEJhc2UgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oQmFzZTogVEJhc2UpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSUVuY29kYWJsZSB7XHJcbiAgICBwdWJsaWMgZW5jb2RlKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICBsZXQgZGF0YU9iamVjdDogb2JqZWN0ID0gZGF0YTtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSBkYXRhT2JqZWN0ID0gSlNPTi5wYXJzZShkYXRhKTtcclxuXHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YU9iamVjdCk7XHJcblxyXG4gICAgICAvLyBUT0RPOiBhZGQgc3VwcG9ydCBmb3IgbnVsbCBwcm9wZXJ0aWVzXHJcbiAgICAgIC8vIFRPRE86IGFkZCBzdXBwb3J0IGZvciBsaXN0IHByb3BlcnRpZXNcclxuICAgICAgLy8gVE9ETzogYWRkIHN1cHBvcnQgZm9yIG5lc3RlZCBtb2RlbCBwcm9wZXJ0aWVzXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlY29kYWJsZU1vZGVsTWl4aW48VEJhc2UgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oQmFzZTogVEJhc2UpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSURlY29kYWJsZSB7XHJcbiAgICBwdWJsaWMgZGVjb2RlKCk6IG9iamVjdCB7XHJcbiAgICAgIGNvbnN0IG91dHB1dDogeyBbazogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgICAgZm9yIChjb25zdCBwcm9wIGluIHRoaXMpIHtcclxuICAgICAgICBjb25zdCBwcm9wVmFsdWUgPSB0aGlzW3Byb3BdO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xyXG4gICAgICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgIGNhc2UgJ2JpZ2ludCc6XHJcbiAgICAgICAgICAgIG91dHB1dFtwcm9wXSA9IHByb3BWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxyXG4gICAgICAgICAgICBvdXRwdXRbcHJvcF0gPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ29iamVjdCc6IC8vIFRPRE86IHN1cHBvcnQgbGlzdHNcclxuICAgICAgICAgICAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgb3V0cHV0W3Byb3BdID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0RlY29kYWJsZShwcm9wVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgb3V0cHV0W3Byb3BdID0gcHJvcFZhbHVlLmRlY29kZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19