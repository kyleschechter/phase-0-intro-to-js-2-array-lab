// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyCats = [...cats];
    copyCats.push(name);
    return copyCats
}

function prependCat(name) {
    const copyCats = [...cats];
    copyCats.unshift(name);
    return copyCats
}


function removeLastCat() {
    const copyCats = [...cats];
    copyCats.pop();
    return copyCats
}

function removeFirstCat() {
    const copyCats = [...cats];
    copyCats.shift();
    return copyCats
}