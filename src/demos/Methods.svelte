<script>
	/*
   * Demo using method calls to set the data on a grid
	 */
	import {onMount} from 'svelte'
	import 'zinggrid'

	let grid = null
	let textarea = null

	// Set the grid data from the contents of the text area
	const setData = () => grid.setData(textarea.value)

	const dataSet = [
		{ "breed": "Chow Chow", "name": "Butter"},
		{ "breed": "Dachshund", "name": "Sousage"},
		{ "breed": "Pug", "name": "Potat"},
		{ "breed": "Corgi", "name": "Plop"},
		{ "breed": "Pomeranian", "name": "Floof"}
	]

	onMount(() => {
		textarea.value = JSON.stringify(dataSet)
		setData()
	})

</script>

<div class="GridSidebar-wrapper">
	<zing-grid 
		bind:this={grid} 
		editor 
		pager={true}
		head-class="grid-header"
		/>
	<div class="Sidebar-wrapper">
		<br/>
		<textarea bind:this={textarea} cols="50" rows="12" spellcheck="false"></textarea>
		<br/>
		<button on:click={setData}>Set Data</button>
	</div>
</div>   