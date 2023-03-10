import { groq } from 'next-sanity'
import { sanityClient } from './sanity.client'

export const fetchServices = async () => {
  const query = groq`*[_type == "services"]`
  const services = await sanityClient.fetch(query)
  return services
}
export const fetchSkills = async () => {
  const query = groq`*[_type == "skills"]`
  const skills = await sanityClient.fetch(query)
  return skills
}
export const fetchLogo = async () => {
  const query = groq`*[_type == "logo"]`
  const logo = await sanityClient.fetch(query)
  return logo
}
export const fetchProjects = async () => {
  const query = groq`*[_type == "projects"]`
  const projects = await sanityClient.fetch(query)
  return projects
}
export const fetchSocials = async () => {
  const query = groq`*[_type == "socials"]`
  const socials = await sanityClient.fetch(query)
  return socials
}
