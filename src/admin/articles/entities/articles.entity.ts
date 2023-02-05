import { type } from 'os';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Double,
} from 'typeorm';

@Entity('articles')
export class article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 255 })
  title: string;

  @Column({length: 255})
  slug: string;

  @Column({length: 255})
  image_path: string;

  @Column({length: 255})
  video_path: string;

  @Column({length: 255})
  keywords: string;

  @Column({length: 255})
  description: string;

  @Column({length: 255})
  canonical: string;

  @Column({type:'text'})
  details: string;

  @Column({length: 10,default:'free'})
  status: string;
  
  @Column({ name: 'user_id', type: 'int' })
  userId: number;

  @Column({ name: 'catagory_id', type: 'int' })
  categoryId: number;

  @Column({ name: 'views', type: 'bigint'})
  views: number;

  @Column({ name: 'likes', type: 'bigint'})
  likes: number;
  
  @Column({ name: 'dislikes', type: 'bigint'})
  dislikes: number;
  
  @Column({ name: 'shares', type: 'int' })
  shares: number;

  @Column({length:10,default:'draft'})
  type: string;

  @Column({name: 'approved', type: 'tinyint'})
  approved: number;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
