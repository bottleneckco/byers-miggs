import styled from "styled-components";

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.theme.orange};

  @keyframes rotate {
    0% {
      transform: rotate(180deg) scale(1);
      border-radius: 0px;
      border: 3px solid black;
    }

    100% {
      transform: rotate(0deg) scale(0.3);
      border-radius: 25px;
      border: 3px solid grey;
    }
  }

  animation: rotate 1s infinite alternate ease-out;
`;

export default Spinner;
