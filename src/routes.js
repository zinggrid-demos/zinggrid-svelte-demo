import MainLayout from './layouts/layout.svelte'
import Simple from './demos/Simple.svelte'
import Conditional from './demos/Conditional.svelte'
import Events from './demos/Events.svelte'
import Fetch from './demos/Fetch.svelte'
import Methods from './demos/Methods.svelte'
import OneWay from './demos/OneWay.svelte'
import Register from './demos/Register.svelte'
import Themes from './demos/Themes.svelte'
import TwoWay from './demos/TwoWay.svelte'

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