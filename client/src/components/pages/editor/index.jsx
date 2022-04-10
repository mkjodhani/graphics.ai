import React, { Component, useEffect } from 'react'
import './css/style.css'
import Editor from './Editor';
class EditorComponent extends Component {
    componentDidMount() {
        const viewportCanvas = document.getElementById('webgl');
        viewportCanvas.tabIndex = 0;
        //create editor
        const editor = new Editor(viewportCanvas);
        //rendering the editor.viewport
        editor.viewport.render();
    }
    render() {
        return (
            <div id="editor">
                <canvas id="webgl"></canvas>
                {/* <div id="viewport-container">
                <canvas id="webgl"></canvas>
            </div>
            <div id="sidepane"></div> */}
            </div>)
    }
}
export default EditorComponent
