
export default [
    {
        path: '/',
        name: 'Coding-Charing',
        component: ()=> import('@/pages/Coding_Charing')
    },
    {
        path: '/login',
        name: 'Login',
        component: ()=> import('@/pages/Login')
    },
    {
        path: '/edit',
        name: 'Edit',
        component: ()=> import('@/pages/Edit')
    },
    {
        path: '/friends',
        name: 'Friends',
        component: ()=> import('@/components/Friends')
    },
    {
        path: '/user',
        name: 'User',
        component: ()=> import('@/pages/User')
    },
    {
        path: '/question',
        name: 'Question',
        component: ()=> import('@/pages/Question')
    },
]