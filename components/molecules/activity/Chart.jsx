import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Sun", steps: 4789, pv: 2400, amt: 2400 },
  { name: "Mon", steps: 7321, pv: 3200, amt: 2900 },
  { name: "Tue", steps: 6000, pv: 2800, amt: 2600 },
  { name: "Wed", steps: 8500, pv: 2000, amt: 2200 },
  { name: "Thu", steps: 7500, pv: 4000, amt: 3500 },
  { name: "Fri", steps: 5000, pv: 3400, amt: 3100 },
  { name: "Sat", steps: 9000, pv: 2600, amt: 2800 },
];

const ActivityChart = () => (
  <LineChart
    width={550}
    height={300}
    data={data}
    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
  >
    <Line type="monotone" dataKey="steps" stroke="#48BB78" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis domain={[0, 12000]} />
    <Tooltip />
  </LineChart>
);

export default ActivityChart;
