import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, List, Colors } from 'react-native-paper';

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
      <View style={styles.innerContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <List.Section>
            {tasks.map(task => (
              <List.Item
                key={task.id}
                title={task.name} 
                description={task.task}
                left={() => (
                  <Avatar.Image
                    size={50}
                  />
                )}
                titleStyle={styles.title}
                descriptionStyle={styles.description}
              />
            ))}
          </List.Section>
        </ScrollView>
      </View>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: Colors.grey600,
  },
});

export default TaskPage;
