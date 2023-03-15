import styled from 'styled-components';
import getColor from './getColor';

const StyledTag = styled.div`
  min-width: max-content;
  padding: 0.2rem 1.5rem;
  border-radius: 100vmax;
  color: white;
  font-weight: 300;
  &,
  * {
    transition: 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

const Tag = ({ children, color = getColor(children) }) => {
  return (
    <StyledTag style={{ backgroundColor: color }}>{...children}</StyledTag>
  );
};

export default Tag;

export const ItemTag = ({
  children,
  color = getColor(children),
  updateList,
  updateSelf,
}) => {
  function handleClick(e) {
    try {
      updateList &&
        updateList((state) => {
          const newState = [...state];
          newState.push(children);
          return newState;
        });
      updateSelf &&
        updateSelf((state) => {
          const newState = state.filter(
            (value, i) => state.indexOf(children) !== i
          );
          return newState;
        });
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <StyledTag style={{ backgroundColor: color }} onClick={handleClick}>
      {...children}
    </StyledTag>
  );
};
