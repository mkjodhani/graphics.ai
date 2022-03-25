import React, { useEffect } from 'react'
import {  renderThreeJS } from '../scripts/index'
export default function Model() {
    useEffect(() => {
        renderThreeJS();
    }, [])
    return (
        <>
    <div id="editor">
        <div id="viewport-container">
            <canvas id="webgl"></canvas>
        </div>
        <div id="sidepane">
            <div>Keyboard Controls: 
                <ul>
                    <li>G - Translate</li> 
                    <li>R - Rotate</li> 
                    <li>S - Scale</li>
                </ul>
            </div>
            <div>Use mouse/touch to move camera</div>
        </div>
    </div>)
        </>
    )
}
