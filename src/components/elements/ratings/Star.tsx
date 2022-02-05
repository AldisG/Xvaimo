import { FC } from 'react';
import fullStar from '../../../img/star-full.svg';
import emptyStar from '../../../img/star-empty.svg';

type Props = {
  starType: boolean;
};

const Star: FC<Props> = ({ starType }) => {
  return (
    <div className="star-icon">
      <img src={starType ? emptyStar : fullStar} alt="star" />
    </div>
  );
};

export default Star;
