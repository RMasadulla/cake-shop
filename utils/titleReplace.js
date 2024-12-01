export default function titleReplace(title) {
  if (typeof title !== "string") return "";
  return title
    .trim()
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLocaleLowerCase();
}
