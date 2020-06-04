const menuList = [
    {
        title: '首页',
        key: '/'
    },
    {
        title: 'Gallery',
        key: '/gallery'
    },
    {
        title: '登录/注册',
        key: '/form',
        children: [
            {
                title: '登录',
                key: '/form/login',
            },
            {
                title: '注册',
                key: '/form/reg',
            }
        ]
    },
    {
        title:'给我留言',
        key:'/leavemsg'
    },
    {
        title:'关于我们',
        key:'/about'
    }
];
export default menuList;