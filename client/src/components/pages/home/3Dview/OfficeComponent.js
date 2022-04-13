import React, { Component, useEffect } from 'react'
import { main } from './model'
class OfficeComponent extends Component {
    componentDidMount() {
        // const viewportCanvas = document.getElementById('office');
        // officeJS(viewportCanvas)
        main(this.mount)
        console.log(this.mount);
    }
    render() {
        return (
            <canvas id="office" ref={ref => this.mount = ref}/>
        )
    }
}
export default OfficeComponent
