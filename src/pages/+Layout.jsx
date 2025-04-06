import React from 'react'
import './Layout.css'

export default function Layout({ children }) {
    return (
        <React.StrictMode>
            {children}
        </React.StrictMode>
    )
}