import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { Schedule } from "./scheduleUserProperties.entity";

@Entity("properties")

export class Properties{
  @PrimaryGeneratedColumn('uuid')
  id:string

  @Column({default:false})
  sold: boolean

  @Column({type: "decimal", precision:12, scale:2})
  value:number

  @Column()
  size: number

  @CreateDateColumn()
  createdAt : Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToOne(()=> Addresses) @JoinColumn()
  address: Addresses

  @ManyToOne(()=> Categories)
  category: Categories

  @OneToMany(()=>Schedule, schedule=>schedule.properties)
  schedules: Schedule
}