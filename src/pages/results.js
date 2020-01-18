import React, { useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import seedrandom from "seedrandom";

import Layout from "../components/layout";
import SEO from "../components/seo";

const testData = {
  age: 18,
  gender: "male",
  // smile: 0,
  // facialHair: {
  //   moustache: 0.1,
  //   beard: 0.1,
  //   sideburns: 0.1,
  // },
  // glasses: "ReadingGlasses",
  // headPose: { roll: -3, yaw: -0.1, pitch: 1.6 },
  // emotion: {
  //   anger: 0,
  //   contempt: 0,
  //   disgust: 0,
  //   fear: 0,
  //   happiness: 0,
  //   neutral: 0.989,
  //   sadness: 0.011,
  //   surprise: 0,
  // },
  hair: { bald: 0.27, invisible: false },
};

// function hashCode(str) {
//   let hash = 0,
//     i,
//     chr;
//   if (str.length === 0) return hash;
//   for (i = 0; i < str.length; i++) {
//     chr = str.charCodeAt(i);
//     hash = (hash << 5) - hash + chr;
//     hash |= 0; // Convert to 32bit integer
//   }
//   return hash;
// }

function Results({ location }) {
  // run on default componentDidMount
  // location.state = data;
  const [luckyNum, setLuckyNum] = setState(-1);

  useEffect(() => {
    // Remove this later
    let data = testData;
    console.log(location);
    if (location.state !== null) {
      data = location.state.faceAttributes;
    }

    // const data = location.state.faceAttributes || data;
    const obj = { age: data.age, gender: data.gender, hair: data.hair };
    let rng = seedrandom(JSON.stringify(obj));
    console.log(parseInt((rng() * 1000) % 16));
  }, [luckyNum, setLuckyNum]);

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <p></p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}

Results.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Results;
