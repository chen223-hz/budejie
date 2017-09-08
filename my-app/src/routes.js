
export default [
  {
      path: '/block/',
      component: require('./pages/clubblock.vue')
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