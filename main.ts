import {
  HELLO,
  WORLD
} from '@app/modules/ts-proj-module'

function buildHello () {
  return `${HELLO} ${WORLD}!`
}

if (HELLO === 'Hello') {
  console.log(buildHello())
}
