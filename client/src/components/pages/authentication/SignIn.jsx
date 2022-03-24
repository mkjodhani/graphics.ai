import React, { useState } from 'react'
import { Button, Form, FormLayout, Frame, Icon, Page, Select, Stack, TextField, Toast } from '@shopify/polaris'
import { CircleCancelMajor } from '@shopify/polaris-icons';
import axios from 'axios';
import { SITE_NAME, USER_TYPE, WEB_LOGO_PUBLIC_URL } from '../../../scripts/constants';
import { Link } from 'react-router-dom';
export default function SignIn() {
    const [displayName, setDisplayName] = useState('');
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
    const register = async (event) => {
        setLoading(true);
        try {
            if (displayName && username && email && DOB && tel && userType) {
                const user = {
                    displayName, username, email, DOB, tel, userType
                }
                const formData = new FormData();
                formData.append("user", JSON.stringify(user));
                const res = await axios.post("api/user/register", formData);
                if (res.data.status === 200) {
                    setToastMessage("User registration successful!");
                    setIsError(false);
                    setShowToast(true);
                }
                else {
                    setToastMessage(res.data.message);
                    setIsError(false);
                    setShowToast(true);
                }
            }
            else {
                if (!displayName)
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
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <>
            <div style={{ 'display': 'flex', justifyContent: 'space-around', alignItems: 'center', width: '80vw', height: '100vh', margin: 'auto' }}>
                <div>
                    <div style={{ 'display': 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={WEB_LOGO_PUBLIC_URL} style={{ 'height': 150 }} />
                    </div>
                    <br />
                    <p style={{ 'textAlign': 'center', fontFamily: 'BlackSwan', fontSize: '2.5em', 'flex': 1, 'flexWrap': 'wrap', 'lineHeight': '1.2em' }}>{SITE_NAME}</p>
                </div>
                <FormLayout>
                    {/* <TextField requiredIndicator label="User Type" value={name} onChange={setDisplayName} suffix={name && <div onClick={() => setDisplayName('')}><Icon source={CircleCancelMajor} /></div>} /> */}
                    <Select label='User Type' options={[
                        { label: 'User', value: USER_TYPE.USER },
                        { label: 'Authorizer', value: USER_TYPE.AUTHORIZER },
                        { label: 'Organization', value: USER_TYPE.ORGANIZATION },
                        { label: 'Admin', value: USER_TYPE.ADMIN },
                    ]}
                        value={userType}
                        onChange={setUserType}
                    />
                    <TextField requiredIndicator label="Name" value={displayName} onChange={setDisplayName} suffix={displayName && <div onClick={() => setDisplayName('')}><Icon source={CircleCancelMajor} /></div>} />
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
                        <Button submit primary loading={loading} onClick={register}>Register</Button>

                    </div>
                    <div style={{ 'textAlign': 'center' }}>
                        <br /><br /><br />
                        <p>Already have an Account?     <Link to={"/login"} >Sign in</Link></p>
                    </div>
                </FormLayout>
            </div>

            <div style={{ 'position': 'absolute' }}>
                <Frame>
                    {showToast && <Toast content={toastMessage} onDismiss={() => setShowToast(false)} />}
                </Frame>
            </div>
        </>
    )
}
