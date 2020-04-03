const MakeComment = (root) => {
  var tmp = root.Comment.comment.replace(/!\(:(.*?\.\w+):\)/g, `<img src="${root.emoticonUrl}/$1" alt="$1" class="vemoticon-img">`)
  import(/* webpackChunkName: "xss" */'xss').then(({ xss }) => {
    tmp = xss(tmp, {
      onIgnoreTagAttr (tag, name, value, isWhiteAttr) {
        if (name === 'class') {
          return `${name}="${xss.escapeAttrValue(value)}"`
        }
      }
    })
  })

  return tmp
}
module.exports = MakeComment
