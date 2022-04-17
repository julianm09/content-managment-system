import styled from "styled-components";
import { useEffect, useState } from "react";
import { getAllWaypoints } from "../../network/getAllWaypoints";
import Container from "../Container/Container";

export default function WaypointsAll() {
  const [waypoints, setWaypoints] = useState();

  useEffect(() => {
    getAllWaypoints().then((waypoints) => setWaypoints(waypoints));
  });

  return (
    <Container>
      {waypoints && waypoints.map((waypoint) => waypoint.waypoint_name)}
    </Container>
  );
}
