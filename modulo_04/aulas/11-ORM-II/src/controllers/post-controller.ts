import { Request, Response } from "express";
import prisma from "../prisma";

type BodyPost = {
  title: string
  content: string
  author_id: number
  categories: string[]
}

export default class PostController {
  async create(req: Request, res: Response) {
    const { title, content, author_id, categories } = req.body as BodyPost

    try {
      const author = await prisma.author.findUnique({
        where: {
          id: author_id
        }
      })

      if (!author) {
        return res.status(404).json({
          message: "Autor não encontrado!"
        })
      }

      const categoriesExist = await prisma.category.findMany({
        where: {
          id: { in: categories }
        }
      })


      if (categories.length !== categoriesExist.length) {
        return res.status(404).json({
          message: "Alguma das categoria(s) não foi encontrada(s)! "
        })
      }


      const post = await prisma.post.create({
        data: {
          title,
          content,
          authorId: author.id,
          postCategory: {
            create: categoriesExist.map(category => {
              return {
                categoryId: category.id
              }
            })
          }
        }
      })

      return res.status(201).json(post)

    } catch (error) {
      const erro = error as Error
      return res.status(500).json({
        message: erro.message
      })
    }
  }


  async list(req: Request, res: Response) {

    try {
      // const posts = await prisma.post.findMany({
      //   include: {
      //     author: true
      //   }
      // })

      const posts = await prisma.post.findMany({
        select: {
          title: true,
          content: true,
          author: {
            select: {
              name: true,
              email: true,
              bio: true
            }
          }
        },
        // O distinct foi usado para evitar a duplicação dos post por estar em um procura aninhada.
        distinct: ['authorId']
      })


      return res.status(200).json(posts

      )
    } catch (error) {
      const erro = error as Error
      return res.status(500).json({
        message: erro.message
      })
    }
  }
}
