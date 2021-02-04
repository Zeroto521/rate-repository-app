import React from 'react';
import { Avatar, Card, Button, DataTable } from 'react-native-paper';


const NumberShowing = ({ number }) => {
  if (number > 1000)
    return `${(number / 1000).toFixed(1)}k`;
  else
    return number;
};


const RepositoryItem = ({ item }) => {

  const LeftContent = () => <Avatar.Image size={50} source={item.ownerAvatarUrl} />;

  return (
    <Card>
      <Card.Title title={item.fullName} subtitle={item.description} subtitleNumberOfLines={2} left={LeftContent} />
      <Card.Content>
        <Button mode="contained" >{item.language}</Button>
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell><NumberShowing number={item.stargazersCount} /></DataTable.Cell>
            <DataTable.Cell><NumberShowing number={item.forksCount} /></DataTable.Cell>
            <DataTable.Cell><NumberShowing number={item.reviewCount} /></DataTable.Cell>
            <DataTable.Cell><NumberShowing number={item.ratingAverage} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Header>
            <DataTable.Title>Stars</DataTable.Title>
            <DataTable.Title>Forks</DataTable.Title>
            <DataTable.Title>Reviews</DataTable.Title>
            <DataTable.Title>Rating</DataTable.Title>
          </DataTable.Header>
        </DataTable>
      </Card.Content>
    </Card>
  );
};

export default RepositoryItem;
