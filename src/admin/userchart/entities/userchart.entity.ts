import { type } from 'os';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Double,
} from 'typeorm';

@Entity('user_charts')
export class userchart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  task_name: string;

  @Column({ name: 'design', type: 'int' })
  design: number;

  @Column({ name: 'develop', type: 'int' })
  develop: number;

  @Column({ name: 'debug', type: 'int' })
  debug: number;

  @Column({ name: 'user_id', type: 'int' })
  userId: number;

  @Column({ name: 'learning_id', type: 'int' })
  learning_id: number;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

 
}
