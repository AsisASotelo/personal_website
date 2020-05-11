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
                <div class="block" key ={key}> 
                    <div class="row">
                        <Fade bottom>
                            <h1>{`${item.author}`}</h1>
                        </Fade>
                        
                    </div>
                    
                </div>

                <div class="container" key ={key}> 
                    
                        <Fade bottom>
                    
                                <div class="row">
                                    <p class="blocktext">{`${item.comment}`}</p>
                                </div>
                            
                        </Fade>
                        
                    
                    
                </div>
                
                </Fragment>
                
                
            ))}

        </Fragment>
    )}

    

}

export default Home;



