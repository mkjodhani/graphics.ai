

export default class ToolBox{
    
    constructor(){
        this.activeTool = ToolBox.toolType.move;
        
    }
}

ToolBox.prototype.toolType = {
    SELECTBOX: 0,
    CURSOR: 1,
    MOVE: 2,
    ROTATE: 3,
    SCALE: 4,
    MEASURE: 7,
    ADDCUBE: 8
};