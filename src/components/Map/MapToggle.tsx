import { useEffect, useRef, useState } from "react";
import Switch from "./ToggleSwitch";

const ToggleMap = () => {
  const [isColorMap, setIsColorMap] = useState(false);
  const [pathsVisibility, setPathsVisibility] = useState({
    frodoSam: false,
    aragorn: false,
    boromir: false,
    gandalfGrey: false,
    gandalfWhite: false,
    legolasGimli: false,
    merry: false,
    pippin: false,
  });

  const svgRef = useRef<HTMLObjectElement>(null);

  const idMap: Record<keyof typeof pathsVisibility, string> = {
    frodoSam: "layer1",
    merry: "layer2",
    pippin: "layer3",
    aragorn: "layer4",
    legolasGimli: "layer5",
    boromir: "layer6",
    gandalfGrey: "layer7",
    gandalfWhite: "layer8",
  };

  useEffect(() => {
    const svgDoc = svgRef.current?.contentDocument;
    if (!svgDoc) return;

    Object.entries(pathsVisibility).forEach(([key, isVisible]) => {
      const svgId = idMap[key as keyof typeof idMap];
      const element = svgDoc.getElementById(svgId);
      if (element) {
        element.style.display = isVisible ? "inline" : "none";
      }
    });
  }, [pathsVisibility]);

  const togglePath = (key: keyof typeof pathsVisibility) => {
    setPathsVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-nazgul_gray p-6 md:p-20">
      {/* Leaves Background */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/images/leaves_texture.svg')] bg-cover opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Toggle Switches */}
      <div className="z-20 flex flex-wrap justify-center gap-4 mb-8">
        <Switch handleSwitchChange={() => setIsColorMap((prev) => !prev)} label="Toggle Map Color" />
        <Switch handleSwitchChange={() => togglePath("frodoSam")} label="Frodo & Sam" />
        <Switch handleSwitchChange={() => togglePath("aragorn")} label="Aragorn" />
        <Switch handleSwitchChange={() => togglePath("boromir")} label="Boromir" />
        <Switch handleSwitchChange={() => togglePath("gandalfGrey")} label="Gandalf Grey" />
        <Switch handleSwitchChange={() => togglePath("gandalfWhite")} label="Gandalf White" />
        <Switch handleSwitchChange={() => togglePath("legolasGimli")} label="Legolas & Gimli" />
        <Switch handleSwitchChange={() => togglePath("merry")} label="Merry" />
        <Switch handleSwitchChange={() => togglePath("pippin")} label="Pippin" />
      </div>

      {/* Map Container - Responsive Fullscreen */}
      <div className="relative z-10 w-full h-[80vh] max-w-screen-2xl mx-auto">
        <object
          ref={svgRef}
          type="image/svg+xml"
          data={isColorMap ? "/src/assets/images/middle_earth_color_paths.svg" : "/src/assets/images/middle_earth_paths.svg"}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ToggleMap;
