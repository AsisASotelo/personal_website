import React, {Component,Fragment} from 'react';
import {Container,  Row, Col, ButtonGroup} from 'reactstrap'
import {Card,CardText,CardBody,CardTitle,CardHeader,Button,CardFooter, CardImg, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { Icon, InlineIcon } from '@iconify/react';
import pythonIcon from '@iconify/icons-logos/python';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import foursquareIcon from '@iconify/icons-fa-brands/foursquare';
import linuxIcon from '@iconify/icons-fa-brands/linux';
import latexIcon from '@iconify/icons-simple-icons/latex';



class Project extends Component {
    constructor(props){
        super(props);
        this.state={
            projects:[]
        }
        
    }


    render(){
        return(
                <Fragment>
                    <Fade  duration={2000} >
            
                        <div class="container">
                            <div class="intro">
                                <div class="title">
                                    Projects
                                </div>
                                <p class= "subtitle">A collection of my work.</p>
                            </div>
                        </div>
                       
                        
                    </Fade>
                    
                    
                    <Fade >
                        
                    
                        <div class="container ">
                            
                            <div class="row projectblock ">
                               
                                <div class="col-md-5 offset-md-1" >
                                    <div class="container cardstyle">
                                    <Card>
                                    <CardHeader tag="h3">Firebase App</CardHeader>
                                        <CardBody>
                                            <CardImg width ="100%" height ="60%"src="/assets/images/firebase.png" alt="cluster_gyms.png"></CardImg>
                                            <hr></hr>
                                            <CardText>Web application created for INF 551. Front-end was created utilizing React, Reacstrap. Backend development was set up with Firebase. API calls were made with a simple listener set using Firebase API. Utilizes inverted index of custom CSV file to return primary key of tuple location.</CardText>
                                            <hr></hr>
                                                    <ButtonGroup>
                                                        <Button> <Icon icon={pythonIcon} /> Python </Button>
                                                        <Button> <Icon icon={javascriptIcon} /> JavaScipt </Button>
                                                        <Button> <Icon icon={reactIcon} /> React </Button>
                                                    </ButtonGroup>
                                            <hr></hr>
                                                    <a href="https://github.com/AsisASotelo/Firebase_JSON"><Button><FontAwesomeIcon icon={faGithub} size="lg"/> View On GitHub</Button></a>
                                        </CardBody>
                                    
                                    </Card>
                                    </div>

                                </div>
                                <div class="col-md-5">
                                    <div class="container cardstyle">
                                        <Card>
                                            <CardHeader tag="h3">K-Nearest Algorithm NY Gyms</CardHeader>
                                                <CardBody>
                                                    <CardImg width ="100%" src="/assets/images/cluster_gyms.png" alt="firebase.png"></CardImg>
                                                    <hr></hr>
                                                    <CardText>Final project of the IBM Data Science Specialization. The entire data science methodology, which begins with identifying the problem. In this case can we determine which borough of New York is best for gym accesibility and quality. Data from gym was scraped utilizing the Foursquare API. Exploratoray Data Analysis was performed on data set and then K-Nearest Algorithm was utilized to determine density.</CardText>
                                                    <hr></hr>
                                                    <ButtonGroup>
                                                        <Button> <Icon icon={pythonIcon} />  Python </Button>
                                                        <Button> <Icon icon={foursquareIcon} /> Foursquare </Button>
                                                    </ButtonGroup>
                                                    <hr></hr>
                                                    <a href="https://github.com/AsisASotelo/Coursera_Capstone"><Button><FontAwesomeIcon icon={faGithub} size="lg"/> View On GitHub</Button></a>
                                                </CardBody>
                                            
                                        </Card>
                                    </div>
                                    
                                </div>

                                <div class="col-md-5 offset-md-1" >
                                    <div class="container cardstyle">
                                    <Card >
                                    <CardHeader tag="h3">Mandelbulb Creator</CardHeader>
                                        <CardBody>
                                            <CardImg width ="100%" src="/assets/images/mandelbulb.png" alt="mandelbulb.png"></CardImg>
                                            <hr></hr>
                                            <CardText>Creates an image of a Mandelbulb which is a 3d extension of the 2-d Mandelbrot set. The image is 500 by 500 pixels and implements distance estimation for the ray tracing allowing some shadowing to appear in the image. The entirety of the code was written in python and implements standard modules. It is quite lengthy and you have to change the source code to get different types of images. The time to render is ~ 3-4 minutes on the rasipberry pi model 3B+ I ran it on. </CardText>
                                            <hr></hr>
                                                    <ButtonGroup>
                                                        <Button> <Icon icon={pythonIcon} />  Python </Button>
                                                        <Button> <Icon icon={linuxIcon} /> Linux </Button>
                                                    </ButtonGroup>
                                            <hr></hr>
                                                <a href="https://github.com/AsisASotelo/Mandelbulb-Raytracer"><Button><FontAwesomeIcon icon={faGithub} size="lg"/> View On GitHub</Button></a>
                                        </CardBody>
                                    
                                    </Card>
                                    </div>

                                </div>
                                <div class="col-md-5">
                                    <div class="container rdstyle">   
                                        <Card class="shadow-lg" >
                                            <CardHeader tag="h3">Fourier Analysis</CardHeader>
                                                <CardBody>
                                                    <CardImg width ="100%" height="50%" src="/assets/images/fourier.png" alt="firebase.png"></CardImg>
                                                    <hr></hr>
                                                    <CardText>Scientific report on the removal of noise from a noise time series utilizing Fourier Analysis. Most of the work was done using Jupyter Notebook and took in stock data over 2 years. Using FFT algorithm was able to decrease the noise and isolate the true signal frequency of the underlying data. Report created with LaTeX. </CardText>
                                                    <hr></hr>
                                                    <ButtonGroup>
                                                        <Button> <Icon icon={pythonIcon} />  Python </Button>
                                                        <Button> <Icon icon={latexIcon} /> LaTeX </Button>
                                                    </ButtonGroup>
                                                    <hr></hr>
                                                    <a href="https://github.com/AsisASotelo/Fourier_Transform_Project"><Button><FontAwesomeIcon icon={faGithub} size="lg"/> View On GitHub</Button></a>
                                                </CardBody>
                                            
                                        </Card>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                    </Fade>
           </Fragment>
        )
    }
}

export default Project;