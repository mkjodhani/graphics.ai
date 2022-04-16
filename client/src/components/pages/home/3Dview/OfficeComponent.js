import React, { Component, useEffect } from 'react'
import OfficeScene from './OfficeScene'
class OfficeComponent extends Component {
    componentDidMount() {
        this.officeScene = new OfficeScene(this.mount);
        this.officeScene.onHideHomePage = ()=>{
            //write logic to hide ProductHeroLayout 
        };
        this.officeScene.onUnhideHomePage = ()=>{
            //write logic to unhide ProductHeroLayout 
        };
        this.officeScene.onAfterLoad = ()=>{
            //TODO: remove loading preview
            
        }
    }
    render() {
        return (
            <canvas id="office" ref={ref => this.mount = ref} style={{width:'100%'}}/>
        )
    }
}
export default OfficeComponent
