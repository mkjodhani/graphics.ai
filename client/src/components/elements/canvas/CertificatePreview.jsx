import { Card } from '@shopify/polaris'
import React, { useState, useEffect,lazy,Suspense} from 'react'
import Skeleton from '../supplementary/Skeleton'
const Canvas = lazy(() => import('./Canvas'))
// import Canvas from './Canvas'

export default function CertificatePreview({ config }) {
    const [discard, setDiscard] = useState(0)
    useEffect(() => {
        setDiscard(new Date());
    }, [])
    return (
        <Suspense fallback={<Skeleton/>}>
            <Canvas config={config} />
        </Suspense>
    )
}
