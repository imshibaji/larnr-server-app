import { type } from 'os';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Double,
} from 'typeorm';

@Entity('taggables')
export class taggable {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  tag_id: number;
  
  @Column({length: 255})
  taggable_type: string;
  
  @Column()
  taggable_id: number;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

 
}
