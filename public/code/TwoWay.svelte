<script>
	/*
	 * Demonstrates two-way binding between a text box and a ZingGrid.
	 */
	import {onMount} from 'svelte'
	import 'zinggrid'

	let grid = null

	let tableData = [
		{ "breed": "Chow Chow", "name": "Butter"},
		{ "breed": "Dachshund", "name": "Sousage"},
		{ "breed": "Pug", "name": "Potat"},
		{ "breed": "Corgi", "name": "Plop"},
		{ "breed": "Pomeranian", "name": "Floof"}
	]

	let textData = JSON.stringify(tableData)

	// Called when the table data is changed
	const dataChange = (ev) => {
		textData = JSON.stringify(ev.target.data)
	}

	// Attach event listeners to grid
	onMount(() => {
		grid.addEventListener('data:record:delete', dataChange)
		grid.addEventListener('data:record:insert', dataChange)
		grid.addEventListener('data:cell:change', dataChange)
		grid.addEventListener('data:record:change', dataChange)
	})
</script>

<div class="GridSidebar-wrapper">
	<zing-grid 
		bind:this={grid}
		caption="Two-Way Data Binding (right click on cells for context menu options)"
		context-menu
		editor
		editor-controls
		layout-controls
		search
		sorter
		pager
		page-size="5"
		head-class="grid-header"
		page-size-options="2,5,15"
		data={JSON.stringify(tableData)} />
	<div class="Sidebar-wrapper">
		<p>JSON data</p>
		<textarea name="ds" cols="50" rows="22" value={textData} spellcheck={false}
			on:input={ev => { tableData = JSON.parse(ev.target.value); textData = ev.target.value } } />
	</div>
</div>