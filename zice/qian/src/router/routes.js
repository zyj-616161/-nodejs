import LoginDe from '../views/LoginDe'
import LoginCe from '../views/LoginCe'
import Home from '../views/Home'
import Quan from '../views/Quan'
import My from '../views/My'
import Pwd from '../views/Pwd'
import Xin from '../views/Xin'

export default [
    { 
        path:"/loginDe",
        component:LoginDe
    },
    {
        path:"/logince",
        component:LoginCe
    },
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:"/home/quan",
                component:Quan
            },{
                path:"/home/my",
                component:My
            },
            {
                path:"/home",
                redirect:"/home/quan"
            }
        ]
    },{
        path:"/pwd",
        component:Pwd
    },{
        path:"/xin",
        component:Xin
    },{
        path:"/",
        redirect:"/loginDe"
    }

]
