import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import "../global.css";
import React from "react";
import { router, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="justify-center items-center w-full min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[138px] h-[84px] "
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className=" max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-white text-center font-plight test-[23px] ">
              I am working as a frontend developer at{""}
            </Text>
            <Text className="text-secondary-100 font-pregular text-[23px] text-center">
              D&S technologies
            </Text>
            <CustomButton
              title="Continue with E-mail"
              handlePress={() => router.push("/sign-in")}
              containerStyles="mt-7"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default index;
