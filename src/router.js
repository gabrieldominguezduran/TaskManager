import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/authentication/Login.vue';
import Register from './views/authentication/Register.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/tasks',
			name: 'task-all',
			component: TasksAll
		},
		{
			path: '/tasks/new',
			name: 'task-create',
			component: TasksCreate
		},
		{
			path: '/tasks/:id',
			name: 'task-edit',
			component: TasksEdit
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '*',
			redirect: '/'
		}
	]
});
