import {
  CloudOrbit,
  OrbitingImage,
} from "@/components/ui/cloud-orbit"
import {
  Brain,
  Database,
  Sparkles,
  Cloud,
  Palette,
  Zap,
  Globe,
  Code2,
  Rocket,
  Shield,
  Camera,
  Music,
} from "lucide-react"
import React from "react"

// Create wrapper components for the icons
const AIIcon = ({ size, className }) => <Brain size={size} className={className} />;
const DatabaseIcon = ({ size, className }) => <Database size={size} className={className} />;
const AnimationIcon = ({ size, className }) => <Sparkles size={size} className={className} />;
const CloudIcon = ({ size, className }) => <Cloud size={size} className={className} />;
const DesignIcon = ({ size, className }) => <Palette size={size} className={className} />;
const LightningIcon = ({ size, className }) => <Zap size={size} className={className} />;
const GlobeIcon = ({ size, className }) => <Globe size={size} className={className} />;
const CodeIcon = ({ size, className }) => <Code2 size={size} className={className} />;
const RocketIcon = ({ size, className }) => <Rocket size={size} className={className} />;
const ShieldIcon = ({ size, className }) => <Shield size={size} className={className} />;
const CameraIcon = ({ size, className }) => <Camera size={size} className={className} />;
const MusicIcon = ({ size, className }) => <Music size={size} className={className} />;

const orbitingImagesData = [
  {
    speed: 20,
    radius: 119,
    size: 60,
    startAt: 0.15625,
    images: [
      {
        name: "AI Icon",
        Component: AIIcon,
        props: { className: "text-indigo-600" }
      },
      {
        name: "Database Icon",
        Component: DatabaseIcon,
        props: { className: "text-blue-600" }
      },
    ],
  },
  {
    speed: 20,
    radius: 118,
    size: 90,
    startAt: 0.25,
    images: [
      {
        name: "Animation Icon",
        Component: AnimationIcon,
        props: { className: "text-yellow-500" }
      },
      {
        name: "Cloud Icon",
        Component: CloudIcon,
        props: { className: "text-blue-400" }
      },
    ],
  },
  {
    speed: 20,
    radius: 130,
    size: 78,
    startAt: 0.4375,
    images: [
      {
        name: "Design Icon",
        Component: DesignIcon,
        props: { className: "text-pink-500" }
      },
      {
        name: "Lightning Icon",
        Component: LightningIcon,
        props: { className: "text-yellow-400" }
      },
    ],
  },
  {
    speed: 20,
    radius: 120,
    size: 55,
    startAt: 0.61,
    images: [
      {
        name: "Globe Icon",
        Component: GlobeIcon,
        props: { className: "text-green-500" }
      },
      {
        name: "Code Icon",
        Component: CodeIcon,
        props: { className: "text-gray-700" }
      },
    ],
  },
  {
    speed: 20,
    radius: 180,
    size: 55,
    startAt: 0.61,
    images: [
      {
        name: "Rocket Icon",
        Component: RocketIcon,
        props: { className: "text-red-500" }
      },
      {
        name: "Shield Icon",
        Component: ShieldIcon,
        props: { className: "text-blue-700" }
      },
    ],
  },
]

export default function CloudOrbitDemo() {
  return (
    <div className="relative mx-auto flex items-center justify-center p-4">
      <CloudOrbit
        duration={3}
        size={200}
        images={[
          {
            name: "Camera Icon",
            Component: CameraIcon,
            props: { className: "text-purple-600" }
          },
          {
            name: "Music Icon",
            Component: MusicIcon,
            props: { className: "text-pink-500" }
          },
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
            className="rounded-full bg-gradient-to-br from-primary/10 to-primary/5 
                       p-3 shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-6"
          />
        ))}
      </CloudOrbit>
    </div>
  )
}