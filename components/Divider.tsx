import React from 'react';
import { colors } from '../styles/theme';

interface IMarginSide {
    marginSide: string
}

export const Divider = ({marginSide}: IMarginSide) => {
  return (
    <>
      <div className="divider"></div>
      <style jsx>
        {
          `
            .divider {
                width: 50%;
                padding: 7px;
                background: ${colors.secondary};
                margin-${marginSide}: auto;
            }
          `
        }
      </style>
    </>
  );
};