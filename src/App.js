import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import {useState} from 'react';

function App() {
  const Usestateclick=()=>{
    return (
      <div>
      <div className='mainpage'>
    <h1>Tempalting using jsx</h1>
    <p>
    Tempalting using jsx

    JSX Templates

    HTML templating engine for React and TypeScript.

    write templates in plain HTML, <span>compile to TypeScript (.tsx) and use like any other React component.</span>
    Highly inspired to react-templates.
    No runtime libraries, no dependencies.
    Easy syntax that's similar to HTML, supported by most IDEs.
    Clear separation of presentation and logic - almost zero HTML in component files.

    </p>
    <p>
      import {`{`}useState{`}`} from react;<br/>
        function FavoriteColor(){`{`}<br/>
          const [color, setColor] = useState("");<br/>
          return {`<h1>`}My favorite color is {`{`}color{`}`}!{`</h1>`};
          <br/>
          {`}`}
     
    const root = ReactDOM.createRoot(document.getElementById('root'));<br/>
    root.render({`<FavoriteColor />`});
    </p>
    <h1>
      updating a state
    </h1>
    <div className='codediv'>
      {`import { useState } from "react";`}<br/>
      {`import ReactDOM from "react-dom/client";`}<br/>
      {'function FavoriteColor() {'}<br/>
      {`const [color, setColor] = useState("red");`}<br/>
      {`return (`}<br/>
      {`<>
    <h1>My favorite color is {color}!</h1>
    <button
      type="button"
      onClick={() => setColor("blue")}
    >Blue</button>
  </>`}<br/>
  {`)`}<br/>
  {`}`}<br/>
const root = ReactDOM.createRoot(document.getElementById('root'));<br/>
root.render({`<FavoriteColor />`});
</div>
    <h1>
    Why not use React Templates?
    </h1>
    <p>
    Basic concepts for React templates

    Any valid HTML (including comments) is a template
    {} to identify JS expression
    </p>
    <h1>
      Examples:
    </h1>
    <h3>
      create multiple Tempalting:
    </h3>
    <div className='codediv'>
    {`import { useState } from "react";`}<br/>
{`import ReactDOM from "react-dom/client";`}<br/>

{`function Car() {`}<br/>
  {`const [brand, setBrand] = useState("Ford");`}<br/>
  {`const [model, setModel] = useState("Mustang");`}<br/>
  {`const [year, setYear] = useState("1964");`}<br/>
  {`const [color, setColor] = useState("red");`}<br/>

  {`return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )`}<br/>
{`}`}<br/>

{`const root = ReactDOM.createRoot(document.getElementById('root'));`}<br/>
{`root.render(<Car />);`}
    </div>
    <h1>Use React Templates for Native Apps?</h1>
    <p>
    You can get all the react templates functionality and more. Click here for more info
Template directives and syntax
Any valid HTML is a template

Any HTML that you write is a valid template, except for inline event handlers ("on" attributes). See the "event handlers" section below for more information.
{} to identify JavaScript expressions

To embed JavaScript expressions in both attribute values and tag content, encapsulate them in {}. If this is done inside an attribute value, the value still needs to be wrapped in quotes. For directives (see below), {} are not used.
Sample:
    </p>
    <h2>
      Example
    </h2>
    <h3>
    Use the JavaScript spread operator to update only the color of the car:
    </h3>
    <div className='codediv'>
    {`import { useState } from "react";`}<br/>
{`import ReactDOM from "react-dom/client";`}<br/>

{`function Car() {`}<br/>
  {`const [car, setCar] = useState({`}<br/>
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  {`});`}<br/>

  {`const updateColor = () => {`}<br/>
  {`  setCar(previousState => {
      return { ...previousState, color: "blue" }
    });`}<br/>
  {`}`}<br/>

  {`return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )`}<br/>
{`}`}<br/>

{`const root = ReactDOM.createRoot(document.getElementById('root'));`}<br/>
{`root.render(<Car />);`}<br/>
    </div>
    <br/>
    <br/>
    <p>
    React templates allow the settings of styles inline in HTML, optionally returning an object from the evaluation context. By default, style names will be converted from hyphen-style to camelCase-style naming.
    </p>
    
    
    
      </div>
      <Footer/>
      </div>
      
      
    )
    }
  const Home=()=>{
    return (

      <div>
  
    <div className="homepage">
      <h2>Introducing JSX</h2>
      <p>Consider this variable declaration:

      <span>This funny tag syntax is neither a string nor HTML.</span>

It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.

      </p>
      <h2>Why JSX? </h2>
      <p>React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
      Instead of artificially separating technologies by putting markup and logic in separate files, 
      React <span>separates</span> concerns with loosely coupled units called “components” that contain both. 
      We will come back to components in a further section, but if your are not yet comfortable putting markup in JS, 
      this talk might convince you otherwise.

     <span>React doesn’t require using JSX</span>, but most people find it helpful as a visual aid when working 
      with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
      </p>
    </div>
    





    <Footer/>
      </div>
      )
  }
  const About=()=>{
    return (

      <div>
  
    <div className="article">
      this is about page
    </div>
    <Footer/>
      </div>
      )
  }
  const Portfolio=()=>{
    return (

      <div>
  
    <div className="article">
      this is porfolio page
    </div>
    <Footer/>
      </div>
      )
  }
  const Contact=()=>{
    return (

      <div>
  
    <div className="article">
      this is contacts page
    </div>
    <Footer/>
      </div>
      )
  }
  return (
    <div className="App">
    <Router>
    <div className="wrapper">
      <Header />
        <Route exact path="/" component={Main}/>
        <Route path="/usestate" component={Usestateclick}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/work" component={Portfolio}/>
        <Route path="/clients" component={Contact}/>
        <div className='pakkakipo'>
          <Sidebar/>
        </div>
    </div>
    </Router>
    </div>
  );
}

export default App;