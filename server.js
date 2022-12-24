const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const PORT = 4000
const app = express()

const url =
	'https://www.theguardian.com/international'

axios.get(url)
	.then((res) => {
		const html = res.data
		const $ = cheerio.load(html)
		const products = []

		$('.fc-item__title').each(function () {
			const title = $(this).text()
			const link = $(this).find('a').attr('href')
			products.push({
				title,
				link,
			})
		})
		console.log(products)
	})
	.catch((err) => console.log(err))

    

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
