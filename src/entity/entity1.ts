import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'


@Entity({ database: 'test' })
export default class Entity1 {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name?: string

    @Column()
    address?: string
}
