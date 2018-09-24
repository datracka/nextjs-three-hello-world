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
    css: "body{margin:0;}canvas{width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWNlbnNmYXlvcy9Qcm9qZWN0cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU11QixBQUdrQixBQUdFLFNBRmIsRUFHYyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy92aWNlbnNmYXlvcy9Qcm9qZWN0cy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgY29tcG9zZSwgbGlmZWN5Y2xlIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIEhlbGxvIHdvcmxkIVxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgY2FudmFzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICBsaWZlY3ljbGUoe1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIC8vIENyZWF0ZSBhbiBlbXB0eSBzY2VuZVxuICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgICAgLy8gQ3JlYXRlIGEgYmFzaWMgcGVyc3BlY3RpdmUgY2FtZXJhXG4gICAgICB2YXIgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgICA3NSxcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIDAuMSxcbiAgICAgICAgMTAwMFxuICAgICAgKTtcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gNDtcblxuICAgICAgLy8gQ3JlYXRlIGEgcmVuZGVyZXIgd2l0aCBBbnRpYWxpYXNpbmdcbiAgICAgIHZhciByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlIH0pO1xuXG4gICAgICAvLyBDb25maWd1cmUgcmVuZGVyZXIgY2xlYXIgY29sb3JcbiAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoXCIjMDAwMDAwXCIpO1xuICAgIH1cbiAgfSlcbikoSW5kZXgpO1xuIl19 */\n/*@ sourceURL=/Users/vicensfayos/Projects/hello-next/pages/index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_3__["lifecycle"])({
  componentWillMount: function componentWillMount() {
    // Create an empty scene
    var scene = new three__WEBPACK_IMPORTED_MODULE_2__["default"].Scene(); // Create a basic perspective camera

    var camera = new three__WEBPACK_IMPORTED_MODULE_2__["default"].PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4; // Create a renderer with Antialiasing

    var renderer = new three__WEBPACK_IMPORTED_MODULE_2__["default"].WebGLRenderer({
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
//# sourceMappingURL=index.js.61007071c3f6752757ae.hot-update.js.map