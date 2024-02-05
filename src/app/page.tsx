"use client";

import Tabs from "@/components/Tabs";
import {
  AccordionIconOne,
  AccordionIconThree,
  AccordionIconTwo,
  TabCardIconFour,
  TabCardIconOne,
  TabCardIconThree,
  TabCardIconTwo,
} from "@/icons/icons";

const tabsData = [
  {
    tabTitle: "Summer",
    tabContent: "Explore the beauty of nature and enjoy the warmth of the sun.",
    tabIcon: <TabCardIconOne />,
    tabContentTitle: "Travel Essentials",
    tabContentParagraph:
      "Pack your bags with essentials and get ready for an unforgettable journey. Don't forget your sunscreen!",
    accordion: [
      {
        accordionTitle: "Hiking Trails",
        accordionContent:
          "Discover scenic hiking trails with breathtaking views.",
        accordionIcon: <AccordionIconOne />,
      },
      {
        accordionTitle: "Beach Bliss",
        accordionContent:
          "Relax on pristine beaches and feel the soothing sound of the waves.",
        accordionIcon: <AccordionIconTwo />,
      },
      {
        accordionTitle: "Local Cuisine",
        accordionContent:
          "Indulge in local delicacies and savor the flavors of the region.",
        accordionIcon: <AccordionIconThree />,
      },
      {
        accordionTitle: "Cultural Exploration",
        accordionContent:
          "Immerse yourself in the local culture and traditions of the destination.",
        accordionIcon: <AccordionIconTwo />,
      },
      {
        accordionTitle: "Adventurous Activities",
        accordionContent:
          "Try thrilling activities like zip-lining and paragliding for an adrenaline rush.",
        accordionIcon: <AccordionIconOne />,
      },
    ],
  },
  {
    tabTitle: "City Lights Escape",
    tabContent:
      "Experience the vibrant energy of the city lights and explore urban wonders.",
    tabIcon: <TabCardIconTwo />,
    tabContentTitle: "Urban Exploration",
    tabContentParagraph:
      "Discover the city's iconic landmarks, trendy neighborhoods, and vibrant nightlife.",
    accordion: [
      {
        accordionTitle: "Skyline Views",
        accordionContent:
          "Enjoy panoramic views of the city skyline from observation decks.",
        accordionIcon: <AccordionIconOne />,
      },
      {
        accordionTitle: "Culinary Delights",
        accordionContent:
          "Savor diverse cuisines and explore the local food scene.",
        accordionIcon: <AccordionIconTwo />,
      },
      {
        accordionTitle: "Cultural Hotspots",
        accordionContent:
          "Visit museums, art galleries, and cultural hotspots for a dose of creativity.",
        accordionIcon: <AccordionIconThree />,
      },
      {
        accordionTitle: "Nightlife Extravaganza",
        accordionContent:
          "Experience the city's nightlife with trendy bars and live entertainment.",
        accordionIcon: <AccordionIconTwo />,
      },
      {
        accordionTitle: "Shopping Spree",
        accordionContent:
          "Indulge in retail therapy with shopping districts and boutiques.",
        accordionIcon: <AccordionIconOne />,
      },
    ],
  },
  {
    tabTitle: "Mountain Retreat",
    tabContent:
      "Escape to the tranquility of the mountains and breathe in the fresh alpine air.",
    tabIcon: <TabCardIconThree />,
    tabContentTitle: "Nature Immersion",
    tabContentParagraph:
      "Experience the beauty of dense forests, cascading waterfalls, and serene mountain lakes.",
    accordion: [
      {
        accordionTitle: "Scenic Trails",
        accordionContent:
          "Embark on picturesque hiking trails surrounded by breathtaking landscapes.",
        accordionIcon: <AccordionIconOne />,
      },
      {
        accordionTitle: "Wildlife Encounters",
        accordionContent:
          "Spot diverse wildlife and connect with the natural habitat.",
        accordionIcon: <AccordionIconTwo />,
      },
      {
        accordionTitle: "Campfire Nights",
        accordionContent:
          "Enjoy cozy campfire nights with stargazing and storytelling.",
        accordionIcon: <AccordionIconThree />,
      },
      {
        accordionTitle: "Mountain Biking",
        accordionContent:
          "Feel the adrenaline rush with thrilling mountain biking adventures.",
        accordionIcon: <AccordionIconTwo />,
      },
      {
        accordionTitle: "Peaceful Retreats",
        accordionContent:
          "Find solace in peaceful mountain retreats and rejuvenate your soul.",
        accordionIcon: <AccordionIconOne />,
      },
    ],
  },
  {
    tabTitle: "Tropical Paradise",
    tabContent:
      "Immerse yourself in the tropical vibes of palm-fringed beaches and turquoise waters.",
    tabIcon: <TabCardIconFour />,
    tabContentTitle: "Island Adventures",
    tabContentParagraph:
      "Discover hidden coves, coral reefs, and vibrant marine life in the tropical paradise.",
    accordion: [
      {
        accordionTitle: "Snorkeling Bliss",
        accordionContent:
          "Dive into crystal-clear waters for an enchanting snorkeling experience.",
        accordionIcon: <AccordionIconOne />,
      },
      {
        accordionTitle: "Beachside Relaxation",
        accordionContent:
          "Unwind on pristine beaches with white sand and swaying palm trees.",
        accordionIcon: <AccordionIconTwo />,
      },
      {
        accordionTitle: "Tropical Cuisine",
        accordionContent:
          "Savor exotic tropical fruits and local delicacies by the beach.",
        accordionIcon: <AccordionIconThree />,
      },
      {
        accordionTitle: "Island Hopping",
        accordionContent:
          "Explore neighboring islands and their unique attractions.",
        accordionIcon: <AccordionIconTwo />,
      },
      {
        accordionTitle: "Sunset Serenity",
        accordionContent:
          "Witness breathtaking sunsets over the horizon for a magical experience.",
        accordionIcon: <AccordionIconOne />,
      },
    ],
  },
];

export default function page() {
  return (
    <section className="py-[80px]">
      <div className="container mx-auto">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-8">
            <h2>Section title</h2>
            <h3>Section Subtitle</h3>
          </div>
          <Tabs tabsData={tabsData} />
        </div>
      </div>
    </section>
  );
}
