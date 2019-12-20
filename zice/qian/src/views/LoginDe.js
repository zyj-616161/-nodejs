import React, { Component } from 'react'
import axios from 'axios'
export default class LoginDe extends Component {
    state={
        user:"",
        pwd:""
    }
    render() {
        let {user,pwd}=this.state;
        return (
            <div className="loginDe">
                <p>用户名：<input type="text" value={user} onChange={(even)=>{
                    this.setState({
                        user:even.target.value
                    })
                }}/></p>
                <p>密码：<input type="text" value={pwd} onChange={(even)=>{
                    this.setState({
                        pwd:even.target.value
                    })
                }}/></p>
                <p><button onClick={this.login}>登录</button></p>
                <p><span onClick={this.ce}>注册</span></p>
            </div>
        )
    }

    login=()=>{
        let {user,pwd}=this.state;
        if(user.trim() && pwd.trim()){
            axios.post("/login/de",{user,pwd}).then(({data})=>{
                if(data.code===1){
                    alert(data.msg)
                    localStorage.user=user;
                    this.props.history.push("/home")
                }
            })
        }else{
            alert("不能为空")   
        }
      
     }   
     ce=()=>{
        this.props.history.push("/loginCe")
    }
}
