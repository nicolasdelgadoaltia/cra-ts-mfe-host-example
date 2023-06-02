import { Grid } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import Switch from '@mui/material/Switch';
import playlists from '../constants';
import ArtistSelector from './ArtistSelector';
import PlayerList from './PlayerList';

const Main = () => {
  const [artistSelected, setArtistSelected] = useState([]);
  const [feedbackActive, setFeedbackActive] = useState(false);

  const artistSelectionChangeHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newSelection: any
  ) => setArtistSelected(newSelection);

  const currentPlayLists = useMemo(
    () => artistSelected.map((artist) => playlists[artist]),
    [artistSelected]
  );

  const feedbackSwitchProps = { inputProps: { 'aria-label': 'Show Feedback' } };

  const feedbackSwitchChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFeedbackActive(event.target.checked);
    },
    []
  );

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <header className="App-header">
            <h2>Playlist selector</h2>
            <p>
              <Switch
                {...feedbackSwitchProps}
                onChange={feedbackSwitchChangeHandler}
              />{' '}
              Show Feedback
            </p>
            <br />
          </header>
        </Grid>
        <Grid item xs={12}>
          <ArtistSelector
            value={artistSelected}
            onArtistSelectionChange={artistSelectionChangeHandler}
            selectedArtists={artistSelected}
          />
        </Grid>
        <Grid item xs={12}>
          <PlayerList
            playlists={currentPlayLists}
            showSocial={feedbackActive}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
