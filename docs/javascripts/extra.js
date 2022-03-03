// 页面底部 更新/创建日期：改善用词，本地化符号
var sourceFile = document.querySelector('article > .md-source-file:last-child > small');
if (sourceFile !== null && sourceFile.childNodes.length > 0) {
  var nodes = sourceFile.childNodes;
  var replaces = [ [ "最后更新", "更新于" ], [ "创建日期", "创建于" ] ];
  for (var i = 0; i < nodes.length; i++)
    if (nodes[i].nodeType === 3) // Node.TEXT_NODE === 3
      for (var j = 0; j < replaces.length; j++)
        if (nodes[i].data.indexOf(replaces[j][0]))
          nodes[i].data = nodes[i].data
            .replace(replaces[j][0], replaces[j][1])
            .replace(/:\s+/, "：");
}
