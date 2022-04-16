import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as TWEEN from '@tweenjs/tween.js'
import * as dat from 'dat.gui'
import { sRGBEncoding, Vector3 } from 'three'

export default class OfficeScene {
    constructor(canvas) {
        this.canvas = canvas;
        this.scene = new THREE.Scene();

        this.sizes = {
            width: this.canvas.getBoundingClientRect().width,
            height: this.canvas.getBoundingClientRect().height
        }

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
                this.renderScene();
                if(this.onAfterLoad)
                    this.onAfterLoad();
            }
        )

        /**
         * Renderer
         */
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.physicallyCorrectLights = true
        this.renderer.outputEncoding = sRGBEncoding

        //override this two methods on monitor scroll event
        this.onHideHomePage = null;
        this.onUnhideHomePage = null;
        this.onAfterLoad = null;
    }

    renderScene() {
        let scrollAmount;

        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();

        window.addEventListener('resize', () => {
            // Update size
            this.sizes.width = window.innerWidth
            this.sizes.height = window.innerHeight

            // Update camera
            camera.aspect = this.sizes.width / this.sizes.height
            camera.updateProjectionMatrix()

            // Update this.renderer
            this.renderer.setSize(this.sizes.width, this.sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        })

        window.addEventListener('dblclick', () => {
            const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
            if (!fullscreenElement) {
                if (this.canvas.requestFullscreen())
                    this.canvas.requestFullscreen()
                else if (this.canvas.webkitRequestFullscreen)
                    this.canvas.webkitRequestFullscreen()
            }
            else {
                if (this.canvas.exitFullScreen)
                    this.canvas.exitFullScreen()
                else if (this.canvas.webkitExitFullScreen)
                    this.canvas.webkitExitFullScreen()
            }
        })

        window.addEventListener('pointermove', onPointerMove);

        window.addEventListener('click', selectObject)

        let isHomePageVisible = true;

        window.addEventListener('scroll', () => {
            let lastScrollPos = window.scrollY;
            scrollAmount = 700; // scroll amount needs to determined based responsiveness

            if (lastScrollPos > scrollAmount && isHomePageVisible) {
                isHomePageVisible = false;
                //TODO: hide homepage; replace with screenshot: editorSS.png
                this.onHideHomePage();
            }
            if (lastScrollPos < scrollAmount && !isHomePageVisible) {
                isHomePageVisible = true;
                //TODO: unhide homepage; remove screenshot : editorSS.png
                this.onUnhideHomePage();
            }
        })

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height)
        camera.position.copy(new THREE.Vector3(-0.025, 4.1, 1))
        this.scene.add(camera)

        let position = new Vector3(0, 4, 0)

        // Controls
        const controls = new OrbitControls(camera, this.canvas)
        controls.enableDamping = true
        controls.minZoom = 0.5
        controls.minDistance = 1
        controls.maxDistance = 7.5
        controls.minPolarAngle = Math.PI / 16
        controls.maxPolarAngle = Math.PI / 2
        controls.minAzimuthAngle = -Math.PI / 3
        controls.maxAzimuthAngle = Math.PI / 3

        // Light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
        this.scene.add(directionalLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
        this.scene.add(ambientLight);

        function selectObject() {

            raycaster.setFromCamera(pointer, camera);

            // calculate objects intersecting the picking ray
            const intersects = raycaster.intersectObject(this.scene.children, true);

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
                    window.location.href = ""
                }
                if (intersects[0].object.parent.name === "Headphone") {
                    console.log("Relax with Music!!");
                    window.location.href = ""
                }
            }
        }

        function hover(object) {
            const tween = new TWEEN.Tween({ x: object.position.x, y: object.position.y, z: object.position.z })
                .to({ x: object.position.x, y: object.position.y + 0.05, z: object.position.z }, 500)
                .onUpdate(function (obj) {
                    object.position.set(obj.x, obj.y, obj.z)
                })

            const tween0 = new TWEEN.Tween({ y: object.position.y + 0.2 })
                .to({ y: object.position.y }, 1500)
                .onUpdate(function (obj) {
                    object.position.setY(obj.y)
                })
            // tween.yoyo = true
            tween.chain(tween0)
            tween0.chain(tween)
            tween.start()
            tween0.start()
        }


        function onPointerMove(event) {

            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

        }


        let zoom = controls.target.distanceTo(controls.object.position);
        let isScreenChanged = false;

        // Animation
        const animationLoop = () => {

            // control updates(necessary for damping)
            // controls.update()

            // TWEEN.update()


            camera.lookAt(position)
            controls.target = position

            this.renderer.render(this.scene, camera)

            // Change monitor screen based on zoom
            zoom = controls.target.distanceTo(controls.object.position)
            if (zoom >= 1.06 && !isScreenChanged) {
                isScreenChanged = true
                this.updateTexture('/assets/office/FullScene/editorSS.png')
            }
            if (zoom < 1.06 && isScreenChanged) {
                isScreenChanged = false
                this.updateTexture('/assets/office/FullScene/ash-edmonds-0aWZdK8nK2I-unsplash.jpg')
            }
            window.requestAnimationFrame(animationLoop)
        }
        // Also get more control over it using GSAP

        animationLoop()
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
} 