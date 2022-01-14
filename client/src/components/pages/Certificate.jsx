import React, { Suspense, useState, lazy } from 'react'
import defaultConfig from '../../scripts/defaultConfig'
const CertificatePreview = lazy(() => import('../elements/canvas/CertificatePreview'))
const Config = lazy(() => import('../elements/canvas/Config'))

export default function Certificate() {
    const [config, setConfig] = useState({ ...defaultConfig[0].config, theme: defaultConfig[0].theme });
    return (
        <div style={{ padding: "10px" }}>
            <Suspense fallback={<p>Loading</p>}>
                <div>
                    <div style={{'position':'absolute','width':'30%',}}><Config config={config} setConfig={setConfig} /></div>
                    <div style={{'position':'fixed','top':'20','width':'65%','right':'20px'}}><CertificatePreview config={config} /></div>
                </div>
                {/* <CalloutCard
                title="Customize the style of your Certificate"
                illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                primaryAction={{
                    content: 'Customize Certificate',
                    url: '#',
                }}
            >
                <p>Make your course's certificate, change colors and fonts, and more.</p>
            </CalloutCard> */}
            </Suspense>
        </div>
    )
}
