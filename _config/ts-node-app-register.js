// This file is used to specify the Typescript project when running ts-node
// via the node-CLI. It is the only way to pass the option. To use, replace
// 'ts-node/register' with './config/ts-node-app-register'

require('ts-node').register({
  project: './_config/tsconfig.app.json'
})