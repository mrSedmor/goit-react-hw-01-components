import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{formatQuantity(followers)}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{formatQuantity(views)}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{formatQuantity(likes)}</Quantity>
        </li>
      </Stats>
    </Container>
  );
}

Profile.defaultProps = {
  stats: {},
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

function formatQuantity(number) {
  return number && number.toLocaleString('en-US');
}
