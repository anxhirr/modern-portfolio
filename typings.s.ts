type Sanity = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}
type SanityImage = {
  asset: {
    _ref: string
    _type: string
  }
  type: string
}

export interface SkillType extends Sanity {
  level: number
  name: string
  icon: SanityImage
}
export interface ProjectType extends Sanity {
  _id: string
  title: string
  description: string
  icon: SanityImage
  link: string
}

export interface SocialType extends Sanity {
  name: string
  icon: SanityImage
  url: string
}
