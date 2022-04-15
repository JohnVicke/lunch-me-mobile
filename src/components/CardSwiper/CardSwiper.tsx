import React, { useState } from "react";
import Swiper from "react-native-deck-swiper";
import { Card } from "./Card";
import { CardOverlayLabel } from "./CardOverlayLabel";

interface CardSwiperProps {}

export const CardSwiper = ({}: CardSwiperProps): JSX.Element => {
  const [swiper, setSwiper] = useState<Swiper<{ imageUri: string }> | null>(
    null
  );

  const handleOnSwipedLeft = () => swiper?.swipeLeft();
  const handleOnSwipedTop = () => swiper?.swipeTop();
  const handleOnSwipedRight = () => swiper?.swipeRight();
  const handleRegret = () => swiper?.swipeBack();

  const imageUri =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80";

  const cards = [{ imageUri }, { imageUri }, { imageUri }];

  return (
    <Swiper
      animateCardOpacity
      stackSize={2}
      cardIndex={0}
      backgroundColor="#fff"
      infinite
      showSecondCard
      ref={(swiper) => setSwiper(swiper)}
      cards={cards}
      stackScale={5}
      outputRotationRange={["-5deg", "0deg", "5deg"]}
      renderCard={(card) => <Card {...card} />}
      overlayLabels={{
        left: {
          element: <CardOverlayLabel color="red" label="NOPE" />,
          title: "NOPE",
          style: {
            wrapper: {
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              marginTop: 30,
              marginLeft: -30,
            },
          },
        },
        right: {
          element: <CardOverlayLabel color="green" label="YES" />,
          title: "YES",
          style: {
            wrapper: {
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginTop: 30,
              marginLeft: 30,
            },
          },
        },
      }}
    />
  );
};
