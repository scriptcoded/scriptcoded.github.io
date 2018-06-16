/* global $ */

var videosString = (getQueryParam('videos'))
var videos = []

if (videosString) {
  videos = JSON.parse(videosString)
}

if (videos.videos) {
  videos = videos.videos
}

var rowTemplate = $('#template-rel-row').children().first()
var videoList = $('#rel-list')

if (videos.length) {
  for (var i in videos) {
    var video = videos[i]
    var videoElem = rowTemplate.clone()

    videoElem.find('.rel-thumb img').attr('src', video.thumb)
    videoElem.find('.rel-title').text(video.title)
    videoElem.find('.rel-rating').text(video.rating)
    videoElem.find('.rel-extra').text(video.extra)
    videoElem.find('.rel-link').attr('href', video.link)

    videoElem.appendTo(videoList)
  }
} else {
  videoList.html('<div class="rel-list-empty">No videos</div>')
}

/**
 * https://stackoverflow.com/a/901144/4493079
 */
function getQueryParam (name, url) {
  if (!url) { url = window.location.href }

  name = name.replace(/[\[\]]/g, '\\$&')

  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  var results = regex.exec(url)

  if (!results) { return null }
  if (!results[2]) { return '' }

  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
