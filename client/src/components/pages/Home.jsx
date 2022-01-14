import React,{useEffect} from 'react'
import Dashboard from '../nav/Dashboard'

export default function Home() {
    useEffect(() => {
        fetch('/server').then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <Dashboard/>
    )
}
