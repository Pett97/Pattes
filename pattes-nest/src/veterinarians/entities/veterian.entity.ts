import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Veterian {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  phone: string;

  @Column({ length: 500 })
  CFMV: string;
}
