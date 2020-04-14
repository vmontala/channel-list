import React, { FC } from 'react';
import CSS from 'csstype';
import './ChannelCard.css';
import { ParsedChannel } from '../types/ParsedChannel';

interface Props {
  channel: ParsedChannel,
  active?: boolean,
};

const ChannelCard: FC<Props> = ({
  channel,
  active,
}) => {
  const activeClassName = active ? ' channel-card--active' : '';
  const logoStyles: CSS.Properties = {
    backgroundColor: channel.color,
  };

  return (
    <article
      className={`channel-card${activeClassName}`}
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
};

export default ChannelCard;
