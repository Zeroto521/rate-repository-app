import React from 'react';
import { FlatList } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node) : [];

  return (
    <FlatList data={repositoryNodes}
      renderItem={RepositoryItem}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;
