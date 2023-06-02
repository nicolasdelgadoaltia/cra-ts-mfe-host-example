import React, { Suspense } from 'react';

const SoundCloudPlayer = React.lazy(
  () => import('mfe1/components/SoundCloudPlayer')
);
const VotingCard = React.lazy(() => import('mfe2/components/VotingCard'));
interface Props {
  playlistId: number;
}

const VotingCardWithPlayer = ({ playlistId }: Props) => (
  <VotingCard>
    <Suspense fallback={<div>loading...</div>}>
      <SoundCloudPlayer playlistId={playlistId} />
    </Suspense>
  </VotingCard>
);

export default VotingCardWithPlayer;
