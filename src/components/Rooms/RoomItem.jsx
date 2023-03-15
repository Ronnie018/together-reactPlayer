import styled from 'styled-components';

const StyledRoomItem = styled.div`
  background-color: #620086;
  width: 100%;
  min-height: 90px;
  margin-bottom: 0.5rem;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0px 4px 4px rgba(168, 0, 227, 0.52));
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    padding: 1rem;
  }
  &,
  * {
    transition: 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .owner {
    flex: 1 1 150px;
    max-width: max-content;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 0 3rem 0 1rem;
    .img-wrapper {
      width: 70px;
      overflow: hidden;
      border-radius: 100vmax;
      border: 1px solid white;
    }
    .name {
      span {
        font-size: 1.2rem;
        color: white;
      }
    }
  }
  .room-info {
    flex: 1 1 200px;
    max-width: 96%;
  }
  @media (max-width: 664px) {
    .owner {
      max-width: min-content;
      padding: 0 1rem 0 1rem;
      justify-content: start;
    }

    .room-info {
    }
  }
  @media (max-width: 450px) {
    .owner {
      max-width: 100%;
    }
  }
  .room-info {
    max-width: 100%;
    padding: 1rem 1rem 1rem 0;
    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 0.4rem;
      .room-name {
        display: flex;
        column-gap: 1rem;
        align-items: center;
        font-size: 1.4rem;
        padding: 0.16rem 0.6rem;
        background: #490061;
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
        height: 32px;
        max-width: max-content;
        span {
          color: white;
          font-family: 'Nunito', sans-serif;
        }
        .meta {
          display: flex;
          column-gap: 0.3rem;
          .icon {
            min-width: 26px;
            height: 26px;
            border-radius: 4px;
            display: grid;
            place-items: center;
            background-color: #000000;
            .people-number {
              font-weight: 900;
              font-size: 1.2rem;
              color: white;
            }
          }
        }
      }
      .join-btn {
        background-color: white;
        font-weight: 600;
        font-size: 1.2rem;
        padding: 0 1.6rem;
        border-radius: 4px;
        min-height: 30px;
        margin: 0.2rem 0;
        box-shadow: 0px 2px 4px #898989b7;
        &:active {
          transform: translate(0, 1px);
          box-shadow: none;
        }
      }
    }
    .bottom {
      margin-top: 0.4rem;
      display: flex;
      flex-wrap: wrap;
      column-gap: 0.4rem;
    }
  }
`;

import { IoMdLock, IoMdUnlock } from 'react-icons/all';
import Tag from '../Global/Tag';

const RoomItem = ({ children, setOpenRoom }) => {
  const { categories, room_name, listening, isPrivate, roomId } = children;
  const { name, image, id } = children.owner;

  function handleJoin(e) {
    setOpenRoom({ id: roomId, name: room_name });
  }

  return (
    <StyledRoomItem>
      <div className='owner'>
        <div className='img-wrapper'>
          <img src={image} alt='' />
        </div>
        <div className='name'>
          <span>{name}</span>
        </div>
      </div>
      <div className='room-info'>
        <div className='top'>
          <div className='room-name'>
            <span>{room_name}</span>
            <div className='meta'>
              <div className='icon'>
                <div className='people-number'>{listening}</div>
              </div>
              <div className='icon'>
                {isPrivate ? (
                  <IoMdLock color='white' size={22} />
                ) : (
                  <IoMdUnlock color='white' size={22} />
                )}
              </div>
            </div>
          </div>
          <button className='join-btn' onClick={handleJoin}>
            Join
          </button>
        </div>
        <div className='bottom'>
          {categories.map((category, i) => {
            return <Tag key={i}>{category}</Tag>;
          })}
        </div>
        
      </div>
    </StyledRoomItem>
  );
};

export default RoomItem;
