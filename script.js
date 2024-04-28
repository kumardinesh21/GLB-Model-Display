import * as THREE from "three";
import { GLTFLoader, Wireframe } from "three/examples/jsm/Addons.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// glb 07 doest not acquire any tetxture
const canvas = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
// scene
const scene = new THREE.Scene();
//Group
const group = new THREE.Group();
scene.add(group);
// camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const controls = new OrbitControls(camera, renderer.domElement);
// in arguments of position x y and z
camera.position.set(3, 3, 15);
controls.update();

renderer.setSize(window.innerWidth, window.innerHeight);
// Load textures
const textureLoader = new THREE.TextureLoader();

// draco loader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
);
dracoLoader.setDecoderConfig({ type: "js" });

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

// Load Model Function
function loadModel(modelUrl, textureUrl, position) {
  const texture = textureLoader.load(textureUrl);
  texture.encoding = THREE.sRGBEncoding;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = false;

  loader.load(
    modelUrl,
    function (gltf) {
      const model = gltf.scene;
      model.position.set(...position);
      model.traverse(function (node) {
        if (node.isMesh) node.material.map = texture;
      });
      group.add(model);
    },
    undefined,
    function (error) {
      console.error("An error happened:", error);
    }
  );
}

// Load Models
loadModel(
  "images/BULDINGS_READY_GLB/04_FERRARI_WORLD.glb",
  "images/BULDINGS_READY_GLB/tex/04_Ferreri_World_Abu_Dhabi_basecolor.webp",
  [0, 0, 1]
);

loadModel(
  "images/BULDINGS_READY_GLB/01_AL_QANA.glb",
  "images/BULDINGS_READY_GLB/tex/01_AlQana_BaseColor.webp",
  [6, 0, 5]
);

loadModel(
  "images/BULDINGS_READY_GLB/03_CLYMB.glb",
  "images/BULDINGS_READY_GLB/tex/03_Clymb_Abu-Dhabi_basecolor.webp",
  [-2, 0, 5]
);
loadModel(
  "images/BULDINGS_READY_GLB/05_12_YAS_MARINA_CIRCUIT_W_HOTEL.glb",
  "images/BULDINGS_READY_GLB/tex/05_YasMarinaCircuit_low__BaseColor.webp",
  [-8, 0, 6]
);
loadModel(
  "images/BULDINGS_READY_GLB/09_YAS_WATER_WORLD.glb",
  "images/BULDINGS_READY_GLB/tex/09_Yas_Water_World_BaseColor.webp",
  [-3, 0, 8]
);
loadModel(
  "images/BULDINGS_READY_GLB/06_EMIRATES_PARK_ZOO.glb",
  "images/BULDINGS_READY_GLB/tex/06_Emirates_Park_Zoo_Uvs_low_06_Emirates_Park_Zoo_BaseColor.webp",
  [12, 0, 0]
);
loadModel(
  "images/BULDINGS_READY_GLB/08_WTC_MALL.glb",
  "images/BULDINGS_READY_GLB/tex/08_WTC_BaseColor.webp",
  [7, 0, -4]
);
loadModel(
  "images/BULDINGS_READY_GLB/10_WB_AD.glb",
  "images/BULDINGS_READY_GLB/tex/10_WBAD.webp",
  [1, 0, 8]
);
loadModel(
  "images/BULDINGS_READY_GLB/13_CAFE_DEL_MAR.glb",
  "images/BULDINGS_READY_GLB/tex/13_Yas_Bay_Cafe_del_Mar_BaseColor.webp",
  [12, 0, 5]
);
loadModel(
  "images/BULDINGS_READY_GLB/14_SIR_BANI_ISLAND.glb",
  "images/BULDINGS_READY_GLB/tex/14_SirBaniYasIsland_BaseColor.webp",
  [-8, 0, -7]
);
loadModel(
  "images/BULDINGS_READY_GLB/15_DHAFRA_EMIRATES_NATIONAL_AUTO_MUSEUM.glb",
  "images/BULDINGS_READY_GLB/tex/15_Auto_Museum.webp",
  [12, 0, -6]
);
loadModel(
  "images/BULDINGS_READY_GLB/17_ANANTARA_QASR_AL_SARAB.glb",
  "images/BULDINGS_READY_GLB/tex/17_Anantara_Qasr_AlSarab_2_basecolor.webp",
  [8, 0, -8]
);
loadModel(
  "images/BULDINGS_READY_GLB/18_SHEIK_ZAYED_GRAND_MOSQUE.glb",
  "images/BULDINGS_READY_GLB/tex/18_Sheikh_Zayed_Grand_Mosque_BaseColor.webp",
  [0, 0, 6]
);
loadModel(
  "images/BULDINGS_READY_GLB/19_LOUVRE_AD.glb",
  "images/BULDINGS_READY_GLB/tex/19_Louvre_Abu_Dabi_low_basecolor.webp",
  [-19, 0, 5]
);
loadModel(
  "images/BULDINGS_READY_GLB/20_21_22_QASR_AL_HOSN.glb",
  "images/BULDINGS_READY_GLB/tex/20_21_22_Qasr_Al_Hosn.webp",
  [12, 0, 10]
);
loadModel(
  "images/BULDINGS_READY_GLB/tex/23_Qasar_Al_Muwaiji.webp",
  "images/BULDINGS_READY_GLB/tex/23_Qasar_Al_Muwaiji.webp",
  [17, 0, -11]
);
// loadModel(
//   "images/BULDINGS_READY_GLB/24_AL_QATTARA_ARTS_CENTRE.glb",
//   "mages/BULDINGS_READY_GLB/tex/24_Al_Qattara_Arts_Centre.webp",
//   [23, 0, -14]
// );
loadModel(
  "images/BULDINGS_READY_GLB/25_MANARAT_AL_SAADIYAT.glb",
  "images/BULDINGS_READY_GLB/tex/25_Manarat_Al_Saadiyat.webp",
  [17, 0, -6]
);
loadModel(
  "images/BULDINGS_READY_GLB/26_WAHAT_AL_KARAMA.glb",
  "images/BULDINGS_READY_GLB/tex/26_WAHAT_AL_KARAMA.webp",
  [20, 0, 8]
);

// write a plane geometry i want to add base for my glb models
const geometry = new THREE.PlaneGeometry(50, 30);
// write a plane material
const material = new THREE.MeshBasicMaterial({ color: "lightGreen" });
// write a plane mesh
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
// i want plne to be in the center of the screen and above my glb models
// plane.position.set(2, 2, 6);

const light = new THREE.DirectionalLight(0xffffff, 8);
light.position.set(5, 5, 5);
scene.add(light);

// color of background
renderer.setClearColor(0xffffff);
renderer.render(scene, camera);
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
// wriet a function windo resize
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
