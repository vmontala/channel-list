import React, { FC, ReactElement } from 'react';
import './ChannelList.css';
import { ParsedChannel } from '../types/ParsedChannel';
import ChannelCard from './ChannelCard';

interface Props {
  channels: ParsedChannel[],
  toggleChannel: (key: string) => void,
};

const ChannelList: FC<Props> = ({
  channels,
  toggleChannel,
}) => {
  return (
    <section className="channel-list">
      {channels.map((channel, index): ReactElement =>
        <ChannelCard
          key={channel.key}
          channel={channel}
          toggleChannel={toggleChannel}
        />
      )}
    </section>
  );
};

export default ChannelList;
