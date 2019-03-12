import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// component
import Layout from '../components/Layout'

// utils
import { rhythm } from '../utils/typography'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'

// css 
const SectionBlogDescription = styled.section`
  text-align: center;
  background: #FCFCFC;
  z-index: -1;
`
const HeaderBlogDescription = styled.h2`
  padding: 60px;
  font-size: 2.5rem;
  font-family: Libre Franklin; sans-serif;
  font-weight: normal;
`
const MainBlogPost = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(33)};
  padding: ${rhythm(.8)} ${rhythm(1)};
`
const MainBlogPostHead = styled.h2`
  padding-top: 15px;
  margin-bottom: ${rhythm(1.2)};
  border-bottom: 1px solid #eee;
`
const MainBlogPostTitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`
const MainBlogPostTitleLink = styled(Link)`
  box-shadow: none;
`
const MainBlogPostTag = styled.code`
  margin-right: 5px;
  padding: 2px;
  font-size: 12px;  
  font-family: Open Sans, sans-serif;
`
const MainBlogPostTagLink = styled(Link)`
  font-weight: normal;
`

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

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
          title={`${siteTitle} - Desenvolvimento Web e Front-End em São Paulo / SP`}
        />
        <SectionBlogDescription>
          <HeaderBlogDescription>
            <strong>Desenvolvimento Web</strong> e <strong>Front-End</strong>
          </HeaderBlogDescription>
        </SectionBlogDescription>
        <section>
          <MainBlogPost>
            <MainBlogPostHead>
              Últimos Posts
            </MainBlogPostHead>
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              const tags = get(node, 'frontmatter.tags')
              return (
                <article key={node.fields.slug}>
                  <MainBlogPostTitle                  >
                    <MainBlogPostTitleLink to={node.fields.slug}>
                      {title}
                    </MainBlogPostTitleLink>
                  </MainBlogPostTitle>
                  <small>{node.frontmatter.date}</small>{' '}
                  {tags.map((tag, index) => {
                    return (
                      <MainBlogPostTag 
                        className='language-text' 
                        key={index} 
                      >
                        <MainBlogPostTagLink 
                          to={`/tags/${kebabCase(tag)}/`}
                        >
                          {tag}
                        </MainBlogPostTagLink>
                      </MainBlogPostTag>
                    )
                  })}
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </article>
              )
            })}
          </MainBlogPost>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
