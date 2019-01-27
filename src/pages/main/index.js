import React from 'react';

import { Wrapper, Container } from '../../styles/components';
import Sidebar from '../../components/Sidebar';
import Player from '../../components/Player';

const Main = () => (
  <Wrapper>
    <Container>
      <Sidebar />
    </Container>
    <Player />
  </Wrapper>
);

export default Main;
