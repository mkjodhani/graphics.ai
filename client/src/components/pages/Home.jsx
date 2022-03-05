import { Frame, Navigation, TopBar } from '@shopify/polaris'
import React, { useState, useCallback } from 'react'
import { NoteMajor, StoreMajor, PhoneMajor, AnalyticsMajor, PageUpMajor, ProfileMajor, LogOutMinor, HomeMajor ,OrdersMajor} from '@shopify/polaris-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import Routes_ from '../Routes';
import { useSelector } from 'react-redux';
import { USER_TYPE } from '../../scripts/constants';

export default function UserHome() {
    //userMenu
    const location = useLocation();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    if(!user.userID)
    navigate("/login");
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [showMobileNavigation, setShowMobileNavigation] = useState(true);
    
    const toggleIsUserMenuOpen = useCallback(
        () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
        [],
    );
    const userMenuMarkup = (<TopBar.UserMenu
        actions={[
            {
                items: [{ content: 'Profile', icon: ProfileMajor, onAction: () => navigate('profile') }]
            },
            {
                items: [{ content: 'Log out', icon: LogOutMinor, onAction: () => navigate('logout') }]
            }
        ]}
        name='mkjodhani'
        detail='Mayur Jodhani'
        initials='M'
        open={isUserMenuOpen}
        onToggle={toggleIsUserMenuOpen}
    />)
    const topBarMarkup = (<TopBar
        showNavigationToggle={true}
        onNavigationToggle={() => setShowMobileNavigation(true)}
        userMenu={userMenuMarkup}
    />)

    const navigationMarkups = {
        'admin': <Navigation location="/admin/dashboard">
            <Navigation.Section
                title='Admin Panel'
                items={[
                    {
                        label: 'Dashboard',
                        icon: HomeMajor,
                        exactMatch: true,
                        selected: location.pathname.trim() === "/admin/dashboard",
                        onClick: () => navigate("/certified/admin/dashboard")
                    },
                    {
                        label: 'Issues',
                        icon: NoteMajor,
                        selected: location.pathname.trim() === "/admin/issues",
                        onClick: () => navigate("/certified/admin/issues")
                    }
                ]}
            />
            <Navigation.Section
                title="Features"
                items={[
                    {
                        label: 'Analytics',
                        icon: AnalyticsMajor,
                        selected: location.pathname.trim() === "/admin/analytics",
                        onClick: () => navigate('/admin/analytics')
                    },
                    {
                        label: 'Inbox',
                        icon: OrdersMajor,
                        selected: location.pathname.trim() === "/admin/inbox",
                        onClick: () => navigate('/admin/inbox')
                    }
                ]}
            />

            <Navigation.Section
                title="Other"
                items={[
                    {
                        label: 'About Us',
                        icon: StoreMajor,
                        selected: location.pathname.trim() === "/aboutus",
                        onClick: () => navigate('aboutus')
                    },
                    {
                        label: 'Contact Us',
                        icon: PhoneMajor,
                        selected: location.pathname.trim() === "/contactus",
                        onClick: () => navigate('contactus')
                    },
                ]}
            />
        </Navigation>,
        'organization': <Navigation location="/organization/dashboard">
            <Navigation.Section
                title='Organization'
                items={[
                    {
                        label: 'Dashboard',
                        icon: HomeMajor,
                        exactMatch: true,
                        selected: location.pathname.trim() === "/organization/dashboard",
                        onClick: () => navigate("/certified/organization/dashboard")
                    },
                    {
                        label: 'Departments',
                        icon: NoteMajor,
                        selected: location.pathname.trim() === "/organization/departments",
                        onClick: () => navigate('/organization/departments')
                    },
                    {
                        label: 'Requests',
                        icon: PageUpMajor,
                        selected: location.pathname.trim() === "/organization/requests",
                        onClick: () => navigate('/organization/requests')
                    },
                ]}
            />
            <Navigation.Section
                title="Features"
                items={[
                    {
                        label: 'Analytics',
                        icon: AnalyticsMajor,
                        selected: location.pathname.trim() === "/organization/analytics",
                        onClick: () => navigate('/organization/analytics')
                    },
                    {
                        label: 'Inbox',
                        icon: OrdersMajor,
                        selected: location.pathname.trim() === "/organization/inbox",
                        onClick: () => navigate('/organization/inbox')
                    },
                ]}
            />
            <Navigation.Section
                title="Other"
                items={[
                    {
                        label: 'About Us',
                        icon: StoreMajor,
                        selected: location.pathname.trim() === "/aboutus",
                        onClick: () => navigate('aboutus')
                    },
                    {
                        label: 'Contact Us',
                        icon: PhoneMajor,
                        selected: location.pathname.trim() === "/contactus",
                        onClick: () => navigate('contactus')
                    },
                ]}
            />
        </Navigation>,
        'authorizer': <Navigation location="/authorizer/dashboard">
            <Navigation.Section
                items={[
                    {
                        label: 'Dashboard',
                        icon: HomeMajor,
                        exactMatch: true,
                        selected: location.pathname.trim() === "/authorizer/dashboard",
                        onClick: () => navigate("/certified/authorizer/dashboard")
                    },
                    {
                        label: 'Requests',
                        icon: PageUpMajor,
                        selected: location.pathname.trim() === "/authorizer/requests",
                        onClick: () => navigate('/authorizer/requests')
                    },
                ]}
            />
            <Navigation.Section
                title="Features"
                items={[
                    {
                        label: 'Analytics',
                        icon: AnalyticsMajor,
                        selected: location.pathname.trim() === "/authorizer/analytics",
                        onClick: () => navigate('/authorizer/analytics')
                    },
                    {
                        label: 'Inbox',
                        icon: OrdersMajor,
                        selected: location.pathname.trim() === "/authorizer/inbox",
                        onClick: () => navigate('/authorizer/inbox')
                    }
                ]}
            />

            <Navigation.Section
                title="Other"
                items={[
                    {
                        label: 'About Us',
                        icon: StoreMajor,
                        selected: location.pathname.trim() === "/aboutus",
                        onClick: () => navigate('aboutus')
                    },
                    {
                        label: 'Contact Us',
                        icon: PhoneMajor,
                        selected: location.pathname.trim() === "/contactus",
                        onClick: () => navigate('contactus')
                    },
                ]}
            />
        </Navigation>,
        'user': <Navigation location="/user/dashboard">
            <Navigation.Section
                items={[
                    {
                        label: 'Dashboard',
                        icon: HomeMajor,
                        exactMatch: true,
                        selected: location.pathname.trim() === "/user/dashboard",
                        onClick: () => navigate("/certified/user/dashboard")
                    },
                    {
                        label: 'Certificates',
                        icon: NoteMajor,
                        selected: location.pathname.trim() === "/user/certificates",
                        onClick: () => navigate('/user/certificates')
                    },
                    {
                        label: 'Requests',
                        icon: PageUpMajor,
                        selected: location.pathname.trim() === "/user/requests",
                        onClick: () => navigate('/user/requests')
                    },
                ]}
            />
            <Navigation.Section
                title="Features"
                items={[
                    {
                        label: 'Analytics',
                        icon: AnalyticsMajor,
                        selected: location.pathname.trim() === "/user/analytics",
                        onClick: () => navigate('/user/analytics')
                    },
                    {
                        label: 'Inbox',
                        icon: OrdersMajor,
                        selected: location.pathname.trim() === "/user/inbox",
                        onClick: () => navigate('/user/inbox')
                    },
                ]}
            />

            <Navigation.Section
                title="Other"
                items={[
                    {
                        label: 'About Us',
                        icon: StoreMajor,
                        selected: location.pathname.trim() === "/aboutus",
                        onClick: () => navigate('aboutus')
                    },
                    {
                        label: 'Contact Us',
                        icon: PhoneMajor,
                        selected: location.pathname.trim() === "/contactus",
                        onClick: () => navigate('contactus')
                    },
                ]}
            />
        </Navigation>
    }
    return (
        <Frame
            topBar={topBarMarkup}//{user.userID ? topBarMarkup:null}
            showMobileNavigation={true}//{user.userID ? showMobileNavigation:false}
            onNavigationDismiss={() => setShowMobileNavigation(false)}
            navigation= {navigationMarkups[USER_TYPE.ADMIN]}//{navigationMarkups[user?.userType]}
            >
            <Routes_/>
        </Frame>
    )
}
