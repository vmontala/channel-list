import React, { FC } from 'react';
import './ChannelList.css';
import { ParsedChannel } from '../types/ParsedChannel';
import ChannelCard from './ChannelCard';

interface Props {
  channels: ParsedChannel[],
  onSelectChannel: (key: string) => void,
};

const ChannelList: FC<Props> = ({
  channels,
  onSelectChannel,
}) => {
  return (
    <section className="channel-list">
      {channels.map((channel, index) =>
        <ChannelCard
          key={channel.key}
          channel={channel}
          onSelectChannel={onSelectChannel}
        />
      )}
    </section>
  );
};

export default ChannelList;
