"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDataSource = exports.SingleValueDataSource = void 0;

var _rxjs = require("rxjs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SingleValueDataSource =
/*#__PURE__*/
function () {
  function SingleValueDataSource() {
    _classCallCheck(this, SingleValueDataSource);

    _defineProperty(this, "value", new _rxjs.BehaviorSubject(null));

    _defineProperty(this, "loading", new _rxjs.BehaviorSubject(false));
  }

  _createClass(SingleValueDataSource, [{
    key: "dispose",
    value: function dispose() {}
  }]);

  return SingleValueDataSource;
}();

exports.SingleValueDataSource = SingleValueDataSource;

var ListDataSource =
/*#__PURE__*/
function () {
  function ListDataSource() {
    _classCallCheck(this, ListDataSource);

    _defineProperty(this, "values", new _rxjs.BehaviorSubject([]));

    _defineProperty(this, "loading", new _rxjs.BehaviorSubject(false));
  }

  _createClass(ListDataSource, [{
    key: "dispose",
    value: function dispose() {}
  }]);

  return ListDataSource;
}();

exports.ListDataSource = ListDataSource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRhU291cmNlL0RhdGFTb3VyY2UudHMiXSwibmFtZXMiOlsiU2luZ2xlVmFsdWVEYXRhU291cmNlIiwiQmVoYXZpb3JTdWJqZWN0IiwiTGlzdERhdGFTb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztJQVFhQSxxQjs7Ozs7O21DQUdILElBQUlDLHFCQUFKLENBQThCLElBQTlCLEM7O3FDQUNFLElBQUlBLHFCQUFKLENBQTZCLEtBQTdCLEM7Ozs7OzhCQUhNLENBQUU7Ozs7Ozs7O0lBTVBDLGM7Ozs7OztvQ0FHRixJQUFJRCxxQkFBSixDQUF5QixFQUF6QixDOztxQ0FFQyxJQUFJQSxxQkFBSixDQUE2QixLQUE3QixDOzs7Ozs4QkFKTSxDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElFbmNvZGFibGUgfSBmcm9tICcuLi9CYXNlL0lNb2RlbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFTb3VyY2Uge1xyXG4gIGRpc3Bvc2UoKTogdm9pZDtcclxuICBsb2FkaW5nOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVWYWx1ZURhdGFTb3VyY2U8VCBleHRlbmRzIElFbmNvZGFibGU+IGltcGxlbWVudHMgRGF0YVNvdXJjZSB7XHJcbiAgZGlzcG9zZSgpOiB2b2lkIHt9XHJcblxyXG4gIHZhbHVlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUIHwgbnVsbD4obnVsbCk7XHJcbiAgbG9hZGluZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdERhdGFTb3VyY2U8VCBleHRlbmRzIElFbmNvZGFibGU+IGltcGxlbWVudHMgRGF0YVNvdXJjZSB7XHJcbiAgZGlzcG9zZSgpOiB2b2lkIHt9XHJcblxyXG4gIHZhbHVlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VFtdPihbXSk7XHJcblxyXG4gIGxvYWRpbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxufVxyXG4iXX0=