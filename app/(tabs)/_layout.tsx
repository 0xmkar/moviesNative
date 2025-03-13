import React from 'react';
import {Tabs} from 'expo-router';
import { Text, Image, ImageBackground, ImageSourcePropType, View } from 'react-native';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

type HomeTabIconProps = {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
};

const TabIcon: React.FC<HomeTabIconProps> = ({ focused, icon, title }: any) => {
  if (focused){
  return (
    <ImageBackground 
      source={images.highlight}
      imageStyle={{ resizeMode: 'contain' }}
      style={{ transform: [{ translateX: 5 }] }} // change this to move the tabs left or right
      className={`flex flex-row justify-center items-center overflow-hidden mt-4 ${focused ? 'w-40 h-16' : 'w-32 h-10'}`}
    >
      <Image 
        source={icon}
        tintColor="#151312" 
        className="w-6 h-6"
      />
      <Text className="text-secondary text-base font-semibold ml-2">
        {title}
      </Text>
    </ImageBackground>
  );}
  else{
    return (
      <View className='size-full justify-center items-center mt-4 margin-full'>
        <Image source={icon} tintColor= '#A8B5DB' className='size-5' />
      </View>
    )
  }
};


const _Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false, 
      headerShown: false,
      tabBarItemStyle:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabBarStyle: {
        position: 'absolute', // allows you to position it freely
        bottom: 20,           // float above the bottom by 20px
        left: 20,
        right: 20,
        height: 50,           // adjust height to make it smaller
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#0f0d23',
        shadowColor: '#000',   // add shadow for a floating effect
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: "#0f0D23",
        marginHorizontal: 20,
        marginBottom: 5,
        overflow: 'hidden',

      },
     }}>
      <Tabs.Screen 
        name='index'
        options={{ 
          title: "Home",
          tabBarIcon:({ focused }) => <TabIcon 
          focused={focused}
          icon={icons.home}
          title="Home"
          />,
        }}
      />
      <Tabs.Screen 
        name='search'
        options={{ 
          title: "Search",
          tabBarIcon:({ focused }) => <TabIcon 
          focused={focused}
          icon={icons.search}
          title="Search"
          />,
        }}
      />
      <Tabs.Screen 
        name='saved'
        options={{ 
          title: "Saved",
          tabBarIcon:({ focused }) => <TabIcon 
          focused={focused}
          icon={icons.save}
          title="Save"
          />,
        }}
      />
      <Tabs.Screen 
        name='profile'
        options={{ 
          title: "Profile",
          tabBarIcon:({ focused }) => <TabIcon 
          focused={focused}
          icon={icons.person}
          title="Profile"
          />,
        }}
      />
    </Tabs>
  )
}

export default _Layout