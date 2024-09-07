import { Module } from '@nestjs/common';
import { AuthorModule } from './author/author.module';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { CategoryService } from './category/category.service';
import { DataBaseModule } from './database/database.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [AuthorModule, CategoryModule, DataBaseModule, PostModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class AppModule { }
