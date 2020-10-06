
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
      { path: '/how', component: () => import('pages/How.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
      { path: '/sign-in', component: () => import('pages/SignIn.vue') },
      { path: '/sign-up', component: () => import('pages/SignUp.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
