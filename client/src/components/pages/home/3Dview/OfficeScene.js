import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as TWEEN from '@tweenjs/tween.js'
import * as dat from 'dat.gui'

export default class OfficeScene {
    constructor(canvas) {

        this.canvas = canvas;

        //override this two methods on monitor scroll event
        this.onHideHomePage = null;
        this.onUnhideHomePage = null;

        // Debug
        const gui = new dat.GUI()

        // Canvas
        // const canvas = document.querySelector('canvas.office')

        // Scene
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color(0xf5f5f5);


        /**
         * Sizes
         */
        const sizes = {
            width: canvas.getBoundingClientRect().width,
            height: canvas.getBoundingClientRect().height
        }

        window.addEventListener('resize', () => {
            // Update size
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            this.camera.aspect = sizes.width / sizes.height
            this.camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        })

        window.addEventListener('dblclick', () => {
            const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
            if (!fullscreenElement) {
                if (canvas.requestFullscreen())
                    canvas.requestFullscreen()
                else if (canvas.webkitRequestFullscreen)
                    canvas.webkitRequestFullscreen()
            }
            else {
                if (canvas.exitFullScreen)
                    canvas.exitFullScreen()
                else if (canvas.webkitExitFullScreen)
                    canvas.webkitExitFullScreen()
            }
        })

        /**
         * Camera
         */
        // Base camera
        this.camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
        this.camera.position.copy(new THREE.Vector3(-0.025, 4.1, 1))
        this.scene.add(this.camera)

        let position = new THREE.Vector3(0, 4, 0)
        // gui.add(position, 'x').min(-100).max(100).step(1).name('LookAt X')
        // gui.add(position, 'y').min(-100).max(100).step(1).name('LookAt Y')
        // gui.add(position, 'z').min(-100).max(100).step(1).name('LookAt Z')

        // Controls
        this.controls = new OrbitControls(this.camera, canvas)
        this.controls.enableDamping = true
        this.controls.minZoom = 1
        this.controls.minDistance = 1
        this.controls.maxDistance = 7.5
        this.controls.minPolarAngle = Math.PI / 16
        this.controls.maxPolarAngle = Math.PI / 2
        this.controls.minAzimuthAngle = -Math.PI / 3
        this.controls.maxAzimuthAngle = Math.PI / 3

        this.controls.addEventListener('end', (event)=>{
            if(this.controls.getDistance() >= this.controls.maxDistance || this.controls.getDistance() === this.controls.minDistance){
                this.controls.enableZoom = false;
            }
        });

        // Light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
        this.scene.add(directionalLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
        this.scene.add(ambientLight);

        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        const gltfLoader = new GLTFLoader()
        gltfLoader.load(
            'assets/office/FullScene/fullscene.gltf',
            (object) => {
                console.log(object);
                while (object.scene.children.length) {
                    object.scene.children[0].position.setZ(object.scene.children[0].position.z + 1.5)
                    object.scene.children[0].position.setX(object.scene.children[0].position.x - 0.2)
                    this.scene.add(object.scene.children[0])
                }
                this.onLoad();
                animationLoop();
                this.onAfterLoad();
            }
        )


        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.physicallyCorrectLights = true
        renderer.outputEncoding = THREE.sRGBEncoding


        let zoom = this.controls.target.distanceTo(this.controls.object.position);
        let isScreenChanged = false;

        // Animation
        const animationLoop = () => {

            // control updates(necessary for damping)
            // controls.update()

            // TWEEN.update()

            this.camera.lookAt(position)
            this.controls.target = position

            renderer.render(this.scene, this.camera)

            // Change monitor screen based on zoom
            zoom = this.controls.target.distanceTo(this.controls.object.position)
            if (zoom > 1.5 && !isScreenChanged) {
                isScreenChanged = true
                this.updateTexture('/assets/office/FullScene/editorSS.png')
            }
            if (zoom < 1.5 && isScreenChanged) {
                isScreenChanged = false
                this.updateTexture('/assets/office/FullScene/ash-edmonds-0aWZdK8nK2I-unsplash.jpg')
            }

            window.requestAnimationFrame(animationLoop)
        }
        // Also get more control over it using GSAP
    }

    selectObject() {

        this.raycaster.setFromCamera(this.pointer, this.camera);

        // calculate objects intersecting the picking ray
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);

        if (intersects.length > 0) {

            if (intersects[0].object.parent.name === "kitap_kitap_1_Cube001" || intersects[0].object.parent.name === "kitap_kitap_1_Cube003") {
                console.log('Lets read');
                window.location.href = "./textureUtils"
            }
            if (intersects[0].object.getObjectByName('Plane')) {
                console.log('Plane');
                window.location.href = "./editor"
            }
            if (intersects[0].object.parent.name === "Photoframe") {
                console.log("Yay Photoframe!!");
                window.location.href = "./imageConverter"
            }
            if (intersects[0].object.parent.name === "Headphone") {
                console.log("Relax with Music!!");
                window.location.href = ""
            }
        }
    }

    updateTexture(imgURL) {
        new THREE.TextureLoader().load(
            imgURL,
            (texture) => {
                this.scene.getObjectByName('Plane').material.map = texture;
                this.scene.getObjectByName('Plane').material.needsUpdate = true;
            }
        )
    }

    onPointerMove(event){
        this.pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	    this.pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    }

    onLoad() {
        window.addEventListener('pointermove', (event)=>{
            this.onPointerMove(event);
        });

        this.canvas.addEventListener('click', () => {
            this.selectObject();
        });

        let isHomePageVisible = true;

        window.addEventListener('scroll', () => {
            let lastScrollPos = window.scrollY;
            let scrollAmount = 700; // scroll amount needs to determined based responsiveness

            if (lastScrollPos > scrollAmount && isHomePageVisible) {
                isHomePageVisible = false;
                this.onHideHomePage();
            }
            if (lastScrollPos < scrollAmount && !isHomePageVisible) {
                isHomePageVisible = true;
                this.onUnhideHomePage();
            }
        })
    }

    onAfterLoad() {

    }
} 