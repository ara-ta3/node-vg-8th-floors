"use strict";

const floor = [
    ".---------------.---------------------.",
    "|               |                     |",
    "|               |      .--.--.----.---|",
    "|               |      |  |  |    |   |",
    "|               |---.  |  |--|    |   |",
    "|               |   |  '--'  '----|   |",
    "|               |---'-.          .'---|",
    "|               |     |          |    |",
    "'---------------'-----'.--.--.  .'----|",
    "|                      |     |  |     |",
    "|                      |--.--|  |--.--|",
    "|                      |  |  |  |  |  |",
    "'---------------'------'--'--'  '--'--|",
    "|                                     |",
    ".               .        .------------|",
    "|               |        |            |",
    "|    Elevator   |        |            |",
    "'---------------'--------'------------'"
];

const places = {
    "pangea": {
        "start": [1,1],
        "end": [16, 8]
    },
    "megallanica": {
        "start": [24,3],
        "end": [26, 5]
    },
    "mu": {
        "start": [27,3],
        "end": [29, 4]
    },
    "atlantis": {
        "start": [30,3],
        "end": [34, 5]
    },
    "pacifis": {
        "start": [35,3],
        "end": [38, 6]
    },
    "zipang": {
        "start": [17,7],
        "end": [22, 8]
    },
    "lemuria": {
        "start": [34,7],
        "end": [38, 8]
    },
    "africa": {
        "start": [24,9],
        "end": [29, 10]
    },
    "eurasia" : {
        "start": [33,9],
        "end": [38, 10]
    },
    "northAmerica": {
        "start": [36,11],
        "end": [38, 12]
    },
    "southAmerica": {
        "start": [33,11],
        "end": [35, 12]
    },
    "australlia": {
        "start": [27,11],
        "end": [29, 12]
    },
    "antarctica": {
        "start": [24,11],
        "end": [26, 12]
    },
    "ajito": {
        "start": [26,15],
        "end": [38, 17]
    }
}

module.exports = (placeName) => {
    const replacement = "*";
    const place = places[placeName];
    if (!place) {
        throw new Error("place " + placeName + "is not found");
    }
    const start = place.start;
    const end   = place.end;
    const ret   = [].concat(floor);
    for (let y = start[1]; y < end[1]; y ++ ) {
        const line = ret[y];
        const split = line.split("");
        for (let x = start[0]; x < end[0]; x ++ ) {
            split[x] = replacement;
        }
        ret[y] = split.join("");
    }
    return ret.join("\n");
}
