import gun from '../../gun';

export function getProfileUser() {
  // logic to watch current song here
  return {
    name: 'Clover Baxter',
    images: {
      bg: './background.jpg',
      image: './user_profile.jpg',
    },
    id: '123456P',
    currentSong: '505',
    isOnline: true,
    tags: ['rock', 'rap'],
    favorite: {
      name: 'Him and I',
      style: 'rap',
      url: 'https://www.youtube.com/watch?v=gWmz4U65kls',
    },
    totalValue: 1845,
    achievements: ['b123', 'b1234'],
    frequency: {
      2023: {
        2: [25, 5, 55],
        3: [25, 5, 55, 0, 16, 500],
      },
    },
  };
}