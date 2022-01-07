<script>
	/*
   * Demonstrates one-way binding between a text box and a ZingGrid.
	 */
	import 'zinggrid'

	const dataSet = [
		// dataSet 0
		[
			[1,2,3], 
			[4,5,6]
		],
		// dataSet 1
		[
			{ "breed": "Chow Chow", "name": "Butter"},
			{ "breed": "Dachshund", "name": "Sousage"},
			{ "breed": "Pug", "name": "Potat"},
			{ "breed": "Corgi", "name": "Plop"},
			{ "breed": "Pomeranian", "name": "Floof"}
		]
	]

	let dataIndex = 1
	let caption = 'Change Me Please!'
	let pagerOn = true	
	let theme = 'default'
	let stringData = JSON.stringify(dataSet[dataIndex])

	// Set stringData based on dataIndex
	const setData = (ev) => {
		const index = ev.target.value
		dataIndex = index
		stringData = JSON.stringify(dataSet[index])
	}

</script>

<div class="GridSidebar-wrapper">
	<zing-grid 
		caption={caption}
		data={stringData}
		pager={pagerOn}
		theme={theme}
		head-class="grid-header"
		page-size="5"
		page-size-options="2,5,15,25,50" />
	<div class="Sidebar-wrapper">
		<p>Paste your JSON data here:</p>
		<textarea name="ds" cols="50" rows="12" value={stringData} 
			onChange={ev => stringData = ev.target.value} />
		<br />
		
		<label htmlFor="pager-toggle">Toggle Pager</label>
		<input id="pager-toggle" type="checkbox" checked={pagerOn} 
			onChange={ev => pagerOn = ev.target.checked} />
		<br />

		<label htmlFor="data-select">Load Data Set: </label>
		<select id="data-select" value={dataIndex} on:change={setData}>
			<option value="0">Numbers</option>
			<option value="1">Dogs</option>
		</select>
		<br />

		<label htmlFor="caption-text">Change Caption: </label>
		<input id="caption-text" type="text" placeholder="Caption" value={caption} 
			on:change={ev => caption = ev.target.value} />
		<br />

		<label htmlFor="theme-text">Change Theme: </label>
		<select id="theme-text" value={theme} on:change={ev => theme = ev.target.value}>
			<option value="default">Default</option>
			<option value="android">Android</option>
			<option value="ios">iOS</option>
			<option value="dark">Dark</option>
			<option value="black">Black</option>
		</select>
	</div>
</div>