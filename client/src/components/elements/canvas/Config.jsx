import { Card, Collapsible, Scrollable, Stack } from '@shopify/polaris'
import React, { useState, useEffect, lazy, Suspense, Fragment } from 'react'
import Skeleton from '../supplementary/Skeleton'
const ConfigElement = lazy(() => import('./ConfigElement'))
const InputElement = lazy(() => import('./InputElement'))

export default function Config({ config, setConfig }) {
    const [configTheme, setConfigTheme] = useState(config?.theme || '1')
    const [configPrimaryHeader, setConfigPrimaryHeader] = useState(config?.configPrimaryHeader || {});
    const [configSecondaryHeader, setConfigSecondaryHeader] = useState(config?.configSecondaryHeader || {});
    const [configFirstBody, setConfigFirstBody] = useState(config?.configFirstBody || {});
    const [configSecondBody, setConfigSecondBody] = useState(config?.configSecondBody || {});
    const [configName, setConfigName] = useState(config?.configName || {});
    const [configThirdBody, setConfigThirdBody] = useState(config?.configThirdBody || {});
    const [configForthBody, setConfigForthBody] = useState(config?.configForthBody || {});
    const [configDate, setConfigDate] = useState(config?.configDate || {});
    const [configCertificate, setConfigCertificate] = useState(config?.configCertificate || {});
    const [showSetting, setShowSetting] = useState(false);
    useEffect(() => {
        setConfig({
            configTheme,
            configPrimaryHeader,
            configSecondaryHeader,
            configFirstBody,
            configSecondBody,
            configName,
            configThirdBody,
            configForthBody,
            configDate,
            configCertificate
        })
    }, [configTheme,
        configPrimaryHeader,
        configSecondaryHeader,
        configFirstBody,
        configSecondBody,
        configName,
        configThirdBody,
        configForthBody,
        configDate,
        configCertificate])
    return (
        <Suspense fallback={<Skeleton/>}>
            <Card title="Setting" sectioned actions={[{ content: showSetting ? "Hide" : 'Show', onAction: () => setShowSetting(settingToggle => !settingToggle) }]}>
                <div style={{ 'color': 'black', opacity: '0.5', marginBottom: '5px' }}>
                    <b>Note:</b> <>Click on the certificate to download it.</>
                </div>
                <Collapsible open={showSetting} id={"setting_root"} transition={{ duration: '500ms', timingFunction: 'ease-in-out' }} expandOnPrint>
                    <Stack vertical={true}>
                        <Stack.Item fill>
                            <InputElement label='Theme' value={configTheme} setValue={setConfigTheme} />
                        </Stack.Item>
                        <Stack.Item fill>
                            <ConfigElement label={"Primary Header"} config={configPrimaryHeader} setConfig={setConfigPrimaryHeader} />
                        </Stack.Item>
                        <Stack.Item fill>
                            <ConfigElement label={"Secondary Header"} config={configSecondaryHeader} setConfig={setConfigSecondaryHeader} />
                        </Stack.Item>
                        <Stack.Item fill>
                            <ConfigElement label={"Primary Body Line"} config={configFirstBody} setConfig={setConfigFirstBody} />
                        </Stack.Item>
                        <Stack.Item fill>
                            <ConfigElement label={"Secondary Body Line"} config={configSecondBody} setConfig={setConfigSecondBody} />
                        </Stack.Item>
                        <Stack.Item fill>
                            <ConfigElement label={"User "} config={configName} setConfig={setConfigName} />
                        </Stack.Item>
                        <Stack.Item fill>
                            <ConfigElement label={"Third Desc Line"} config={configThirdBody} setConfig={setConfigThirdBody} />
                        </Stack.Item>
                        <Stack.Item fill>
                            <ConfigElement label={"Forth Desc Line"} config={configForthBody} setConfig={setConfigForthBody} />
                        </Stack.Item>
                        <Stack.Item fill>
                            <ConfigElement label={"Date of Certification"} config={configDate} setConfig={setConfigDate} />
                        </Stack.Item>
                        <Stack.Item fill>
                            <ConfigElement label={"Certificate Number"} config={configCertificate} setConfig={setConfigCertificate} />
                        </Stack.Item>
                    </Stack>
                </Collapsible>
            </Card>
        </Suspense>
    )
}
