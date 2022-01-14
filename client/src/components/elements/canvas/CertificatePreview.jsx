import { Card } from '@shopify/polaris'
import React, { useState, useEffect,lazy,Suspense} from 'react'
const Canvas = lazy(() => import('./Canvas'))
// import Canvas from './Canvas'

export default function CertificatePreview({ config }) {
    const [discard, setDiscard] = useState(0)
    useEffect(() => {
        setDiscard(new Date());
    }, [])
    return (
        <Suspense fallback={<p>Loading</p>}>
            <Canvas config={config} />
        </Suspense>
    )
}
