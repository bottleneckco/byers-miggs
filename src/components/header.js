import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from './button';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
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
