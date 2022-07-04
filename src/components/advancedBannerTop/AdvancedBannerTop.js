// Img
import bgStars from "../../assets/bg-body.jpeg";
import bgMountains from "../../assets/bg-mountains.png";
// Parallax
import { ParallaxBanner } from "react-scroll-parallax";

const AdvancedBannerTop = () => {
  const background = {
    image: bgStars,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <div className="d-flex flex-column text-start text-white w-75">
          <h1 className="headline white text-start text-warning">
            A long time ago in a galaxy far, far away....
          </h1>
          <p>
            Rebel spaceships, striking from a hidden base, have won their first
            victory against the evil Galactic Empire.
          </p>
        </div>
      </div>
    ),
  };

  const foreground = {
    image: bgMountains,
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="full"
    />
  );
};

export default AdvancedBannerTop;
