import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from './button';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <div>
      <Button
        text='Personality Types'
        link='/page-2/'
        buttonStyle={{
          maxWidth: 200
        }}
        linkStyle={{
          color: 'white'
        }}
        >
      </Button>

      <Button
        text='Testimonials'
        link='/'
        buttonStyle={{
          maxWidth: 200
        }}
        linkStyle={{
          color: 'white'
        }}
        >
      </Button>

      <Button
        text='FAQ'
        link='/'
        buttonStyle={{
          maxWidth: 200
        }}
        linkStyle={{
          color: 'white'
        }}
        >
      </Button>
    </div>

    <div>
      <Button
        text='TAKE THE FUCKING TEST'
        link='/'
        buttonStyle={{
          maxWidth: 200
        }}
        linkStyle={{
          color: 'white'
        }}
        >
      </Button>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
