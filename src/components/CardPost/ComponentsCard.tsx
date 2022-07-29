import styled from 'styled-components';

export const TextPost = styled.p`
  height: 30px;
  font-size: 1em;
  text-align: center;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HeaderSection = styled.div`
  cursor: pointer;
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
`;
export const Button = styled.button`
  background-color: #008cba;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
`;
