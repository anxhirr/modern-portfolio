type Sanity = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}
export type SkillType = {
  _id: string
  level: number
  name: string
  icon: string
}
export type ProjectType = {
  _id: string
  title: string
  description: string
  icon: string
  link: string
}

export interface Social extends Sanity {
  name: string
  icon: string
  url: string
}
