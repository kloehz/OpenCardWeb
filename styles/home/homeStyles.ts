import css from 'styled-jsx/css';

const styles = css`
    .image-open-card {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 200px;
    }

    @media (max-width: 800px) {
        .image-open-card {
            min-width: 280px;
        }

        .title-container {
            margin-right: 30px;
        }
    }
`;

export default styles;