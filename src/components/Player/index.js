import React from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
// import PauseIcon from '../../assets/images/pause.svg';
import Forwardcon from '../../assets/images/forward.svg';
import Repeatcon from '../../assets/images/repeat.svg';

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && (
      <Sound url={player.currentSong.file} playStatus={player.status} />
    )}
    <Current>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/3/35/FooFightersGreatestHits.jpg"
        alt="Cover"
      />
      <div>
        <span>Times like these</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="Shuflle" />
        </button>
        <button type="button">
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button type="button">
          <img src={PlayIcon} alt="Play" />
        </button>
        {/* <button type="button">
          <img src={PauseIcon} alt="Pause" />
        </button> */}
        <button type="button">
          <img src={Forwardcon} alt="Forward" />
        </button>
        <button type="button">
          <img src={Repeatcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
            value={20}
          />
        </ProgressSlider>
        <span>4:28</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={20}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string
    }),
    status: PropTypes.string
  }).isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);
