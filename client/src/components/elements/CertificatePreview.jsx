import { Card } from '@shopify/polaris'
import React,{ useEffect, useState } from 'react'
import Canvas from './Canvas'

export default function CertificatePreview({ config }) {
    const [discard, setDiscard] = useState(0)
    useEffect(() =>{
        setDiscard(new Date());
    },[])
    return (
        <Card sectioned title='Certificate Preview'>
            <Canvas config={config}/>
        </Card>
    )
}
