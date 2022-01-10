<script>
	/*
	 * Demo of fetching data. We add an artifical delay to
	 * demo the loading indicator, and set the data via
	 * `setData` once it's received.
	 */
	import {onMount} from 'svelte'
	import 'zinggrid'

	let grid = null

	// Delay for ms milliseconds
	const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

	// Fetch the dataset
	async function getData() {
		try {
			const res = await fetch('./shows.json')
			const data = await res.json()
			// purposely delay so the loading screen displays longer
			await delay(2000)
			grid.setData(data.shows)
		} catch(err) {
			console.log(err)
		}
	}

	onMount(getData)
</script>

<div class="Grid-wrapper">
	<zing-grid bind:this={grid} 
		caption="Shows" 
		editor
		head-class="grid-header"
		loading={true}
		loading-text="Loading (delayed by 2 seconds)">
	</zing-grid>
</div>