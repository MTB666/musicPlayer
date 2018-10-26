import Vue from 'vue'
import Router from 'vue-router'
import detail from '@/components/detail/detail'
import Home from '@/components/home/home'
import Recommend from '@/components/recommend/recommend'
import Rankpage from '@/components/rankpage/rankpage'
import Singer from '@/components/singer/singer'
import Search from '@/components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"home"
      // name: 'HelloWorld',
      // component: HelloWorld
    },{
      path:"/home",
      component:Home,
      children:[
        {
            path:'',
            redirect:'recommend'
        },{
          path:'recommend',
          component:Recommend,
          name:'recommend',
          children:[
            {
              path:'recommendDetail',
              component:detail
            }
          ]
        },{
          path:'rankpage',
          component:Rankpage,
          name:'rankpage'
        },{
          path:'singer',
          component:Singer,
          name:'singer',
          children:[
            {
              path:'singerdetail',
              component:detail
            }
          ]
        },{
          path:'search',
          component:Search,
          name:'search'
        }
      ]
    }

  ]
})
