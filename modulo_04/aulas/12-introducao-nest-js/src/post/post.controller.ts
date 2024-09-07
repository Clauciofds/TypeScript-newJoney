import { BadRequestException, Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { CategoryService } from 'src/category/category.service';

@Controller('posts')
export class PostController {
  constructor(private readonly servicePost: PostService) { }

  @Post('create')
  @HttpCode(201)
  async create(@Body() createPostDTO: CreatePostDTO) {
    const { postCategory, ...postData } = createPostDTO
    const categoriesExist = await this.servicePost.findCategories(postCategory)

    const notFoundCategories = postCategory.filter(categoryId =>
      !categoriesExist.some(category => category.id === categoryId)
    )

    if (notFoundCategories.length > 0) {
      throw new BadRequestException(`A(s) categoria(s) não foi(ram) encontrada(s): ${notFoundCategories.join(', ')}`)
    }

    const newPost = await this.servicePost.create(createPostDTO)
    return newPost
  }

}
