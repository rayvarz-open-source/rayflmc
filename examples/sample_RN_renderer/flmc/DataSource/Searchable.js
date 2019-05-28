"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchableMixin = SearchableMixin;

var _operators = require("rxjs/operators");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function SearchableMixin(Base) {
  return (
    /*#__PURE__*/
    function (_Base) {
      _inherits(_class, _Base);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "isSearchable",
        value: function isSearchable() {
          return this.datasource.searchText != null && this.datasource.setSearchText != null;
        }
      }, {
        key: "clearSearchText",
        value: function clearSearchText() {
          this.datasource.setSearchText(null);
        }
      }, {
        key: "setSearchText",
        value: function setSearchText(text) {
          this.datasource.setSearchText(text);
        }
      }, {
        key: "getSearchText",
        value: function getSearchText() {
          return this.datasource.searchText.pipe((0, _operators.map)(function (v) {
            return v == null ? '' : v;
          }));
        }
      }]);

      return _class;
    }(Base)
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRhU291cmNlL1NlYXJjaGFibGUudHMiXSwibmFtZXMiOlsiU2VhcmNoYWJsZU1peGluIiwiQmFzZSIsImRhdGFzb3VyY2UiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInRleHQiLCJwaXBlIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVPLFNBQVNBLGVBQVQsQ0FBb0RDLElBQXBELEVBQWlFO0FBQ3RFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUNBQzBCO0FBQ3RCLGlCQUFRLElBQUQsQ0FBY0MsVUFBZCxDQUF5QkMsVUFBekIsSUFBdUMsSUFBdkMsSUFBZ0QsSUFBRCxDQUFjRCxVQUFkLENBQXlCRSxhQUF6QixJQUEwQyxJQUFoRztBQUNEO0FBSEg7QUFBQTtBQUFBLDBDQUswQjtBQUNyQixjQUFELENBQWNGLFVBQWQsQ0FBeUJFLGFBQXpCLENBQXVDLElBQXZDO0FBQ0Q7QUFQSDtBQUFBO0FBQUEsc0NBU2dCQyxJQVRoQixFQVNvQztBQUMvQixjQUFELENBQWNILFVBQWQsQ0FBeUJFLGFBQXpCLENBQXVDQyxJQUF2QztBQUNEO0FBWEg7QUFBQTtBQUFBLHdDQWFzQztBQUNsQyxpQkFBUSxJQUFELENBQWNILFVBQWQsQ0FBeUJDLFVBQXpCLENBQW9DRyxJQUFwQyxDQUF5QyxvQkFBSSxVQUFBQyxDQUFDO0FBQUEsbUJBQUtBLENBQUMsSUFBSSxJQUFMLEdBQVksRUFBWixHQUFpQkEsQ0FBdEI7QUFBQSxXQUFMLENBQXpDLENBQVA7QUFDRDtBQWZIOztBQUFBO0FBQUEsTUFBcUJOLElBQXJCO0FBQUE7QUFpQkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxudHlwZSBDb25zdHJ1Y3RvcjxUID0ge30+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaGFibGUge1xyXG4gIHNlYXJjaFRleHQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCBudWxsPjtcclxuXHJcbiAgc2V0U2VhcmNoVGV4dCh0ZXh0OiBzdHJpbmcgfCBudWxsKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaGFibGVNaXhpbjxUQmFzZSBleHRlbmRzIENvbnN0cnVjdG9yPihCYXNlOiBUQmFzZSkge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgaXNTZWFyY2hhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICByZXR1cm4gKHRoaXMgYXMgYW55KS5kYXRhc291cmNlLnNlYXJjaFRleHQgIT0gbnVsbCAmJiAodGhpcyBhcyBhbnkpLmRhdGFzb3VyY2Uuc2V0U2VhcmNoVGV4dCAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2VhcmNoVGV4dCgpOiB2b2lkIHtcclxuICAgICAgKHRoaXMgYXMgYW55KS5kYXRhc291cmNlLnNldFNlYXJjaFRleHQobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VhcmNoVGV4dCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgKHRoaXMgYXMgYW55KS5kYXRhc291cmNlLnNldFNlYXJjaFRleHQodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VhcmNoVGV4dCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICByZXR1cm4gKHRoaXMgYXMgYW55KS5kYXRhc291cmNlLnNlYXJjaFRleHQucGlwZShtYXAodiA9PiAodiA9PSBudWxsID8gJycgOiB2KSkpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19