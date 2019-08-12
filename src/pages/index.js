import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'


export default function IndexPage() {
    return (
        <div>
            <Header />
            <h1>Hello.</h1>
            <h2>I'm Moses, a full-stack developer living in beatiful California.</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
            <Footer />
        </div>
    )
}
