export default function loadHtml(filePath) {
  const response = fetch(filePath);
  const htmlContent = response.text;

  return htmlContent;
}
