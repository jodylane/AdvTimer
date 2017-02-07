/**
 * Created by jodyl on 2/7/2017.
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import './Welcome.css';
class Welcome extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="box">
                <div className={classnames('img',this.props.img)} >
                    <div className={classnames('avatar', this.props.avatar)}></div>
                </div>
                <h5>{this.props.name}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non mattis nisi. Donec lobortis suscipit venenatis. Sed maximus neque eget finibus.</p>
            </div>
        )
    }
}

export default Welcome;
