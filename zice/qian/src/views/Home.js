import React, { Component } from 'react'
import RouterView from '../router/RouterView'
import {NavLink} from "react-router-dom"
export default class Home extends Component {
    render() {
        let {routes}=this.props;
        return (
            <div className="home-wrap">
                
                <div className="home-main">
                  <RouterView routes={routes}/>
                </div>

                <div className="home-foot">
                    <NavLink to="/home/quan">圈子</NavLink>
                    <NavLink to="/home/my">我的</NavLink>
                </div>
            </div>
        )
    }
}
