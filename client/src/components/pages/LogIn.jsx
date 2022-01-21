import React, {useState} from 'react'
import { Button, Form, FormLayout, Page, TextField } from '@shopify/polaris'

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Page>
            <Form>
                <FormLayout>
                    <TextField label="Username" value={username} onChange={setUsername}/>
                    <TextField label="Password" type='password' value={password} onChange={setPassword}/>
                    <Button primary>Log In</Button>
                </FormLayout>
            </Form>
        </Page>
    )
}
