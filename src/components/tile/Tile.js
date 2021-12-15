import React from "react";
import PropTypes from 'prop-types';

export const Tile = ({
  object
}) => {
  return (
    <div className="tile-container">
      {
        object.values.map((value, index) => {
          return (
            <p className={index === 0 ? 'tile-title' : 'tile'}>
              {value}
            </p>
          );
        })
      }
    </div>
  );
};

Tile.propTypes = {
  object: PropTypes.object.isRequired
};
