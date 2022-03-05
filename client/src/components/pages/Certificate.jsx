import { Page } from '@shopify/polaris';
import React, { Suspense, useState, lazy } from 'react'
import defaultConfig from '../../scripts/defaultConfig'
import Skeleton from '../elements/supplementary/Skeleton';
const CertificatePreview = lazy(() => import('../elements/canvas/CertificatePreview'))
const Config = lazy(() => import('../elements/canvas/Config'))

export default function Certificate() {
    const [config, setConfig] = useState({ ...defaultConfig[0].config, theme: defaultConfig[0].theme });
    return (
        <div style={{'padding':'10px'}}>
            <Suspense fallback={<Skeleton/> }>
                <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start'}}>
                    <div style={{'width':'35vw'}}>
                    <Config config={config} setConfig={setConfig} />
                    </div>
                        <CertificatePreview config={config} />
                </div>
            </Suspense>
        </div>
    )
}
