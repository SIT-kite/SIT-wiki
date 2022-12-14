// https://github.com/squidfunk/mkdocs-material/issues/4548#issuecomment-1291905978

(function () {

  // 图片（关联 extra.css 首行缩进部分）
  var images = document.querySelectorAll(".md-typeset img"); // , .md-typeset svg

  for (var i = 0; i < images.length; i++)
    (images[i].clientWidth > 80 || images[i].clientHeight > 80) &&
      images[i].classList.add("image-block");

  // 页面底部 更新/创建日期：改善用词，本地化符号
  var container = document.querySelector("article > .md-source-file:last-child > small");

  if (
    container !== null &&
    container.childNodes.length > 0 &&
    container.childNodes.length <= 16
  ) {

    var nodes = container.childNodes;
    var replaces = [["最后更新", "更新于"], ["创建日期", "创建于"]];

    for (var i = 0; i < nodes.length; i++)
      if (nodes[i].nodeType === 3) // Node.TEXT_NODE === 3
        for (var j = 0; j < replaces.length; j++)
          if (nodes[i].data.indexOf(replaces[j][0]))
            nodes[i].data = nodes[i].data
              .replace(replaces[j][0], replaces[j][1])
              .replace(/:\s+/, "：");

  }

})();
