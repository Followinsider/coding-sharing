import ContentDetail from '@/pages/Coding_Charing/ContentDetail'
export default [
    {
        path: '/',
        name: 'index',
        component: {render: h => h("router-view")},
        redirect: '/coding-charing',
        children: [
            {
                path: '/coding-charing',
                name: 'Coding-Charing',
                component: () => import('@/pages/Coding_Charing'),
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/Login')
    },
    {
        path: '/edit',
        name: 'Edit',
        component: () => import('@/pages/Edit')
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
    {
        path: '/post',
        name: 'ContentDetail',
        component: ContentDetail,
    },
    {
        path: '/friends',
        name: 'Friends',
        component: ()=> import('@/components/Friends.vue')
    },
]