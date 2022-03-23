import React, { useEffect, useRef } from 'react'
import { DoubleSide, Group, IcosahedronGeometry, Mesh, MeshLambertMaterial, PerspectiveCamera, PlaneGeometry, Scene, SpotLight, WebGLRenderer } from 'three';
export default function Visulize() {
    const fileRef = useRef(null)
    const audioRef = useRef(null)
    const vizInit = () => {
        var fileLabel = document.querySelector('label.file');
        document.onload = (e) => {
            console.log(e);
            audioRef.current.play();
            play();
        }
        fileRef.current.onchange = (e) => {
            fileLabel.classList.add('normal')
            audioRef.current.classList.add('active');
            var files = e.target.files
            console.log(files);
            audioRef.current.src = URL.createObjectURL(files[0])
            audioRef.current.load();
            audioRef.current.play();
            play();
        }
        function play() {
            var scene, camera, renderer;
            var group;
            var planeGeometry;
            var planeMaterial;
            var context = new AudioContext();
            var src = context.createMediaElementSource(audioRef.current);
            var analyser = context.createAnalyser();

            src.connect(analyser);
            analyser.connect(context.destination);
            analyser.fftSize = 512

            var bufferLength = analyser.frequencyBinCount;
            var dataArray = new Uint8Array(bufferLength);

            scene = new Scene();
            camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            group = new Group();

            camera.position.set(0,0,100)
            camera.lookAt(scene.position);

            renderer = new WebGLRenderer({'alpha':true,'antialias':true})
            renderer.setSize(window.innerWidth / window.innerHeight)
        
        
            planeGeometry = new PlaneGeometry(800,800,20,20);
            planeMaterial = new MeshLambertMaterial({
                'color':0x6904ce,
                'side':DoubleSide,
                'wireframe':true
            })

            var plane1 = new Mesh(planeGeometry,planeMaterial);
            plane1.rotation.x = -0.5*Math.PI;
            plane1.position.set(0,300)
            group.add(plane1)

            var plane2 = new Mesh(planeGeometry,planeMaterial);
            plane2.rotation.x = -0.5*Math.PI;
            plane2.position.set(0,-300)
            group.add(plane2)

            var icosahedronGeometry = new IcosahedronGeometry(10,4);
            var lamberMaterial = new MeshLambertMaterial({
                'color':0x6904ce,
                'wireframe':true
            })

            var ball = new Mesh(icosahedronGeometry,lamberMaterial);
            ball.position.set(0,0,0);
            group.add(ball);



            var spotLight = new SpotLight(0xffffff);
            spotLight.intensity = 0.9;
            spotLight.position.set(-10,40,20);
            spotLight.lookAt(ball);
            spotLight.castShadow = true
            scene.add(spotLight);

            scene.add(group);

        }
    }
    useEffect(() => {
        vizInit();
    }, [])
    return (
        <div>
            <label htmlFor='thefile' className='file'>
                Choose an Audio File
                <input ref={fileRef} type='file' id='thefile' accept='audio/*' />
            </label>
            <audio ref={audioRef} id='audio' controls ></audio>
            <div id='out'>

            </div>
        </div>
    )
}
