import React, { Component } from 'react'
import axios from 'axios'
export default class Xin extends Component {
    state={
        user:"",
        age:"",
        id:null
    }
    render() {
        let {user,age}=this.state;
        return (
            <div>
                <p>账号名称:<input type="text" defaultValue={user}  name="user" onChange={this.change}/></p>
                <p>年龄:<input type="text" defaultValue={age}  name="age"  onChange={this.change}/></p>
                <button onClick={this.fn}>编辑</button>
            </div>
        )
    }

    fn=()=>{
       let {user,age,id}=this.state;
       axios.post("/login/xiuXin",{user,age,id}).then(({data})=>{
         if(data.code===1){
             localStorage.user=this.state.user;
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
                user:data.arr[0].user,
                age:data.arr[0].age,
                id:data.arr[0].id,
            })
        })
    }
}
