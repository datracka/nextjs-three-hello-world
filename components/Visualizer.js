import * as THREE from "three";

// https://codesandbox.io/s/oxvn0wj1xy
// https://stackoverflow.com/questions/45353282/how-to-zoom-a-three-js-scene-with-the-mouse-wheel
class Visualizer extends React.Component {
  onDocumentMouseWheel = event => {};

  componentDidMount() {
    document.addEventListener("mousewheel", this.onDocumentMouseWheel, false);

    //3D SCENE

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();

    // Create a basic perspective camera
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    // Create a Cube Mesh with basic material
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshNormalMaterial({ color: "#433F81" });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // instance properties
    this.cube = cube;
    this.camera = camera;
    this.renderer = renderer;
    this.scene = scene;

    // append renderer to DOM
    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
    document.removeEventListener(
      "mousewheel",
      this.onDocumentMouseWheel,
      false
    );
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = window.requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    // Render the scene
    this.renderScene();
    // call it recursively
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        // style={{width:'400px', height: '400px', left: '0', top:'0' }}
        ref={mount => (this.mount = mount)}
      />
    );
  }
}

export default Visualizer;
