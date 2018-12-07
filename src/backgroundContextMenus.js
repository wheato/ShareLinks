chrome.contextMenus.create({
  id: 'shareLink',
  title: '分享网页',
  contexts: ['page'],
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  const { title, url } = tab
  const shares = [
    `#标题：${title}`,
    `#链接：${url}`
  ]
  const shareText = shares.join('\n')
  copyToClipboard(shareText)
});

function copyToClipboard(text) {
  const dom = document.createElement('textarea')
  dom.style.width = 0;
  dom.style.height = 0;
  dom.style.position = 0;
  dom.style.left = 0;
  dom.style.bottom = 0;
  document.body.appendChild(dom)
  dom.value = text
  dom.select()
  document.execCommand('copy', false)
  document.body.removeChild(dom)
}