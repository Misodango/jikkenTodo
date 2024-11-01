import { createRouter, createWebHistory } from 'vue-router'
import StartScreen from '@/views/StartScreen.vue'
import LoginScreen from '@/views/LoginScreen'
import SignupScreen from '@/views/SignupScreen'
import DashboardScreen from '@/views/DashboardScreen'

const routes = [
	{
		path: '/',
		name: 'Start',
		component: StartScreen
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginScreen
	},
	{
		path: '/signup',
		name: 'Signup',
		component: SignupScreen
	},
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: DashboardScreen
		}
	// 他のルートをここに追加していきます
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
