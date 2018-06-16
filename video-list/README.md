# Video List

This is a simple utility to list videos. It can be used to list other information aswell.

![](https://i.imgur.com/3WlaUTf.png)

To send data to the page, URL-encode your JSON data and pass it via the `videos` query paramater. The following options can be set:

1. `title` - Video title
2. `rating` - Video rating, or other info
3. `extra` - Extra info, such as channel
4. `thumb` - Thumbnail URL
5. `link` - Link when clicked

Example:

```
[
  {
    "thumb": "http://blog.axelradclinic.com/wp-content/uploads/2015/06/video-thumbnail.jpg",
    "title": "Video title",
    "rating": "100% - 142k views",
    "extra": "InterestingFilms",
    "link": "#someUrl"
  },
  {
    "thumb": "http://blog.axelradclinic.com/wp-content/uploads/2015/06/video-thumbnail.jpg",
    "title": "Another vide title",
    "rating": "57% - 32M views",
    "extra": "Cool_Cool_Ye",
    "link": "#someOtherUrl"
  }
]
```

Result:

![](https://i.imgur.com/u2jpQet.png)