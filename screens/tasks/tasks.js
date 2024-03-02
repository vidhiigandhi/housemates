import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar } from '@mui/material';
import { Typography, List, Paper } from '@mui/material';

const TaskPage = () => {
  // Dummy data for tasks
  const tasks = [
    { id: 1, name: 'John Doe', task: 'Complete UI design' },
    { id: 2, name: 'Jane Smith', task: 'Implement backend logic' },
    { id: 3, name: 'Alice Johnson', task: 'Test application' },
  ];

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.heading}>Tasks</Text>
      <Paper style={styles.innerContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <List>
            {tasks.map(task => (
              <List.Item
                key={task.id}
                disableGutters
                left={() => (
                  <Avatar alt={task.name} />
                )}
              >
                <View style={styles.textContainer}>
                  <Typography variant="h6">{task.name}</Typography>
                  <Typography variant="body1">{task.task}</Typography>
                </View>
              </List.Item>
            ))}
          </List>
        </ScrollView>
      </Paper>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  innerContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    padding: 10,
  },
  scrollView: {
    flexGrow: 1,
  },
  textContainer: {
    marginLeft: 10,
  },
});

export default TaskPage;
