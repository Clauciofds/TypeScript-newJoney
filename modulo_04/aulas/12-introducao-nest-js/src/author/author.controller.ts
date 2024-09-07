import { BadRequestException, Body, Controller, Get, HttpCode, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateAuthorDTO } from './dto/create-author.dto';
import { AuthorService } from './author.service';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) { }

  @Post('create')
  @HttpCode(201)
  async create(@Body() authorBody: CreateAuthorDTO) {
    const emailExists = await this.authorService.findAuthorByEmail(authorBody.email)

    if (emailExists) {
      throw new BadRequestException('O e-mail informado já exite')
    }

    const newAuthor = await this.authorService.create(authorBody)
    return newAuthor
  }

  @Get()
  async list() {
    const authors = await this.authorService.findManyAuthor()
    return authors
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    const authors = await this.authorService.findAuthorById(Number(id))

    if (!authors) {
      throw new NotFoundException('Autor não encontrado!')
    }
    return authors
  }
}
