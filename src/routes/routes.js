//引入组件
import Home from "../pages/Home"
import Teacher from "../pages/Teacher"
import Address from "../pages/Address"

export const routes= [
    {
        path:"/",
        name:'home',
        component:Home
    },
    {
        path:"/teacher",
        name:'teacher',
        component:Teacher
    },
    {
        path:"/address",
        name:'address',
        component:Address
    }
]