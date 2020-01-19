/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import Header from "./header";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global-styles";

const Content = styled.div`
  padding-top: 5rem;

  @media (max-width: ${props => props.theme.breakLarge}) {
    padding-top: 8rem;
  }

  @media (max-width: ${props => props.theme.breakSmall}) {
    padding-top: 11rem;
  }
`;

const Footer = styled.footer`
  display: grid;
  grid-template:
    "main links"
    / auto 1fr;
  grid-gap: 2rem;
  padding: 2rem;
  border-top: 1px solid ${props => props.theme.black};

  h1 {
    margin: 0;
  }

  p {
    margin: 1rem 0 0;
  }
`;

const Links = styled.div`
  display: grid;
  grid-template:
    "left right"
    / 1fr 1fr;
  text-align: right;

  div {
    align-self: end;
  }

  a {
    display: block;
    margin-bottom: 0.5rem;

    &:last-child {
      margin: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
        </Content>
        <Footer>
          <div>
            <h1>{data.site.siteMetadata.title}</h1>
            <p>© Byers-Miggs &#8212; {new Date().getFullYear()}</p>
          </div>
          <Links>
            <div>
              <Link to="/face">Take the Test</Link>
              <Link to="/personality-types">Personality Types</Link>
            </div>
            <div>
              <Link to="/#testimonial-section">Testimonial</Link>
              <Link to="/#faq">FAQ</Link>
            </div>
          </Links>
        </Footer>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
