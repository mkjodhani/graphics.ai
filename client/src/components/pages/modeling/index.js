import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import '../../../css/index.css'
import * as dat from 'dat.gui'
import gsap from 'gsap'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
export default function Modeling() {

    const canvasRef = useRef();
    const clock = new THREE.Clock();
    const [anchorLayoutEl, setAnchorLayoutEl] = React.useState(null);
    const openLayout = Boolean(anchorLayoutEl);

    const [anchorAddEl, setAnchorAddEl] = React.useState(null);
    const openAdd = Boolean(anchorAddEl);

    const [anchorSelectEl, setAnchorSelectEl] = React.useState(null);
    const openSelect = Boolean(anchorSelectEl);


    const handleClickLayout = (event) => {
        setAnchorLayoutEl(event.currentTarget);
    };
    const handleCloseLayout = () => {
        setAnchorLayoutEl(null);
    };


    const handleClickAdd = (event) => {
        setAnchorAddEl(event.currentTarget);
    };
    const handleCloseAdd = () => {
        setAnchorAddEl(null);
    };

    const handleClickSelect = (event) => {
        setAnchorSelectEl(event.currentTarget);
    };
    const handleCloseSelect = () => {
        setAnchorSelectEl(null);
    };

    const renderCanvas = () => {
        // document.getElementById("canvas").style.zIndex = "-1";
        const gui = new dat.GUI({
            'closed': true,
        });
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
        const material = new THREE.MeshBasicMaterial({
            'color': 'cyan',
            'wireframe': true
        });

        const cube = new THREE.Mesh(geometry, material)
        const parameters = {
            color: 0xff0000,
            spin: () => {
                gsap.to(cube.rotation, {
                    y: cube.rotation.y + 5,
                    'duration': 1
                })
            }
        }
        gui.add(parameters, 'spin')
        gui
            .addColor(parameters, 'color')
            .onChange(() => {
                material.color.set(parameters.color)
            })
        gui
            .add(cube.position, 'x', -3, 3, 0.01)
        gui
            .add(cube.position, 'y', -3, 3, 0.01)
        gui
            .add(cube.position, 'z', -3, 3, 0.01)
        gui
            .add(cube, 'visible')
        gui
            .add(material, 'wireframe')
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

<div style={{ 'position': 'absolute', 'top': 0, 'width': '70vw','backgroundColor':'gray' }}>
                {/* Layout menu */}
                <div style={{ 'display': 'flex', 'justifyItems': 'center', 'alignItems': 'center' }}>
                    <div>
                        <Button
                            variant='text'
                            sx={{ 'color': 'white', 'fontSize': '1em', 'textTransform': 'capitalize' }}
                            id="basic-button"
                            aria-controls={openLayout ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openLayout ? 'true' : undefined}
                            onClick={handleClickLayout}
                        >
                            Layout
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorLayoutEl}
                            open={openLayout}
                            onClose={handleCloseLayout}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleCloseLayout}>Profile</MenuItem>
                            <MenuItem onClick={handleCloseLayout}>My account</MenuItem>
                            <MenuItem onClick={handleCloseLayout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
                <div style={{ 'display': 'flex', 'justifyItems': 'center', 'alignItems': 'center' }}>
                    <div>
                        <Button
                            variant='text'
                            sx={{ 'color': 'white', 'fontSize': '1em', 'textTransform': 'capitalize' }}
                            id="basic-button"
                            aria-controls={openAdd ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openAdd ? 'true' : undefined}
                            onClick={handleClickAdd}
                        >
                            Add
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorAddEl}
                            open={openAdd}
                            onClose={handleCloseAdd}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleCloseAdd}>Plan</MenuItem>
                            <MenuItem onClick={handleCloseAdd}>Cube</MenuItem>
                            <MenuItem onClick={handleCloseAdd}>Circle</MenuItem>
                            <MenuItem onClick={handleCloseAdd}>UV Sphere</MenuItem>
                            <MenuItem onClick={handleCloseAdd}>Ico Sphere</MenuItem>
                            <MenuItem onClick={handleCloseAdd}>Cylinder</MenuItem>
                            <MenuItem onClick={handleCloseAdd}>Cone</MenuItem>
                            <MenuItem onClick={handleCloseAdd}>Torus</MenuItem>
                            <MenuItem onClick={handleCloseAdd}>Grid</MenuItem>
                            <MenuItem onClick={handleCloseAdd}></MenuItem>
                        </Menu>
                    </div>
                    <div>
                        <Button
                            variant='text'
                            sx={{ 'color': 'white', 'fontSize': '1em', 'textTransform': 'capitalize' }}
                            id="basic-button"
                            aria-controls={openSelect ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openSelect ? 'true' : undefined}
                            onClick={handleClickSelect}
                        >
                            Select
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorSelectEl}
                            open={openSelect}
                            onClose={handleCloseSelect}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleCloseSelect}>All</MenuItem>
                            <MenuItem onClick={handleCloseSelect}>None</MenuItem>
                            <MenuItem onClick={handleCloseSelect}>Invert</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>

            {/* <PageHeader /> */}
            {/* <div style={{ marginTop: '5%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}> */}
            <canvas className='webgl' id='canvas' ref={canvasRef} ></canvas>
            {/* </div> */}
        </div>
    )
}
