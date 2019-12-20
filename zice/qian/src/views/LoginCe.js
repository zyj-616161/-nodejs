import React, { Component } from 'react'
import axios from 'axios'
export default class LoginCe extends Component {
    state={
        user:"",
        pwd:""
    }
    render() {
        let {user,pwd}=this.state;
        return (
            <div className="loginCe">
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
                <p><button onClick={this.login}>注册</button></p>
            </div>
        )
    }

    login=()=>{
        let {user,pwd}=this.state;
        if(user.trim() && pwd.trim()){
            axios.post("/login/ce",{user,pwd}).then(({data})=>{
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
}
