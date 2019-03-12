import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

// components
import Bio from '../components/Bio'
import Layout from '../components/Layout'

// utils
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'

// css
const WrapPostTitle = styled.section`
  text-align: center;
  background: #FCFCFC;
  z-index: -1;
`
const PostTitle = styled.h1`
  padding: 60px;
  font-size: 2.5rem;
`
const WrapPostSubtitle = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
  text-align: center;
  padding: ${rhythm(.8)} ${rhythm(1)};
`
const PostSubtitle = styled.h3`
  font-weight: normal;
  font-size: 18px;
  text-decoration: underline;
  text-underline-position: under;
  line-height: 1.4em;
`
const PostMeta = styled.p`
  ${scale(-1 / 5)};
  display: block;
  margin-bottom: ${rhythm(.5)};
  margin-top: ${rhythm(.5)};
`
const PostMetaTag = styled.code`
  margin-right: 5px;
  margin-left: 5px;
  padding: 2px;
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
`
const PostMetaTagLink = styled(Link)`
  font-weight: normal;
`
const MainPost = styled.main`
  padding: ${rhythm(.8)} ${rhythm(1)};
`

const MainContentPost = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(33)};
  padding: ${rhythm(.8)} ${rhythm(1)};
`

const PostNextPrev = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'pt-br' }}
          meta={[
            { name: 'author', content: 'Adams Alves' },
            { name: 'description', content: siteDescription },
            { name: 'keywords', content: 'Desenvolvimento Web, Front End, Wordpress, Sites Responsivos em São Paulo' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'Adams Alves - Desenvolvimento Web e Front-End em São Paulo / SP' },
            { property: 'og:description', content: 'Adams Alves - Desenvolvimento Web, Sites Responsivos, Front End e Wordpress em São Paulo/SP.' },
            { property: 'og:url', content: 'https://adamsalves.com.br' },
          ]}
          title={`${post.frontmatter.title} | ${siteTitle} - Desenvolvimento Web e Front-End em São Paulo / SP`}
        />
        <MainPost>
          <article className="post">
            <WrapPostTitle>
              <PostTitle>
                {post.frontmatter.title}
              </PostTitle>
            </WrapPostTitle>
            <WrapPostSubtitle>
              <PostSubtitle>
                {post.frontmatter.subtitle}
              </PostSubtitle>
              <PostMeta>
                {post.frontmatter.date}
                {post.frontmatter.tags.map((tag, index) => {
                  return (
                    <PostMetaTag 
                      className='language-text' 
                      key={index}
                    >
                      <PostMetaTagLink 
                        to={`/tags/${kebabCase(tag)}/`}
                      >
                        {tag}
                      </PostMetaTagLink>
                    </PostMetaTag>
                  )
                })}
              </PostMeta>
            </WrapPostSubtitle>           
            <MainContentPost>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />
              <Bio />
              <PostNextPrev>
                <li>
                  {
                    previous &&
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  }
                </li>
                <li>
                  {
                    next &&
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  }
                </li>
              </PostNextPrev>
            </MainContentPost>
          </article>
        </MainPost>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        subtitle
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
