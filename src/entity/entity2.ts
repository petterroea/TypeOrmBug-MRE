import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'


@Entity({ database: 'database2' })
export default class Entity2 {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name?: string

    @Column()
    address?: string
}
