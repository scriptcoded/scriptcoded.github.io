/* global $ */

$(function () {
  var $image = $('#image')
  var link = getQueryParam('link')

  $image.css('background-image', 'url(' + getQueryParam('src') + ')')

  if (link) {
    $image.wrap('<a href="' + link + '">')
  }
})

/**
 * https://stackoverflow.com/a/901144/4493079
 */
function getQueryParam (name, url) {
  if (!url) { url = window.location.href }

  name = name.replace(/[[\]]/g, '\\$&')

  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  var results = regex.exec(url)

  if (!results) { return null }
  if (!results[2]) { return '' }

  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
