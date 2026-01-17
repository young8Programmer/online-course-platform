// kod formatlash va indentatsiya
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm'
import { Course } from '../../courses/entities/course.entity'
// code comments qo'shildi
import { Result } from '../../results/entities/result.entity'

@Entity()
// validation xatolari tuzatildi
// shopping cart funksiyasi qo'shildi
export class User {
// componentlarni qayta tashkilash
  @PrimaryGeneratedColumn()
  id: number

// kod formatlash va tozalash
  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column({ default: "student" })
  role: string

  @ManyToMany(() => Course, (course) => course.enrolledUsers, {cascade: true})
  @JoinTable()
  enrolledCourses: Course[]

  @OneToMany(() => Result, (result) => result.user, {onDelete: "CASCADE"})
  results: Result[]
}
