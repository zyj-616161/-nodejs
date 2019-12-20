import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
export default class RouterView extends Component {
    render() {
        let {routes}=this.props;
        let newRoutes=routes.filter(v=>!v.redirect)
        let redirect=routes.filter(v=>v.redirect)
        return (
            <Switch>
                {
                    newRoutes.map((v,i)=>(<Route key={i} path={v.path} render={(props)=>{
                        if(v.children){
                            return <v.component {...props} routes={v.children}></v.component>
                        }else{
                            return <v.component {...props} ></v.component>
                        }
                    }}/>))
                }
                {
                    redirect.map((v,i)=>(
                        <Redirect from={v.path} to={v.redirect} key={i}/>
                    ))
                }
            </Switch>
        )
    }
}
