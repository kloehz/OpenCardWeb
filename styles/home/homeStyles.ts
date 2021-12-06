import css from 'styled-jsx/css';

const styles = css`
    .image-open-card {
        display: block;
        margin: 0 auto 30px;
        max-width: 47%;
        min-width: 250px;
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