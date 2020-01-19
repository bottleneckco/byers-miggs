import styled from "styled-components";

const Spinner = styled.div`
  position: absolute;
  top: 46%;
  left: 46%;
  transform: translate(-54%, -54%);
  width: 100px;
  height: 100px;
  background-color: ${props => props.theme.orange};
  border: 3px solid black;

  @keyframes rotate {
    0% {
      transform: rotate(180deg) scale(1);
    }

    100% {
      transform: rotate(0deg) scale(0.3);
    }
  }

  animation: rotate 1s infinite alternate ease-out;
`;

export default Spinner;
