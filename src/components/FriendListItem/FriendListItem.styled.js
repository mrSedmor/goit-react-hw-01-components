import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: 12px;
  padding: 6px 12px;
  background-color: ${p => p.theme.backgroundColor.primary};
  box-shadow: ${p => p.theme.boxShadow};
  border-radius: 2px;
`;

export const Status = styled.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? '#47af4e' : '#fb5450')};
`;

export const Avatar = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 4px;
  object-position: center;
  object-fit: contain;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.35;
`;
