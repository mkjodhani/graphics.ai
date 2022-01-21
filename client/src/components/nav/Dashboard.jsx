import { Card, EmptyState, Layout, MediaCard, Page, VideoThumbnail } from '@shopify/polaris'
import React, { Suspense } from 'react'
import { USER_TYPE_ADMIN, USER_TYPE_AUTHORIZER, USER_TYPE_ENDUSER, USER_TYPE_ORGANIZATION } from '../../scripts/constants';
import AdminDashboard from '../elements/frames/admin/AdminDashboard';
import AuthorizerDashboard from '../elements/frames/authorizer/AuthorizerDashboard';
import OrganizationDashboard from '../elements/frames/organization/OrganizationDashboard';
import UserDashboard from '../elements/frames/user/UserDashboard';
import Skeleton from '../elements/supplementary/Skeleton';
export default function Dashboard() {
    // const userRole = useSelector(state => state.userRole)
    const userRole = 1;
    return (
        <Page>
            <Suspense fallback={<Skeleton/>}>
                {userRole === USER_TYPE_ADMIN && <AdminDashboard/> }
                {userRole === USER_TYPE_ORGANIZATION && <OrganizationDashboard/> }
                {userRole === USER_TYPE_AUTHORIZER && <AuthorizerDashboard/> }
                {userRole === USER_TYPE_ENDUSER && <UserDashboard/> }
            </Suspense>
        </Page>
    )
}
