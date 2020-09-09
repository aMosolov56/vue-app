import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Planets from '@/components/Planets'
import Planet from '@/components/Planet'
import Other from '@/components/Other'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/planets',
            name: 'Planets',
            component: Planets
        },
        {
            path: '/planets/:planetName',
            name: 'Planet',
            component: Planet
        },        
        {
            path: '/other',
            name: 'Other',
            component: Other
        }
    ]
})