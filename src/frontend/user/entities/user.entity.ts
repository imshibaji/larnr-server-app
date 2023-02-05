import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  email: string;

  @Column({ name: 'email_verified_at', type: 'timestamp', nullable: true })
  emailVerifiedAt?: Date;

  @Column()
  password: string;

  @Column({ length: 255 })
  fname: string;

  @Column({ length: 255 })
  lname: string;

  @Column({ name: 'api_token', length: 80 })
  apiToken?: string;

  @Column({ length: 50 })
  mobile: string;

  @Column()
  dob: Date;

  @Column({ length: 80 })
  profession: string;

  @Column({ length: 255 })
  orgname: string;

  @Column({ length: 50 })
  whatsapp: string;

  @Column({ length: 255 })
  address: string;

  @Column({ length: 255 })
  city: string;

  @Column({ length: 255 })
  pincode: string;

  @Column({ length: 255 })
  state: string;

  @Column({ length: 255 })
  country: string;

  @Column({ name: 'user_type', length: 10 })
  userType: string;

  @Column()
  active: boolean;

  @Column({ name: 'premium_status', length: 10 })
  premiumStatus: string;

  @Column({ name: 'reffer_by_user_id', type: 'int' })
  refferByUserId: number;

  @Column({ name: 'manage_by_user_id', type: 'int' })
  manageByUserId: number;

  @Column({ name: 'remember_token', length: 100 })
  rememberToken?: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  createAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  modifiedAt: Date;

  @Column({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date;
}
