import React from 'react';
import { useSelector } from 'react-redux';
import { SITE_NAME } from '../../../scripts/constants';

export default function PageHeader() {
  const userInfo  = useSelector(state => state.user);
  return <header style={{ 'top': 0, 'height': '70px', 'position': 'fixed', 'backgroundColor': 'white', 'width': '100%' }}>
    <div style={{ 'width': '100%', 'display': 'flex', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
      <div style={{ 'padding': '5px', 'display': 'flex', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
        <img src={require('../../../assets/img/icon.png')} style={{ 'height': '60px' }} />
        <h1 style={{ 'fontFamily': 'BlackSwan', 'fontSize': '2em' }}>{SITE_NAME}</h1>
      </div>
      <div style={{ 'padding': '5px' }}>
        {userInfo.userID && <button style={{ 'border': 'none', 'backgroundColor': 'transparent', margin: '5px', 'fontSize': '1.1em', 'lineHeight': '1.5em' }}>USER PANEL</button>}
        <button style={{ 'border': 'none', 'backgroundColor': 'transparent', margin: '10px', 'fontSize': '1.8em', 'lineHeight': '1.5em', 'fontFamily': 'BlackSwan' }}>{userInfo.userID ? "USER_NAME" : "Log In"}</button>
      </div>
    </div>
  </header>;
}
