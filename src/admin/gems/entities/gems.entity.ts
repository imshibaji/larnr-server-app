import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Double,
} from 'typeorm';

@Entity('gems')
export class gem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  user_id: number;

  @Column({ length: 255 })
  details: string;

  @Column('double precision' ,{ precision: 8, scale: 2 })
  addition_gems: number;

  @Column('double precision',{ precision: 8, scale: 2 })
  withdraw_gems: number;

  @Column('double precision' ,{ precision: 8, scale: 2 })
  balance_gems: number;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
