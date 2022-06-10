import FileSaver from 'file-saver';
import { useCallback } from 'react';
import { useCurrentPng } from 'recharts-to-png';
import { Button } from '@mui/material';

export const useDownloadButton = () => {
  const [getPng, { ref, isLoading }] = useCurrentPng();
  const handleDownload = useCallback(async () => {
    const png = await getPng();
    if (png) {
      FileSaver.saveAs(png, 'myChart.png');
    }
  }, [getPng]);
  const renderButton = () => (
    <Button
      onClick={handleDownload}
      variant="contained"
      size="large"
      sx={{ display: 'block', marginLeft: 'auto', marginTop: '10px' }}
    >
      {isLoading ? 'ダウンロード中...' : '図をダウンロード'}
    </Button>
  );
  return { renderButton, ref };
};
