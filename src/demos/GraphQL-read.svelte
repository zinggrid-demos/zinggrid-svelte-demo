<script>
  /*
   * Demo of fetching GraphQL data.
   */
	import 'zinggrid'

	const readBodyJSON =  JSON.stringify({
		query: `
			{
				continents {
					name
				}
			}
		`
	})

</script>

<div class="Grid-wrapper">
		<zing-grid caption="GraphQL Demo" head-class="grid-header" loading>
			<zg-data src="https://countries.trevorblades.com/" adapter="graphql">
				<zg-param name="recordPath" value="data.continents"></zg-param>
				<zg-param name="readBody" value={readBodyJSON}></zg-param>
			</zg-data>
		</zing-grid>
</div>