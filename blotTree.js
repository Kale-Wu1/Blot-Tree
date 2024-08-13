// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

//User parameters
const trunkWidth = 5;
const numBigBranches = 3;
const numBBSections = 3; //sections per big branch
const numSmallBranches = 2; //small branches per section

// store final lines here
const finalLines = [];

//Trunk shape
const trunk = [
  [(width-trunkWidth)/2, 0],
  [(width+trunkWidth)/2, 0],
  [(2*width+trunkWidth)/4, 2*height/5],
  [(2*width-trunkWidth)/4, 2*height/5],
  [(width-trunkWidth)/2, 0]
];
finalLines.push(trunk);

//Hub
const theta = 180/numBigBranches;
const x = width/2;
const y = 2*height/5;
const r = trunkWidth/2;


var branchHub = [
  [(2*width+trunkWidth)/4, 2*height/5],
  [(2*width-trunkWidth)/4, 2*height/5],
]

for(let i = 0; i < numBigBranches; i++) {
  var xChange = r*Math.cos( (theta/2 + i*theta) /180*Math.PI);
  var yChange = r*Math.sin( (theta*(i+1)) /180*Math.PI);
  branchHub.push([x-xChange, y+yChange]);
}

finalLines.push(branchHub);
  

// draw it
drawLines(finalLines);