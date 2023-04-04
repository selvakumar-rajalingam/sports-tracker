import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './schemas/category.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { filter } from 'rxjs';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createCategory = new this.categoryModel(createCategoryDto);
    return createCategory.save();
  }

  async findAll() {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string) {
    return this.categoryModel.findOne({_id: id});
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.updateOne({_id: id}, {$set: updateCategoryDto} );
  }

  remove(id: string) {
    return this.categoryModel.deleteOne({_id: id});
  }
}
