import * as drawlib from "./drawlib.js";
import * as color from "./color.js";

/**
 * @throws {string}
 * @returns {CanvasRenderingContext2D}
 * @param {string} id
 */
function get2DContextById(id) {
  const canvas = document.getElementById(id);
  if (canvas === null) {
    throw "No html element with id `canvas` found";
  }
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw "The selected element is not a canvas";
  }
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      return ctx;
    } else {
      throw "Error when getting the context";
    }
  } else {
    throw "`getContext` is not a property of the element. Please use a modern browser.";
  }
}


function arbre(){
  return drawlib.group([
  
    drawlib.polygon(color.green, [
      { x: 0, y: 0 },
      { x: 100, y: 400 },
      { x: -100, y: 400 },
    ]),
   
    drawlib.move(0, 500, drawlib.rectangle(color.brown, 30, 200)),
  ]);
}

function eye(){
  return drawlib.group([
    drawlib.circle(color.white, 8),
    drawlib.circle(color.black, 2),
  ])
}


 


const sol = drawlib.rectangle(color.green, 3000,100);
const ciel =drawlib.rectangle(color.lightBlue, 3000,3000);
const soleil = drawlib.circle(color.yellow, 100);

const mouton = drawlib.group([
  drawlib.move(0, 50, drawlib.rectangle(color.black, 10, 60)),
  drawlib.move(20, 50, drawlib.rectangle(color.black, 10, 60)),
  drawlib.move(50, 50, drawlib.rectangle(color.black, 10, 60)),
  drawlib.move(70, 50, drawlib.rectangle(color.black, 10, 60)),
  drawlib.circle(color.white, 40),
  drawlib.move(30, 0,drawlib.circle(color.white, 40)),
  drawlib.move(60, 0,drawlib.circle(color.white, 40)),
  

  drawlib.move(-40, 0,drawlib.circle(color.black, 25)),
  drawlib.move(-60, -10, eye()),
  drawlib.move(-54, -17, eye()),
  drawlib.move(-60, 20,drawlib.circle(color.black, 15)),
  
]);
const image = drawlib.group([
  drawlib.move(0, 0,ciel),
  drawlib.move(-400, -300, soleil),
  drawlib.move(200, -300, arbre()),
  drawlib.move(-150, -300, arbre()),
  drawlib.move(0, 350, sol),
  drawlib.move(0,250, mouton )
]);

function main() {
  const context = get2DContextById("canvas");
  drawlib.renderCentered(image, context);
}
main();
