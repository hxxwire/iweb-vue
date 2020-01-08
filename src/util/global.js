var isLogin = sessionStorage.getItem('uid') ? true :false;

var uname = sessionStorage.getItem('uname')

const siteName='iweb //站点名称'


export default {
    isLogin,
    uname,
    siteName
}