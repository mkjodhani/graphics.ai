import { EmptyState } from '@shopify/polaris';
import React from 'react';

export default function UnderConstruction() {
    return (
        <EmptyState
            heading="Page is under construction!"
            secondaryAction={{ content: 'Learn more', url: '/' }}
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
            <p>Track and receive your incoming inventory from suppliers.</p>
        </EmptyState>)
}
