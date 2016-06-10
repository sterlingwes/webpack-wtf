/*
 * appends a message to the parent HTML doc body
 *
 * message (string)
 */
module.exports = function appender (message) {
  var p = document.createElement('p')
  p.innerHTML = message
  document.body.appendChild(p)
}
