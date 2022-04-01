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
    // const onClickLogInButton = () => {
    //     if (userInfo.userID) {
    //         navigate(`${userInfo.userType}/${userInfo.userID}`);
    //     }
    //     else {
    //         navigate(`/login`);
    //     }
    // }
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
            <div style={{ 'width': '30%', padding: '10px' }} onClick={() => navigate("/image-blur")}>
                <MediaCard
                    title="Image Blur"
                    portrait={true}
                    description="Make the Image blur using latest tools..."
                >
                    <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        src="data:image/jpeg;base64,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"
                    />
                </MediaCard>
            </div>
            <div style={{ 'width': '30%', padding: '10px' }} onClick={() => navigate("/image-tranform")}>
                <MediaCard
                    title="Background Image Converter"
                    portrait={true}
                    description="Replace the baclground image using openGL tool."
                >
                    <img
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        src="data:image/jpeg;base64,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"
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
