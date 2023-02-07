import { type } from 'os';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Double,
} from 'typeorm';

@Entity('teachers')
export class teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({length: 255})
  username: string;

  @Column({length: 255})
  profile_picture: string;

  @Column({length: 255})
  keywords: string;

  @Column({length: 255})
  description: string;

  @Column({ type: 'text' })
  content: string;

  @Column({length: 255})
  mobile: string;

  @Column({length: 255})
  whatsapp: string;

  @Column({length: 255})
  email: string;

  @Column({length: 255})
  website: string;

  @Column({length: 255})
  type: string;

  @Column({ name: 'user_id', type: 'int' })
  userId: number;

  @Column({ length: 10, default: 'free' })
  premium_status: string;

  
  @Column()
  toc: boolean;

  
  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
  
  @Column({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;

 
}
