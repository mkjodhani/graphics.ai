import React, { useState } from 'react'
import { Button, Form, FormLayout, Frame, Heading, Page, TextField, Toast } from '@shopify/polaris'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { SITE_NAME } from '../../../scripts/constants';
import { useSelector } from 'react-redux';

export default function LogIn() {
    const userInfo = useSelector(state => state.user)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [isError, setIsError] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    const onClickLogInButton = () => {
        if (userInfo.userID) {
            navigate(`${userInfo.userType}/${userInfo.userID}`);
        }
        else {
            navigate(`/login`);
        }
    }
    const login = async (event) => {
        setLoading(true);
        try {
            if (username && password) {
                const user = {
                    username, password
                }
                const formData = new FormData();
                formData.append("user", JSON.stringify(user));
                const res = await axios.post("api/user/login", formData);
                if (res.data.status === 200) {
                    setToken(res.data.token);
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
                if (!username)
                    setToastMessage("Enter the username!");
                else if (!password)
                    setToastMessage("Enter the password!");
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
            <header style={{ 'top': 0, 'height': '70px', 'position': 'fixed',  'width': '100%', 'zIndex': 50 }}>
                <div style={{ 'width': '100%', 'display': 'flex', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
                    <div style={{ 'padding': '5px', 'display': 'flex', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
                        <img src={require('../../../assets/img/icon.png')} style={{ 'height': '60px' }} />
                        <h1 style={{ 'fontFamily': 'BlackSwan', 'fontSize': '2em' }}>{SITE_NAME}</h1>
                    </div>
                    <div style={{ 'padding': '5px' }}>
                        {userInfo.userID && <button style={{ 'border': 'none', 'backgroundColor': 'transparent', margin: '5px', 'fontSize': '1.1em', 'lineHeight': '1.5em' }}>USER PANEL</button>}
                        <button style={{ 'border': 'none', 'backgroundColor': 'transparent', margin: '10px', 'fontSize': '1.8em', 'lineHeight': '1.5em', 'fontFamily': 'BlackSwan' }} onClick={onClickLogInButton}>{userInfo.userID ? "USER_NAME" : "Log In"}</button>
                    </div>
                </div>
            </header>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100vw', height: '100vh', flexDirection: 'column' }}>

                <Form onSubmit={login}>
                    <div style={{ 'display': 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={require('../../../assets/img/icon.png')} style={{ 'height': 150 }} />
                    </div>
                    <br />
                    <p style={{ 'textAlign': 'center', fontFamily: 'BlackSwan', fontSize: '2.5em', 'flex': 1, 'flexWrap': 'wrap' }}>Certificate Varifier</p>
                    <br />
                    <FormLayout>
                        <TextField label="Username" value={username} onChange={setUsername} />
                        <TextField label="Password" type='password' value={password} onChange={setPassword} />
                        <div style={{ 'float': 'right' }}>
                            <Button primary submit>Log In</Button>
                        </div>
                    </FormLayout>
                </Form>
                <p>Not registered yet? <Link to={"/register"} >Create an Account</Link></p>
            </div>
            <div style={{ 'position': 'absolute' }}>
                <Frame>
                    {showToast && <Toast content={toastMessage} onDismiss={() => setShowToast(false)} />}
                </Frame>
            </div>
        </>
    )
}
