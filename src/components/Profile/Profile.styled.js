import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 280px;

  background: #ffffff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: clip;
`;

export const Description = styled.div`
  padding: 32px;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-position: center;
  object-fit: cover;

  margin: 0 auto 24px auto;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.36;
  margin-bottom: 8px;
`;

export const Location = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.36;
  color: #aeaeae;
`;

export const Tag = styled(Location)`
  margin-bottom: 8px;
`;

export const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));

  background: #f3f3f3;
  border-top: 1px solid #aeaeae;

  & > li {
    padding: 18px 8px;
    text-align: center;
  }

  & > li:not(:last-child) {
    border-right: 1px solid #aeaeae;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  line-height: 1.36;
  margin-bottom: 3px;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.36;
`;
