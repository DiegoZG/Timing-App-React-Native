import React from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  List,
  SafeAreaView,
  Text,
} from 'react-native';

import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}> Things we've focused on </Text>
            <FlatList
              style={{ flex: 1, fontWeight: 20 }}
              contentContainerStyle={{ flex: 1, alignItems: 1 }}
              data={focusHistory}
              renderItem={HistoryItem}
            />

            <View style={styles.clearContainer}>
              <RoundedButton size={70} title="Clear" onPress={() => onClear()} />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.lg,
    fontWeight: fontSizes.lg,
  }),
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
