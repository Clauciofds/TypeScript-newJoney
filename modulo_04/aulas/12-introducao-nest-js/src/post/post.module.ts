import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { DataBaseModule } from 'src/database/database.module';

@Module({
  imports: [DataBaseModule],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule { }
