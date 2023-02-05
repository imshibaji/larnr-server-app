import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ required: false })
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  details: string;
  @ApiProperty()
  short: number;
  @ApiProperty()
  status: string;
  @ApiProperty()
  categoryId: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
