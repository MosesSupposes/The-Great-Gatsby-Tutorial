import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'


export default function AboutPage() {
    return (
        <div>
            <Header />
            <h1>About</h1>
            <p>
                I'm a full stack developer, and a student at <a href="https://www.lambdaschool.com" target="_blank">Lambda School</a>, 
                based in the San Francisco Bay Area.
                Aside from hardcore functional programming, my interests include cooking, hiking, shooting hoops, and slapping bass.
            </p>

            <Link to="/contact">Want to work with me? Reach out</Link>
            <Footer />
        </div>
    )
}