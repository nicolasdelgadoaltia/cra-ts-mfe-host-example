declare module 'mfe1/components/SoundCloudPlayer' {
  import React from 'react';
  interface IProps {
    playlistId?: number;
  }
  const SoundCloudPlayer: React.ComponentType<IProps>;
  export default SoundCloudPlayer;
}
