import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  background: #e4e4e4;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 100%;
  max-width: 640px;
  border-collapse: collapse;
`;

export const Row = styled.tr`
  height: 40px;
`;

export const HeaderRow = styled.tr`
  height: 40px;
`;

export const HeaderCell = styled.th`
  font-weight: 600;
  font-size: 14px;
  line-height: 1export const 36;

  color: #ffffff;
  background-color: #00bcd5;
  text-transform: uppercase;
  text-align: center;
  padding: 0 8px;

  &:first-child {
    border-top-left-radius: 4px;
  }
  &:last-child {
    border-top-right-radius: 4px;
  }

  &:not(:last-child) {
    border-right: 2px solid #e4e4e4;
  }
`;

export const Cell = styled.td`
  padding: 0 8px;
  font-size: 13px;
  line-height: 1export const 36;
  text-align: center;
  background-color: #ffffff;

  &:not(:last-child) {
    border-right: 2px solid #e4e4e4;
  }

  ${Row}:nth-child(even) > & {
    background: #d4d9dd;
  }

  ${Row}:last-child >  &:first-child {
    border-bottom-left-radius: 4px;
  }

  ${Row}:last-child >  &:last-child {
    border-bottom-right-radius: 4px;
  }
`;
