import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'


export default function BlogPage() {
    const allPosts = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: {
                    fields: publishedDate,
                    order:DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                <Head title="Blog" />
                <h1>Blog</h1>
                <ol className={blogStyles.posts}>
                    {allPosts.allContentfulBlogPost.edges.map(function renderBlogPostPreview(edge) {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}