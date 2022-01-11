import { Button, Card, Form, FormLayout, Scrollable } from '@shopify/polaris'
import React, { useState } from 'react'
import ConfigElement from './ConfigElement'
import InputElement from './InputElement'
export default function Config({ config, setConfig }) {
    const [primaryHeaderButton, setPrimaryHeaderButton] = useState(false);
    const [secondaryHeaderButton, setSecondaryHeaderButton] = useState(false);
    const [primaryBodyButton, setPrimaryBodyButton] = useState(false);
    const [secondaryBodyButton, setSecondaryBodyButton] = useState(false);
    const [nameButton, setnameButton] = useState(false);
    const [thirdBodyButton, setThirdBodyButton] = useState(false);
    const [forthBodyButton, setForthBodyButton] = useState(false);
    const [dateButton, setDateButton] = useState(false);
    const [certificateButton, setCertificateButton] = useState(false);
    return (
        <Card title="Setting" sectioned>
            <InputElement label='Theme' value={config.theme} setValue={(value => setConfig((oldConfig) => ({ ...oldConfig, theme: value })))} />

            <Button primary={primaryHeaderButton} onClick={() => setPrimaryHeaderButton(!primaryHeaderButton)}>{"Primary Header"}</Button>
            <ConfigElement open={primaryHeaderButton} label={"Primary Header"} />

            <Button primary={secondaryHeaderButton} onClick={() => setSecondaryHeaderButton(!secondaryHeaderButton)}>{"Secondary Header"}</Button>
            <ConfigElement open={secondaryHeaderButton} label={"Secondary Header"} />

            <Button primary={primaryBodyButton} onClick={() => setPrimaryBodyButton(!primaryBodyButton)}>{"Primary Body Line"}</Button>
            <ConfigElement open={primaryBodyButton} label={"Primary Body Line"} />

            <Button primary={secondaryBodyButton} onClick={() => setSecondaryBodyButton(!secondaryBodyButton)}>{"Secondary Body Line"}</Button>
            <ConfigElement open={secondaryBodyButton} label={"Secondary Body Line"} />

            <Button primary={nameButton} onClick={() => setnameButton(!nameButton)}>{"User "}</Button>
            <ConfigElement open={nameButton} label={"User "} />

            <Button primary={thirdBodyButton} onClick={() => setThirdBodyButton(!thirdBodyButton)}>{"Third Desc Line"}</Button>
            <ConfigElement open={thirdBodyButton} label={"Third Desc Line"} />

            <Button primary={forthBodyButton} onClick={() => setForthBodyButton(!forthBodyButton)}>{"Forth Desc Line"}</Button>
            <ConfigElement open={forthBodyButton} label={"Forth Desc Line"} />

            <Button primary={dateButton} onClick={() => setDateButton(!dateButton)}>{"Date of Certification"}</Button>
            <ConfigElement open={dateButton} label={"Date of Certification"} />

            <Button primary={certificateButton} onClick={() => setCertificateButton(!certificateButton)}>{"Certificate Number"}</Button>
            <ConfigElement open={certificateButton} label={"Certificate Number"} />


            {/* <Scrollable shadow focusable style={{height: '600px'}} horizontal={false}> */}
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
            {/* </Scrollable> */}
        </Card>
    )
}
