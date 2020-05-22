import React,{Component, Fragment} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Fade from 'react-reveal/Fade';
import Project from './ProjectComponent';



// The main class holds the routing components from the 'react-router-dom' module
// I create a constant function for each of the sections of the webpages
// The main function could simply be a functions as I do not use of the of the props

class Main extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        
        // Definition of the home page function in JSX
        // The home page utilize
        const HomePage= () =>{
            return(
                <Fragment>
                    <Fade bottom duration={2000} >
        
                        <div id ="home-title" className="container">
                            <div className=" intro">
                                    <div className=" title">
                                        Asis Sotelo
                                    </div>
                                    <p className="subtitle">Science, Data <span>&#38;</span> Tech</p>
                            </div>
                        </div>

                    </Fade>

                    <Fade duration={6000}>
                    <p id ="homepage-scroll" className="scroll-down fadeInAnimated">Scroll Down</p>
                    </Fade>

                    <Home/>



                </Fragment>

                
                

            );

        }
         // Definition of the home page function in JSX

        const BlogPage=() => {
            return(
                <Fragment>
                    <Fade duration={1000}>
                        <div className="container">
                            <div className ="intro">
                                <div id ="blog-title" className ="title">
                                    Blog
                                </div>
                                <p className="subtitle">My thoughts, in word form.</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade duration={5000}>
                    <p id ="blog-page-scroll" className="scroll-down">Scroll Down</p>
                    </Fade>

                    
                </Fragment>
            )
        }

        
        const ProjectPage=() =>{
            return(
                <Fragment>
                    <Project/>
                    <Fade duration={5000}>
                    <p id ="project-page-scroll" className="scroll-down">Scroll Down</p>
                    </Fade>

                </Fragment>
            )
        }

        return(

            <div className="App">

                <Header/>
                <Switch>
                    
                    <Route path ="/home" component={HomePage}/>
                    <Route exact path ="/blog" component={BlogPage}/>
                    <Route exact path ="/projects" component = {ProjectPage}/>
                    <Redirect to="/home"/>
                    

                    
                </Switch>

                <Footer/>


            </div>
        )
    }
}

export default Main;