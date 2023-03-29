import { useState, useEffect } from 'react';
import gun from '../../gun';

export default function useRoomsHook(
  query = {
    search_string: '',
    filters: [],
    default: true,
  }
) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    gun
      .get('rooms')
      .map((room, roomId) => {
        if (query.default) setRooms((rooms) => [...rooms, { ...room, roomId }]);
      })
      .on((room, roomId) => {
        if (query.default) setRooms((rooms) => [...rooms, { ...room, roomId }]);
      });
  }, []);

  return rooms;
}
