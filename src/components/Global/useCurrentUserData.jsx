import { useEffect, useState } from 'react';
import { profiles } from '../../gun';

export default function useCurrentUserData(currentUser) {
  const [currentUserData, setCurrentUserData] = useState(null);

  useEffect(() => {
    if (currentUser) {
      profiles.get(currentUser.pub).once((data) => {
        data = JSON.parse(data);
        setCurrentUserData(data);
      });
    }
  }, [currentUser]);

  return currentUserData;
}
