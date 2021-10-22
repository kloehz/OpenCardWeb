import css from 'styled-jsx/css';
import { colors } from './theme';

const styles = (marginSide: string) => {
    return css`
        .divider {
            width: 50%;
            padding: 7px;
            background: ${colors.secondary};
            margin-${marginSide}: auto;
        }
    `;
}

export default styles;