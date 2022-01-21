import React from 'react'
import { Card, DataTable, Heading, Layout, Stack, TextStyle } from '@shopify/polaris'
export default function OrganizationDashboard() {
    const rows = [
        ['Emerald Silk Gown', 2,2, 5, 6],
        ['Mauve Cashmere Scarf', 5,2, 6, 9],
        [
            'Navy Merino Wool Blazer with khaki chinos and yellow belt',2, 9, 6, 3,
        ],
    ];
    return (
        <Layout sectioned>
            <Heading>Organization Dashboard</Heading>
            <Layout sectioned>
                <Layout.Section>
                    <Stack>
                        <Stack.Item fill>
                            <Card title='Authorizers' sectioned ><p style={{ 'fontSize': '2em', 'fontWeight': '600' }}>2</p></Card>
                        </Stack.Item>
                        <Stack.Item fill>
                            <Card title='Users' sectioned  ><p style={{ 'fontSize': '2em', 'fontWeight': '600' }}>2</p></Card>
                        </Stack.Item>
                        <Stack.Item fill>
                            <Card title='Issued Certificates' sectioned  ><p style={{ 'fontSize': '2em', 'fontWeight': '600' }}>2</p></Card>
                        </Stack.Item>
                        <Stack.Item fill>
                            <Card title='Departments' sectioned  ><p style={{ 'fontSize': '2em', 'fontWeight': '600' }}>2</p></Card>
                        </Stack.Item>
                        <Stack.Item fill>
                            <Card title='Certificate Templates' sectioned  ><p style={{ 'fontSize': '2em', 'fontWeight': '600' }}>2</p></Card>
                        </Stack.Item>
                    </Stack>
                </Layout.Section>
            </Layout>
            <Layout sectioned>
                <Layout.Section>
                    <Stack>
                        <Stack.Item fill>
                            <Card title='Top Organizations' sectioned subdued >
                                <DataTable
                                    columnContentTypes={[
                                        'text',
                                        'numeric',
                                        'numeric',
                                        'numeric',
                                        'numeric',
                                    ]}
                                    headings={[
                                        'Name',
                                        'Total Autorizer',
                                        'Total End Users',
                                        'Total Issued Certificates',
                                        'Total Pending Certificates',
                                    ]}
                                    rows={rows}
                                />
                            </Card>
                        </Stack.Item>
                    </Stack>
                </Layout.Section>
            </Layout>
        </Layout>
    )
}
