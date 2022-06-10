import { memo, useEffect, VFC } from 'react';
import { FormulaType } from '../../types/Formula/FormulaType';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chartDataState } from '../../store/chartDataState';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { PieChartLabelType } from '../../types/Chart/PieChartLabelType';
import { inputNumberArrayState } from '../../store/inputNumberArrayState';
import { useDownloadButton } from '../../hooks/useDownloadButton';

type Props = {
  formula: FormulaType;
  result: number;
};

export const ShowPieChart: VFC<Props> = memo(({ formula, result }) => {
  const [chartData, setChartData] = useRecoilState(chartDataState);
  const inputNumberArray = useRecoilValue(inputNumberArrayState);
  const { renderButton, ref } = useDownloadButton();

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
    const x = cx + 10 + radius * Math.cos(-midAngle * RADIAN);
    const y = cy - 10 + radius * Math.sin(-midAngle * RADIAN);

    if (name) {
      return (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="middle" fontSize="2em">
          {`${(percent * 100).toFixed(1)}%`}
        </text>
      );
    } else {
      return '';
    }
  };

  return (
    <>
      <ResponsiveContainer width="100%" height={420}>
        <PieChart width={600} height={600} ref={ref}>
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
      {renderButton()}
    </>
  );
});
