import { Navigation, Page } from '@shopify/polaris'
import React, { useEffect } from 'react'
import { HomeMajor, ProfileMajor, ProductsMajor, CircleTickMajor } from '@shopify/polaris-icons';
const listItems = {
    'user': [
        {
            url: '/',
            label: 'Dashboard',
            icon: HomeMajor,
        },
        {
            url: '/certificate',
            label: 'Certificates',
            icon: CircleTickMajor,
            badge: '15',
        },
        {
            url: '/requests',
            label: 'Requests',
            icon: ProductsMajor,
        },
        {
            url: '/profile',
            label: 'Profile',
            icon: ProfileMajor,
        },
    ]
}
export default function PageLayout(props) {
    return (
        <Page>
            <Navigation location="/">
                <Navigation.Section
                    items={listItems['user']}
                />
                <Navigation.Item>
                    {
                        props.children
                    }
                </Navigation.Item>
            </Navigation>
        </Page>
    )
}
