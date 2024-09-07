import 'dotenv/config'
import express from 'express'
import { conexetion } from './conexetion'

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  try {
    const query = `
      select f.id, f.cep, f.rua, f.cidade, f.estado, f.pais, f.empresa_id, e.nome, e.site
      from empresas as e
      left join filiais as f
      on e.id = f.empresa_id
    `

    const awser = await conexetion.query(query)

    const filiais = awser.rows.map(filial => {

      const { empresa_id, nome, site, ...outPut } = filial

      return {
        ...outPut,
        empresa: {
          empresa_id: empresa_id,
          nome: nome,
          site: site
        }
      }
    })
    return res.json(filiais)

  } catch (error) {
    const erro = error as Error
    return res.status(500).json(
      erro.message
    )
  }
})

app.get('/funcionarios', async (req, res) => {
  const { page = 1, perPage = 10 } = req.query

  const offset = page === 1 ? 0 : (Number(page) - 1) * Number(perPage)

  try {
    const query = 'select * from pessoas order by id asc limit $1 offset $2'
    const { rows } = await conexetion.query(query, [perPage, offset])
    const totalRegisters = await conexetion.query('select count(*) from pessoas')

    const awser = {
      page: Number(page),
      perPage: Number(perPage),
      total: Number(totalRegisters.rows[0].count),
      resgistros: rows
    }

    return res.json(awser)
  } catch (error) {
    const erro = error as Error
    return res.status(400).json(erro.message)
  }
})

app.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const query = `
      select f.id, f.cep, f.rua, f.cidade, f.estado, f.pais, f.empresa_id, e.nome, e.site
      from empresas as e
      left join filiais as f
      on e.id = f.empresa_id
      where e.id = $1;
    `
    const awser = await conexetion.query(query, [id])

    const { empresa_id, nome, site } = awser.rows[0]

    const filiais = awser.rows.map(filial => {
      const { empresa_id, nome, site, ...outPut } = filial
      return {
        ...outPut
      }
    })

    const empresa = {
      id: empresa_id,
      nome,
      site,
      filiais
    }
    return res.json(empresa)

  } catch (error) {
    const erro = error as Error

    return res.status(500).json(
      erro.message
    )
  }
})

app.listen(process.env.PORT, () => {
  console.log('Srvidor iniciado')
})
