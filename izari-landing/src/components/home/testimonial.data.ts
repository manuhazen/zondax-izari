import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Izari has revolutionized our Filecoin development process',
    content:
      'Izari user-friendly interface and comprehensive documentation have allowed us to quickly connect to the Filecoin network and start developing decentralized applications. Their platform has been a game-changer for our team.',
    user: {
      id: 1,
      name: 'Luis Sera',
      professional: 'Embedded Engineer',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Izari user-friendly interface makes creating decentralized applications a breeze',
    content:
      'As someone who is relatively new to the world of blockchain development, Izari has been an invaluable tool for me. Their platform is incredibly easy to use, and I was able to create my first decentralized application in no time at all.',
    user: {
      id: 1,
      name: 'Riski Ramadhan',
      professional: 'Software Engineer',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: "Izari's exceptional customer service sets them apart in the industry",
    content:
      "I've worked with a lot of different blockchain development platforms over the years, and I have to say that Izari's customer service is second to none. Their team is incredibly knowledgeable and responsive, and they've been a pleasure to work with.",
    user: {
      id: 1,
      name: 'Nguyễn Văn',
      professional: 'FullStack Engineer',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Izari has significantly reduced our time-to-market for our Filecoin-based products',
    content:
      "Thanks to Izari's easy-to-use platform, we were able to get our Filecoin-based products to market much faster than we ever could have on our own. Their platform has been an invaluable asset to our team.",
    user: {
      id: 1,
      name: 'Diane Perez',
      professional: 'Product Manager',
      photo: '4.jpg',
    },
  },
]
