import React from 'react'
const PlayAgain = ({fighter, onPlayAgain}) => {
    return (
        // {fighter.player.isDefeated || fighter.opponent.isDefeated &&
                <button
                    onClick={(e) => onPlayAgain(e)}
                >
                    Play again?
                </button>
        // }
    )
}

export default PlayAgain;