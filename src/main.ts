import { createCanvas } from "canvas";
import { Renderer } from "ferns";

const blockRegex = /^```ferns((.*[\r\n]+)+?)?```$/im;

interface Page {
  content: string;
}

function processPage(page: Page) {
  let match;
  while ((match = blockRegex.exec(page.content))) {
    let [rawBlock, content] = match;
    const buffer = Renderer.render(
      (width, height) => {
        const canvas = createCanvas(width, height);
        return {
          ctx: canvas.getContext("2d"),
          save: () => canvas.toBuffer(),
        };
      },
      {
        code: content,
        minTreeWidth: 1000,
        maxWidth: 2400,
        style: {
          colors: {
            background: "#fff",
          },
        },
      }
    );
    page.content = page.content.replace(
      rawBlock,
      `<img class="fern" src="data:image/png;base64,${buffer.toString(
        "base64"
      )}" />`
    );
  }
  return page;
}

const website = {
  assets: "./dist",
} as const;

const hooks = {
  "page:before": processPage,
} as const;

export { website, hooks };
