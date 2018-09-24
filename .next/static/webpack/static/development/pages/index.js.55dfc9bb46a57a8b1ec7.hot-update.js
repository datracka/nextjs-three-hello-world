webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
var _jsxFileName = "/Users/vicensfayos/Projects/hello-next/pages/index.js";





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Hello world!", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1757134383",
    css: "body{margin:0;}canvas{width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWNlbnNmYXlvcy9Qcm9qZWN0cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU11QixBQUdrQixBQUdFLFNBRmIsRUFHYyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy92aWNlbnNmYXlvcy9Qcm9qZWN0cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBjb21wb3NlLCBsaWZlY3ljbGUgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgSGVsbG8gd29ybGQhXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBjYW52YXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGxpZmVjeWNsZSh7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgLy8gQ3JlYXRlIGFuIGVtcHR5IHNjZW5lXG4gICAgICB2YXIgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgIC8vIENyZWF0ZSBhIGJhc2ljIHBlcnNwZWN0aXZlIGNhbWVyYVxuICAgICAgdmFyIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgICAgNzUsXG4gICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICAwLjEsXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgICBjYW1lcmEucG9zaXRpb24ueiA9IDQ7XG5cbiAgICAgIC8vIENyZWF0ZSBhIHJlbmRlcmVyIHdpdGggQW50aWFsaWFzaW5nXG4gICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSB9KTtcblxuICAgICAgLy8gQ29uZmlndXJlIHJlbmRlcmVyIGNsZWFyIGNvbG9yXG4gICAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKFwiIzAwMDAwMFwiKTtcbiAgICB9XG4gIH0pXG4pKEluZGV4KTtcbiJdfQ== */\n/*@ sourceURL=/Users/vicensfayos/Projects/hello-next/pages/index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_3__["lifecycle"])({
  componentWillMount: function componentWillMount() {
    // Create an empty scene
    var scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"](); // Create a basic perspective camera

    var camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4; // Create a renderer with Antialiasing

    var renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
      antialias: true
    }); // Configure renderer clear color

    renderer.setClearColor("#000000");
  }
}))(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.55dfc9bb46a57a8b1ec7.hot-update.js.map