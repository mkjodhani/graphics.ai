import { Card } from '@shopify/polaris'
import React from 'react'

export default function CertificatePreview({ config }) {
    return (
        <Card sectioned title='Certificate Preview'>
            <a href="" >
                <canvas id="canvas" width="2200" height="1700" style="border:1px solid #000000;display: none;"></canvas>
            </a>
            <main>
                <a href="" id="link" download="Certificate.png">
                    <img src="" id="preview" alt=""/>
                </a>
            </main>
        </Card>
    )
}
