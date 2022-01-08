<script>
	/*
	 * Demo of fetching data
	 */
	import {onMount} from 'svelte'
	import 'zinggrid'

	let grid = null
	let dataSet = undefined

	// Delay for ms milliseconds
	const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

	// Fetch the dataset
	async function getData() {
		try {
			grid.setAttribute('loading', '')
			const res = await fetch('./shows.json')
			const data = await res.json()
			// purposely delay so the loading screen displays longer
			await delay(2000)
			dataSet = JSON.stringify(data.shows)
		} catch(err) {
			console.log(err)
		}
	}

	onMount(() => grid.executeOnLoad(() => setTimeout(getData,0)))
</script>

<div class="Grid-wrapper">
	<zing-grid bind:this={grid} data={dataSet} 
		caption="Shows" 
		editor
		head-class="grid-header"
		loading={true}
		loading-text="Loading (delayed by 2 seconds)">
	</zing-grid>
</div>