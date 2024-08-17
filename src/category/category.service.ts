import { Injectable,Inject } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CATEGORY_REPOSITORY } from '../core/constants';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(CATEGORY_REPOSITORY) private readonly categoryRepository: typeof Category,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const [userdata ,status] = await this.categoryRepository.findOrCreate<Category>({
      where: { title: createCategoryDto.title },
      defaults: createCategoryDto,
    });
    return userdata;
  }

  async findAll() {
    return this.categoryRepository.findAndCountAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
  }

  async findOne(id: number) {
    return this.categoryRepository.findOne({ 
      where: { id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
     });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(updateCategoryDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.categoryRepository.destroy({ where: { id } });
  }
}
