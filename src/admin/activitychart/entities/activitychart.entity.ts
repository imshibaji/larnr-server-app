import { type } from 'os';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Double,
} from 'typeorm';

@Entity('activity_charts')
export class activitychart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  client_ip: string;

  @Column({ name: 'page_views', type: 'int' })
  page_views: number;

  @Column({ name: 'user_id', type: 'int' })
  userId: number;
  
  @Column()
  date: Date;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
