import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Artists } from '../types/artists';

interface Props {
  value: any;
  onArtistSelectionChange: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any
  ) => void;
  selectedArtists: Artists[];
}

const ArtistSelector = ({
  value,
  onArtistSelectionChange,
  selectedArtists,
}: Props) => {
  return (
    <ToggleButtonGroup
      value={value}
      onChange={onArtistSelectionChange}
      aria-label="text formatting"
    >
      {Object.values(Artists).map((artist, index) => (
        <ToggleButton
          key={index}
          value={artist}
          aria-label="bold"
          selected={selectedArtists.includes(artist)}
        >
          {artist}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ArtistSelector;
