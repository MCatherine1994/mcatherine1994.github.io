export const MemoryService = {
  getVicMemoryData() {
    return [
      {
        id: '1',
        description: 'Hiking at Mount Douglas',
        image: 'mount_douglas.JPG',
      },
      {
        id: '2',
        description: 'Another beautiful harbour view',
        image: 'harbour.JPG',
      },
      {
        id: '3',
        description: 'Exploring the corn maze',
        image: 'corn.JPG',
      },
      {
        id: '4',
        description: 'Relaxing at Beacon Hill Park',
        image: 'beacon_hill_park.JPG',
      },
      {
        id: '5',
        description: "Victoria's downtown covered in snow",
        image: 'dt.JPG',
      },
      {
        id: '6',
        description: 'Christmas trees at The Bay',
        image: 'thebay.JPG',
      },
      {
        id: '7',
        description: 'A day at French Beach',
        image: 'french_beach.JPG',
      },
      {
        id: '8',
        description: 'Cherry blossoms outside my window',
        image: 'flower.JPG',
      },
      {
        id: '9',
        description: 'Participate battle snake compitition',
        image: 'battle_snake.JPG',
      },
      {
        id: '10',
        description: 'Visiting the lighthouse',
        image: 'lighthouse.JPG',
      },
      {
        id: '11',
        description: 'At Royal Roads University',
        image: 'rru.JPG',
      },
      {
        id: '12',
        description: 'A night with large cloudy cloud',
        image: 'night.JPG',
      },
      {
        id: '13',
        description: 'Chrtimas light at Butchart Garden',
        image: 'butchart_garden.JPG',
      },
      {
        id: '14',
        description: 'My Graduation day at UVic',
        image: 'uvic_graduation.JPG',
      },
    ]
  },

  getVicMemory() {
    return Promise.resolve(this.getVicMemoryData())
  },
}
