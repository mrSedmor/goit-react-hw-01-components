import { Profile, Statistics } from './';
import css from './App.module.css';
import user from 'data/user.json';
import data from 'data/data.json';

export const App = () => {
  return (
    <ul className={css.taskList}>
      <li key="task-1" className={css.task}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </li>
      <li key="task-1.1" className={css.task}>
        <Statistics title="Upload stats" stats={data} />
      </li>
      <li key="task-1.2" className={css.task}>
        <Statistics stats={data} />
      </li>
    </ul>
  );
};
