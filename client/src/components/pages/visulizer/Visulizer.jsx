import React, { useEffect, useRef, useState } from 'react'
import PageHeader from '../../elements/supplementary/PageHeader'
import * as THREE from 'three'
const sizes = {
  width: 800,
  height: 600
}
export default function Visulizer() {
  const canvasRef = useRef();
  const renderCanvas = () => {
    const scene = new THREE.Scene();
    const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
      'color': 'violet'
    }))
    scene.add(cube);

    //Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    camera.position.x = 1
    camera.position.y = 1
    scene.add(camera)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current
    })
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
  }
  useEffect(() =>{
    renderCanvas();
  },[])
  return (
    <div>
      <PageHeader />
      <div style={{ marginTop: '5%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
        <canvas ref={canvasRef} ></canvas>
      </div>
    </div>
  )
}
