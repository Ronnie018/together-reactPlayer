import gun, { profiles } from './index';

export async function createUser(email, password, cb) {
  try {
    const createdUser = await gun.user().create(email, password, (ack) => {
      if (ack.err) {
        console.log('error', ack.err);
        return null;
      } else {
        console.log('success', ack);
        cb(ack);
        return ack;
      }
    });
    return createdUser;
  } catch (e) {
    console.log('error in createUser function', e);
    return null;
  }
}

function createUserProfile(id, userObject, cb) {
  try {
    userObject = JSON.stringify(userObject);
    const vl = profiles.get(id);
    vl.put(userObject).then((ack) => {
      cb({ email: ack.email, password: ack.password });
      return ack;
    });
  } catch (e) {
    console.log('error in createUserProfile function', e);
    return null;
  }
}

function daysObjectTillToday(dayArray) {
  const obj = {};
  dayArray.forEach((day, index) => {
    obj[index + 1] = day;
  });
  console.log('should be a bunch of zeros', obj);
  return obj;
}

function generateNewUserObject(email, password, username) {
  // generate user object with default values
  const date = new Datenow();
  const dayArray = setAntecessorDatesAsZero(date.getDay());

  return {
    username,
    email,
    password,
    images: {
      bg: 'https://png.pngtree.com/back_origin_pic/04/30/07/0cd60814f462af6e6fca974063286187.jpg',
      image:
        'https://th.bing.com/th/id/R.ee0a37e3d5e5fdeba275786941d6e18b?rik=gOyEmFkxvCGcXw&riu=http%3a%2f%2f2.bp.blogspot.com%2f--WIoEY1j4Bs%2fT70vCu4eGDI%2fAAAAAAAAAFc%2fWoKYeBNZamg%2fs1600%2fCirilo-Rivera.jpg&ehk=MXaq1%2fQljtnkfMu9Og8XWkaKEHnIOdFmXKtzbe1wCrQ%3d&risl=&pid=ImgRaw&r=0',
    },
    id: null,
    currentSong: null,
    isOnline: true,
    tags: {},
    favorite: {
      name: null,
      style: null,
      url: null,
    },
    totalValue: 0,
    achievements: {},
    lastSeen: Date.now(),
    frequency: {
      [date.getYear()]: {
        [date.getMonth()]: daysObjectTillToday(dayArray),
      },
    },
  };
}

function setAntecessorDatesAsZero(day) {
  const antecessorDates = [];
  for (let i = 1; i < day; i++) {
    antecessorDates.push(0);
  }
  antecessorDates.push(0);
  return antecessorDates;
}

class Datenow {
  constructor() {
    this.date = new Date(Date.now());
  }

  getMonth() {
    return this.date.getMonth();
  }

  getDay() {
    return this.date.getDate();
  }

  getYear() {
    return this.date.getFullYear();
  }
}

export async function signUp(email, password, username, cb) {
  try {
    const newUserObject = generateNewUserObject(email, password, username); // create user object
    const user = await createUser(email, password, (user) => {
      if (!user) return null;
      newUserObject.id = user.pub; // add id to user object
      createUserProfile(user.pub, newUserObject, cb); // create user profile and execute callback
    });
  } catch (e) {
    console.log('error in signUp function', e);
  }
}

export async function signIn(email, password, cb) {
  console.log('email ', email);
  console.log('password ', password);
  try {
    await gun.user().auth(email, password, (ack) => {
      if (ack.err) {
        console.log('error', ack.err);
      } else {
        console.log('success', ack);
        cb({ email, password });
      }
    });
  } catch (e) {
    console.log('error in signIn function', e);
    return null;
  }
}

export function getUser(uid) {
  return profiles.get(uid);
}
