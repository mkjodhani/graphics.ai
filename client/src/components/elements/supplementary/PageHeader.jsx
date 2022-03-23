import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SITE_NAME, WEB_LOGO_PUBLIC_URL } from '../../../scripts/constants';

export default function PageHeader() {
  const userInfo  = useSelector(state => state.user);
  const navigate = useNavigate();
  return <header style={{ 'top': 0, 'height': '70px', 'position': 'sticky', 'backgroundColor': 'white', 'width': '100%' }}>
    <div style={{ 'width': '100%', 'display': 'flex', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
      <div style={{ 'padding': '5px', 'display': 'flex', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
        <img src={WEB_LOGO_PUBLIC_URL} style={{ 'height': '60px' }} onClick={() => navigate('/')}/>
      </div>
      <div style={{ 'padding': '5px' }}>
        <h1 style={{ 'fontFamily': 'BlackSwan', 'fontSize': '2em','marginRight':'20px' }}>{SITE_NAME}</h1>
        {userInfo.userID && <button style={{ 'border': 'none', 'backgroundColor': 'transparent', margin: '5px', 'fontSize': '1.1em', 'lineHeight': '1.5em' }}>USER PANEL</button>}
        {/* <button style={{ 'border': 'none', 'backgroundColor': 'transparent', margin: '10px', 'fontSize': '1.8em', 'lineHeight': '1.5em', 'fontFamily': 'BlackSwan' }}>{userInfo.userID ? "USER_NAME" : "Log In"}</button> */}
      </div>
    </div>
  </header>;
}
