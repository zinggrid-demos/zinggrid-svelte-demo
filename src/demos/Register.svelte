<script>
	/*
	 * Demonstrate registering a method on a ZingGrid
	 */
	import {onMount} from 'svelte'
	import ZingGrid from 'zinggrid'

	let grid

	const dataSet = [
		{ "first": "Maria", "last": "John", "number": 123 },
		{ "first": "David", "last": "Smith", "number": 456 },
		{ "first": "Felicity", "last": "Snow", "number": 789 }
	]

	// Custom renderer to convert to uppercase
	const customRenderer = (text) => text.toUpperCase()

	// On mount, assign the data and register a custom renderer
	onMount(() => {
		grid.setData(dataSet)
		ZingGrid.registerMethod(customRenderer, 'customRenderer')
	})
</script>

<div class="Grid-wrapper">
	<zing-grid
		bind:this={grid}
		head-class="grid-header"
		caption="Hello World">
		<zg-colgroup>
			<zg-column index="first" header="Column 1" renderer="customRenderer"></zg-column>
			<zg-column index="last" header="Column 2"></zg-column>
			<zg-column index="number" header="Column 3"></zg-column>
		</zg-colgroup>
	</zing-grid>
</div>