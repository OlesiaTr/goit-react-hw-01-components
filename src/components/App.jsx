// Styles
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';

// Components
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './Friends';
import { TransactionHistory } from './TransactionHistory';

// Instruments
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
