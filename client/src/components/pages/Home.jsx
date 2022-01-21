import { Frame, Navigation, TopBar } from '@shopify/polaris'
import React, { useState, useCallback } from 'react'
import { NoteMajor, ActivitiesMajor, StoreMajor, PhoneMajor, AnalyticsMajor, PageUpMajor, ProfileMajor, OrdersMajor, HomeMajor } from '@shopify/polaris-icons';
import { Route, Router, Routes } from 'react-router-dom';
import Certificate from './Certificate';
import LogIn from './LogIn';
import SignIn from './SignIn';
import Dashboard from '../nav/Dashboard';

export default function Home() {
    //userMenu
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const toggleIsUserMenuOpen = useCallback(
        () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
        [],
    );
    const userMenuMarkup = (<TopBar.UserMenu
        actions={[
            {
                items: [{ content: 'Profile', icon: ProfileMajor }]
            },
            {
                items: [{ content: 'Achievements', icon: NoteMajor }]
            },
            {
                items: [{ content: 'Features', icon: ActivitiesMajor }]
            },
            {
                items: [{ content: 'Analytics', icon: AnalyticsMajor }]
            },
            {
                items: [{ content: 'About Us' }]
            }
        ]}
        name='mkjodhani'
        detail='Mayur Jodhani'
        initials='M'
        open={isUserMenuOpen}
        onToggle={toggleIsUserMenuOpen}
    />)
    const topBarMarkup = (<TopBar
        showNavigationToggle
        userMenu={userMenuMarkup} />)
    const navigationMarkup = (
        <Navigation location="/">
            <Navigation.Section
                items={[
                    {
                        url: '/dashboard',
                        label: 'Dashboard',
                        icon: HomeMajor,
                        selected: true
                    },
                    {
                        url: '/certificates',
                        label: 'Certificates',
                        icon: NoteMajor,
                    },
                    {
                        url: '/requests',
                        label: 'Requests',
                        icon: PageUpMajor,
                    },
                ]}
            />
            <Navigation.Section
                title="Features"
                items={[
                    {
                        url: '/analytics',
                        label: 'Analytics',
                        icon: AnalyticsMajor,
                    },
                ]}
            />

            <Navigation.Section
                title="Other"
                items={[
                    {
                        url: '/aboutus',
                        label: 'About Us',
                        icon: StoreMajor,
                    },
                    {
                        url: '/aboutus',
                        label: 'Contact Us',
                        icon: PhoneMajor,
                    },
                ]}
            />
        </Navigation>
    )
    return (
        <Frame
            topBar={topBarMarkup}
            navigation={navigationMarkup}>
                <Routes>
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route path="/certificates" element={<Certificate />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
        </Frame>
    )
}
