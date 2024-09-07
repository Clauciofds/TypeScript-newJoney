import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateAuthorDTO } from './dto/create-author.dto';

@Injectable()
export class AuthorService {
  constructor(private readonly prisma: PrismaService) { }

  async findAuthorByEmail(email: string) {
    const author = await this.prisma.author.findUnique({
      where: {
        email
      }
    })
    return author
  }

  async findAuthorById(id: number) {
    const author = await this.prisma.author.findUnique({
      where: {
        id
      }
    })
    return author
  }

  async create(authorBod: CreateAuthorDTO) {
    const { description, ...author } = authorBod

    const newauthor = await this.prisma.author.create({
      data: {
        ...author,
        profile: description ? {
          create: {
            description
          }
        } : undefined
      }
    })
    return newauthor
  }

  async findManyAuthor() {
    const authors = await this.prisma.author.findMany({
      include: {
        profile: true,
        posts: true
      }
    })
    return authors
  }

  async update(id: number, author: CreateAuthorDTO) {
    await this.prisma.author.update({
      where: {
        id
      },
      data: author
    })
  }

  async delete(id: number) {
    await this.prisma.author.delete({
      where: {
        id
      }
    })
  }
}
