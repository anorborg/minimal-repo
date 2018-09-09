import {
    HELLO,
    WORLD
} from './ts-proj-module'

function buildHello () {
    return `${HELLO} ${WORLD}!`
}

if (HELLO === 'Hello') {
    console.log(buildHello())
}
