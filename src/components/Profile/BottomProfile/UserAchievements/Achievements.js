import { GiPartyPopper, GiMusicSpell, GiStarMedal } from 'react-icons/gi';

const getBadge = {
  b123: {
    Icon: GiPartyPopper,
    name: 'Party',
    description: 'For having 10 people in a room',
  },
  b1234: {
    Icon: GiMusicSpell,
    name: 'Music',
    description: 'For listning to 10+ hours of music',
  },
  b12345: {
    Icon: GiStarMedal,
    name: 'Medal',
    description: 'For listning to 100+ hours of music',
  },
};

export default getBadge;
