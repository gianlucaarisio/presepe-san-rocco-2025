import { renderToString } from "react-dom/server";
import App from "./App";
import { StaticRouter } from "react-router-dom/server";

export async function render(url: string) {
  let html = renderToString(
    <StaticRouter location={url} basename="/">
      <App />
    </StaticRouter>
  );
  return { html };
}
