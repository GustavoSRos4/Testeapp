import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { useContext } from "react";
const screenWidth = Dimensions.get("window").width;
import { AuthContext } from "../../../contexts/auth";
function BezierChartDespesas() {
  const { precoCF } = useContext(AuthContext);
  const despesas = Number(precoCF);
  const data = {
    labels: ["Agosto", "Setembro", "Outubro", "Novembro"],
    datasets: [
      {
        data: [3500, 3450, 3200, despesas],
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      },
    ],
  };
  const chartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
  };
  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={verticalScale(330)}
      chartConfig={chartConfig}
      verticalLabelRotation={30}
      fromZero={true}
      bezier
    />
  );
}
export default BezierChartDespesas;
