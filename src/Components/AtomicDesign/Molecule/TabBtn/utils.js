export const changeState = (changeTo, setBtnState) => {
    if (changeTo === 1) {
        setBtnState({
            redLevel: true,
            orangeLevel: false,
            blueLevel: false,
            normalLevel: false
        })
    }
    else if (changeTo === 2) {
        setBtnState({
            redLevel: false,
            orangeLevel: true,
            blueLevel: false,
            normalLevel: false
        })
    }
    else if (changeTo === 3) {
        setBtnState({
            redLevel: false,
            orangeLevel: false,
            blueLevel: true,
            normalLevel: false
        })
    }
    else if (changeTo === 4) {
        setBtnState({
            redLevel: false,
            orangeLevel: false,
            blueLevel: false,
            normalLevel: true
        })
    }
}