let count = 0;
let compCount = 0;

function check(){
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const resultImage = document.getElementById("resultImage");
    const result = document.getElementById("result");
    const counter = document.getElementById("counter");

    let choice = 0;
    let image = [];

    if(rock.checked){
        choice = 1;
        image.push(`<img src="Images/rock.png">`);
    }
    else if(paper.checked){
        choice = 2;
        image.push(`<img src="Images/paper.png">`);
    }
    else if(scissors.checked){
        choice = 3;
        image.push(`<img src="Images/scissors.png">`);
    }

    const compChoice = Math.floor(Math.random() * 3) + 1;
    if(compChoice == 1){
        image.push(`<img src="Images/rock.png">`);
    }
    else if(compChoice == 2){
        image.push(`<img src="Images/paper.png">`);
    }
    else if(compChoice == 3){
        image.push(`<img src="Images/scissors.png">`);
    }

    if(choice == 1 && compChoice == 3){
        resultImage.innerHTML = image.join('');
        result.textContent = "You Win";
        count++;
    }
    else if(choice == 2 && compChoice == 1){
        resultImage.innerHTML = image.join('');
        result.textContent = "You Win";
        count++;
    }
    else if(choice == 3 && compChoice == 2){
        resultImage.innerHTML = image.join('');
        result.textContent = "You Win";
        count++;
    }
    else if(choice == 1 && compChoice == 2){
        resultImage.innerHTML = image.join('');
        result.textContent = "You Loose";
        compCount++;
    }
    else if(choice == 2 && compChoice == 3){
        resultImage.innerHTML = image.join('');
        result.textContent = "You Loose";
        compCount++;
    }
    else if(choice == 3 && compChoice == 1){
        resultImage.innerHTML = image.join('');
        result.textContent = "You Loose";
        compCount++
    }
    else if(choice == 1 && compChoice == 1){
        resultImage.innerHTML = image.join('');
        result.textContent = "It's A tie";
    }
    else if(choice == 2 && compChoice == 2){
        resultImage.innerHTML = image.join('');
        result.textContent = "It's A tie";
    }
    else if(choice == 3 && compChoice == 3){
        resultImage.innerHTML = image.join('');
        result.textContent = "It's A tie";
    }
    counter.textContent = `Your wins: ${count}/${count+compCount}`;
}

function reset(){
    count = 0;
    compCount = 0;
    result.textContent = "";
    resultImage.innerHTML = "";
    counter.textContent = "";
}