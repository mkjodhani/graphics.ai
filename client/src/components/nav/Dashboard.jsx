import { Card, EmptyState, Layout, MediaCard, Page, VideoThumbnail } from '@shopify/polaris'
import React, { Suspense } from 'react'
const organizationData = [{
    name: "VGEC",
    id:1
}]
const role = "systemAdmin";
// const role = "organizationAdmin";
export default function Dashboard() {
    return (
        <Page>
            <Suspense fallback={<p>Loading...</p>}>
                <Card sectioned title="Organizations">
                    {
                        organizationData.length === 0 && <EmptyState
                            heading="Manage Organizations"
                            action={{ content: 'Add Organization' }}
                            secondaryAction={{ content: 'Learn more', url: '#' }}
                            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                        >
                            <p>Track and manage organizations for better security.</p>
                        </EmptyState>
                    }
                </Card>
            </Suspense>
        </Page>
    )
}
