import Plot from "react-plotly.js";

const PlotlyChart = ({ chartData }) => {
  const parsedData = JSON.parse(chartData); // Assuming chartData is the JSON string

  return (
    <Plot
      data={parsedData.data}
      layout={parsedData.layout}
      // You can add other props like config, frames, etc.
    />
  );
};

export default PlotlyChart;
