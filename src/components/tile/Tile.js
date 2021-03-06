import React from "react";
import PropTypes from 'prop-types';

export const Tile = ({
  object
}) => {
  return (
    <div className="tile-container">
      {
        Object.values(object).map((value, index) => {
          return (
            <p key={index} className={index === 0 ? 'tile-title' : 'tile'}>
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
