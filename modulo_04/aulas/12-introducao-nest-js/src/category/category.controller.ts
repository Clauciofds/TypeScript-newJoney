import { BadGatewayException, BadRequestException, Body, Controller, Delete, Get, HttpCode, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { IShowCategoryProps } from 'src/@types/categories';


@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post('create')
  @HttpCode(201)
  async create(@Body() createCategoryDTO: CreateCategoryDTO) {
    const existingCategories = await this.categoryService.findCategories(createCategoryDTO.names)

    if (existingCategories.length > 0) {
      const existingNames = existingCategories.map(category => category.name).join(', ')
      throw new BadRequestException(`A categoria ${existingNames} já existe`)
    }

    const newCatagory = await this.categoryService.create(createCategoryDTO)
    return newCatagory
  }

  @Delete('delete')
  async delete(@Body() body: { name: string }) {
    // const exitCategoryName = await this.categoryService.findCategoryByName(body.name)

    await this.categoryService.delete(body.name)
  }

  @Get('pagination')
  async show(@Body() body: IShowCategoryProps) {
    const categories = await this.categoryService.show(body)

    return categories
  }
}
