import styled from 'styled-components';
export const Container = styled.section`
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: clip;
  max-width: 640px;
`;
export const Title = styled.h2`
  padding: 32px 16px;
  text-align: center;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.03em;
  color: #595959;

  text-transform: uppercase;
`;
export const StatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2px;

  padding: 7px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: 0.03em;
  color: #ffffff;
  background-color: ${({ bgColor }) => bgColor || '#707070'};
`;
export const Label = styled.span`
  font-size: 16px;
`;
export const Percentage = styled.span`
  font-size: 24px;
`;
