import React, { Component, useEffect } from 'react'
import { main } from './model'
class OfficeComponent extends Component {
    componentDidMount() {
        const viewportCanvas = document.getElementById('office');
        // officeJS(viewportCanvas)
        main(viewportCanvas)
    }
    render() {
        return (
            <canvas id="office"></canvas>
        )
    }
}
export default OfficeComponent
