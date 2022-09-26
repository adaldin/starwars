import "./home.css";
// React
import { Link } from "react-router-dom";
// Components
import AdvancedBannerTop from "../components/advancedBannerTop/AdvancedBannerTop";
// Parallax
import { ParallaxProvider } from "react-scroll-parallax";
// Bootstrap
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      <div className="center full d-flex flex-column gap-2">
        <div className="w-50">
          <p className="text-center text-white">
            During the battle, Rebel spies managed to steal secret plans to the
            Empire’s ultimate weapon, the DEATH STAR, and space station with
            enough power to destroy an entire planet.  Pursued by the Empire’s
            sinister agents, Princess Leia races home aboard her starship,
            custodian of the stolen plans that can save her people and restore
            freedom to the galaxy….
          </p>
        </div>
        <h1 className="headline gray text-warning">
          May the Force be with you
        </h1>
        <div>
          <Button
            as={Link}
            to={"/starships"}
            className="btn-starships "
            variant="outline-light"
          >
            Discover the starships
          </Button>
        </div>
      </div>
    </ParallaxProvider>
  );
}
export default Home;
