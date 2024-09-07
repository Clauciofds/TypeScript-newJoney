import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { DataBaseModule } from 'src/database/database.module';
import { CategoryController } from './category.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule { }
