import kenPunch1 from "../assets/images/ken-punch_01.png"
import kenPunch2 from "../assets/images/ken-punch_02.png"
import kenKick2 from "../assets/images/ken-kick_02.png"
import kenKick3 from "../assets/images/ken-kick_03.png"
import kenUpperCut1 from "../assets/images/ken-uppercut_01.png"
import kenUpperCut2 from "../assets/images/ken-uppercut_02.png"
import kenUpperCut3 from "../assets/images/ken-uppercut_03.png"
import ryuPunch1 from "../assets/images/ryu-punch_01.png"
import ryuPunch2 from "../assets/images/ryu-punch_02.png"
import ryuKick2 from "../assets/images/ryu-kick_02.png"
import ryuKick3 from "../assets/images/ryu-kick_03.png"
import ryuUpperCut1 from "../assets/images/ryu-uppercut_01.png"
import ryuUpperCut2 from "../assets/images/ryu-uppercut_02.png"
import ryuUpperCut3 from "../assets/images/ryu-uppercut_03.png"
import ryuDefeated1 from "../assets/images/ryu-defeated_01.png"
import ryuDefeated2 from "../assets/images/ryu-defeated_02.png"
import ryuDefeated3 from "../assets/images/ryu-defeated_03.png"
import ryuDefeated4 from "../assets/images/ryu-defeated_04.png"
import kenDefeated1 from "../assets/images/ken-defeated_01.png"
import kenDefeated2 from "../assets/images/ken-defeated_02.png"
import kenDefeated3 from "../assets/images/ken-defeated_03.png"
import kenDefeated4 from "../assets/images/ken-defeated_04.png"

const characterImagery = {
    ken: {
        rest: kenPunch1,
        punch: {
            imageArray: [kenPunch1, kenPunch2],
            hitFrame: 1, // counting from zero which image in the array connects with the opponent
        },
        kick: {
            imageArray: [kenKick2, kenKick3, kenKick2],
            hitFrame: 1,
        },
        upperCut: {
            imageArray: [kenUpperCut1, kenUpperCut2, kenUpperCut3, kenUpperCut2, kenUpperCut1],
            hitFrame: 2,
        },
        defeated: {
            imageArray: [kenDefeated1, kenDefeated2, kenDefeated3, kenDefeated4],
            hitFrame: 10,
        },
    },
    ryu: {
        rest: ryuPunch1,
        punch: {
            imageArray: [ryuPunch1, ryuPunch2],
            hitFrame: 1,
        },
        kick: {
            imageArray: [ryuKick2, ryuKick3, ryuKick2],
            hitFrame: 1,
        },
        upperCut: {
            imageArray: [ryuUpperCut1, ryuUpperCut2, ryuUpperCut3, ryuUpperCut2, ryuUpperCut1],
            hitFrame: 2,
        },
        defeated: {
            imageArray: [ryuDefeated1, ryuDefeated2, ryuDefeated3, ryuDefeated4],
            hitFrame: 10,
        },
    },
}

export default characterImagery
