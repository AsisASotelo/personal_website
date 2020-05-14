import React, {Component,Fragment} from 'react';
import {Card,CardText,CardBody,CardHeader,Button,CardImg} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { Icon, } from '@iconify/react';
import pythonIcon from '@iconify/icons-logos/python';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import foursquareIcon from '@iconify/icons-fa-brands/foursquare';
import linuxIcon from '@iconify/icons-fa-brands/linux';
import latexIcon from '@iconify/icons-simple-icons/latex';
import hadoopIcon from'@iconify/icons-logos/hadoop';



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
            
                        <div id ="project_title" className="container">
                            <div className="intro">
                                <div className="title">
                                    Projects
                                </div>
                                <p className= "subtitle">A collection of my work.</p>
                            </div>
                        </div>
                       
                    </Fade>
                    <Fade duration={5000}>
                    <p className="scroll-down fadeInAnimated">Scroll Down</p>
                    </Fade>
                    
                    
                   
                        
                    
                    <div className ="container">
                            
                            <div className="row ">
                               
                                <div xs ="12" className="col-md-6 col" >
                                    <div className="mx-auto mt-5">
                                    
                                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                        <CardHeader tag="h3">Firebase App</CardHeader>
                                            <CardBody>
                                                <CardImg width ="100%" height ="330px"src="/assets/images/firebase.png" alt="cluster_gyms.png"></CardImg>
                                                <hr></hr>
                                                <CardText>Web application created for INF 551. Front-end was created utilizing React, Reacstrap. Backend development was set up with Firebase. API calls were made with a simple listener set using Firebase API. Utilizes inverted index of custom CSV file to return primary key of tuple location.</CardText>
                                                <hr></hr>
                                                        
                                                            <Button className="mt-2" color= "info"> <Icon icon={pythonIcon} /> Python </Button> {' '}
                                                            <Button className="mt-2"> <Icon icon={javascriptIcon} /> JavaScript </Button> {' '}
                                                            <Button className="mt-2" color ="danger"> <Icon icon={reactIcon} /> React </Button> {' '}
                                                       
                                                <hr></hr>
                                                        <a href="https://github.com/AsisASotelo/Firebase_JSON"><Button><FontAwesomeIcon icon={faGithub} size="lg"/> View On GitHub</Button></a>
                                            </CardBody>
                                        
                                        </Card>
                                    </div>
                                </div>

                                <div xs ="12" className="col-md-6 col-12">
                                    <div className="mx-auto mt-5">
                                    
                                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                            <CardHeader tag="h3">NY Gyms Clustering</CardHeader>
                                                <CardBody>
                                                    <CardImg width ="100%" height="330px" src="/assets/images/cluster_gyms.png" alt="firebase.png"></CardImg>
                                                    <hr></hr>
                                                    <CardText>Final project of the IBM Data Science Specialization. The entire data science methodology, which begins with identifying the problem. In this case can we determine which borough of New York is best for gym accesibility and quality. Data from gym was scraped utilizing the Foursquare API. </CardText>
                                                    <hr></hr>
                                                    
                                                        <Button className="mt-2" color="info"> <Icon icon={pythonIcon} />  Python </Button>{' '}
                                                        <Button className = "mt-2" color ="success"> <Icon icon={foursquareIcon} /> Foursquare </Button>
                                                    
                                                    <hr></hr>
                                                    <a href="https://github.com/AsisASotelo/Coursera_Capstone"><Button><FontAwesomeIcon icon={faGithub} size="lg"/> View On GitHub</Button></a>
                                                </CardBody>
                                            
                                        </Card>
                                    </div>
                                    
                                    
                                </div>

                                <div xs ="12" className="col-md-6 col-12">
                                    <div className="mx-auto mt-5">
                                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
                                        <CardHeader tag="h3">Mandelbulb Creator</CardHeader>
                                            <CardBody>
                                                <CardImg width ="100%" height ="330px" src="/assets/images/mandelbulb.png" alt="mandelbulb.png"></CardImg>
                                                <hr></hr>
                                                <CardText>Creates an image of a Mandelbulb which is a 3d extension of the 2-d Mandelbrot set. The image is 500 by 500 pixels and implements distance estimation for the ray tracing allowing some shadowing to appear in the image. Computational complexity causes a loading time of 3 minutes on average. All of the work was done on a Raspberry PI 3B+. </CardText>
                                                <hr></hr>
                                                        
                                                            <Button className="mt-2" color="info" > <Icon icon={pythonIcon} />  Python </Button>{' '}

                                                            <Button className = "mt-2" color="warning" > <Icon icon={linuxIcon} /> Linux </Button>
                                                        
                                                <hr></hr>
                                                    <a href="https://github.com/AsisASotelo/Mandelbulb-Raytracer"><Button><FontAwesomeIcon icon={faGithub} size="lg"/> View On GitHub</Button></a>
                                            </CardBody>
                                        
                                        </Card>
                                    </div>

                                </div>
                               
                                <div xs ="12" className="col-md-6 col-12">
                                    <div className="mx-auto mt-5">  
                                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
                                            <CardHeader tag="h3">Fourier Analysis</CardHeader>
                                                <CardBody>
                                                    <CardImg width ="100%" height ="330px" src="/assets/images/fourier.png" alt="firebase.png"></CardImg>
                                                    <hr></hr>
                                                    <CardText>Scientific report on the removal of noise from a noise time series utilizing Fourier Analysis. Most of the work was done using Jupyter Notebook and took in stock data over 2 years. Using FFT algorithm was able to decrease the noise and isolate the true signal frequency of the underlying data. Report created with LaTeX. </CardText>
                                                    <hr></hr>
                                                    
                                                        <Button className="mt-2" color="info"> <Icon icon={pythonIcon} />  Python </Button>{' '}
                                                        <Button className = "mt-2" color="primary"> <Icon icon={latexIcon} /> LaTeX </Button>
                                                    
                                                    <hr></hr>
                                                    <a href="https://github.com/AsisASotelo/Fourier_Transform_Project"><Button><FontAwesomeIcon icon={faGithub} size="lg"/> View On GitHub</Button></a>
                                                </CardBody>
                                            
                                        </Card>  
                                    </div>                                
                                </div>
                                <div xs ="12" className="col-md-6 col-12">
                                    <div className="mx-auto mt-5">  
                                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
                                            <CardHeader tag="h3">HDFS Inverter</CardHeader>
                                                <CardBody>
                                                    <CardImg width ="100%" height="330px" src="/assets/images/inverter.png" alt="firebase.png"></CardImg>
                                                    <hr></hr>
                                                    <CardText> Analyzed the Hadoop Distributed file system I tokenized the file and directory names of a Hadoop cluster Name Node deployed on Amazon Linux EC2 instances. I then wrote a python script to take an xml file and then produce another xml file known as an inverted index. Listing the file/directory names inode numbers. </CardText>
                                                    <hr></hr>
                                                    
                                                        <Button className="mt-2" color="info"> <Icon icon={pythonIcon} />  Python </Button>{' '}
                                                        <Button className = "mt-2" color="primary"> <Icon icon={hadoopIcon} /> Hadoop </Button>
                                                    
                                                    <hr></hr>
                                                    <a href="https://github.com/AsisASotelo/HDFS_XML"><Button><FontAwesomeIcon icon={faGithub} size="lg"/> View On GitHub</Button></a>
                                                </CardBody>
                                            
                                        </Card>  
                                    </div>                                
                                </div>
                                <div xs ="12" className="col-md-6 col-12">
                                    <div className="mx-auto mt-5">  
                                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
                                            <CardHeader tag="h3">Personal Website</CardHeader>
                                                <CardBody>
                                                    <CardImg width ="100%" height="330px" src="/assets/images/website.png" alt="firebase.png"></CardImg>
                                                    <hr></hr>
                                                    <CardText>The personal website which you are on! Designed utilizing ReactJs and Bootstrap. Great care was taken to get the aesthetics just right. The component based architecture allows for the quick swapping and rearrangement of website elements. I am constantly updating this website, as I have become obsessed with its look. </CardText>
                                                    <hr></hr>
                                                    
                                                        <Button className="mt-2" color="danger"> <Icon icon={reactIcon} />  React </Button>{' '}
                                                        <Button className = "mt-2" color="primary"> <Icon icon={latexIcon} /> LaTeX </Button>
                                                    
                                                    <hr></hr>
                                                    <a href="https://github.com/AsisASotelo/person_website"><Button><FontAwesomeIcon icon={faGithub} size="lg"/> View On GitHub</Button></a>
                                                </CardBody>
                                            
                                        </Card>  
                                    </div>                                
                                </div>

                                
                            </div>

                            </div>
                            
                    

                       
                    
           </Fragment>
        )
    }
}

export default Project;