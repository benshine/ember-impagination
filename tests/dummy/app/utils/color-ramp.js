export default function(steps, curStep, maxSaturation = 40, maxLuminance = 90) {
  return new Array(steps).fill(0).map((nil, i)=> {
    return {'hsl':`hsl(${curStep * i}, ${maxSaturation}%, ${maxLuminance}%)`};
  });
}
