import { memo, useEffect, VFC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chartDataState } from '../../store/chartDataState';
import { BarChartLabelType } from '../../types/Chart/BarChartLabelType';
import { FormulaType } from '../../types/Formula/FormulaType';
import { inputNumberArrayState } from '../../store/inputNumberArrayState';
import { useDownloadButton } from '../../hooks/useDownloadButton';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

type Props = {
  formula: FormulaType;
  result: number;
};

export const ShowBarChart: VFC<Props> = memo(({ formula, result }) => {
  const [chartData, setChartData] = useRecoilState(chartDataState);
  const inputNumberArray = useRecoilValue(inputNumberArrayState);
  const { renderButton, ref } = useDownloadButton();

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
    <>
      <ResponsiveContainer width="100%" height={420}>
        <BarChart data={chartData} ref={ref}>
          <Bar dataKey="num" fill="#82ca9d" label={renderCustomBarLabel} />
          <XAxis dataKey="key" />
          <YAxis padding={{ top: 50 }} />
        </BarChart>
      </ResponsiveContainer>
      {renderButton()}
    </>
  );
});
