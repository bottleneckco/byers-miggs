import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: grid;
  grid-template:
    "title nav cta"
    / auto 1fr auto;
  height: 5rem;
  background: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.black};
  z-index: 2;

  @media (max-width: ${props => props.theme.breakLarge}) {
    grid-template:
      "title cta" 5rem
      "nav nav";
    height: inherit;
  }
`;

const StyledTitle = styled.div`
  grid-area: title;
  align-self: stretch;
  padding: 0 2rem;
  border-right: 1px solid ${props => props.theme.black};

  h3 {
    margin: 0;

    :hover {
      color: ${props => props.theme.pink};
    }
  }

  @media (max-width: ${props => props.theme.breakLarge}) {
    border: none;
  }
`;

const StyledNav = styled.div`
  grid-area: nav;
  align-self: center;
  text-align: center;

  a {
    display: inline-block;
    padding: 0 1rem;

    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${props => props.theme.breakLarge}) {
    border-top: 1px solid ${props => props.theme.black};
    padding: 0.7rem 0;
  }

  @media (max-width: ${props => props.theme.breakSmall}) {
    a {
      display: block;
      padding: 0.2rem 0;
    }
  }
`;

const StyledCTA = styled.div`
  grid-area: cta;
  align-self: stretch;
  border-left: 1px solid ${props => props.theme.black};
  text-align: center;

  :hover {
    background: ${props => props.theme.orange};
    * {
      color: ${props => props.theme.white};
    }
  }

  a {
    padding: 0 2rem;
  }

  h4 {
    margin: 0;
  }
`;

const VCenteredLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <StyledTitle>
        <VCenteredLink to="/">
          <h3>{siteTitle}</h3>
        </VCenteredLink>
      </StyledTitle>

      <StyledNav>
        <Link to="/personality-types/">Personality Types</Link>
        <a href="#testimonial-section">Testimonials</a>
        <a href="#faq">FAQ</a>
      </StyledNav>

      <StyledCTA>
        <VCenteredLink to="/">
          <h4>Take the Test</h4>
        </VCenteredLink>
      </StyledCTA>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
