webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Visualizer.js":
/*!**********************************!*\
  !*** ./components/Visualizer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
var _jsxFileName = "/Users/vicensfayos/Projects/hello-next/components/Visualizer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // https://codesandbox.io/s/oxvn0wj1xy
// https://stackoverflow.com/questions/45353282/how-to-zoom-a-three-js-scene-with-the-mouse-wheel

var Visualizer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Visualizer, _React$Component);

  function Visualizer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Visualizer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Visualizer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDocumentMouseWheel", function (event) {
      var fovMAX = 160;
      var fovMIN = 1;
      console.log(event);
      camera.position.z = event.pageY;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "start", function () {
      if (!_this.frameId) {
        _this.frameId = requestAnimationFrame(_this.animate);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stop", function () {
      cancelAnimationFrame(_this.frameId);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animate", function () {
      _this.mesh.rotation.z -= 0.2 * 0.03 + 0.002;

      _this.renderScene();

      _this.frameId = window.requestAnimationFrame(_this.animate);
    });

    return _this;
  }

  _createClass(Visualizer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("mousewheel", this.onDocumentMouseWheel, false); //3D SCENE

      var scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
      var camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](70, 800 / 600, 1, 3000);
      camera.position.z = 2000;
      camera.name = "camera";
      scene.add(camera);
      var renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({
        alpha: true,
        antialias: true
      });
      renderer.setSize(800, 600);
      var material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({
        color: 0xeeeeee
      });
      var radius = 900;
      var gap = radius * 0.66;
      var geometry = new three__WEBPACK_IMPORTED_MODULE_1__["RingGeometry"](gap, radius, 4, 1, 0, Math.PI * 2);
      var mesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);
      scene.add(mesh);
      this.mesh = mesh;
      this.renderer = renderer;
      this.camera = camera;
      this.scene = scene;
      this.mount.appendChild(this.renderer.domElement);
      this.start();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stop();
      this.mount.removeChild(this.renderer.domElement);
      document.removeEventListener("mousewheel", this.onDocumentMouseWheel, false);
    }
  }, {
    key: "renderScene",
    value: function renderScene() {
      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        // style={{width:'400px', height: '400px', left: '0', top:'0' }}
        ref: function ref(mount) {
          return _this2.mount = mount;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      });
    }
  }]);

  return Visualizer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Visualizer);

/***/ })

})
//# sourceMappingURL=index.js.d5fcec480ec5cba18ef5.hot-update.js.map