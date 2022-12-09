// Utils
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Status, Img, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Wrapper>
      <Status isOnline={isOnline}></Status>
      <Img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Wrapper>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
