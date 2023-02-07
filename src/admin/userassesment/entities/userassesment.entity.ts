import { type } from 'os';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Double,
} from 'typeorm';

@Entity('user_assesments')
export class userassesment {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ name: 'user_id', type: 'int' })
  userId: number;

  @Column({ name: 'topic_id', type: 'int' })
  topic_id: number;

  @Column()
  assesment: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

 
}
