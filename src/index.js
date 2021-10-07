import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'; // dont forget to add NavLink!

import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Navbar from './Navbar'

// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   )
// }

// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username"></input>
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password"></input>
//           <label htmlFor="password">Password</label>
//         </div>
//         <div>
//           <input type="submit" value="Login"></input>
//         </div>
//       </form>
//     </div>
//   )
// }

// const link = { // this is provided by react router
//   width: "100px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// }

// const NavBar = () => ( // NavLink is provided by react router
//   <div>
//     <NavLink
//       to="/"
//       exact
//       style={link}
//       activeStyle={{background: "darkblue"}}
//       >
//       Home
//     </NavLink>
//     <NavLink
//       to="about"
//       exact
//       style={link}
//       activeStyle={{background: "darkblue"}}
//       >
//       About
//       </NavLink>
//       <NavLink
//         to="login"
//         exact
//         style={link}
//         activeStyle={{background: "darkblue"}}
//       >
//       Login
//       </NavLink>
//   </div>
// )
// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );
ReactDOM.render( // Router is an alias for BrowserRouter
  <Router> 
    <div>
      <Navbar />
      {/* <Route path="/" component={Home} />  */}
      {/*Home is always rendering because it says PATH and not EXACT PATH (this can be used for static things like headers)*/}
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login}/>
    </div>
  </Router>,
  document.getElementById("root")
)//* When the URL matches PATH, render COMPONENT */

// if it was just Home, this would work (anonymous function)
// <Route path="/" render={() => <h1>Home!</h1>} />