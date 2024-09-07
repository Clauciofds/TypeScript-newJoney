import { BadGatewayException, Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { IShowCategoryProps } from 'src/@types/categories';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) { }

  async create(category: CreateCategoryDTO) {
    const dataNames = category.names.map(name => {
      return {
        name
      }
    })
    const newcatagory = await this.prisma.category.createMany({
      data: dataNames
    })
    return {
      message: `Foram criadas ${newcatagory.count} categorias`, count: newcatagory.count
    }
  }

  async findCategories(names: string[]) {
    const categories = await this.prisma.category.findMany({
      where: {
        name: {
          in: names
        },
      }
    })
    return categories
  }

  async delete(name: string) {
    const categoryId = await this.prisma.category.findFirst({
      where: {
        name: name
      },
      select: {
        id: true
      }
    })

    if (!categoryId) {
      throw new BadGatewayException('Categoria não encontrada')
    }
    await this.prisma.category.delete({
      where: {
        id: categoryId.id,
      }
    })
  }

  async show({ name = null, page = 1, size = 3, orderDirection = "asc" }: IShowCategoryProps) {
    const categories = await this.prisma.category.findMany({
      where: {
        name: name ? {
          contains: name,
          mode: "insensitive"
        } : undefined
      },
      skip: (page - 1) * size,
      take: size,
      orderBy: [{
        name: orderDirection
      }]
    })
    return categories
  }
}
