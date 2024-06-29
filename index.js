// Code your solution in this file!

function distanceFromHqInBlocks(client) {
    let blocks = 42 - client;
    if (blocks < 0) {
      blocks = Math.abs(blocks);
    }
    return blocks;
  }
  
  function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs((start - destination) * 264);
    return distance;
  }
  
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
      return "cannot travel that far";
    } else if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance < 2000) {
      return (distance - 400) * 0.02;
    } else if (distance >= 2000 && distance < 2500) {
      return 25;
    }
  }