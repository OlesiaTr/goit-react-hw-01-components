// Utils
import PropTypes from 'prop-types';

//Components
import { FriendListItem } from './FriendListItem';

// Styles
import { List, Item } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {[...friends].map(friend => {
        return (
          <Item key={friend.id}>
            <FriendListItem friend={friend} />
          </Item>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
