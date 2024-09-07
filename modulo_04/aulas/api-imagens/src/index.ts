import express from 'express'
import 'dotenv/config'

const app = express()

app.use(express.json())

app.get('/obter-imagens', (req, res) => {
	return res.json([
		{
			url: 'http://abc.com.br/img1.jpg'
		},
		{
			url: 'http://abc.com.br/img2.jpg'
		},
		{
			url: 'http://abc.com.br/img3.jpg'
		}
	])
})

app.listen(process.env.PORT, () => {
	console.log(`Server started in port: ${process.env.PORT}`)
})
