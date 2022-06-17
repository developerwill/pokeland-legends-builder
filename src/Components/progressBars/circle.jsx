import './progress.css';
import styled from 'styled-components'

const ProgressCircle = styled.div({

    background: (votes) => {
        const likes = votes.likes;
        const dislikes = votes.dislikes;

        const angle = 360 * (1 / (likes + dislikes) * likes).toFixed(2);

        return `radial-gradient(white 50%, transparent 51%),
        conic-gradient(transparent 0deg ${(angle)}deg, #2c2b57 ${angle}deg 360deg),
        conic-gradient(orange 0deg, yellow 90deg, lightgreen 180deg, green)`
    },
    borderRadius: '50%',
    width: '75px',
    height: '75px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '15px',
    border: '2px solid #2c2b57'
})

export default ProgressCircle