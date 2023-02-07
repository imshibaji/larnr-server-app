import { type } from 'os';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Double,
} from 'typeorm';

@Entity('topics')
export class topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({type: 'text'})
  embed_code: string;

  @Column({ type: 'text' })
  details: string;

  @Column({ type: 'int' })
  short: number;
  
  @Column()
  duration: string;


  @Column({ length: 10, default: 'free' })
  status: string;

  @Column({ length: 10, default: 'free' })
  premium_status: string;

  
  @Column({ name: 'user_id', type: 'int' })
  userId: number;

  
  @Column({ name: 'course_id', type: 'int' })
  courseId: number;

  
  @Column({ name: 'section_id', type: 'int' })
  sectionId: number;

  
  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

 
}
