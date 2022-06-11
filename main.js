import "./style.css"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

// Scene setup

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

camera.position.setZ(30)

renderer.render(scene, camera)

// Donut

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347, wireframe: true })
const torus = new THREE.Mesh(geometry, material)

scene.add(torus)

// Point light

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)

// Ambient light

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

// Grid

const gridHelper = new THREE.GridHelper(200, 50)
scene.add(gridHelper)

const controls = new OrbitControls(camera, renderer.domElement)

// Stars

function AddStar() {

  const geometry = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(geometry, material)

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

  star.position.set(x, y, z)
  scene.add(star)

}

Array(200).fill().forEach(AddStar)

// Background

const spaceTexture = new THREE.TextureLoader().load("space.png")
scene.background = spaceTexture

// Moon

const moonTexture = new THREE.TextureLoader().load("moon.jpg")
const normalMoonTexture = new THREE.TextureLoader().load("moonNormalMap.jpg")

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({ map: moonTexture, normalMap: normalMoonTexture })
)

scene.add(moon)

moon.position.z = 30
moon.position.x = -10

// Scrolling

function MoveCamera() {

  const t = document.body.getBoundingClientRect().top

  moon.rotation.x += 0.05
  moon.rotation.y += 0.075
  moon.rotation.z += 0.05

  camera.position.x = t * -0.0002
  camera.position.y = t * -0.0002
  camera.position.z = t * -0.01

}

document.body.onscroll = MoveCamera

MoveCamera()

// Animation

function animate() {

  requestAnimationFrame(animate)

  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01

  renderer.render(scene, camera)

}

animate()
