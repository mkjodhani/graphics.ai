import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import '../../../css/index.css'
import { LoadingManager, Texture, TextureLoader } from 'three'
import Layout from '../modeling/components/Layout'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
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
    // const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 9, 9, 9);
    // const geometry = new THREE.SphereBufferGeometry(1,32,32);
    const geometry = new THREE.TorusBufferGeometry(1,0.35,32,100);

    const image = new Image();
    const loadingManager = new LoadingManager();
    const textureLoader = new TextureLoader(loadingManager);
    const texture = textureLoader.load('/images/three/box2.jpg')
    const material = new THREE.MeshBasicMaterial({
      'map': texture
    });

    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube);

    //Grid
    const grid = new THREE.GridHelper(50, 100, 0x4a4a4a, 0x4a4a4a);
    // grid.material.opacity = 0.4;
    scene.add(grid);

    //Axix
    const axesGroup = new THREE.Group();
    const positiveAxes = new THREE.AxesHelper(100);
    axesGroup.add(positiveAxes);
    const negativeAxes = new THREE.AxesHelper(-100);
    axesGroup.add(negativeAxes);
    scene.add(axesGroup);

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
    const orbitControls = new OrbitControls(camera, canvasRef.current);
    orbitControls.enableDamping = true
    //Transform Controls
    const transformControls = new TransformControls(camera, renderer.domElement);
    transformControls.attach(cube);
    transformControls.addEventListener('mouseDown', (event) => {
        orbitControls.enabled = false;
    });
    transformControls.addEventListener('mouseUp', (event) => {
        orbitControls.enabled = true;
    });
    window.addEventListener('keypress', (event) => {
        switch (event.code) {
            case 'KeyG':
                transformControls.setMode('translate');
                break;
            case 'KeyR':
                transformControls.setMode('rotate');
                break;
            case 'KeyS':
                transformControls.setMode('scale');
                break;
        }
    });
    scene.add(transformControls);
    
    
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);



    //Animations
    const tick = () => {
      orbitControls.update();
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
      <Layout/>
      {/* <PageHeader /> */}
      {/* <div style={{ marginTop: '5%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}> */}
      <canvas className='webgl' ref={canvasRef} style={{'zIndex':0}}></canvas>
      {/* </div> */}
    </div>
  )
}
