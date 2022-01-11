import { Card } from '@shopify/polaris'
import React from 'react'
import Canvas from './Canvas'

export default function CertificatePreview({ config }) {
    return (
        <Card sectioned title='Certificate Preview' primaryFooterAction={{content: 'Download',onAction:() => alert('...')}}>
            <Canvas config={config}/>
        </Card>
    )
}
