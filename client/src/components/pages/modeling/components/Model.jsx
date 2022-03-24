import React, { useEffect } from 'react'
import '../css/style.css'
import { renderThreeJS } from '../scripts'
export default function Model() {
    useEffect(() => {
        renderThreeJS();
    }, [])
    return (
        <>
            <div style={{ 'textAlign': 'center' }}>Keyboard Controls: G-translate R-rotate S-scale</div>
            <div style={{ 'textAlign': 'center' }}>Use mouse to move camera</div>
            <canvas id="webgl"></canvas>)
        </>
    )
}
