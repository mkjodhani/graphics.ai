import { Layout } from '@shopify/polaris'
import React,{useState} from 'react'
import CertificatePreview from './elements/CertificatePreview'
import Config from './elements/Config'

export default function Certificate() {
    const defaultConfig = {
        type:0,
        firstTitle:'',
        secondTitle:'',
        first_desc:'',
        second_desc:'',
        name:'',
        third_desc:'',
        forth_desc:'',
        date:'',
        certificateNumber:'',
    }
    const [config, setConfig] = useState(defaultConfig);
    return (
        <Layout>
            <Layout.Section oneThird>
                <Config config={config} setConfig={setConfig}/>
            </Layout.Section>
            <Layout.Section>
                <CertificatePreview config={config}/>
            </Layout.Section>
        </Layout>
    )
}
