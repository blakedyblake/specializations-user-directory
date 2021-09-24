import React, {Component}from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div id ="header"><BrowserRouter><Link to= "/">Home</Link></BrowserRouter><input type='hidden'/></div>
            
        )
    }
}

export default Header;
