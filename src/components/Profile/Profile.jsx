// Utils
import PropTypes from 'prop-types';

// Styles
import {
  Container,
  Description,
  Img,
  Title,
  BasicText,
  StatsList,
  StatsItem,
  EmphText,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Img src={avatar} alt={username} width={120} />
        <Title>{username}</Title>
        <BasicText>{tag}</BasicText>
        <BasicText>{location}</BasicText>
      </Description>

      <StatsList>
        <StatsItem>
          <BasicText>Followers</BasicText>
          <EmphText>{stats.followers}</EmphText>
        </StatsItem>
        <StatsItem>
          <BasicText>Views</BasicText>
          <EmphText>{stats.views}</EmphText>
        </StatsItem>
        <StatsItem>
          <BasicText>Likes</BasicText>
          <EmphText>{stats.likes}</EmphText>
        </StatsItem>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
