import React, { useEffect, useRef, useState } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import '../../../css/index.css'
import { BoxBufferGeometry, BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
export default function VisulizerNineHalf() {
  const renderCanvas = () => {
    const canvas = document.getElementById('canvas');
    const sizes = {
      width: window.innerWidth,
      height: window.outerHeight
    }
    const cursor = {
      x: 0,
      y: 0
    }
    const scene = new Scene();
    const geometry = new BufferGeometry();
    const totalTriangles = 100
    const posisitionArray = new Float32Array(totalTriangles * 3 * 3)
    for (let i = 0; i < totalTriangles * 3 * 3; i++) {
      posisitionArray[i] = (Math.random() - 0.5) * 4
    }

    const posisitonAttribute = new BufferAttribute(posisitionArray,3);
    geometry.setAttribute('position',posisitonAttribute);
    const material = new MeshBasicMaterial({ 'color': 'white', 'wireframe': true });

    const mesh = new Mesh(geometry, material);
    scene.add(mesh)
    const camera = new PerspectiveCamera(71, sizes.width / sizes.height);
    camera.position.z = 10;

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    const renderer = new WebGLRenderer({
      canvas
    });
    renderer.setSize(sizes.width, sizes.height);
    const tick = () => {
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    }
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
        if (canvas.requestFullscreen)
          canvas.requestFullscreen()
        else if (canvas.webkitRequestFullscreen) {
          canvas.webkitRequestFullscreen();
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


    tick();
  }
  useEffect(() => {
    renderCanvas();
  }, [])
  return (
    <div>
      {/* <PageHeader /> */}
      {/* <div style={{ marginTop: '5%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}> */}
      <canvas className='webgl' id='canvas' ></canvas>
      {/* </div> */}
    </div>
  )
}
