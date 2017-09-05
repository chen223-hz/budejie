
export default [
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
  {
      path: '/form/',
      component: require('./pages/form.vue')
  },
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  },
  {
      path:'/post/',
      component: require('./pages/post.vue')
  },
  {
      path:'/mine/',
      component: require('./pages/mine.vue')
  }
]