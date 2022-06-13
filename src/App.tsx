import { VFC } from 'react';
import { RecoilRoot } from 'recoil';
import { Calculator } from './components/Layout/Calculator';

const App: VFC = () => {
  return (
    <RecoilRoot>
      <Calculator />
    </RecoilRoot>
  );
};

export default App;
