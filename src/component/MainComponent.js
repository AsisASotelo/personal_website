import React,{Component, Fragment} from 'react';
import {Switch, Route, Redirect,withRouter} from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './Home_Component';
import Footer from './FooterComponent';
import Fade from 'react-reveal/Fade';
import Project from './ProjectComponent';



class Main extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        
        const HomePage= () =>{
            return(
                <Fragment>
                    <Fade bottom duration={2000} >
        
                        <div id ="home_title"className="container">
                            <div className=" intro">
                                    <div className=" title">
                                        Asis Sotelo
                                    </div>
                                    <p className="subtitle">Science, Data <span>&#38;</span> Tech</p>
                            </div>
                        </div>

                    </Fade>

                    <Fade duration={6000}>
                    <p className="scroll-down fadeInAnimated">Scroll Down</p>
                    </Fade>

                    <Home/>



                </Fragment>

                
                

            );

        }

        const BlogPage=() => {
            return(
                <Fragment>
                    <Fade duration={1000}>
                        <div className="container">
                            <div className ="intro">
                                <div className ="title">
                                    Blog
                                </div>
                                <p className="subtitle">My thoughts, in word form.</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade duration={5000}>
                    <p className="scroll-down">Scroll Down</p>
                    </Fade>

                    
                </Fragment>
            )
        }

        
        const ProjectPage=() =>{
            return(
                <Fragment>
                    <Project/>
                    <Fade duration={5000}>
                    <p className="scroll-down">Scroll Down</p>
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