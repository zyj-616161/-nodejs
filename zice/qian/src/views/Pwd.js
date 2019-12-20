import React, { Component } from 'react'
import axios from 'axios'
export default class Pwd extends Component {
    state={
        oldpwd:"",
        pwd:"",
        id:null
    }
    render() {
        let {oldpwd,pwd}=this.state;
        return (
            <div>
                <p>原密码:<input type="text" value={oldpwd}  name="oldpwd" onChange={this.change}/></p>
                <p>新密码:<input type="text" value={pwd}  name="pwd"  onChange={this.change}/></p>
                <button onClick={this.fn}>编辑</button>
            </div>
        )
    }

    fn=()=>{
       let {oldpwd,pwd,id}=this.state;
       axios.post("/login/xiuPwd",{oldpwd,pwd,id}).then(({data})=>{
         if(data.code===1){
             this.props.history.go(-1)
         }
         alert(data.msg)
       })
    }

    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidMount(){
        let user=localStorage.user;
        axios.post("/login/getUser",{user}).then(({data})=>{
            this.setState({
                id:data.arr[0].id,
            })
        })
    }
}

