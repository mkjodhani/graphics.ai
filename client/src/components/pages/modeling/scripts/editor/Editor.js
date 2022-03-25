import Viewport from './viewport/Viewport';
import * as dat from 'dat.gui';

export default class Editor{
    constructor(mouse, viewportCanvas, propertiesPaneContainer){
        //create viewport
        this.viewport = new Viewport(mouse, viewportCanvas, viewportCanvas.getBoundingClientRect().width, viewportCanvas.getBoundingClientRect().height); 
        
        //add toolbar


        //creating properties pane 
        this.propertiesPane = new dat.GUI();
        this.propertiesPane.domElement.style.marginTop = "5px";
        propertiesPaneContainer.appendChild(this.propertiesPane.domElement);
        this.propertiesPane.open();
    }

}