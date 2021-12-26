import React, {Fragment}from 'react';
import Fade from 'react-reveal';
import { render } from 'react-dom';
import {MAIN_BLOCKS} from '../shared/main_page_blocks'; 


const animateList = [1,2,3,4,5];

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state={
            blocks: MAIN_BLOCKS
        }
    }




    

   render() {
        return(
        <Fragment>
            {this.state.blocks.map((item,key) =>(
                <Fragment> 
                {/* <div class="block" key ={key}> 
                    <div class="row">
                        <Fade bottom>
                            <h1>{`${item.comment}`}</h1>
                        </Fade>
                        
                    </div>
                    
                </div> */}

                <div class="container" key ={key}>
                <hr></hr>
                        <Fade bottom>
                                <div class="row">
                                    {/* <div class="col-md-8 offset-md-2">
                                        <img class ="headshot" src= "/assets/images/headshot.jpg"></img>

                                    
                                    </div> */}
                                    
                                </div>
                                <hr></hr>
                               
                    
                                <div class="row">
                                    <div class="col-md-8 offset-md-2">
                                    <p class="blocktext mt-5">{`${item.comment}`}</p>
                                    </div>
                                </div>
                                <div class="row">
                                
                                    <a href="mailto:asis.a.sotelo@icloud.com"><button type="button" class="btn mt-5 btn-outline-primary">Email</button></a>{'  '}
                                    <a href="https://github.com/AsisASotelo"><button type="button" class="btn mt-5 btn-outline-primary">Github</button></a>{'  '}
                                    <a href="https://www.linkedin.com/in/asis-sotelo-718753146/"><button type="button" class="btn mt-5 btn-outline-primary">LinkedIn</button></a>{'  '}


                                </div>

                                


                            
                        </Fade>
                        
                        
                    
                    
                </div>
                
                </Fragment>
                
                
            ))}

        </Fragment>
    )}

    

}

export default Home;



