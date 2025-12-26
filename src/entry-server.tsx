import { renderToString } from "react-dom/server";
import App from "./App";
import { StaticRouter } from "react-router";

export async function render(url: string) {
  let html = renderToString(
    <StaticRouter location={url} basename="/">
      <App />
    </StaticRouter>
  );
  return { html };
}
