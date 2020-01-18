import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Button = ({ text, link, buttonStyle, linkStyle }) => (
  <div style={buttonStyle}>
    <Link to={link} style={linkStyle}>
      {text}
    </Link>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

Button.defaultProps = {
  text: "Button",
  link: "/",
  buttonStyle: {},
  linkStyle: {},
};

export default Button;
