import React from 'react';
import { FlatList } from 'react-native';

import repositories from '../../data';
import RepositoryItem from './RepositoryItem';

const RepositoryList = () => {
  return (
    <FlatList data={repositories}
      renderItem={RepositoryItem}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;
