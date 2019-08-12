import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


export default function IndexPage() {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Moses, a full-stack developer living in beatiful California.</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}
