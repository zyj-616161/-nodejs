import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import axios from 'axios'
export default class My extends Component {
    state={
        user:"",
        age:""
    }
    render() {
        let {user,age}=this.state;
        return (
            <div className="my-wrap">
                <span>名称:{user}</span>
                <span>年龄:{age}</span>
                <NavLink to="/xin">个人信息</NavLink>
                <NavLink to="/pwd">修改密码</NavLink>
                <p onClick={this.fn}>退出</p>
                <p onClick={this.del}>注销账号</p>
            </div>
        )
    }
    fn=()=>{
        localStorage.user="";
         this.props.history.push("/login/de")
    }
    del=()=>{
        let user=localStorage.user;
        axios.post("/login/delete",{user}).then(({data})=>{
            alert(data.msg)
            if(data.code===1){
                this.props.history.push("/login/de")
            }
        })

    }


    componentDidMount(){
        let user=localStorage.user;
        axios.post("/login/getUser",{user}).then(({data})=>{
            this.setState({
                user:data.arr[0].user,
                age:data.arr[0].age
            })
        })
    }
}
