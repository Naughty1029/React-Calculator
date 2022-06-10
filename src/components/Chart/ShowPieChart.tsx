import { memo, useEffect, VFC } from 'react';
import { FormulaType } from '../../types/Formula/FormulaType';
import { useRecoilState } from 'recoil';
import { chartDataState } from '../../store/chartDataState';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { PieChartLabelType } from '../../types/Chart/PieChartLabelType';

type Props = {
  formula: FormulaType;
  inputNumberArray: Array<number | null>;
  result: number;
};

export const ShowPieChart: VFC<Props> = memo(({ formula, inputNumberArray, result }) => {
  const [chartData, setChartData] = useRecoilState(chartDataState);
  useEffect(() => {
    //numの値は割合を出すために、全体の値は(全体 - 一部)を渡す。一部の値はそのまま渡す。
    setChartData(
      formula['item'].map((item, index) => ({
        key: item,
        name: index === formula['item'].length - 1 ? result : null,
        num:
          index === formula['item'].length - 1
            ? inputNumberArray[index]
            : Number(inputNumberArray[index]) - Number(inputNumberArray[index + 1]),
      }))
    );
    // eslint-disable-next-line
  }, [result]);

  const COLORS = ['#0088FE', '#00C49F'];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    name,
    innerRadius,
    outerRadius,
    midAngle,
    cx,
    cy,
    percent,
  }: PieChartLabelType) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (name) {
      return (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="middle" fontSize="3em">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    } else {
      return '';
    }
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={600} height={600}>
        <Pie
          data={chartData}
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="num"
          outerRadius="100%"
          startAngle={90}
          endAngle={450}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
});
