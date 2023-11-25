
interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean,
}

const updateAssignments = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  
  return {
    ...assign, ...propsToUpdate}
}

const assign1: Assignment = {
  studentId: 'user123',
  title: 'Final',
  grade: 100
}

console.log(updateAssignments(assign1, {grade:95}))
const assignGraded: Assignment = updateAssignments(assign1, {grade:95})

const recordAssignment = (assign:Required<Assignment>): Assignment => {

  return assign
}

recordAssignment({...assignGraded, verified: true})

//Record
const hexColorMap: Record<string, string> = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff'
}

type Students = 'Alice' | 'Bob'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'F'

const studentGrade: Record<Students, LetterGrades> = {
  Alice: 'B',
  Bob: 'A'
}


interface Grades{
  assign1: number,
  assign2: number,
}

const gradeData: Record<Students, Grades> = {
  Alice: {assign1: 90, assign2: 85},
  Bob: {assign1: 100, assign2: 95}
}

//pick & omit
type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

const preview: AssignPreview = {
  
studentId: 'user123',
title: "Final"
}