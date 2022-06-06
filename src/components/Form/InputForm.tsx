//フォーム入力を表示するコンポーネント
import { memo, VFC } from 'react';
import styled from '@emotion/styled';

type Props = {
  item: string;
  index: number;
  inputNumberArray: Array<number>;
  setInputNumberArray: React.Dispatch<React.SetStateAction<number[]>>;
};

export const InputForm: VFC<Props> = memo(
  ({ item, index, inputNumberArray, setInputNumberArray }) => {
    //入力値を受け取る関数
    const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
      let inputIndex = Number(e.currentTarget.getAttribute('data-index'));
      const inputNumber = Number(e.target.value);
      setInputNumberArray(
        inputNumberArray.map((number, index) => (index === inputIndex ? inputNumber : number))
      );
    };
    return (
      <SContainer key={index}>
        <p>{item}</p>
        <SInput
          type="text"
          onChange={handleInputNumber}
          data-index={index}
          value={inputNumberArray[index] ? inputNumberArray[index]! : 0}
        />
      </SContainer>
    );
  }
);

const SContainer = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

const SInput = styled.input`
  border: 1px solid #333;
  padding: 16px;
  border-radius: 4px;
  margin-top: 16px;
  &:hover {
    opacity: 0.7;
  }
`;
