import Gun from 'gun/gun';
import 'gun/sea';

const gun = Gun({ peers: ['http://localhost:3030/gun'] });

export const profiles = gun.get('profiles');
export const rooms = gun.get('rooms');

export default gun
