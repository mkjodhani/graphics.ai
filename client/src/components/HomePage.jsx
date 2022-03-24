import { Card, MediaCard } from '@shopify/polaris';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import SimpleImageSlider from 'react-simple-image-slider';
// import { SITE_NAME } from '../scripts/constants';
import PageHeader from './elements/supplementary/PageHeader';

export default function HomePage() {
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
        <PageHeader />
        <iframe src="https://threejs.org/examples/#webgl_animation_skinning_blending" title="description" style={{
            'width': '100%',
            'height': '90vh'
        }}></iframe>
        <div style={{ 'marginTop': '70px' }}>
            {/* <SimpleImageSlider
                width="100%"
                height={600}
                images={images}
                showBullets={true}
                showNavs={true}
            /> */}
            {/* <img src={require('../assets/img/slides/1.jpg')} style={{ 'width': '100%' }} /> */}
        </div>
        <div style={{ 'width': '80%', textAlign: 'center', margin: '5% auto', justifyContent: 'center' }}>
            <p style={{ 'fontSize': '2em', 'fontWeight': 'bold', 'lineHeight': '1.5em' }}>Free online photo editor for everyone</p>
            <p style={{ 'fontSize': '1.1em', 'lineHeight': '1.5em' }}>Free to edit photos with our photo editor in just a few clicks. It covers all online photo editing tools, so you can crop images, resize images, add text to photos, even make photo collages, and create graphic designs easily. </p>
        </div>
        {/* <img src={require('../assets/img/slides/3.jpg')} style={{ 'width': '100%' }} /> */}
        <div style={{ 'width': '100%', 'display': 'flex', 'display': 'flex' }}>
            <div style={{ 'width': '45%', margin: '2.5%' }}>
                {/* <img src={require('../assets/img/other/social-media-g42deccded_1920.jpg')} style={{ 'width': '100%' }} /> */}
            </div>
            <div style={{ 'width': '45%', margin: '2.5%', justifyContent: 'center', 'alignItems': 'center', 'display': 'flex', 'display': 'flex' }}>
                <p style={{ 'textAlign': 'center' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum atque sed a totam minima reprehenderit in porro similique dolores, consequuntur saepe iusto officiis quod fugiat adipisci, iste quas aperiam. Ratione.</p>
            </div>
        </div>
        <div style={{ 'width': '80%', textAlign: 'center', margin: '5% auto', justifyContent: 'center' }}>
            <p style={{ 'fontSize': '2em', 'fontWeight': 'bold', 'lineHeight': '1.5em' }}>Popular features of online photo editor</p>
            <p style={{ 'fontSize': '1.1em', 'lineHeight': '1.5em' }}>Our online photo editor comes packed with tons of great tools to help you perfect your photos. You can enhance photos, retouch portraits, remove backgrounds, and apply effects. Take a look at some of our most popular photo editing features. </p>
        </div>
        <div style={{ 'width': '100%', 'display': 'flex', 'display': 'flex' }}>
            <div style={{ 'width': '45%', margin: '2.5%', justifyContent: 'center', 'alignItems': 'center', 'display': 'flex', 'display': 'flex' }}>
                <p style={{ 'textAlign': 'center' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum atque sed a totam minima reprehenderit in porro similique dolores, consequuntur saepe iusto officiis quod fugiat adipisci, iste quas aperiam. Ratione.</p>
            </div>
            <div style={{ 'width': '45%', margin: '2.5%' }}>
                {/* <img src={require('../assets/img/other/online-g2dd0e4bde_1920.jpg')} style={{ 'width': '100%' }} /> */}
            </div>
        </div>

        <div style={{ 'width': '100%', 'display': 'flex', 'display': 'flex' }}>

            <div style={{ 'width': '45%', margin: '2.5%' }}>
                {/* <img src={require('../assets/img/other/online-g6806177d0_1920.jpg')} style={{ 'width': '100%' }} /> */}
            </div>

            <div style={{ 'width': '45%', margin: '2.5%', justifyContent: 'center', 'alignItems': 'center', 'display': 'flex', 'display': 'flex' }}>
                <p style={{ 'textAlign': 'center' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum atque sed a totam minima reprehenderit in porro similique dolores, consequuntur saepe iusto officiis quod fugiat adipisci, iste quas aperiam. Ratione.</p>
            </div>
        </div>
        <div style={{ 'margin': '100px' }}>
            <h1 style={{ 'textAlign': 'center', 'fontSize': '3em' }}>Features</h1>
        </div>
        <div style={{ 'width': '100%', 'display': 'flex', 'display': 'flex', 'justifyContent': 'space-evenly', 'alignItems': 'center', 'flexWrap': 'wrap' }}>
            <div style={{ 'width': '30%', padding: '10px' }} onClick={() => navigate('/editor')}>
                <MediaCard
                    title="Image Editor"
                    portrait={true}
                    description="Free to edit photos with our photo editor in just a few clicks."
                >
                    <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        src="/images/features/imageEditor.jpg"
                    />
                </MediaCard>
            </div>


            <div style={{ 'width': '30%', padding: '10px' }} onClick={() => navigate("/visulizer/index.htm")}>
                <MediaCard
                    title="Music Visulizer"
                    portrait={true}
                    description="Effective music visualization aims to attain a high degree of visual correlation between a musical track's spectral characteristics such as frequency and amplitude and the objects or components of the visual image being rendered and displayed. "
                >
                    <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        src="/images/features/musicVisulizer.png"
                    />
                </MediaCard>
            </div>
            <div style={{ 'width': '30%', padding: '10px' }}>
                <MediaCard
                    title="Image Editor"
                    portrait={true}
                    description="Free to edit photos with our photo editor in just a few clicks."
                >
                    <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                    />
                </MediaCard>
            </div>
            <div style={{ 'width': '30%', padding: '10px' }} onClick={() => navigate("/Home")}>
                <MediaCard
                    title="Image Converter"
                    portrait={true}
                    description="Convert PNG and JPG images into SVG images and edit with live rendering."
                >
                    <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        src="/images/features/feature4.jpg"
                    />
                </MediaCard>
            </div>
            <div style={{ 'width': '30%', padding: '10px' }}>
                <MediaCard
                    title="3D Object Modeling"
                    portrait={true}
                    description="Create different material and  3D object which can also used by Blender or viseversa."
                >
                    <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        src="/images/features/model2.jpg"
                    />
                </MediaCard>
            </div>


        </div>
    </div>;
}
