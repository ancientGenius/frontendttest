import Vue from 'vue';
import Router from 'vue-router';
//components
import Full from '@/containers/Full';
import Login from '@/components/Login';
import Deliveries from '@/components/Deliveries';

import Users from '@/components/Users';
import Shops from '@/components/Shops';
import Products from '@/components/Products';
import NewDelivery from '@/components/NewDelivery';
import Calculation from '@/components/Calculation';
import WareHouse from '@/components/WareHouse';
import DeliveryWareHouse from '@/components/DeliveryWareHouse';
import DeliveryReport from '@/components/DeliveryReport';
import Slicer from '@/components/Slicer';
import Gluer from '@/components/Gluer';
import AfterAuth from '@/components/AfterAuth';
import KusokGluer from '@/components/KusokGluer';
import Client from '@/components/Client';
import ClientLoanPay from '@/components/ClientLoanPay';
import DocumentCategoryList from '@/components/enu/comps/DocumentCategoryList';
Vue.use(Router);
export default new Router({
   
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/afterauth',
            name: 'AfterAuth',
            component: AfterAuth,
        },
        {
            path: '/',
            redirect: '/deliveries',
            name: 'Delivery',
            component: Full,
            children: [
                {
                    path: 'deliveries',
                    name: 'Deliveries',
                    component: Deliveries,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/newdelivery',
                    name: 'NewDelivery',
                    component: NewDelivery,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/users',
                    name: 'Users',
                    component: Users,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/shops',
                    name: 'Shops',
                    component: Shops,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/products',
                    name: 'Products',
                    component: Products,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/calculation',
                    name: 'Calculation',
                    component: Calculation,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/warehouse',
                    name: 'WareHouse',
                    component: WareHouse,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/deliverywarehouse',
                    name: 'DeliveryWareHouse',
                    component: DeliveryWareHouse,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/deliveryreport',
                    name: 'DeliveryReport',
                    component: DeliveryReport,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/slicer',
                    name: 'Slicer',
                    component: Slicer,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/gluer',
                    name: 'Gluer',
                    component: Gluer,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/kusokgluer',
                    name: 'KusokGluer',
                    component: KusokGluer,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/client',
                    name: 'Client',
                    component: Client,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/clientloan',
                    name: 'ClientLoanPay',
                    component: ClientLoanPay,
                    meta:{requiresAuth:true}
                },
                {
                    path: '/documentcategorylist',
                    name: 'DocumentCategoryList',
                    component: DocumentCategoryList,
                    meta:{requiresAuth:true}
                }
                
            ]
        }
    ]
})