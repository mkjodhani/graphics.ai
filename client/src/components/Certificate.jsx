import { Layout, CalloutCard } from '@shopify/polaris'
import React, { useState } from 'react'
import CertificatePreview from './elements/CertificatePreview'
import Config from './elements/Config'

export default function Certificate() {
    const defaultConfig = {
        theme: '5',
        firstTitle: '',
        secondTitle: '',
        first_desc: '',
        second_desc: '',
        name: '',
        third_desc: '',
        forth_desc: '',
        date: '',
        certificateNumber: '',
    }
    const [config, setConfig] = useState(defaultConfig);
    return (
        <>
            <Layout>
                <Layout.Section oneThird>
                    <Config config={config} setConfig={setConfig} />
                </Layout.Section>
                <Layout.Section>
                    <CertificatePreview config={config} />
                </Layout.Section>
            </Layout>
            <br/>
            <CalloutCard
                title="Customize the style of your Certificate"
                illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                primaryAction={{
                    content: 'Customize Certificate',
                    url: 'https://www.shopify.com',
                }}
            >
                <p>Make your course's certificate, change colors and fonts, and more.</p>
            </CalloutCard>
        </>
    )
}
