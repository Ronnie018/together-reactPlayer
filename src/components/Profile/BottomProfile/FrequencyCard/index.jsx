import { useState } from 'react';
import styled from 'styled-components';
import Day from './Day';
import {
  getMostRecent,
  getToday,
  getCurrentYear,
  getCurrentMonthData,
} from './utils';

const StyledCard = styled.div`
  flex: 1 1 400px;
  background-image: url(./graphic_lines.png);
  height: 250px;
  display: flex;
  position: relative;
  .year {
    font-size: 1.2rem;
    color: white;
    position: absolute;
  }
  .days {
    display: flex;
    align-items: flex-end;
  }
`;

const FrequencyCard = ({ frequency }) => {
  const [watcher, setWatcher] = useState(null);
  const year = getCurrentYear(frequency);
  const days = resize(getCurrentMonthData(year, frequency));
  return (
    <StyledCard>
      <div className='days'>
        {days.map((day, i) => {
          return (
            <Day
              size={day[0]}
              day={day[1]}
              key={i}
              id={i + 1}
              watcher={watcher}
              setWatcher={setWatcher}
            />
          );
        })}
      </div>
    </StyledCard>
  );
};

export default FrequencyCard;

function resize(arr) {
  const defValue = 250;
  const max = Math.max(...arr);
  const resizeValue = max > defValue ? defValue / max : max;
  return arr.map((value) => {
    return [value * resizeValue, value]; // size & value
  });
}
