import React from 'react';
import PropTypes from 'prop-types';
import FossilImg from './fossil.png'

const NameHeader = ({monomial, epithet, infraEpithet, authorship, rankMarker, rank}) => {
  return (
    <div id="name" className="page-header">
      <h2 className="name"><em>{monomial} {epithet}</em> <span className="rank">{rankMarker}</span> <em>{infraEpithet}</em> <span className="authorship">{authorship}</span> <small>{rank}</small></h2>
      <div id="icons">
        <div>
          <img className="icon" src={FossilImg} />
        </div>
        <div>ICN</div>
      </div>
    </div>
  );
};

NameHeader.propTypes = {
  monomial: PropTypes.string.isRequired,
  epithet: PropTypes.string,
  infraEpithet: PropTypes.string,
  authorship: PropTypes.string,
  rankMarker: PropTypes.string,
  rank: PropTypes.string.isRequired
};

export default NameHeader;
