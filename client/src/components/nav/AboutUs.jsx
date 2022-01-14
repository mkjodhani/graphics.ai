import React from 'react'
import { Card, Layout, MediaCard, VideoThumbnail } from '@shopify/polaris'
export default function AboutUs() {
    return <Card sectioned title="Other Projects">
        <Layout>
            <Layout.Section oneThird>
                <MediaCard
                    size='small'
                    portrait
                    title="Gossip : Chat App using Java Technologies"
                    primaryAction={{
                        content: 'Learn more',
                        onAction: () => { window.open("https://github.com/mkjodhani/Chat-App") },
                    }}
                    description="In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business."
                >
                    <VideoThumbnail
                        onClick={() => window.open("https://youtu.be/jeikvlhgctI")}
                        videoLength={80}
                        thumbnailUrl="https://img.youtube.com/vi/jeikvlhgctI/maxresdefault.jpg"
                    />
                </MediaCard>
            </Layout.Section>
        </Layout>
    </Card>
}
