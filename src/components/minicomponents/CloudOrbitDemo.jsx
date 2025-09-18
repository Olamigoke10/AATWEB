import React from "react";
import { CloudOrbit, OrbitingImage } from "@/components/ui/cloud-orbit";
import {
  Github,
  Twitter,
  Chrome,
  Cpu,
  Database,
  Code2,
  Globe,
  Star,
} from "lucide-react";

const orbitingImagesData = [
  {
    speed: 20,
    radius: 119,
    size: 60, // slightly larger for clarity
    startAt: 0.15625,
    images: [
      { name: "GitHub", Component: Github },
      { name: "Twitter", Component: Twitter },
    ],
  },
  {
    speed: 20,
    radius: 118,
    size: 90,
    startAt: 0.25,
    images: [
      { name: "Chrome", Component: Chrome },
      { name: "Cpu", Component: Cpu },
    ],
  },
  {
    speed: 20,
    radius: 130,
    size: 78,
    startAt: 0.4375,
    images: [
      { name: "Database", Component: Database },
      { name: "Code", Component: Code2 },
    ],
  },
  {
    speed: 20,
    radius: 120,
    size: 55,
    startAt: 0.61,
    images: [
      { name: "Globe", Component: Globe },
      { name: "Star", Component: Star },
    ],
  },
];

export default function CloudOrbitDemo() {
  return (
    <div className="relative mx-auto flex items-center justify-center p-4">
      <CloudOrbit
        duration={3}
        size={200} // slightly larger overall orbit
        images={[
            { name: "Globe", Component: Globe },
            { name: "Star", Component: Star },
        ]}
        className="drop-shadow-xl"
      >
        {orbitingImagesData.map((orbit, index) => (
          <OrbitingImage
            key={index}
            speed={orbit.speed}
            radius={orbit.radius}
            size={orbit.size}
            startAt={orbit.startAt}
            images={orbit.images}
            duration={3}
            // Add a nice background + hover animation
            className="rounded-full bg-gradient-to-br from-primary/10 to-primary/5 
                       p-3 shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-6"
          />
        ))}
      </CloudOrbit>
    </div>
  );
}
