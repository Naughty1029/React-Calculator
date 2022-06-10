import { memo, useEffect, VFC } from 'react';
import { useRecoilState } from 'recoil';
import { chartDataState } from '../../store/chartDataState';
import { BarChartLabelType } from '../../types/Chart/BarChartLabelType';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { FormulaType } from '../../types/Formula/FormulaType';

type Props = {
  formula: FormulaType;
  inputNumberArray: Array<number | null>;
  result: number;
};

export const ShowBarChart: VFC<Props> = memo(({ formula, inputNumberArray, result }) => {
  const [chartData, setChartData] = useRecoilState(chartDataState);

  useEffect(() => {
    setChartData(
      formula['item'].map((item, index) => ({
        key: item,
        name: index === formula['item'].length - 1 ? result : null,
        num: inputNumberArray[index],
      }))
    );
    // eslint-disable-next-line
  }, [result]);

  const renderCustomBarLabel = ({ x, y, width, height, value, name }: BarChartLabelType) => {
    if (!name) {
      return (
        <text
          x={x + width / 2}
          y={y + height / 2}
          fill="#666"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="1.5em"
        >{`${value}`}</text>
      );
    } else {
      return (
        <>
          <text
            x={x + width / 2}
            y={y + height / 2}
            fill="#666"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="1.5em"
          >{`${value}`}</text>
          <text
            x={x + width / 2}
            y={y}
            fill="red"
            dy="-5%"
            textAnchor="middle"
            fontSize="2em"
          >{`${name}%`}</text>
        </>
      );
    }
  };

  return (
    <ResponsiveContainer>
      <BarChart data={chartData}>
        <Bar dataKey="num" fill="#82ca9d" label={renderCustomBarLabel}></Bar>
        <XAxis dataKey="key" />
        <YAxis padding={{ top: 50 }} />
      </BarChart>
    </ResponsiveContainer>
  );
});
