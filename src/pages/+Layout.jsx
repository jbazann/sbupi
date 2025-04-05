export { Layout }

import React from 'react'
import './Layout.css'

function Layout({ children }) {
    return (
        <React.StrictMode>
            {children}
        </React.StrictMode>
    )
}