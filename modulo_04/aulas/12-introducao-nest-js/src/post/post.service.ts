import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) { }

  async create(postBody: CreatePostDTO) {
    const { postCategory, author_id, ...postData } = postBody

    const newpost = await this.prisma.post.create({
      data: {
        ...postData,
        author: {
          connect: { id: author_id },
        },
        postCategory: {
          create: postCategory.map(category => {
            return {
              categoryId: category
            }
          })
        }
      }
    })
    return newpost
  }

  async findCategories(idBody: string[]) {
    const categories = await this.prisma.category.findMany({
      where: {
        id: {
          in: idBody
        },
      }
    })
    return categories
  }
}
