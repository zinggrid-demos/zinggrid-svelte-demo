<script>
	/*
   * Demostrates using a reference to set the data after the 
   * ZingGrid has been created and changing the grid's theme.
   * Note that in this case we do not have to convert the
   * data to JSON (contrast with Simple.svelte).
	 */
	import {onMount} from 'svelte'
	import 'zinggrid'

	// This grid
	let grid
	
	const data = [
		[1,2,3],
		[4,5,6]
	]

	let theme = 'default'

	onMount(() => grid.setData(data))
</script>

<div class="Grid-wrapper">
	<zing-grid bind:this={grid} caption="Hello World" theme={theme} head-class="grid-header">
		<zg-colgroup>
			<zg-column index="0" header="Column 1"></zg-column>
			<zg-column index="1" header="Column 2"></zg-column>
			<zg-column index="2" header="Column 3"></zg-column>
		</zg-colgroup>
	</zing-grid>

	<br />
	<hr />
	<select value={theme} on:change={ev => theme = ev.target.value}>
		<option value="default">Default</option>
		<option value="android">Android</option>
		<option value="ios">iOS</option>
		<option value="dark">Dark</option>
		<option value="black">Black</option>
	</select>
</div>