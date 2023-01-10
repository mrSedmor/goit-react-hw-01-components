import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';

import { TaskList, Task } from './App.styled';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <TaskList>
      <Task key="task-1">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Task>
      <Task key="task-2.1">
        <Statistics title="Upload stats" stats={data} />
      </Task>
      <Task key="task-2.2">
        <Statistics stats={data} />
      </Task>
      <Task key="task-3">
        <FriendList friends={friends} />
      </Task>
      <Task key="task-4">
        <TransactionHistory items={transactions} />
      </Task>
    </TaskList>
  );
};
