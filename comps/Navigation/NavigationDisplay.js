import styled from "styled-components";
import Dashboard from "../Dashboard";
import LearnMoreAll from "../LearnMore/LearnMoreAll";
import LearnMoreNew from "../LearnMore/LearnMoreNew";
import LocationsAll from "../Locations/LocationsAll";
import LocationsNew from "../Locations/LocationsNew";
import MediaAudio from "../Media/MediaAudio";
import MediaImages from "../Media/MediaImages";
import MediaVideo from "../Media/MediaVideo";
import PlantsAll from "../Plants/PlantsAll";
import PlantsCategories from "../Plants/PlantsCategory";
import PlantsNew from "../Plants/PlantsNew";
import Profile from "../Profile/Profile";
import TagsAll from "../Tags/TagsAll";
import TagsNew from "../Tags/TagsNew";
import UsersAll from "../Users/UsersAll";
import UsersNew from "../Users/UsersNew";
import WaypointsAll from "../Waypoints/WaypointsAll";
import WaypointsCategory from "../Waypoints/WaypointsCategory";
import WaypointsNew from "../Waypoints/WaypointsNew";

export default function NavigationDisplay({ display }) {
  return (
    <>
      {
        //Dashboard
        display.name === "Dashboard" ? (
          <Dashboard />
        ) : //Plants
        display.name === "Plants" && display.category === "All Plants" ? (
          <PlantsAll />
        ) : display.name === "Plants" && display.category === "Add New" ? (
          <PlantsNew />
        ) : display.name === "Plants" && display.category === "Categories" ? (
          <PlantsCategories />
        ) : //Waypoints
        display.name === "Waypoints" && display.category === "All Waypoints" ? (
          <WaypointsAll />
        ) : display.name === "Waypoints" && display.category === "Add New" ? (
          <WaypointsNew />
        ) : display.name === "Waypoints" &&
          display.category === "Categories" ? (
          <WaypointsCategory />
        ) : //Learn More
        display.name === "Learn More" &&
          display.category === "All Learn More" ? (
          <LearnMoreAll />
        ) : display.name === "Learn More" && display.category === "Add New" ? (
          <LearnMoreNew />
        ) : //Users
        display.name === "Users" && display.category === "All Users" ? (
          <UsersAll />
        ) : display.name === "Users" && display.category === "Add New" ? (
          <UsersNew />
        ) : //Locations
        display.name === "Locations" && display.category === "All Locations" ? (
          <LocationsAll />
        ) : display.name === "Locations" && display.category === "Add New" ? (
          <LocationsNew />
        ) : //Media
        display.name === "Media" && display.category === "Images" ? (
          <MediaImages />
        ) : display.name === "Media" && display.category === "Video" ? (
          <MediaVideo />
        ) : display.name === "Media" && display.category === "Audio" ? (
          <MediaAudio />
        ) : //Tags
        display.name === "Tags" && display.category === "All Tags" ? (
          <TagsAll />
        ) : display.name === "Tags" && display.category === "Add New" ? (
          <TagsNew />
        ) : //Username
        display.name === "Profile" ? (
          <Profile />
        ) : (
          <></>
        )
      }
    </>
  );
}
