import { Tabs, useLocalSearchParams, useGlobalSearchParams, usePathname } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const localSearchParams = useLocalSearchParams();
  const globalSearchParams = useGlobalSearchParams();

  console.log('localSearchParams', localSearchParams);
  console.log('globalSearchParams', globalSearchParams);

  const pathname = usePathname();
  console.log('pathname', pathname);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
          ),
          // href: '/search'
        }}
      />
      <Tabs.Screen
        name="(explore)/[userId]/index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
          href: {
            pathname: '/(explore)/[userId]',
            params: {
              userId: '1',
            },
          },
        }}
      />
      <Tabs.Screen
        name="(alt-explore)/[userId]/index"
        options={{
          href: null,
          title: 'Alt Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
