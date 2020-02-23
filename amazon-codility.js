function solution(N, S, T) {
  const shipCoords = S.split(',');
  const targets = T.split(' ');
  const ships = getShips(shipCoords);

  let sunk = 0;
  let hits = 0;

  for (const ship of ships) {
    for (const target of targets) {
      if (ship.spaces.includes(target)) {
        ship.hits++;
        hits++;
        if (ship.hits === ship.spaces.length) {
          sunk++;
        }
      }
    }
  }

  return `${hits}, ${sunk}`;
}

function getShips(coords) {
  const allShips = [];

  for (let i = 0; i<coords.length; i++) {
    const pair = coords[i].split(' ');
    const ship = {
      hits: 0,
      spaces: [],
      sunk: false
    }

    if (pair[0] === pair[1]) {
      // single space ship
      ship.spaces.push(pair[0]);
      allShips.push(ship);
      continue;
    }

    if (pair[0].charAt(0) != pair[1].charAt(0) || pair[0].charAt(1) != pair[1].charAt(1)) {
      // bigger than 1 space
      ship.spaces.push(getCoords(pair[0], pair[1]));
      allShips.push(ship);
    }
  }

  return allShips;
}

function getCoords(left, right) {
  const coords = [];
  if (left.charAt(0) === right.charAt(0)) {
    const charNumLeft = left.charCodeAt(1) - 64;
    const charNumRight = right.charCodeAt(1) - 64;
    console.log('same row', left, right, charNumLeft, charNumRight);
    let diff = charNumRight - charNumLeft;

    for (let i = 0; i === diff; i++) {
      const char = String.fromCharCode(64 + charNumLeft);
      const newCoord = `${left.charAt(0)}${char}`;
      console.log('checking coords of same row', newCoord);
      coords.push(newCoord);
    }
  }
  if (left.charAt(1) === right.charAt(1)) {
    console.log('same col');
    const leftNum = Number(left.charAt(0));
    const rightNum = Number(right.charAt(0));
    const diff = rightNum - leftNum;

    for (let i = 0; i<=diff; i++) {
      const nextValue = leftNum + i;
      const newCoord = `${nextValue}${left.charAt(1)}`
      console.log('Checking new coord in same col', newCoord);
      coords.push(newCoord);
    }
  }

  return coords;
}

console.log(solution(3, '1A 1B,2C 2C', '1B'));
