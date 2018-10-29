import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue' 
import Competition from './views/Competition.vue' 
import Share_js from './views/Share_js.vue'
import Evaluation from './views/Evaluation.vue'  
import Mypage from './views/Mypage.vue'   

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/competition',
          name: 'competition',
          component: Competition
        },
        {
            path: '/share',
            name: 'share',
            component: Share_js
          },
          {
            path: '/evaluation',
            name: 'evaluation',
            component: Evaluation
          },
          {
            path: '/mypage',
            name: 'mypage',
            component: Mypage
          }
      ]
})
