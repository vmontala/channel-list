import React from 'react';
import './ChannelCard.css';
import { ParsedChannel } from '../types/ParsedChannel';
import CSS from 'csstype';

interface Props {
  channel: ParsedChannel,
  active?: boolean,
}

const ChannelCard: React.FC<Props> = ({
  channel,
  active,
}) => {
  const logoStyles: CSS.Properties = {
    backgroundColor: channel.color,
  };

  return (
    <article
      className={`channel-card${active ? ' channel-card--active' : ''}`}
      role="checkbox"
      aria-checked={active || false}
      tabIndex={0}
      aria-label={`Channel ${channel.label}`}
    >
      <div className="channel-card__logo" style={logoStyles}>
        {channel.label}
      </div>
      <div className="channel-card__body">
        <div className="channel-card__select"/>
        {channel.label}
      </div>
    </article>
  );
}

export default ChannelCard;
