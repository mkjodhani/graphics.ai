import React, { Component } from 'react'
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
        var observer = new IntersectionObserver((entries)=> {
            if(entries[0].isIntersecting === true){
                entries[0].target.scrollIntoView(true);
                this.officeScene.controls.enableZoom = true;
            }
        }, { threshold: [0.3] });
        
        observer.observe(this.mount);
    }
    render() {
        return (
            <canvas id="office" ref={ref => this.mount = ref} style={{width:'100%'}}/>
        )
    }
}
export default OfficeComponent
