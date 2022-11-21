import { LineChart } from "react-native-chart-kit";
import { scale, verticalScale } from "react-native-size-matters";
function Graficodetalhesvacas() {
  const data = {
    labels: ["Ago", "Set", "Out", "Nov"],
    datasets: [
      {
        data: [0, 0, 0, 100],
        strokeWidth: 3
      }
    ],
    legend: ["LUCRO DO ANIMAL"]
  };
  const chartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    backgroundGradientFrom: "#ffffff00",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130d00",
    backgroundGradientToOpacity: 0,

  };
  return (
    <LineChart
      data={data}
      width={scale(280)}
      height={verticalScale(300)}
      chartConfig={chartConfig}
      verticalLabelRotation={-90}
      xLabelsOffset={verticalScale(7)}
      bezier
    />
  );
}
export default Graficodetalhesvacas;
