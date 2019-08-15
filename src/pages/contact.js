import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'


export default function ContactPage() {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h1>Contact</h1>
                <h3>Find me on ...</h3>
                <ul> 
                    <li><a href="https://twitter.com/__MosesSupposes/"target="_blank">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/moses-samuel/"target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/MosesSupposes"target="_blank">Github</a></li>
                </ul>  
            </Layout>
        </div>
    )
}