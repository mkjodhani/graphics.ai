import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';
import { SITE_NAME } from '../scripts/constants';

const images = [
    { url: "../assets/img/slides/1.jpg" },
    { url: "../assets/img/slides/2.jpg" },
    { url: "../assets/img/slides/3.jpg" },
    { url: "../assets/img/slides/4.jpg" },
    { url: "../assets/img/slides/5.jpg" },
];
export default function Index() {
    const userInfo = useSelector(state => state.user)
    const navigate = useNavigate();
    const onClickLogInButton = () => {
        if (userInfo.userID) {
            navigate(`${userInfo.userType}/${userInfo.userID}`);
        }
        else {
            navigate(`/login`);
        }
    }
    return <div style={{ 'position': 'relative', 'backgroundColor': 'white' }}>
        <header style={{ 'top': 0, 'height': '70px', 'position': 'fixed', 'backgroundColor': 'white', 'width': '100%', 'zIndex': 50 }}>
            <div style={{ 'width': '100%', 'display': 'flex', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
                <div style={{ 'padding': '5px', 'display': 'flex', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
                    <img src={require('../assets/img/icon.png')} style={{ 'height': '60px' }} />
                    <h1 style={{ 'fontFamily': 'BlackSwan', 'fontSize': '2em' }}>{SITE_NAME}</h1>
                </div>
                <div style={{ 'padding': '5px' }}>
                    {userInfo.userID && <button style={{ 'border': 'none', 'backgroundColor': 'transparent', margin: '5px', 'fontSize': '1.1em', 'lineHeight': '1.5em' }}>USER PANEL</button>}
                    <button style={{ 'border': 'none', 'backgroundColor': 'transparent', margin: '10px', 'fontSize': '1.8em', 'lineHeight': '1.5em', 'fontFamily': 'BlackSwan' }} onClick={onClickLogInButton}>{userInfo.userID ? "USER_NAME" : "Log In"}</button>
                </div>
            </div>
        </header>
        <div style={{ 'marginTop': '70px' }}>
            <SimpleImageSlider
                width="100%"
                height={600}
                images={images}
                showBullets={true}
                showNavs={true}
            />
            {/* <img src={require('../assets/img/slides/1.jpg')} style={{ 'width': '100%' }} /> */}
        </div>
        <div style={{ 'width': '80%', textAlign: 'center', margin: '10% auto', justifyContent: 'center' }}>
            <p style={{ 'fontSize': '1.1em', 'lineHeight': '1.5em' }}>Blockchain technology significantly contributes to the verification process of academic qualifications since, by design, is resistant to modification of the data it holds. Blockchain is an open, distributed ledger that can record transactions of a community efficiently and in a verifiable and permanent way.</p>
        </div>
        <img src={require('../assets/img/slides/3.jpg')} style={{ 'width': '100%' }} />
        <div style={{ 'width': '100%', 'display': 'flex', 'display': 'flex' }}>
            <div style={{ 'width': '45%', margin: '2.5%' }}>
                <img src={require('../assets/img/other/social-media-g42deccded_1920.jpg')} style={{ 'width': '100%' }} />
            </div>
            <div style={{ 'width': '45%', margin: '2.5%', justifyContent: 'center', 'alignItems': 'center', 'display': 'flex', 'display': 'flex' }}>
                <p style={{ 'textAlign': 'center' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum atque sed a totam minima reprehenderit in porro similique dolores, consequuntur saepe iusto officiis quod fugiat adipisci, iste quas aperiam. Ratione.</p>
            </div>
        </div>
        <div style={{ 'width': '100%', 'display': 'flex', 'display': 'flex' }}>
            <div style={{ 'width': '45%', margin: '2.5%', justifyContent: 'center', 'alignItems': 'center', 'display': 'flex', 'display': 'flex' }}>
                <p style={{ 'textAlign': 'center' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum atque sed a totam minima reprehenderit in porro similique dolores, consequuntur saepe iusto officiis quod fugiat adipisci, iste quas aperiam. Ratione.</p>
            </div>
            <div style={{ 'width': '45%', margin: '2.5%' }}>
                <img src={require('../assets/img/other/online-g2dd0e4bde_1920.jpg')} style={{ 'width': '100%' }} />
            </div>
        </div>
        <div style={{ 'width': '100%', 'display': 'flex', 'display': 'flex' }}>

            <div style={{ 'width': '45%', margin: '2.5%' }}>
                <img src={require('../assets/img/other/online-g6806177d0_1920.jpg')} style={{ 'width': '100%' }} />
            </div>

            <div style={{ 'width': '45%', margin: '2.5%', justifyContent: 'center', 'alignItems': 'center', 'display': 'flex', 'display': 'flex' }}>
                <p style={{ 'textAlign': 'center' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum atque sed a totam minima reprehenderit in porro similique dolores, consequuntur saepe iusto officiis quod fugiat adipisci, iste quas aperiam. Ratione.</p>
            </div>
        </div>

        <div style={{ 'position': 'relative', backgroundColor: 'thistle' }}>
            <div style={{ 'position': 'absolute', bottom: 0, 'zIndex': 5, color: 'white', 'width': '100%' }}>
                <footer style={{ 'display': 'flex', 'display': 'flex', 'padding': '2.5%', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
                    <div style={{ 'width': '25%' }}>
                        <img src={require('../assets/img/icon.png')} style={{ 'width': '50%' }} />
                    </div>
                    <div style={{ 'width': '75%', 'display': 'flex', 'display': 'flex', 'justifyContent': 'space-evenly', 'alignItems': 'center' }}>
                        <div>
                            <h1 style={{ 'fontWeight': '600' }}>SERVICES</h1>
                            <p>Certificate Editor</p>
                            <p>Certificate Validation</p>
                            <p>Certificate Verification</p>
                            <p>Certificate Distribution</p>
                        </div>
                        <div>
                            <h1>SERVICES</h1>
                            <p>Certificate Verification</p>
                            <p>Certificate Verification</p>
                            <p>Certificate Verification</p>
                            <p>Certificate Verification</p>
                        </div>
                        <div>
                            <h1>SERVICES</h1>
                            <p>Certificate Verification</p>
                            <p>Certificate Verification</p>
                            <p>Certificate Verification</p>
                            <p>Certificate Verification</p>
                        </div>
                    </div>
                </footer>
            </div>
            <div>
                <img src={require('../assets/img/other/graduation-g24082fd5b_1920.jpg')} style={{ 'width': '100%', 'bottom': 0, position: 'relative', 'zIndex': 1 }} />
            </div>
        </div>
    </div>;
}
