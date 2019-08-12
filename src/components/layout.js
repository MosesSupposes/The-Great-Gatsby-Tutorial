import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

export default function Layout(props) {
    return (
        <div className={layoutStyles.container}>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}