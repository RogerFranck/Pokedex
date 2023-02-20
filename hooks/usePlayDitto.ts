import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export default function usePlayDitto() {
  const [dittoView, setdittoView] = useState<Boolean>(false);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/ditto/Conga.mp3")
    );
    await sound.playAsync();
    setTimeout(() => {
      sound.stopAsync();
    }, 10000);
  };

  const handleDitto = () => {
    playSound();
    setdittoView(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setdittoView(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, [dittoView]);

  return {
    dittoView,
    handleDitto,
  };
}
