import React, {useEffect} from 'react';
import {createWorkerFactory, useWorker} from '@shopify/react-web-worker';



const createWorker = createWorkerFactory(() => import('./worker'));

function Home() {
  const worker = useWorker(createWorker);
  const [message, setMessage] = React.useState(null);

  useEffect(() => {
    (async () => {
      // Note: in your actual app code, make sure to check if Home
      // is still mounted before setting state asynchronously!
      const webWorkerMessage = await worker.hello('Hii');
      setMessage(webWorkerMessage);
    })();
  }, [worker]);

  return <h1> {message} </h1>;
}

export default Home;