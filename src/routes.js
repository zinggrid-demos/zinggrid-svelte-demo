import MainLayout from './layouts/layout.svelte'
import Simple from './components/Simple.svelte'
import Conditional from './components/Conditional.svelte'
import Events from './components/Events.svelte'
import Fetch from './components/Fetch.svelte'
import Methods from './components/Methods.svelte'
import OneWay from './components/OneWay.svelte'
import Register from './components/Register.svelte'
import Themes from './components/Themes.svelte'
import TwoWay from './components/TwoWay.svelte'

const routes = [
	{name: '/', component: Simple, layout: MainLayout},
	{name: 'themes', component: Themes, layout: MainLayout},
	{name: 'methods', component: Methods, layout: MainLayout},
	{name: 'events', component: Events, layout: MainLayout},
	{name: 'fetch', component: Fetch, layout: MainLayout},
	{name: 'oneway', component: OneWay, layout: MainLayout},
	{name: 'twoway', component: TwoWay, layout: MainLayout},
	{name: 'conditional', component: Conditional, layout: MainLayout},
	{name: 'register', component: Register, layout: MainLayout}
]

export {routes}