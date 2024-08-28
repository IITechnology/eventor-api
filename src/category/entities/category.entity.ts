import { Table, Column, Model, DataType, AllowNull, Unique, Default } from 'sequelize-typescript';
import { CategoryIcon } from 'src/core/enum';

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
})
export class Category extends Model<Category> {

  @AllowNull(false)
  @Column(DataType.STRING(100))
  title: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  description: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  categoryImage: string;

  @AllowNull(false)
  @Default(CategoryIcon.icon)
  @Column({
    type: DataType.ENUM,
    values: Object.values(CategoryIcon)
  })
    categoryIcon: string

}
