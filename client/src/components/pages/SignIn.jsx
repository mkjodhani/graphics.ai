import React, { useState } from 'react'
import { Button, Form, FormLayout, Frame, Icon, Page, Stack, TextField, Toast } from '@shopify/polaris'
import { CircleCancelMajor } from '@shopify/polaris-icons';
import axios from 'axios';
export default function SignIn() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
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
        if (name && username && email && DOB && tel) {
            // const formData = new FormData();
            // formData.append("name",name);
            // formData.append("username",username);
            // formData.append("email",email);
            // formData.append("dob",DOB);
            // formData.append("tel",tel);
            // const res = await axios.post("/api/signin",formData);
            alert("USER SIGN UP API CALL");
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
    }
    return (
        <Frame>
            <Page>
                <Form onSubmit={signIn}>
                    <FormLayout>
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
                        {/* <TextField label="Password" type='password' value={password} onChange={setPassword} suffix={password && <div onClick={() => setPassword('')}><Icon source={CircleCancelMajor} /></div>} /> */}
                        <Button submit loading={loading}>Sign In</Button>
                    </FormLayout>
                </Form>
            </Page>
            {
                showToast && <Toast error={isError} content={toastMessage} onDismiss={() => setShowToast(false)} />
            }
        </Frame>
    )
}
