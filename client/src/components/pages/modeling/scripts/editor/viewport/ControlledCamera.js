import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from 'three';

export default class ControlledCamera {
    constructor(width, height, cameraPosition=[1,2,3], domElement){
        this.setZoom = ()=>{
            const distance = this.orthographicCamera.position.distanceTo(this.orbitControls.target);
            this.orthographicCamera.zoom = (this.orthographicCamera.right - this.orthographicCamera.left) / (2 * distance * Math.tan(this.perspectiveCamera.fov * Math.PI/360));
        };

        this.perspectiveCamera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
        this.perspectiveCamera.position.set(...cameraPosition);
        this.perspectiveCamera.lookAt(new THREE.Vector3(0,0,0));
        this.activeCamera = this.perspectiveCamera;
        this.orbitControls = new OrbitControls(this.activeCamera, domElement);

        this.orthographicCamera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 0.1, 1000 );
        this.orthographicCamera.position.set(...cameraPosition);
        this.orthographicCamera.lookAt(new THREE.Vector3(0,0,0));
        this.otherCamera = this.orthographicCamera;
        this.setZoom();
        this.orthographicCamera.updateProjectionMatrix();
    }

    getActiveCamera(){
        return this.activeCamera;
    }

    getOrbitControls(){
        return this.orbitControls;
    }

    switchCamera(){
        this.otherCamera.position.copy(this.activeCamera.position);
        this.otherCamera.lookAt(this.orbitControls.target);
        if(this.otherCamera.type === 'OrthographicCamera'){
            this.setZoom();
        }else{
            //TODO: update zooming of perspective camera
        }
        this.otherCamera.updateProjectionMatrix();
    
        this.orbitControls.object = this.otherCamera;
        this.orbitControls.update();
        
        const tmpCamera = this.activeCamera;
        this.activeCamera = this.otherCamera;
        this.otherCamera = tmpCamera;
    }

}