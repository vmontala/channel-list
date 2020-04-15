import React, { FC, KeyboardEvent } from 'react';
import CSS from 'csstype';
import './ChannelCard.css';
import { ParsedChannel } from '../types/ParsedChannel';

interface Props {
  channel: ParsedChannel,
  toggleChannel: (key: string) => void,
};

const ChannelCard: FC<Props> = ({
  channel,
  toggleChannel,
}) => {
  const activeClassName = channel.active ? ' channel-card--active' : '';
  const logoStyles: CSS.Properties = {
    backgroundColor: channel.color,
  };

  /**
   * Triggered when, focused on a card the user presses a key.
   * If the key is space (' '), the channel is toggled.
   *
   * @param {KeyboardEvent} event - Keyboard event triggered on HTML element.
   *
   * @returns {undefined}
   */
  const onKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === ' ') {
      toggleChannel(channel.key);
    }
  };

  return (
    <article
      className={`channel-card${activeClassName}`}
      role="checkbox"
      aria-checked={channel.active}
      tabIndex={0}
      aria-label={`Channel ${channel.label}`}
      onClick={() => toggleChannel(channel.key)}
      onKeyPress={onKeyPress}
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
