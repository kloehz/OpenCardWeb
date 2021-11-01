import css from 'styled-jsx/css';

const styles = css`
    .image-open-card {
        display: block;
        margin: 0 auto 30px;
        max-width: 35%;
        min-width: 400px;
    }

    @media (max-width: 900px) {
        .image-open-card {
        }
    }
`;

export default styles;