import { Card, Form, FormLayout } from '@shopify/polaris'
import React,{useState} from 'react'
import InputElement from './InputElement'

export default function Config({config,setConfig}) {
    return (
        <Card sectioned>
            <Form>
                <FormLayout>
                    <InputElement label='Theme' value={config.type} setValue={(value => setConfig((oldConfig) => ({...oldConfig,type:value}) ))} />
                    <InputElement label='1st Line of Title' value={config.firstTitle} setValue={(value => setConfig((oldConfig) => ({...oldConfig,firstTitle:value}) ))} />
                    <InputElement label='2nd line of Title' value={config.secondTitle} setValue={(value => setConfig((oldConfig) => ({...oldConfig,secondTitle:value}) ))} />
                    <InputElement label='1st line of Description' value={config.first_desc} setValue={(value => setConfig((oldConfig) => ({...oldConfig,first_desc:value}) ))} />
                    <InputElement label='2nd line of Description' value={config.second_desc} setValue={(value => setConfig((oldConfig) => ({...oldConfig,second_desc:value}) ))} />
                    <InputElement label='Name' value={config.name} setValue={(value => setConfig((oldConfig) => ({...oldConfig,name:value}) ))} />
                    <InputElement label='3st line of Description' value={config.third_desc} setValue={(value => setConfig((oldConfig) => ({...oldConfig,third_desc:value}) ))} />
                    <InputElement label='4st line of Description' value={config.forth_desc} setValue={(value => setConfig((oldConfig) => ({...oldConfig,forth_desc:value}) ))} />
                    <InputElement label='Date' value={config.date} setValue={(value => setConfig((oldConfig) => ({...oldConfig,date:value}) ))} />
                    <InputElement label= 'Certificate Number'value={config.certificateNumber} setValue={(value => setConfig((oldConfig) => ({...oldConfig,certificateNumber:value}) ))} />
                </FormLayout>
            </Form>
        </Card>
    )
}
