<script>
  /*
   * Header
   */
	import NavbarItem from './NavbarItem.svelte'

	export let currentRoute

	const github = 'https://github.com/zinggrid-demos/zinggrid-svelte-demo/blob/main/src/components/'

	const modules = {
		'/': {
			text: 'Demonstrates a simple read-only grid of static data',
			file: 'Simple.svelte'
		},
		'/themes': {
			text: 'Demonstrates a read-only grid of static data with a theme selector',
			file: 'Themes.svelte'
		},
		'/methods': {
			text: 'Demonstrates using a method call to set the data for a grid',
			file: 'Methods.svelte'
		},
		'/events': {
			text: 'Demonstrates grid events',
			file: 'Events.svelte'
		},
		'/fetch': {
			text: 'Demonstrates fetching grid data from the server',
			file: 'Fetch.svelte'
		},
		'/oneway': {
			text: 'Demonstrates data binding in one direction',
			file: 'OneWay.svelte'
		},
		'/twoway': {
			text: 'Demonstrates data binding in two directions',
			file: 'TwoWay.svelte'
		},
		'/conditional': {
			text: 'Demonstrates conditional rendering',
			file: 'Conditional.svelte'
		},
		'/register': {
			text: 'Demonstrates registering a custom rendering method (column 1)',
			file: 'Register.svelte'
		},
	}

</script>

<div class="header">
	<h2>ZingGrid Svelte Demo</h2>
	<div class="buttonbar">
		<NavbarItem {currentRoute} path="/" label="Hello World" />
		<NavbarItem {currentRoute} path="/themes" label="Themes" />
		<NavbarItem {currentRoute} path="/methods" label="Methods" />
		<NavbarItem {currentRoute} path="/events" label="Events" />
		<NavbarItem {currentRoute} path="/fetch" label="Fetch" />
		<NavbarItem {currentRoute} path="/oneway" label="One-Way Binding" />
		<NavbarItem {currentRoute} path="/twoway" label="Two-Way Binding" />
		<NavbarItem {currentRoute} path="/conditional" label="Conditional Rendering" />
		<NavbarItem {currentRoute} path="/register" label="Register Method" />
	</div>
	<h4>{modules[currentRoute.name].text}</h4>
	<div class="viewsrc"><a target="_blank" rel="noreferrer" href={github+modules[currentRoute.name].file}>View {modules[currentRoute.name].file} on Github</a></div>
</div>

<style>

.header {
	background-color: #c3c3c5;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 120%;
	color: rgb(92,91,91);
}

.header h2 {
	color: #4CAF50;
}

.header h4 {
	margin-bottom: 0px;
}

.viewsrc {
	margin-top: 0px;
	background-color: #4CAF50;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  border-radius: 8px;
  text-decoration: none;
	margin-top: 0.5em;
	margin-bottom: 1em;
}

.viewsrc a {
	color: white;
}

.buttonbar {
	display: flex;
	flex-direction: row;
}
</style>