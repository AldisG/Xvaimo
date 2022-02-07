import { FC, useEffect, useState } from 'react';

type Props = {
  end_date: any;
};

const CountDownElement: FC<Props> = ({ end_date }) => {
  const [timeLeft, setTimeLeft] = useState('');
  useEffect(() => {
    const countDown = setInterval(() => {
      const currentTimeDate = new Date(end_date).getTime();
      const now = new Date().getTime();
      const timeLeft = currentTimeDate - now;

      const dayLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesLeft = Math.floor(
        (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
      const timeToDisplay = `${dayLeft}d:${hoursLeft}:${minutesLeft}m:${secondsLeft}`;
      setTimeLeft(timeToDisplay);
    }, 1000);

    return () => {
      countDown;
    };
  }, []);

  return <div>{timeLeft}</div>;
};

export default CountDownElement;
