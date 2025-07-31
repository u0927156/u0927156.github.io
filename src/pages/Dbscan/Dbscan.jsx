import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Barchart from "./Barchart";
import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";
import ClusteringProblemRadio from "./ClusteringProblemRadio";

function getPoint(minX, maxX, minY, maxY) {
  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;

  return { x, y };
}

function getNumberOfPoints(num_to_generate) {
  let points = [];
  for (let i = 0; i < num_to_generate; i++) {
    points.push(getPoint(0, 10, 0, 10));
  }
  return points;
}

export default function Dbscan() {
  const [numPoints, setNumPoints] = useState(10);
  const [clusteringShape, setClusteringShape] = useState();

  let points = [];
  useEffect(() => {
    console.log(numPoints);
    points = getNumberOfPoints(numPoints);
    console.log(points);
  }, [numPoints]);

  useEffect(() => {
    console.log(clusteringShape);
  }, [clusteringShape]);

  return (
    <>
      <Header />
      <article id="Intro" class="wrapper style1">
        <div className="container">
          <div class="row">
            <h1>DBSCAN!</h1>
            <Slider
              aria-label="Number of Points"
              value={numPoints}
              onChange={(e) => {
                setNumPoints(e.target.value);
              }}
              // getAriaValueText={"ASDF"}
              valueLabelDisplay="auto"
              shiftStep={30}
              step={10}
              marks
              min={10}
              max={110}
            />
          </div>
          <ClusteringProblemRadio setClusteringShape={setClusteringShape} />
        </div>
        <Barchart />
      </article>

      <Footer />
    </>
  );
}
