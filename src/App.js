import React, { Component } from 'react';
import AboutMe from './AboutMe';
import AboutDave from './AboutDave';
import Heading from './Heading';
import NavBar from './NavBar';

// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <noscript>You need javascript to run this app.</noscript>
//     <h1>Hello, world.</h1>
//     <p id="para">I am a paragraph tag, with an id of paragraph. I should be blue.</p>
//     </div>
//   );
// }


// const AboutMe = () => {
//   return (
//     <div id="para">
//       <h1>Would you like to know more about me?</h1>
//       <p class="kerry">yes</p>
//     </div>
//   )
// }


const Pets = (props) => {
  return (
    <div>
      <ul>
    <li>Pet age: {props.age}</li>
    <li>Pet species: {props.species}</li>
    <li>Favourite food: {props.favFood}</li>
    <li># Legs: {props.legs}</li>
    <li>Walks: {props.walks}</li>

      </ul>
    </div>
  )

}


class App extends Component {
  render() {
    return (
      <div classname="App">
        <h1>Hello, World</h1>

<AboutMe/>
<AboutDave/>
<Heading/>
<NavBar/>
<Pets name="Ramona" age="10" species="cat" favFood="dreamies" legs="4" walks="no"/>


        </div>


    )
  }
}



export default App;