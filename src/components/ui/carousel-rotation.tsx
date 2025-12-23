import React from "react";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";

const portfolioData: GalleryItem[] = [
  {
    title: "Brand Identity Design",
    category: "Branding & Design",
    media: {
      url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=900&auto=format&fit=crop&q=80",
      text: "modern brand identity design with logo and colors",
      pos: "50% 30%",
      by: "Daniekeys Studio",
      type: "image",
    },
  },
  {
    title: "Motion Graphics",
    category: "Animation & Motion",
    media: {
      url: "/videos/motion-vids3.mp4",
      text: "dynamic motion graphics animation",
      pos: "50% 40%",
      by: "Daniekeys Studio",
      type: "video",
    },
  },
  {
    title: "Web Development",
    category: "Digital Experience",
    media: {
      url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&auto=format&fit=crop&q=80",
      text: "modern website development on laptop",
      pos: "50% 45%",
      by: "Daniekeys Studio",
      type: "image",
    },
  },
  {
    title: "UI/UX Design",
    category: "User Experience",
    media: {
      url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&auto=format&fit=crop&q=80",
      text: "user interface design wireframes",
      pos: "50% 35%",
      by: "Daniekeys Studio",
      type: "image",
    },
  },
  {
    title: "Video Production",
    category: "Content Creation",
    media: {
      url: "/videos/motion-vids4.mp4",
      text: "professional video production",
      pos: "50% 40%",
      by: "Daniekeys Studio",
      type: "video",
    },
  },
  {
    title: "Social Media Strategy",
    category: "Digital Marketing",
    media: {
      url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&auto=format&fit=crop&q=80",
      text: "social media marketing strategy",
      pos: "50% 45%",
      by: "Daniekeys Studio",
      type: "image",
    },
  },
  {
    title: "E-commerce Solutions",
    category: "Digital Commerce",
    media: {
      url: "/videos/motion-vids5.mp4",
      text: "e-commerce platform development",
      pos: "50% 40%",
      by: "Daniekeys Studio",
      type: "video",
    },
  },
  {
    title: "Creative Campaigns",
    category: "Brand Strategy",
    media: {
      url: "/videos/motion-vids1.mp4",
      text: "creative marketing campaign design",
      pos: "50% 35%",
      by: "Daniekeys Studio",
      type: "video",
    },
  },
];

const CarouselRotation = () => {
  return (
    // This outer container provides the scrollable height
    <div
      className="w-full bg-background text-foreground"
      style={{ height: "600vh" }}
    >
      {/* This inner container sticks to the top while scrolling */}
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-16 z-10">
          <h1 className="text-4xl font-bold text-primary">
            Our Creative Portfolio
          </h1>
          <p className="text-muted-foreground mt-2">
            Scroll to explore our work in 3D
          </p>
        </div>
        <div className="w-full h-full">
          <CircularGallery
            items={portfolioData}
            radius={500}
            autoRotateSpeed={0.1}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselRotation;
