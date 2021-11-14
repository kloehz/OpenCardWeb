import css from 'styled-jsx/css';

const styles = css`
    .image-open-card {
        display: block;
        margin: 0 auto 30px;
        max-width: 47%;
        min-width: 250px;
    }

    @media (max-width: 800px) {
        .image-open-card {
            min-width: 280px;
        }
    }
`;

export default styles;