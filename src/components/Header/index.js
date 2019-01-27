import React from 'react';

import { Container, Search, User } from './styles';

const Player = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars2.githubusercontent.com/u/2053554?v=4"
        alt="Avatar"
      />
      André Morita
    </User>
  </Container>
);

export default Player;
