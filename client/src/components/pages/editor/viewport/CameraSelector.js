

export default class CameraSelector extends Map{
    constructor(defaultCamera, onCameraSwitch, onAddCamera){
        super();
        this.currentCameraName = defaultCamera.name;
        this.set(this.currentCameraName, defaultCamera);
        this.onAddCamera = onAddCamera;
        this.onCameraSwitch = onCameraSwitch;
    }

    /**
     * 
     * @param {THREE.Camera} camera 
     */
    add(camera){
        this.set(camera.name, camera);
        this.onAddCamera(camera);
    }

    switchCamera(){
        this.onCameraSwitch(this.get(this.currentCameraName));
    }
}