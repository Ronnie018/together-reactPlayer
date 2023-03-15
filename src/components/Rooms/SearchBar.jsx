import styled from 'styled-components';
import { GrSearch } from 'react-icons/gr';
import { useRef } from 'react';

const StyledSearchBar = styled.div`
  max-width: 92vw;
  display: flex;
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 2px;
  overflow: hidden;
  justify-content: space-between;
  * {
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 200ms;
  }
  input {
    height: 60px;
    max-width: 70vw;
    font-size: 1.3rem;
    text-indent: 1.2rem;
    caret-color: #353535;
    color: #353535;
    font-weight: 500;
    &:-moz-placeholder {
      color: #767676;
    }
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 1rem;
    svg {
      path {
        stroke: #767676;
      }
      &:hover {
        transform: scale(1.02) translateY(-2px);
        path {
          stroke: #5a5a5a;
        }
      }
      &:active {
        transform: scale(1) translateY(0px);
        path {
          stroke: #767676;
        }
      }
    }
  }
`;

const SearchBar = ({ query }) => {
  const input = useRef();
  function handleClick(e) {
    const elm = input.current;
    const text = elm.value;
    query((value) => {
      return {
        ...value,
        default: text.length > 0 ? false : true,
        search_string: text,
      };
    });
  }
  return (
    <StyledSearchBar>
      <input type='text' placeholder='Search' ref={input} />
      <div className='icon'>
        <GrSearch size='32px' onClick={handleClick} />
      </div>
    </StyledSearchBar>
  );
};

export default SearchBar;
