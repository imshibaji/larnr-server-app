import { type } from 'os';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Double,
} from 'typeorm';

@Entity('courses')
export class course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'catagory_id', type: 'int' })
  categoryId: number;

  @Column({length: 255 })
  title: string;

  @Column({name: 'slag',length: 255})
  slug: string;

  @Column({type:'text'})
  details: string;

  @Column({length: 255})
  meta_keys: string;

  @Column({length: 255})
  meta_desc: string;
 

  @Column({length: 255})
  canonical: string;

  @Column({length: 255})
  duration: string;

  @Column({name: 'short', type: 'int' })
  short: number;

  @Column({length: 11})
  status: string;

  @Column({length: 255})
  accessible: string;

  @Column({length: 255})
  actual_price: string;

  @Column({length: 255})
  offer_price: string;


  @Column({ name: 'user_id', type: 'int' })
  userId: number;

  @Column({ name: 'manager_user_id', type: 'int' })
  managerUserId: number;

  @Column({ name: 'embed_code', length:255 })
  embed_code: string;

  @Column({name: 'image_path',length:255})
  image_path: string;
  
  @Column({length:255})
  language: string;

  
  @Column({length:255})
  mode: string;

  @Column({length:255})
  session_time: string;

  @Column({length:255})
  ribbon: string;

  @Column({name: 'sales', type: 'int'})
  sales: number;

  @Column({name: 'views', type: 'int'})
  approved: number;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  
}
