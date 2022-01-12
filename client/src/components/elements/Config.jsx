import { Button, Card, Form, FormLayout, Scrollable, Stack } from '@shopify/polaris'
import React, { useState, useEffect } from 'react'
import ConfigElement from './ConfigElement'
import InputElement from './InputElement'
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
        <Card title="Setting" sectioned>
            <Scrollable shadow focusable style={{ height: '655px' }} horizontal={false}>
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
            </Scrollable>


            {/* <Form>
                <FormLayout> */}
            {/* <InputElement label='Theme' value={config.theme} setValue={(value => setConfig((oldConfig) => ({...oldConfig,theme:value}) ))} />
                    <InputElement label='1st Line of Title' value={config.firstTitle} setValue={(value => setConfig((oldConfig) => ({...oldConfig,firstTitle:value}) ))} />
                    <InputElement label='2nd line of Title' value={config.secondTitle} setValue={(value => setConfig((oldConfig) => ({...oldConfig,secondTitle:value}) ))} />
                    <InputElement label='1st line of Description' value={config.first_desc} setValue={(value => setConfig((oldConfig) => ({...oldConfig,first_desc:value}) ))} />
                    <InputElement label='2nd line of Description' value={config.second_desc} setValue={(value => setConfig((oldConfig) => ({...oldConfig,second_desc:value}) ))} />
                    <InputElement label='Name' value={config.name} setValue={(value => setConfig((oldConfig) => ({...oldConfig,name:value}) ))} />
                    <InputElement label='3st line of Description' value={config.third_desc} setValue={(value => setConfig((oldConfig) => ({...oldConfig,third_desc:value}) ))} />
                    <InputElement label='4st line of Description' value={config.forth_desc} setValue={(value => setConfig((oldConfig) => ({...oldConfig,forth_desc:value}) ))} />
                    <InputElement label='Date' value={config.date} setValue={(value => setConfig((oldConfig) => ({...oldConfig,date:value}) ))} />
                    <InputElement label= 'Certificate Number'value={config.certificateNumber} setValue={(value => setConfig((oldConfig) => ({...oldConfig,certificateNumber:value}) ))} /> */}
            {/* </FormLayout>
            </Form> */}
        </Card>
    )
}
