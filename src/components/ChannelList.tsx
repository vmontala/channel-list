import React from 'react';
import './ChannelList.css';
import ChannelCard from './ChannelCard';
import { ParsedChannel } from '../types/ParsedChannel';

interface Props {
  channels: ParsedChannel[],
}

const ChannelList: React.FC<Props> = ({
  channels,
}) => {
  return (
    <section className="channel-list">
      {channels.map((channel, index) =>
        <ChannelCard
          key={`${channel.key}-${index}`}
          channel={channel}
        />
      )}
    </section>
  );
}

export default ChannelList;
