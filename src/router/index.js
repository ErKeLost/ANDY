import Vue from 'vue'
import VueRouter from 'vue-router'
// import Myself from '../views/Myself'
// import Find from '../views/Find'
// import Win from '../views/Win'
// import Video from '../views/Video'
// 按需加载
const Myself = (resolve) => {
  import('../views/Myself').then((module) => {
    resolve(module)
  })
}
// const Find = (resolve) => {
//   import('../views/Find').then((module) => {
//     resolve(module)
//   })
// }
const Find = () => import('../views/Find')
const Detail = (resolve) => {
  import('../views/Detail').then((module) => {
    resolve(module)
  })
}
const Win = (resolve) => {
  import('../views/Win').then((module) => {
    resolve(module)
  })
}
const Video = (resolve) => {
  import('../views/Video').then((module) => {
    resolve(module)
  })
}
const Pol = (resolve) => {
  import('../views/Pol').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('../views/Search').then((module) => {
    resolve(module)
  })
}



Vue.use(VueRouter)

const routes = [
{path :"/",redirect:'/find'},
{path :"/myself" , component:Myself},
{path :"/find" ,
 component:Find,
 children:[
   {
     path :'detail/:id/:type',
     component:Detail
   }
 ]
},
{path :"/win" , component:Win},
{path :"/video" , component:Video},
{path :"/pol",component:Pol},
{path :"/search" , component: Search}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
