import merge from 'deepmerge'

/*
 * returns the config for the provided options for rendering
 *
 * scenarios (Array<String>) each string maps to an example
 * options (Object) contains values from scenario options for overriding example configs
 */
export default function get (scenarios, options) {
  if (!scenarios.length) scenarios.push('basic')

  scenarios = scenarios.map(getScenario)
  var configs = scenarios.map(scenario => scenario.config)
  // var combined = {}
  if (configs.length === 1) return configs[0]
  return merge.apply(merge, configs)
}

/*
 * returns an object that contains the config & any dependencies from package.json
 *
 * name (String) for the example to pull
 */
function getScenario (name) {
  var scenario = { name: name }
  scenario.config = require(`../examples/${name}/webpack.config`)

  try {
    var manifest = require(`../examples/${name}/package`)
    scenario.deps = Object.keys(manifest.dependencies)
  } catch (e) {}

  return scenario
}
