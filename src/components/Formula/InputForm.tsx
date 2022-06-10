//フォーム入力を表示するコンポーネント
import { memo, useState, VFC } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { inputNumberArrayState } from '../../store/inputNumberArrayState';

type Props = {
  item: string;
  index: number;
};

export const InputForm: VFC<Props> = memo(({ item, index }) => {
  const [inputNumberArray, setInputNumberArray] = useRecoilState(inputNumberArrayState);
  const [checkInputIsNaN, setCheckInputIsNaN] = useState(false);

  //入力値を受け取る関数
  const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let inputIndex = Number(e.currentTarget.getAttribute('data-index'));
    const inputNumber = Number(e.target.value);

    //半角数値以外の入力をバリデーションする
    if (Number.isNaN(inputNumber)) {
      setCheckInputIsNaN(true);
      return;
    } else {
      setCheckInputIsNaN(false);
    }

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
        value={
          inputNumberArray[index] || inputNumberArray[index] === 0 ? inputNumberArray[index]! : ''
        }
      />
      {checkInputIsNaN && <SErrorText>半角数値で入力してください</SErrorText>}
    </SContainer>
  );
});

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

const SErrorText = styled.p`
  color: #842029;
  margin-top: 0.5em;
  font-size: 0.8em;
`;
