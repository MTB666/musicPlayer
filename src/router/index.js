import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/home/home'
import Recommend from '../components/recommend/recommend'
import Rankpage from  '../components/rankpage/rankpage'
import Singer from '../components/singer/singer'
import Search from '../components/search/search'
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
          name:'recommend'
        },{
          path:'rankpage',
          component:Rankpage,
          name:'rankpage'
        },{
          path:'singer',
          component:Singer,
          name:'singer'
        },{
          path:'search',
          component:Search,
          name:'search'
        }
      ]
    }
  ]
})
