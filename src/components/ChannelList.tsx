import React, { FC } from 'react';
import './ChannelList.css';
import { ParsedChannel } from '../types/ParsedChannel';
import ChannelCard from './ChannelCard';

interface Props {
  channels: ParsedChannel[],
};

const ChannelList: FC<Props> = ({
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
};

export default ChannelList;
