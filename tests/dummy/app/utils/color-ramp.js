export default function(steps, curStep, maxSaturation = 70, maxLuminance = 80) {
  return new Array(steps).fill(0).map((nil, i)=> {
    return {'hsl':`hsl(${curStep * i}, ${maxSaturation}%, ${maxLuminance}%)`};
  });
}
