/* eslint-disable quotes */
import styled from "styled-components";

export const ListContainer = styled.div`
  display: block;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 40px;
`;

export const ListTitle = styled.h2`
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-size: 20px;
  opacity: 0.8;
  margin: 0;
  padding-bottom: 5px;
  border-bottom: 1px dashed #ccc;

  span {
    font-weight: 500;
  }
`;

export const ListItems = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListItemLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const ListItemTitle = styled.h3`
  display: inline-block;
  margin: 0;
  font-size: 14px;
  transition: all 0.3s ease;
`;

export const ListItemDesc = styled.p`
  margin: 0;
  font-size: 12px;
  transition: all 0.3s ease;
  color: #888;
  margin: 10px 10px 0;
`;

export const ListItem = styled.li`
  display: block;
  padding: 15px 0 0;
  transition: all 0.3s ease;

  &:hover {
    background: #000;
    padding: 15px;

    ${ListItemTitle} {
      color: #fff;
    }
    ${ListItemDesc} {
      color: #fff;
    }
  }
`;
