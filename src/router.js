import { createRouter, createWebHistory } from 'vue-router'
import homedashboard from './components/home-dashboard'
import storeproduct from './components/store-product'
import storedetailpro from './components/store-detail-pro'
import profile from './components/pro-file'
import chatuser from './components/chat-user'
import samplework from './components/sample-work'
import manageproject from './components/manage-project'
import managetag from './components/manage-tag'
import managecategory from './components/manage-category'
import manageuser from './components/Manage-user/Manage-user.vue'
import ckedit from './components/ck-edit'

const routes = [
    { path: '/', component: homedashboard },
    { path: '/product', component: storeproduct },
    { path: '/detailsproduct', component: storedetailpro },
    { path: '/profile', component: profile },
    { path: '/chat', component: chatuser },
    { path: '/samplework', component: samplework },
    { path: '/projects', component: manageproject },
    { path: '/tags', component: managetag },
    { path: '/categories', component: managecategory },
    { path: '/users', component: manageuser },
    { path: '/addproject', component: ckedit },


]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router