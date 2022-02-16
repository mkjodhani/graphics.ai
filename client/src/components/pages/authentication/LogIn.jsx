import React, {useState} from 'react'
import { Button, Form, FormLayout, Heading, Page, TextField } from '@shopify/polaris'
import axios from 'axios';

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const submit  = async () =>{
        const res = await axios.post("/authenticate",{username,password});
        console.log(res);
    }
    return (
        <div style={{'display':'flex',justifyContent:'space-around',alignItems:'center',width:'100vw',height:'100vh'}}>
            <Form>
                <div style={{'display':'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={require('../../../assets/img/icon.png')} style={{'height':150}} />
                </div>
                <br/>
                <p style={{ 'textAlign': 'center',fontFamily:'BlackSwan',fontSize:'2.5em','flex':1,'flexWrap':'wrap' }}>Certificate Varifier</p>
                <br/>
                <FormLayout>
                    <TextField label="Username" value={username} onChange={setUsername}/>
                    <TextField label="Password" type='password' value={password} onChange={setPassword}/>
                    <div style={{'float':'right'}}>
                        <Button primary submit onClick={() => submit()}>Log In</Button>
                    </div>
                </FormLayout>
            </Form>
        </div>
    )
}
