import React, { useState } from 'react'
import { Button, Form, FormLayout, Frame, Icon, Page, Select, Stack, TextField, Toast } from '@shopify/polaris'
import { CircleCancelMajor } from '@shopify/polaris-icons';
import axios from 'axios';
import { USER_TYPE } from '../../../scripts/constants';
export default function SignIn() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState(USER_TYPE.USER);
    const [DOB, setDOB] = useState(new Date());
    const [tel, setTel] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [isError, setIsError] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [loading, setLoading] = useState(false);
    // const [password, setPassword] = useState('');
    const signIn = async (event) => {
        setLoading(true);
        console.log({ name, username, email });
        await fetch("/profile",{
            'method':'POST',
            body:JSON.stringify({
                'username':username
            })
        })
        try {
            if (name && username && email && DOB && tel) {
                const formData = new FormData();
                formData.append("displayName",name);
                formData.append("username",username);
                formData.append("email",email);
                formData.append("dateOfBirth",DOB);
                formData.append("contactNumber",tel);
                formData.append("userType",userType);
                // const res = await axios.post("api/user/register",);
                // console.log(res,"RES");
                setLoading(false);
            }
            else {
                if (!name)
                    setToastMessage("Enter the data in Name Field!");
                else if (!username)
                    setToastMessage("Enter the data in UserName Field!");
                else if (!email)
                    setToastMessage("Enter the data in Email Field!");
                else if (!DOB)
                    setToastMessage("Enter the data in Date of Birth!");
                else if (!tel)
                    setToastMessage("Enter the contact number!");
                setIsError(true);
                setShowToast(true);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <div style={{ 'display': 'flex', justifyContent: 'space-around', alignItems: 'center', width: '80vw', height: '100vh', margin: 'auto' }}>
            <div>
                <div style={{ 'display': 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={require('../../../assets/img/icon.png')} style={{ 'height': 150 }} />
                </div>
                <br />
                <p style={{ 'textAlign': 'center', fontFamily: 'BlackSwan', fontSize: '2.5em', 'flex': 1, 'flexWrap': 'wrap', 'lineHeight': '1.2em' }}>Certificate Varifier</p>
            </div>
            <FormLayout>
                {/* <TextField requiredIndicator label="User Type" value={name} onChange={setName} suffix={name && <div onClick={() => setName('')}><Icon source={CircleCancelMajor} /></div>} /> */}
                <Select label='User Type' options={[
                    {label:'User',value:USER_TYPE.USER},
                    {label:'Authorizer',value:USER_TYPE.AUTHORIZER},
                    {label:'Organization',value:USER_TYPE.ORGANIZATION},
                    {label:'Admin',value:USER_TYPE.ADMIN},
                ]}
                value={userType}
                onChange={setUserType}
                />
                <TextField requiredIndicator label="Name" value={name} onChange={setName} suffix={name && <div onClick={() => setName('')}><Icon source={CircleCancelMajor} /></div>} />
                <TextField requiredIndicator label="Username" value={username} onChange={setUsername} suffix={username && <div onClick={() => setUsername('')}><Icon source={CircleCancelMajor} /></div>} />
                <TextField requiredIndicator label="Email" type='email' name='email' value={email} onChange={setEmail} suffix={email && <div onClick={() => setEmail('')}><Icon source={CircleCancelMajor} /></div>} />
                <Stack>
                    <Stack.Item fill>
                        <TextField requiredIndicator label="Date of Birth" type='date' name='dob' value={DOB} onChange={setDOB} />
                    </Stack.Item>
                    <Stack.Item fill>
                        <TextField requiredIndicator label="Contact Number" type='tel' name='tel' value={tel} onChange={setTel} suffix={tel && <div onClick={() => setTel('')}><Icon source={CircleCancelMajor} /></div>} />
                    </Stack.Item>
                </Stack>
                <div style={{ 'float': 'right' }}>
                    <Button submit primary loading={loading} onClick={signIn}>Register</Button>
                </div>
                {/* <TextField label="Password" type='password' value={password} onChange={setPassword} suffix={password && <div onClick={() => setPassword('')}><Icon source={CircleCancelMajor} /></div>} /> */}
            </FormLayout>
        </div>
    )
}
