import getBadge from './Achievements';
import StyledAchievements from './styled';

const Achievements = ({ achievements }) => {
  return (
    <StyledAchievements>
      {achievements &&
        achievements.map((achievementId) => {
          const { Icon, name, description } = getBadge[achievementId];
          return (
            <div className='badge' key={achievementId}>
              <div className='img-wrapper'>
                <Icon size='100%' />
              </div>
              <div className='description'>{description}</div>
            </div>
          );
        })}
    </StyledAchievements>
  );
};

export default Achievements;
