export const attacks = {
    punch: {
        power: 4,
        accuracy: 8,
    },
    kick: {
        power: 6,
        accuracy: 6,
    },
    upperCut: {
        power: 8,
        accuracy: 7,
    }
}
export const validAttacks = Object.keys(attacks)
export const validAttacksLower = validAttacks.map(attack => attack.toLowerCase()) // created so inputs don't have to be camel case
