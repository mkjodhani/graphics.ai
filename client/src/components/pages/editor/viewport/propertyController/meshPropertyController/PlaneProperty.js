import MeshPropertyController from "./MeshPropertyController";

import * as THREE from 'three';

export default class PlaneProperty extends MeshPropertyController{
    constructor(interactiveMesh, propertiesPane){
        super(interactiveMesh, propertiesPane);
        
        this.geometryPropertyFolder= this.propertiesFolder.addFolder('Geometry');
        this.regenerate = ()=>{
<<<<<<< HEAD
            let newGeometry = new THREE.PlaneGeometry(this.geometryData.width,
=======
            let newGeometry = new  THREE.PlaneGeometry(this.geometryData.width,
>>>>>>> 817ac5055be36539a8be74b0b220898366c63872
                                                    this.geometryData.height, 
                                                    this.geometryData.widthSegments, 
                                                    this.geometryData.heightSegments);
            
            this.interactiveObject.updateGeometry(newGeometry);
        }
    }

    initProperties(){
        super.initProperties();
        
        this.geometryPropertyFolder.add(this.geometryData,'width').min(1).max(50).onChange(this.regenerate);
        this.geometryPropertyFolder.add(this.geometryData,'height').min(1).max(50).onChange(this.regenerate);
        this.geometryPropertyFolder.add(this.geometryData,'widthSegments').min(1).max(50).onChange(this.regenerate);
        this.geometryPropertyFolder.add(this.geometryData,'heightSegments').min(1).max(50).onChange(this.regenerate);
    }
    
    
}