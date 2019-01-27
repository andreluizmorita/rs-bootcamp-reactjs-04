import styled from 'styled-components';

import SearchIcon from '../../assets/images/search.svg';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 10px 0 0;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 175px;
  padding: 6px 7px 6px 26px;
  background: #fff url(${SearchIcon}) no-repeat 7px center;

  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
  }
`;

export const User = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;

  img {
    width: 27px;
    height: 27px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;
