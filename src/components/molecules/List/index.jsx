import { arrayOf, string } from 'prop-types';
import React from 'react';

import {
  ListContainer,
  ListTitle,
  ListItems,
  ListItem,
  ListItemLink,
  ListItemTitle,
  ListItemDesc,
} from './style';

function List(props) {
  const {
    category,
    projects,
  } = props;

  return (
    <ListContainer>
      <ListTitle>
        {category}
      </ListTitle>
      <ListItems>
        {projects.map((project) => (
          <ListItemLink key={project.title} href={project.link} target="blank">
            <ListItem>
              <ListItemTitle>{project.title}</ListItemTitle>
              <ListItemDesc>{project.description}</ListItemDesc>
            </ListItem>
          </ListItemLink>
        ))}
      </ListItems>
    </ListContainer>
  );
}

List.propTypes = {
  category: string.isRequired,
  projects: arrayOf({
    title: string,
    link: string,
    description: string,
  }).isRequired,
};

export default List;
