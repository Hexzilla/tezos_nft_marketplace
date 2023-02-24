import { useCallback, useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useWallet } from 'contexts/WalletProvider';
import Unity, { UnityEventListener } from 'components/unity/Unity';
import useToken from 'hooks/useToken';
import useMarket from 'hooks/useMarket';

const MarketItemNames = {
  1: 'Ammo',
  2: 'Water',
  3: 'Fuel',
  4: 'Intel',
};

const Play = () => {
  const { address } = useWallet();
  const { getGateToken } = useToken();
  const { getMarketItems, buyMarketItems } = useMarket();

  // Event Listener for starting game
  const onStartGame = useCallback(() => {
    console.log('Start');
  }, []);

  // Event Listener for ending game
  const onEndGame = useCallback(() => {
    console.log('End');
  }, []);


  return (
    <div className="container mx-auto mt-4">
      Play
    </div>
  );
};

export default Play;
