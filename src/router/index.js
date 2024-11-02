import { createRouter, createWebHistory } from 'vue-router'
import StartScreen from '@/views/StartScreen.vue'
import LoginScreen from '@/views/LoginScreen'
import SignupScreen from '@/views/SignupScreen'
import DashboardScreen from '@/views/DashboardScreen'
import RegisterScreen from '@/views/RegisterScreen'
import ExperimentViewer from '@/views/ConductingScreen'

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
	},
	{
		path: '/register',
		name: 'Register',
		component: RegisterScreen
	},
	{
		path: '/experiment/:id',
		name: 'Experiment',
		component: ExperimentViewer,
		props: true
	}

	// 他のルートをここに追加していく
	// ページ作るときはここに書いて!!!
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
