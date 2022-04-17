import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllPlants } from "../../network/getAllPlants";
import { useDisplay } from "../../utils/provider";
import Container from "../Container/Container";
import Button from "../Global/Button/Button";
import DropdownFilter from "../Global/DropdownFilter/DropdownFilter";
import SearchFilter from "../Global/SearchFilter/SearchFilter";
import Title from "../Global/Title/Title";
import PlantsTable from "./PlantsTable";

export default function PlantsAll() {
  const { setDisplay } = useDisplay();
  const [plants, setPlants] = useState();
  const [categories, setCategories] = useState(["Seasonal", "Perrenial"]);

  useEffect(() => {
    getAllPlants().then((plants) => setPlants(plants));
  });

  return (
    <Container>
      <Row>
        <Title text="All Plant" style={{ margin: "0 25px 0 0" }} />
        <Button
          text="Add New"
          handleClick={() =>
            setDisplay({ name: "Plants", category: "Add New" })
          }
        />
      </Row>

      <Row>
      All ({plants && plants.length})
      </Row>

      <Row justify="space-between">
        <DropdownFilter />
        <SearchFilter />
      </Row>

      <PlantsTable plants={plants && plants} />
    </Container>
  );
}

const Row = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  width: 100%;
  justify-content: ${(props) => props.justify};
`;
