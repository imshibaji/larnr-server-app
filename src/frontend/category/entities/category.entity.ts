import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('catagories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 255 })
  details: string;

  @Column({ type: 'int' })
  short: number;

  @Column({ type: 'enum', enum: ['active', 'inactive'] })
  status: string;

  @Column({ name: 'catagory_id', type: 'int' })
  categoryId: number;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
