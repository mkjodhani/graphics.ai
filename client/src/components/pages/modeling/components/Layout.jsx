import React from 'react'
import FadeMenu from './MenuBar'
const menus = [
    {
        title: "Add",
        submenus: [
            {
                label: "Plane", action: () => console.log("Plane Added")
            },
            {
                label: "Cube", action: () => console.log("Cube Added")
            },
            {
                label: "Circle", action: () => console.log("Circle Added")
            },
            {
                label: "UV Sphere", action: () => console.log("UV Sphere Added")
            },
            {
                label: "Ico Sphere", action: () => console.log("Ico Sphere Added")
            },
            {
                label: "Cylinder", action: () => console.log("Cylinder Added")
            },
            {
                label: "Cone", action: () => console.log("Cone Added")
            },
            {
                label: "Torus", action: () => console.log("Torus Added")
            },
        ]
    },
    {
        title: "View",
        submenus: [
            {
                label: "Sidebar", action: () => console.log("Sidebar added.")
            },
            {
                label: "Toolbar", action: () => console.log("Toolbar Added")
            }
        ]
    }
]
export default function Layout() {
    return (
        <div style={{ 'display': 'flex', 'position': 'absolute' ,zIndex:1}}>
            {
                menus.map(({ title, submenus }, index) => <FadeMenu key={index} title={title} submenus={submenus} />)
            }
        </div>
    )
}
