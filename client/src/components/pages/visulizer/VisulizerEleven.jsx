import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import '../../../css/index.css'
import gsap from 'gsap'
import { LoadingManager, Texture, TextureLoader } from 'three'
export default function VisulizerTen() {
  const canvasRef = useRef();
  const clock = new THREE.Clock();
  const renderCanvas = () => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    const cursor = {
      x: 0,
      y: 0
    }
    const scene = new THREE.Scene()
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 9, 9, 9);
    // const geometry = new THREE.SphereBufferGeometry(1,32,32);
    // const geometry = new THREE.TorusBufferGeometry(1,0.35,32,100);

    const image = new Image();
    const loadingManager = new LoadingManager();
    const textureLoader = new TextureLoader(loadingManager);
    const texture = textureLoader.load('/images/three/box1.jpg')
    const material = new THREE.MeshBasicMaterial({
      'map': texture
    });

    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube);

    //Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 5
    scene.add(camera)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current
    })

    window.addEventListener('mousemove', (event) => {
      cursor.x = event.clientX / sizes.width - 0.5
      cursor.y = -(event.clientY / sizes.height - 0.5)
    })
    window.addEventListener('resize', () => {
      //update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight
      //update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      //update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(window.devicePixelRatio, 2)
    })
    window.addEventListener('dblclick', () => {
      const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
      console.log("double Click!");
      if (!document.fullscreenElement) {
        if (canvasRef.current.requestFullscreen)
          canvasRef.current.requestFullscreen()
        else if (canvasRef.current.webkitRequestFullscreen) {
          canvasRef.current.webkitRequestFullscreen();
        }
      }
      else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    })
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true
    // gsap.to(cube.position, { x: 2, 'duration': 1, 'delay': 1 })
    // gsap.to(cube.position, { x: 0, 'duration': 1, 'delay': 2 })
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
    //Animations
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      // camera.position.x  = Math.sin(cursor.x * 2 * Math.PI) * 3
      // camera.position.y  = cursor.y * 5
      // camera.position.z  = Math.cos(cursor.x * 2 * Math.PI) * 3
      // camera.lookAt(cube.position)
      // cube.rotation.y = elapsedTime 
      // cube.rotation.x = Math.sin(elapsedTime)
      // cube.rotation.z = Math.sin(elapsedTime)
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    }
    tick();
  }
  useEffect(() => {
    renderCanvas();
  }, [])
  return (
    <div>
      {/* <PageHeader /> */}
      {/* <div style={{ marginTop: '5%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}> */}
      <canvas className='webgl' ref={canvasRef} ></canvas>
      {/* </div> */}
    </div>
  )
}
