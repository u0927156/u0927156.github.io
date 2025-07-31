import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function ClusteringProblemRadio({ setClusteringShape }) {
  return (
    <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Type of Clustering Problem
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={(e) => {
            setClusteringShape(e.target.value);
          }}
        >
          <FormControlLabel value="random" control={<Radio />} label="Random" />
          <FormControlLabel
            value="circles"
            control={<Radio />}
            label="Circles"
          />
          <FormControlLabel value="arcs" control={<Radio />} label="Arcs" />
        </RadioGroup>
      </FormControl>
    </>
  );
}
