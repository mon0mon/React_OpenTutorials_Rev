import {useState} from 'react'
import reactLogo from './assets/react.svg'
import styled from 'styled-components'

const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;
const ReactButton = props => {
  console.log('props', props);
  return <button className={props.className}>{props.children}</button>
};
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

const PrimaryButton = styled.button`
  color: ${ props => props.primary ? 'white' : 'black'};
  background-color: ${ props => props.primary ? 'blue' : 'gray'};
`;


function App() {
  return (
    <>
      <p>
        <SimpleButton>Simple</SimpleButton>
      </p>
      <p>
        <LargeButton>Large</LargeButton>
      </p>
      <p>
        <ReactButton>React</ReactButton>
      </p>
      <p>
        <ReactLargeButton>React Large</ReactLargeButton>
      </p>
      <p>
        <PrimaryButton>Normal</PrimaryButton>
      </p>
      <p>
        <PrimaryButton primary>Primary</PrimaryButton>
      </p>
    </>
  )
}

export default App
