"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElement = isElement;
exports.areElements = areElements;
exports.ValidationResult = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ValidationResult = function ValidationResult(isValid, validationMessage) {
  _classCallCheck(this, ValidationResult);

  this.isValid = isValid;
  this.validationMessage = validationMessage;

  _defineProperty(this, "innerValidationResults", void 0);
};

exports.ValidationResult = ValidationResult;

function isElement(item) {
  return item.type != null && item.dispose != null && item.validate != null;
}

function areElements(item) {
  return item.map(function (i) {
    return isElement(i);
  }).reduce(function (p, c) {
    return p && c;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtQ29udHJvbGxlci9JRWxlbWVudC50cyJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uUmVzdWx0IiwiaXNWYWxpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiaXNFbGVtZW50IiwiaXRlbSIsInR5cGUiLCJkaXNwb3NlIiwidmFsaWRhdGUiLCJhcmVFbGVtZW50cyIsIm1hcCIsImkiLCJyZWR1Y2UiLCJwIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQVFhQSxnQixHQUNYLDBCQUFtQkMsT0FBbkIsRUFBNENDLGlCQUE1QyxFQUF3RTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBRSxDOzs7O0FBS3JFLFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLEVBQWdEO0FBQ3JELFNBQU9BLElBQUksQ0FBQ0MsSUFBTCxJQUFhLElBQWIsSUFBcUJELElBQUksQ0FBQ0UsT0FBTCxJQUFnQixJQUFyQyxJQUE2Q0YsSUFBSSxDQUFDRyxRQUFMLElBQWlCLElBQXJFO0FBQ0Q7O0FBRU0sU0FBU0MsV0FBVCxDQUFxQkosSUFBckIsRUFBb0Q7QUFDekQsU0FBUUEsSUFBRCxDQUFjSyxHQUFkLENBQWtCLFVBQUNDLENBQUQ7QUFBQSxXQUFZUCxTQUFTLENBQUNPLENBQUQsQ0FBckI7QUFBQSxHQUFsQixFQUE0Q0MsTUFBNUMsQ0FBbUQsVUFBQ0MsQ0FBRCxFQUFhQyxDQUFiO0FBQUEsV0FBNEJELENBQUMsSUFBSUMsQ0FBakM7QUFBQSxHQUFuRCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgSUVsZW1lbnQge1xyXG4gIGRpc3Bvc2UoKTogdm9pZDtcclxuXHJcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xyXG5cclxuICB2YWxpZGF0ZSgpOiBWYWxpZGF0aW9uUmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblJlc3VsdCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGlzVmFsaWQ6IGJvb2xlYW4sIHB1YmxpYyB2YWxpZGF0aW9uTWVzc2FnZT86IHN0cmluZykge31cclxuXHJcbiAgaW5uZXJWYWxpZGF0aW9uUmVzdWx0cz86IFZhbGlkYXRpb25SZXN1bHRbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudChpdGVtOiBhbnkpOiBpdGVtIGlzIElFbGVtZW50IHtcclxuICByZXR1cm4gaXRlbS50eXBlICE9IG51bGwgJiYgaXRlbS5kaXNwb3NlICE9IG51bGwgJiYgaXRlbS52YWxpZGF0ZSAhPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJlRWxlbWVudHMoaXRlbTogYW55KTogaXRlbSBpcyBJRWxlbWVudFtdIHtcclxuICByZXR1cm4gKGl0ZW0gYXMgYW55KS5tYXAoKGk6IGFueSkgPT4gaXNFbGVtZW50KGkpKS5yZWR1Y2UoKHA6IGJvb2xlYW4sIGM6IGJvb2xlYW4pID0+IHAgJiYgYyk7XHJcbn1cclxuIl19