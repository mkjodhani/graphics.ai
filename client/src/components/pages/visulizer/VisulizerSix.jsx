import React, { useEffect, useRef, useState } from 'react'
import PageHeader from '../../elements/supplementary/PageHeader'
import * as THREE from 'three'
import gsap from 'gsap'
const sizes = {
  width: 800,
  height: 600
}
export default function VisulizerSix() {
  const canvasRef = useRef();
  const clock = new THREE.Clock();
  const renderCanvas = () => {
    const scene = new THREE.Scene();
    const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
      'color': 'lightgreen'
    }))
    scene.add(cube);

    //Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    scene.add(camera)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current
    })
    gsap.to(cube.position, { x: 2, 'duration': 1, 'delay': 1 })
    gsap.to(cube.position, { x: 0, 'duration': 1, 'delay': 2 })
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
    //Animations
    const tick = () => {
      // const elapsedTime = clock.getElapsedTime();
      // cube.rotation.y = elapsedTime 
      // cube.rotation.x = Math.sin(elapsedTime)
      // cube.rotation.z = Math.sin(elapsedTime)
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
      <PageHeader />
      <div style={{ marginTop: '5%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
        <canvas ref={canvasRef} ></canvas>
      </div>
    </div>
  )
}
