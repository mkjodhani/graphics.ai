import { Button } from '@mui/material'
import React from 'react'
import Typography from '../../home/modules/components/Typography'
import AppAppBar from '../../home/modules/views/AppAppBar'
import withRoot from '../../home/modules/withRoot'
import BlurBackground from './BlurBackground'
import TransformBackground from './TransformBackground'

function ImageConverter() {
    return (
        <div>
            <AppAppBar/>
            <div style={{ 'display':'flex','justifyContent':'space-evenly','alignItems':'stretch'}}>
                <div style={{'resize':'both',flexGrow:1,'borderWidth':'1px','borderStyle':'solid','borderColor':'black'}}>
                    <BlurBackground/>
                </div>
                <div style={{'resize':'both',flexGrow:1,'borderWidth':'1px','borderStyle':'solid','borderColor':'black'}}>
                    <TransformBackground/>
                </div>
            </div>
        </div>
    )
}
export default withRoot(ImageConverter)