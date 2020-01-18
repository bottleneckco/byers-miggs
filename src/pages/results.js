import React, { useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

const data = {
  age: 17,
  gender: "male",
  smile: 0,
  facialHair: {
    moustache: 0.1,
    beard: 0.1,
    sideburns: 0.1,
  },
  glasses: "ReadingGlasses",
  headPose: { roll: -3, yaw: -0.1, pitch: 1.6 },
  emotion: {
    anger: 0,
    contempt: 0,
    disgust: 0,
    fear: 0,
    happiness: 0,
    neutral: 0.989,
    sadness: 0.011,
    surprise: 0,
  },
  hair: { bald: 0.27, invisible: false },
};

function Results({ location }) {
  // run on default componentDidMount

  useEffect(() => {
    console.log(location.state);
  }, []);

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}

Results.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Results;
