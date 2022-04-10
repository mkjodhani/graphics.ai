import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './css/layout.css'
export default function Layout() {
    return (
        <div className='layoutDiv'> 
            <Header />
            <div className='layoutBody'>
                <div>Layout</div>
            </div>
            <Footer />
        </div>
    )
}
