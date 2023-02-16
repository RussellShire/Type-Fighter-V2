import kenPunch1 from "../assets/images/ken-punch_01.png"
import kenPunch2 from "../assets/images/ken-punch_02.png"
import kenKick2 from "../assets/images/ken-kick_02.png"
import kenKick3 from "../assets/images/ken-kick_03.png"
import ryuPunch1 from "../assets/images/ryu-punch_01.png"
import ryuPunch2 from "../assets/images/ryu-punch_02.png"
import ryuKick2 from "../assets/images/ryu-kick_02.png"
import ryuKick3 from "../assets/images/ryu-kick_03.png"

const characterImagery = {
    ken: {
        rest: kenPunch1,
        punch: [kenPunch1, kenPunch2],
        kick: [kenKick2, kenKick3, kenKick2],
    },
    ryu: {
        rest: ryuPunch1,
        punch: [ryuPunch1, ryuPunch2],
        kick: [ryuKick2, ryuKick3, ryuKick2],
    },
}

export default characterImagery
