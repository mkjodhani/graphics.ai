import { Page } from '@shopify/polaris'
import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom';
import { USER_TYPE } from '../../scripts/constants';
import AdminDashboard from '../elements/frames/admin/AdminDashboard';
import AuthorizerDashboard from '../elements/frames/authorizer/AuthorizerDashboard';
import OrganizationDashboard from '../elements/frames/organization/OrganizationDashboard';
import UserDashboard from '../elements/frames/user/UserDashboard';
import Skeleton from '../elements/supplementary/Skeleton';
export default function Dashboard() {
    const { userType } = useParams();
    return (
        <Page>
            <div style={{'paddingTop':'50px'}}>
            <Suspense fallback={<Skeleton />}>
                {userType === USER_TYPE.ADMIN && <AdminDashboard />}
                {userType === USER_TYPE.ORGANIZATION && <OrganizationDashboard />}
                {userType === USER_TYPE.AUTHORIZER && <AuthorizerDashboard />}
                {userType === USER_TYPE.USER && <UserDashboard />}
            </Suspense>
            </div>
        </Page>
    )
}
