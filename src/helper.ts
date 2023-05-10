export function share(title: string, text: string, url: string) {
  // const file = new File(["foo"], "foo.txt", { type: "text/plain" });
  const shareData = {
    title,
    text,
    url,
    // files: [file],
  };

  if (navigator.share) {
    // 有分享功能就分享
    navigator.share(shareData).catch((err) => 1);
  } else {
    // 沒有分享功能就複製網址到剪貼簿
    navigator.clipboard.writeText(location.href).catch(() => 1);
  }
}
