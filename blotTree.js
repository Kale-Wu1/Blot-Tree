const width = 125;
const height = 125;

setDocDimensions(width, height);

// User parameters
const trunkWidth = 5;
const numBigBranches = 3; // Number of sides, for half hexagon trapezoid
const numBBSections = 3; // sections per big branch
const numSmallBranches = 2; // small branches per section

// store final lines here
const finalLines = [];

//Trunk shape

const trunk = [
  [(width - trunkWidth) / 4, 0],
  [(width + trunkWidth) / 2, 0],
  [(2 * width + trunkWidth) / 4, 2 * height / 5],
  [(2 * width - trunkWidth) / 4, 2 * height / 5],
  [(width - trunkWidth) / 2, 0]
];
finalLines.push(trunk);

var branchHub = [];

//Hub shape
const x = width / 2;
const y = 2 * height / 5;
const r = ((2 * width + trunkWidth) / 4 - (2 * width - trunkWidth) / 4) / 2;
const theta = 180 / numBigBranches;
var angle = theta;

// Calculate the top vertices
for (let i = 0; i < numBigBranches - 1; i++) {
  angle += theta;
  var xChange = x - r * Math.cos(theta / 180 * Math.PI);
  var yChange = y + r * Math.sin(theta / 180 * Math.PI);
  branchHub.push([xChange, yChange]);
}

branchHub.push(branchHub[0]);

finalLines.push(branchHub);

// draw it
drawLines(finalLines);