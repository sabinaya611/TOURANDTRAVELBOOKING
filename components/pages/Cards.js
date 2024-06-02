// Cards.js
import React from 'react';
import CardItem from './CardItem'; // Adjust the path if necessary

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://media.istockphoto.com/id/1017183598/photo/young-man-arms-outstretched-at-spectacular-waterfall-in-iceland.webp?b=1&s=170667a&w=0&k=20&c=6lzx1XZHpM2NjzKtpmN_fgFzqq_mr-rW6iUFkt2--y0="
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://media.istockphoto.com/id/1474551551/photo/a-birds-eye-view-of-jungle-beach-unawatuna-sri-lanka.jpg?s=612x612&w=0&k=20&c=-NdZp5sGwbcNbhnP0pUmwrW8hyKdpXOqXxR-LEIN_Cs="
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://media.istockphoto.com/id/1432818770/photo/drone-view-of-a-boat-sailing-across-the-dark-water-of-the-lake.jpg?s=612x612&w=0&k=20&c=eQw1I0xydW7JaHfdzNx5wvtUUjiGuzI-BuTuxKgjBo8="
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="https://media.istockphoto.com/id/1693586292/photo/aerial-view-of-a-soccer-field-and-a-tennis-court-spaces-for-activity-and-competition-forest.jpg?s=612x612&w=0&k=20&c=jzHTeiuDHUnc17q4VuDqvI5gsrY-X-OhRoDIvLWOA9w="
              text="Experience Football on Top of the Himalayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="https://media.istockphoto.com/id/1954714661/photo/young-tuareg-with-camels-on-western-sahara-desert-in-africa.jpg?s=612x612&w=0&k=20&c=lRdCVbQ9koS1OwEeTLJ9uuhGuGJeUS1Z9RX-8j9UUmY="
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
