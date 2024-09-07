import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/database/database.module';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [AuthorController],
  providers: [AuthorService]
})
export class AuthorModule { }
