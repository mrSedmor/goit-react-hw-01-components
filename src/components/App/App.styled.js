import styled from 'styled-components';

export const TaskList = styled.ul``;

export const Task = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;
