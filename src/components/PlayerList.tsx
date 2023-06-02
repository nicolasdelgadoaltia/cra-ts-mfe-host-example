import { Grid } from '@mui/material';
import React, { Suspense } from 'react';
import VotingCardWithPlayer from './VotingCardWithPlayer';

const SoundCloudPlayer = React.lazy(
  () => import('mfe1/components/SoundCloudPlayer')
);

interface Props {
  playlists: number[];
  showSocial: boolean;
}

const PlayerList = ({ playlists, showSocial }: Props) => {
  const Player = showSocial ? VotingCardWithPlayer : SoundCloudPlayer;

  return (
    <Grid container spacing={0} alignContent="center">
      <Suspense fallback={<div>loading...</div>}>
        {playlists.map((playlistId: number) => (
          <Grid item xs={2}>
            <Player key={playlistId} playlistId={playlistId} />
          </Grid>
        ))}
      </Suspense>
    </Grid>
  );
};

export default PlayerList;
