import { useEffect, useState } from "react";
import styled from "styled-components";
import Checkbox from "../Global/Checkbox/Checkbox";

export default function PlantsTable({ plants }) {
  
  //use this for bulk actions
  const [checked, setChecked] = useState([]);

  const handleSelectAll = (plant) => {
    if (checked.length == 0) {
      setChecked(plants);
    } else {
      setChecked([]);
    }
  };

  const handleSelectOne = (plant) => {
    if (checked.some((x) => x.id === plant.id)) {
      const arr = checked.filter((x) => x.id !== plant.id);
      console.log(arr);
      setChecked(arr);
    } else {
      setChecked([...checked, plant]);
    }
  };

  return (
    <TableCont>
      <HeadingCont>
        <Checkbox
          active={plants && checked.length == plants.length}
          handleClick={() => handleSelectAll()}
        />
        <Heading>Title</Heading>
        <Heading>Author</Heading>
        <Heading>Categories</Heading>
        <Heading>Tags</Heading>
        <Heading>Last Updated</Heading>
      </HeadingCont>

      {plants &&
        plants.map((plant) => (
          <PlantCont active={checked.some((x) => x.id === plant.id)}>
            <Checkbox
              active={checked.some((x) => x.id === plant.id)}
              handleClick={() => handleSelectOne(plant)}
            />
            <Text>{plant.plant_name}</Text>
            <Text>{plant.plant_name}</Text>
            <Text>{plant.categories}</Text>
            <Text>{plant.tags}</Text>
            <Text>{plant.revision_history}</Text>
          </PlantCont>
        ))}
    </TableCont>
  );
}

const TableCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeadingCont = styled.div`
  width: 100%;
  display: grid;
  height: 25px;
  margin: 25px 0;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr;
  text-align: left;
  padding: 0 25px;
  align-items: center;
`;

const Heading = styled.div`
  font-weight: 700;
`;
const Text = styled.div`
  font-weight: 400;
`;

const PlantCont = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr;
  height: 100px;
  background: ${(props) => (props.active ? "#9FD2FF" : "#ebebeb")};
  margin: 10px 0;
  padding: 0 25px;
  align-items: center;
`;
