function walkTheDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if (dogWalked) {
                resolve("You walk the dog 🐕");
            }
            else {
                reject("You DID'T walk the dog");
            }

        }, 1500);
    })
}
function cleanTheKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if (kitchenCleaned) {
                resolve("You clean the Kitchen 🧹");
            }
            else{
                reject("You DID'T clean the kitchen");
            }

        }, 2500);
    })
}
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You take out the trash ♻️");
            }
            else{
                reject("You DID'T take out he trash");
            }
        }, 500);
    })
}
// walkTheDog().then(value => { console.log(value); return cleanTheKitchen() })
//     .then(value => { console.log(value); return takeOutTrash() })
//     .then(value => { console.log(value); console.log("You have completed all the chores") })
//     .catch(error => console.error(error));

async function doChores(){

    const walkDog = await walkTheDog();
    console.log(walkDog);

    const cleanKitchen = await cleanTheKitchen();
    console.log(cleanKitchen);

    const takeTrash = await takeOutTrash();
    console.log(takeTrash);

    console.log("You done all the chores");
}

doChores();