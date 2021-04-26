import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles, COLORS, SIZES } from '../Styles';
import { Ionicons } from '@expo/vector-icons';
import { CreatePost } from '../Components/CreatePost';
import { LetusApiClient } from '../LetusApiClient';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  function doSave(text) {
    setShowModal(false);
    LetusApiClient.createPost(text);
  }

  return (
    <View style={styles.header}>
      <Ionicons name='menu-outline' size={SIZES.icon} color={COLORS.light} />
      <Text style={styles.headerText}>Letus</Text>
      <Pressable onPress={() => setShowModal(true)}>
        <Ionicons
          name='create-outline'
          size={SIZES.icon}
          color={COLORS.light}
        />
      </Pressable>
      <CreatePost
        shown={showModal}
        onCancel={() => setShowModal(false)}
        onSave={doSave}
      />
    </View>
  );
};
