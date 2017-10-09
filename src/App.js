import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'

const Home = () => (
  <div className="main-content home">
    <h2>Front End Course Directory</h2>

    <p>This fun directory is a project for the React Router Basics
 course on Treehouse.</p>
    <p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get
the skills you need to launch a new career in front end web development.</p>

    <p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with
the latest on web technology so you will never fall behind.</p>

  </div>
)

const About = () => (
  <div className="main-content">
    <h2>About</h2>
    <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to visit the Teachers section
   to view a list of our talented teachers. Or visit the Courses section and select a topic -- HTML, CSS, or JavaScript -- to see a list of our
     courses.</p>
  </div>
)

const Teachers = (props) => {
  return (
    <div className="main-content">
      <ul className="row">
        <h2>Teachers</h2>
        <li className="col-sm-6">
          <img className="imgProfesore" src="img/angie.png" alt="" />
          <h3>Angie McAngular</h3>
          <p>Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems
          with new tech!</p>
        </li>
        <li className="col-sm-6">
          <img className="imgProfesore" src="img/nodes.png" alt="" />
          <h3>NodeStradamus</h3>
          <p>'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce,
               and large-scale web apps.</p>
        </li>
        <li className="col-sm-6">
          <img className="imgProfesore" src="img/geo.png" alt="" />
          <h3>Geo 'Lo' Cation</h3>
          <p>Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all
               barriers to learning code.</p>
        </li>
        <li className="col-sm-6">
          <img className="imgProfesore" src="img/ecma.png" alt="" />
          <h3>Ecma Scriptnstuff</h3>
          <p>Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of
                JavaScript.</p>
        </li>
        <li className="col-sm-6">
          <img className="imgProfesore" src="img/jay.png" alt="" />
          <h3>Jay Query</h3>
          <p>Jay is a developer, author of CSS: The Missing Manual, JavaScript & jQuery: The Missing Manual, and web development teacher.</p>
        </li>
        <li className="col-sm-6">
          <img className="imgProfesore" src="img/json.png" alt="" />
          <h3>Json Babel</h3>
          <p>All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.</p>
        </li>

      </ul>
    </div>);
}
const HTML = () => {
  return (
    <div className="main-content">
      <ul>
        <li className="row">
          <div className="col-sm-4 col-md-4">
            <img className="imgProfesore" src="../img/html1.png" alt="" />
          </div>
          <div className="col-sm-8 col-md-8">
            <h3>How to Make a Website</h3>
            <p>If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages wit contact page. Finally, we walk through how to share a website live on the web.</p>
          </div>
        </li>
        <li className="row">
          <div className="col-sm-4 col-md-4">
            <img className="imgProfesore" src="../img/html2.png" alt="" />
          </div>
          <div className="col-sm-8 col-md-8">
            <h3>Angie McAngular</h3>
            <p>The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.</p>
          </div>
        </li>
        <li className="row">
          <div className="col-sm-4 col-md-4">
            <img className="imgProfesore" src="../img/html3.png" alt="" />
          </div>
          <div className="col-sm-8 col-md-8">
            <h3>Angie McAngular</h3>
            <p>Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy asg an image or formatting some text.</p>
          </div>
        </li>
      </ul>
    </div>);
}
const CSS = () => {
  return (
    <div className="main-content">
      <ul>
        <li className="row">
          <div className="col-sm-4 col-md-4">
            <img
              className="imgProfesore"
              src="../img/css1.png"
              alt />
          </div>
          <div className="col-sm-8 col-md-8">
            <h3>
              CSS Basics
              </h3>
            <p>
              CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you'll soon learn, CSS is one of the core technologies for designing and building websites.
              </p>
          </div>
        </li>
        <li className="row">
          <div className="col-sm-4 col-md-4">
            <img
              className="imgProfesore"
              src="../img/css2.png"
              alt />
          </div>
          <div className="col-sm-8 col-md-8">
            <h3>
              CSS Selectors
              </h3>
            <p>
              In this course, we're going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and className selectors, we're able to target
                elements based position in the HTML document, even their relation to other elements.
              </p>
          </div>
        </li>
        <li className="row">
          <div className="col-sm-4 col-md-4">
            <img
              className="imgProfesore"
              src="../img/css3.png"
              alt />
          </div>
          <div className="col-sm-8 col-md-8">
            <h3>
              Responsive Layouts
              </h3>
            <p>
              Responsive web design is a collection of techniques for building websites that work on multiple screen sizes. In these lessons, we're going to use the foundational principles of responsive design as a framework for thinking about page layout. By the end, you should
                have a better understanding of how to approach common decisions in responsive design.
              </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
const JavaScript = () => {
  return (
    <div className="main-content">
      <ul>
        <li className="row">
          <div className="col-sm-4 col-md-4">
            <img
              className="imgProfesore"
              src="../img/js1.png"
              alt />
          </div>
          <div className="col-sm-8 col-md-8">
            <h3>
              JavaScript Basics
              </h3>
            <p>
              JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.
              </p>
          </div>
        </li>
        <li className="row">
          <div className="col-sm-4 col-md-4">
            <img
              className="imgProfesore"
              src="../img/js2.png"
              alt />
          </div>
          <div className="col-sm-8 col-md-8">
            <h3>
              JavaScript Loops, Arrays and Objects
              </h3>
            <p>
              Storing, tracking and handling data is a large part of computer programming. Arrays provide a method for storing multiple values into a single variable. That makes an array a convenient way to pass around a list of items.
              </p>
          </div>
        </li>
        <li className="row">
          <div className="col-sm-4 col-md-4">
            <img
              className="imgProfesore"
              src="../img/js3.png"
              alt />
          </div>
          <div className="col-sm-8  col-md-8">
            <h3>
              jQuery Basics
              </h3>
            <p>
              jQuery Basics covers why you'd want to use jQuery, what it is and how to include it in your projects. You'll build several projects over the course to give you the confidence to integrate jQuery in your own projects and add that level of flair and interactivity to any site you work on.
              </p>
          </div>
        </li>
      </ul>
    </div>);
}

const Courses = () => {
  return (
    <div classname="main-content courses">
      <ul>
        <li className="col-sm-6 btn btn-default courses">   Courses </li>
        <li className="col-sm-2 btn btn-primary">  <NavLink exact to="/courses/html"> HTML </NavLink> </li>
        <li className="col-sm-2 btn btn-primary">  <NavLink to="/courses/css"> CSS </NavLink> </li>
        <li className="col-sm-2 btn btn-primary ">  <NavLink to="/courses/javascript"> JavaScript </NavLink> </li>
      </ul>
      <h2>Courses</h2>

      <Switch>
        <Route exact path="/courses"
          render={() => <Redirect to="/courses/html" />} />
        <Route path="/courses/html" component={HTML} />
        <Route path="/courses/css" component={CSS} />
        <Route path="/courses/javascript" component={JavaScript} />
      </Switch>
    </div>
  );
}

const NotFoundPage = (props) => {
  return (
    <div> <h2> Error 404! </h2> </div>
  );
}

const App = () => (
  <BrowserRouter>
    <div>
      <menu>
        <ul className="nav navbar-nav">
          <li><a className="imgLaboratoria"><img  src="../img/logo.png" alt="" /></a></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/teachers">Teachers</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>

        </ul>
      </menu>
      <br />
      <br />


      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/courses" component={Courses} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)


export default App;
