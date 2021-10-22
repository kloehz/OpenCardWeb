import React from 'react';
import styles from "../styles/dividerStyles";

interface IMarginSide {
    marginSide: string
}

export const Divider = ({marginSide}: IMarginSide) => {

    const setStyle = styles(marginSide);

    return (
        <>
            <div className="divider"></div>
            <div className="dividerTwo"></div>
            <style jsx>
                {setStyle}
            </style>
        </>
    )
}
