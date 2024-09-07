import express from 'express'
import 'dotenv/config'
import axios from 'axios'

const app = express()

const api1Financeiro = axios.create({
	baseURL: 'http://localhost:3001'
})

const api2Imagens = axios.create({
	baseURL: 'http://localhost:3002'
})

app.use(express.json())

app.get('/', async (req, res) => {
	const result = await api2Imagens.get('/obter-imagens')
	console.log(result.data)
	return res.json('Ok')
})

app.post('/comprar', async (req, res) => {
	const { numero_cartao, valor } = req.body

	const result = await api1Financeiro.post('/fazer-pagamento', {
		numero_cartao,
		valor
	})
	console.log(result.data)
	return res.json('Ok')
})



app.listen(process.env.PORT, () => {
	console.log(`Server started in port: ${process.env.PORT}`)
})
