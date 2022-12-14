import ContentDetail from '@/pages/Coding_Charing/ContentDetail';
import NotFound from '@/pages/404'
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
        path: '/question',
        name: 'Question',
        component: () => import('@/pages/Question')
    },
    {
        path: '/post',
        name: 'ContentDetail',
        component: ContentDetail,
    },
    {
        path: '/friends',
        name: 'Friends',
        component: ()=> import('@/pages/Friends')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/PersonalCenter'),
        redirect: '/home/index',
        children: [
            {
                path: 'index',
                name: 'welcome',
                component: () => import('@/pages/PersonalCenter/Welcome')
            },
            {
                path: 'showinfo',
                name: 'showinfo',
                component: () => import('@/pages/PersonalCenter/BasicMsg')
            },
            {
                path: 'countcontrol',
                name: 'countcontrol',
                component: () => import('@/pages/PersonalCenter/Countcontrol')
            },
            {
                path: 'questioncollection',
                name: 'questioncollection',
                component: () => import('@/pages/PersonalCenter/QuestionCollection')
            },
            {
                path: 'pagecollection',
                name: 'pagecollection',
                component: () => import('@/pages/PersonalCenter/PageCollection')
            },
            {
                path: 'answerHistory',
                name: 'answerHistory',
                component: () => import('@/pages/PersonalCenter/AnswerHistory')
            }
        ]
    },
    {
        path: "*",
        name: '404',
        component: NotFound,
    }
]