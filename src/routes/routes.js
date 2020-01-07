//引入组件
import Home from "../pages/Home"
import Teacher from "../pages/Teacher"
import Address from "../pages/Address"
import Course from "../pages/Course"
import CourseDetail from "../pages/CourseDetail"

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
    },
    {
        path:"/course",
        name:'course',
        component:Course
    },
    {
        path:"/course_detail",
        name:'course_detail',
        component:CourseDetail
    },
]