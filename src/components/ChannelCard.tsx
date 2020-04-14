import React from 'react';
import './ChannelCard.css';

interface Props {
  active?: boolean,
}

const ChannelCard: React.FC<Props> = ({
  active,
}) => {
  return (
    <article className={`channel-card${active ? ' channel-card--active' : ''}`}>
      <div className="channel-card__logo">
        channel-key
      </div>
      <div className="channel-card__body">
        <div className="channel-card__select"/>
        Channel Title
      </div>
    </article>
  );
}

export default ChannelCard;
