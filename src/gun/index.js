import Gun from 'gun/gun';
import SEA from 'gun/sea.js';
// import 'gun/lib/radix';
// import 'gun/lib/radisk';
// import 'gun/lib/store';
// import 'gun/lib/rindexed';
// import 'gun/lib/webrtc';

export const gun = Gun({
  peers: ['http://localhost:3030/gun'],
});

window.sea = SEA;
window.gun = gun;

window.read = (data = 'profiles') => {
  return gun.get(data).once((data) => {
    console.log(data);
  });
};

export const profiles = gun.get('profiles');
export const rooms = gun.get('rooms');

export default gun;
