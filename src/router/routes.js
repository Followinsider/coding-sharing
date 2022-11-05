
export default [
    {
        path: '/',
        name: 'Coding-Charing',
        component: () => import('@/pages/Coding_Charing')
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
        path: '/friends',
        name: 'Friends',
        component: () => import('@/components/Friends')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('@/pages/User')
    },
    {
        path: '/help',
        name: 'Help',
        component: () => import('@/pages/Help')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/PersonalCenter'),
        children: [
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
    }
]