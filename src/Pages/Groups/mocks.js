export const mockUsers = [
  {
    name: 'Connor Anderson',
    thumbnail: null,
    items: [
      {
        title: 'item1',
        description: 'item description we want to see',
        hasPicked: true,
      },
      {
        title: 'item2',
        description: 'item description we want to see10',
        hasPicked: true,
        pickedBy: '0001',
      },
      { title: 'item3', description: 'item description we want to see100' },
    ],
  },
  {
    name: 'SuJi Lee',
    thumbnail: null,
    items: [
      {
        title: 'Bag',
        description: 'Model: LOUIS.V 500',
        image:
          'https://images.pexels.com/photos/4276653/pexels-photo-4276653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        price: 3000,
      },
      { title: 'Scarf', description: 'item description we want to see10' },
      {
        title: 'Light fixture',
        description: 'Light fixture for bedroom',
        price: 100,
        image:
          'https://images.pexels.com/photos/37869/lamps-light-lampshade-screen-37869.jpeg?cs=srgb&dl=colorful-lights-37869.jpg&fm=jpg',
      },
    ],
  },
]

export const mockGroup = [
  {
    name: 'Anderson Family',
    users: [
      {
        name: 'Connor Anderson',
        thumbnail:
          'https://media-exp1.licdn.com/dms/image/C5603AQHc0S73xjBtww/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=dEkRikvhyavdwIJhLIvDRtXpPybEziUbuoqchmjXO_s',
        items: [
          {
            title: 'item1',
            description: 'item description we want to see',
            hasPicked: true,
          },
          {
            title: 'item2',
            description: 'item description we want to see10',
            hasPicked: true,
            pickedBy: '0001',
          },
          { title: 'item3', description: 'item description we want to see100' },
        ],
      },
      {
        name: 'SuJi Lee',
        thumbnail: null,
        items: [
          {
            title: 'Bag',
            description: 'Model: LOUIS.V 500',
            image:
              'https://images.pexels.com/photos/4276653/pexels-photo-4276653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            price: 3000,
          },
          { title: 'Scarf', description: 'item description we want to see10' },
          {
            title: 'Light fixture',
            description: 'Light fixture for bedroom',
            price: 100,
            image:
              'https://images.pexels.com/photos/37869/lamps-light-lampshade-screen-37869.jpeg?cs=srgb&dl=colorful-lights-37869.jpg&fm=jpg',
          },
        ],
      },
    ],
  },
  { name: 'Boiz', users: [] },
]
