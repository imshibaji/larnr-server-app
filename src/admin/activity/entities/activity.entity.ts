import { type } from 'os';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Double,
} from 'typeorm';

@Entity('activities')
export class activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  client_ip: string;

  @Column({ length: 255 })
  city: string;

  @Column({ length: 255 })
  region: string;

  @Column({ length: 255 })
  country: string;

  @Column({ length: 255 })
  timezone: string;

  @Column({ length: 255 })
  page_name: string;

  @Column({ length: 255 })
  page_path: string;

  @Column({ length: 255 })
  user_agent: string;

  @Column({ length: 255 })
  referer: string;

  @Column({ name: 'user_id', type: 'int' })
  userId: number;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
