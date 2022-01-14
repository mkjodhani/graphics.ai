import { Spinner, TextStyle } from '@shopify/polaris'
import React from 'react'

export default function PageLoading({ label }) {
    return (
        <div style={{ 'width': window.outerWidth, 'height': window.outerHeight, 'position': 'fixed', 'left': '0', 'top': '0', 'zIndex': 5000 }}>
            <div style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'opacity': 0.5, 'backgroundColor': 'white' }}>

            </div>
            <div style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'flexDirection': 'column','display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
                <Spinner accessibilityLabel="Loading Page" size="large" />
                <TextStyle variation='strong'>{label || "Loading..."}</TextStyle>
            </div>
        </div>
    )
}
