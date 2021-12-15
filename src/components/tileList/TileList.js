import React from "react";
import PropTypes from 'prop-types';
import { Tile } from '../tile/Tile';

export const TileList = ({
  objectArray
}) => {
  return (
    <div>
      {
        objectArray.map(o => <Tile object={o} />)
      }
    </div>
  );
};

TileList.propTypes = {
  objectArray: PropTypes.array.isRequired
};
