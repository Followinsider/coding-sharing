
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
    }
]