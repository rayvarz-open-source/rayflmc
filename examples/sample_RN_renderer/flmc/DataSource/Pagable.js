"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PagableMixin = PagableMixin;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function PagableMixin(Base) {
  return (
    /*#__PURE__*/
    function (_Base) {
      _inherits(_class, _Base);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "isPagable",
        value: function isPagable() {
          return this.datasource.currentPage != null && this.datasource.setCurrentPage != null && this.datasource.nextPage != null && this.datasource.refreshCurrentPage != null && this.datasource.previousPage != null;
        }
      }, {
        key: "refreshPage",
        value: function refreshPage() {
          this.datasource.refreshCurrentPage();
        }
      }, {
        key: "setPage",
        value: function setPage(pageNumber) {
          this.datasource.setCurrentPage(pageNumber);
          this.refreshPage();
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.datasource.nextPage();
          this.refreshPage();
        }
      }, {
        key: "previousPage",
        value: function previousPage() {
          this.datasource.previousPage();
          this.refreshPage();
        }
      }, {
        key: "getCurrentPageNumber",
        value: function getCurrentPageNumber() {
          return this.datasource.currentPage;
        }
      }]);

      return _class;
    }(Base)
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRhU291cmNlL1BhZ2FibGUudHMiXSwibmFtZXMiOlsiUGFnYWJsZU1peGluIiwiQmFzZSIsImRhdGFzb3VyY2UiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwibmV4dFBhZ2UiLCJyZWZyZXNoQ3VycmVudFBhZ2UiLCJwcmV2aW91c1BhZ2UiLCJwYWdlTnVtYmVyIiwicmVmcmVzaFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sU0FBU0EsWUFBVCxDQUFpREMsSUFBakQsRUFBOEQ7QUFDbkU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxvQ0FDdUI7QUFDbkIsaUJBQ0csSUFBRCxDQUFjQyxVQUFkLENBQXlCQyxXQUF6QixJQUF3QyxJQUF4QyxJQUNDLElBQUQsQ0FBY0QsVUFBZCxDQUF5QkUsY0FBekIsSUFBMkMsSUFEM0MsSUFFQyxJQUFELENBQWNGLFVBQWQsQ0FBeUJHLFFBQXpCLElBQXFDLElBRnJDLElBR0MsSUFBRCxDQUFjSCxVQUFkLENBQXlCSSxrQkFBekIsSUFBK0MsSUFIL0MsSUFJQyxJQUFELENBQWNKLFVBQWQsQ0FBeUJLLFlBQXpCLElBQXlDLElBTDNDO0FBT0Q7QUFUSDtBQUFBO0FBQUEsc0NBV3NCO0FBQ2pCLGNBQUQsQ0FBY0wsVUFBZCxDQUF5Qkksa0JBQXpCO0FBQ0Q7QUFiSDtBQUFBO0FBQUEsZ0NBZVVFLFVBZlYsRUFlb0M7QUFDL0IsY0FBRCxDQUFjTixVQUFkLENBQXlCRSxjQUF6QixDQUF3Q0ksVUFBeEM7QUFDQSxlQUFLQyxXQUFMO0FBQ0Q7QUFsQkg7QUFBQTtBQUFBLG1DQW9CbUI7QUFDZCxjQUFELENBQWNQLFVBQWQsQ0FBeUJHLFFBQXpCO0FBQ0EsZUFBS0ksV0FBTDtBQUNEO0FBdkJIO0FBQUE7QUFBQSx1Q0F5QnVCO0FBQ2xCLGNBQUQsQ0FBY1AsVUFBZCxDQUF5QkssWUFBekI7QUFDQSxlQUFLRSxXQUFMO0FBQ0Q7QUE1Qkg7QUFBQTtBQUFBLCtDQThCNkM7QUFDekMsaUJBQVEsSUFBRCxDQUFjUCxVQUFkLENBQXlCQyxXQUFoQztBQUNEO0FBaENIOztBQUFBO0FBQUEsTUFBcUJGLElBQXJCO0FBQUE7QUFrQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbnR5cGUgQ29uc3RydWN0b3I8VCA9IHt9PiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYWdhYmxlIHtcclxuICBjdXJyZW50UGFnZTogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj47XHJcblxyXG4gIHNldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gIG5leHRQYWdlKCk6IHZvaWQ7XHJcblxyXG4gIHByZXZpb3VzUGFnZSgpOiB2b2lkO1xyXG5cclxuICByZWZyZXNoQ3VycmVudFBhZ2UoKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2FibGVNaXhpbjxUQmFzZSBleHRlbmRzIENvbnN0cnVjdG9yPihCYXNlOiBUQmFzZSkge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgaXNQYWdhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICh0aGlzIGFzIGFueSkuZGF0YXNvdXJjZS5jdXJyZW50UGFnZSAhPSBudWxsICYmXHJcbiAgICAgICAgKHRoaXMgYXMgYW55KS5kYXRhc291cmNlLnNldEN1cnJlbnRQYWdlICE9IG51bGwgJiZcclxuICAgICAgICAodGhpcyBhcyBhbnkpLmRhdGFzb3VyY2UubmV4dFBhZ2UgIT0gbnVsbCAmJlxyXG4gICAgICAgICh0aGlzIGFzIGFueSkuZGF0YXNvdXJjZS5yZWZyZXNoQ3VycmVudFBhZ2UgIT0gbnVsbCAmJlxyXG4gICAgICAgICh0aGlzIGFzIGFueSkuZGF0YXNvdXJjZS5wcmV2aW91c1BhZ2UgIT0gbnVsbFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hQYWdlKCk6IHZvaWQge1xyXG4gICAgICAodGhpcyBhcyBhbnkpLmRhdGFzb3VyY2UucmVmcmVzaEN1cnJlbnRQYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgKHRoaXMgYXMgYW55KS5kYXRhc291cmNlLnNldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hQYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICAgICh0aGlzIGFzIGFueSkuZGF0YXNvdXJjZS5uZXh0UGFnZSgpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hQYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXNQYWdlKCk6IHZvaWQge1xyXG4gICAgICAodGhpcyBhcyBhbnkpLmRhdGFzb3VyY2UucHJldmlvdXNQYWdlKCk7XHJcbiAgICAgIHRoaXMucmVmcmVzaFBhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50UGFnZU51bWJlcigpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG4gICAgICByZXR1cm4gKHRoaXMgYXMgYW55KS5kYXRhc291cmNlLmN1cnJlbnRQYWdlO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19