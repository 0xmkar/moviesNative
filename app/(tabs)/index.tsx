import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, View } from "react-native";
import { useRouter } from "expo-router";

import SearchBar from "@/components/SearchBar";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <Image source={images.bg} className="absolute w-full z-0" />
      
      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, minHeight: "100%", paddingBottom: 10}}
      > 
      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
      <View>
        <SearchBar 
          onPress={() => router.push("/search")}
          placeHolder="Search for a movie"
        />
      </View>
      </ScrollView>
    </View>
  );
}
