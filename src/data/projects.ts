export interface Project {
  id: number
  slug: string
  image: string
  href: string
  area?: string
  location: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'universite',
    image: '/images/projects/universite/cover.png',
    href: '/projects/universite',
    location: 'Paris · France',
    area: '200 m²',
  },

  {
    id: 2,
    slug: 'stoneford-cottage',
    image: '/images/projects/stoneford-cottage/cover.png',
    href: '/projects/stoneford-cottage',
    location: 'United States',
  },

  {
    id: 3,
    slug: 'oxford-road-estate',
    image: '/images/projects/oxford-road-estate/cover.png',
    href: '/projects/oxford-road-estate',
    location: 'London · UK',
  },

  {
    id: 4,
    slug: 'villa-saint-tropez',
    image: '/images/projects/villa-saint-tropez/cover.png',
    href: '/projects/villa-saint-tropez',
    location: 'Saint-Tropez · France',
  },
]