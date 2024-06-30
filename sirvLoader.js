export default function SirvLoader({ src, width, quality }) {
  const url = new URL(`https://${src}`);
  const params = url.searchParams;

  //here we set the url params
  params.set("w", params.get("w") || width.toString());
  params.set("q", (quality || 85).toString());
  params.set("format", params.getAll("format").join(",") || "optimal"); //here we set the default value for format to optimal if no other is specified.
  params.set("profile", params.get("profile") || "promo-text");

  return url.href;
}
