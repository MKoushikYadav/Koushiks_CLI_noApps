/** This function initializes the input box i.e the command line.
 * @returns {Element} Command Input Box
 */
function getCommandInputBox() {
  inputBox = document.getElementsByClassName("inputBox")[0];
  return inputBox;
}

/**This function displays and adds functionality to the introductory dialog modal */
function openIntroDialog() {
  let introDialog = document.getElementById("introDialog");
  let inputBox = getCommandInputBox();
  introDialog.showModal();
  let closeDialogButton = document.getElementById("closeIntroDialog");
  closeDialogButton.addEventListener("click", () => {
    introDialog.close();
  });
  introDialog.addEventListener("close",()=>{setTimeout(inputBox.focus(),100)});
}

/** This function clears the screen that is removes all nodes of class cmdEntered.
 */
function clear() {
  elements = document.getElementsByClassName("cmdEntered");
  [...elements].forEach((element) => {
    element.remove();
  });
}

/**This function processes the commands by listening to the input.
 * @param {String} text - The tab to switch to.
 */
function runCommand(text) {
  text = text;
  switch (text.toLowerCase().split(" ")[0]) {
    // if cls,clear or clearscreen is entered ,it removes all the commands entered from the screen.
    case "cls":
    case "clear":
    case "clearscreen":
      clear();
      break;
    // if help is entered, a list of commands that can be entered are shown.
    case "help":
      displayResult(helpDialog);
      break;
    case "projects":
      displayResult(commandOutputs.projects);
      break;
    case "contact":
      displayResult(commandOutputs.contact);
      break;
    case "about":
      displayResult(commandOutputs.about);
      break;
    case "skills":
      displayResult(commandOutputs.skills);
      break;
    case "education":
      displayResult(commandOutputs.education);
      break;
    case "experience":
      displayResult(commandOutputs.experience);
      break;
    default:
      displayResult(
        '<b>Command not found. Please use "help" to check list of commands.</b>'
      );
      break;
  }
}

/**This function logs the output on screen i.e creates an div element with class cmdEntered.
 * @param {String} result Value to be printed
 */
function displayResult(result, html = true) {
  let entered = document.createElement("div");
  entered.classList.add("cmdEntered");
  if (html) entered.innerHTML = result;
  else {
    entered.textContent = result;
  }
  document.getElementById("in").before(entered);
  inputBox.value = "";
  inputBox.placeholder = "";
}

/**This function logs the commands on screen i.e creates an paragraph element with class cmdEntered and is inserted before the flex div i.e
 the text input. */
function logCommandOnTerminal(text, prefix = "Koushik:/>") {
  let entered = document.createElement("div");
  entered.classList.add("cmdEntered");
  entered.textContent = prefix + text;
  document.getElementById("in").before(entered);
  inputBox.value = "";
  inputBox.placeholder = "";
}

/**This function returns the command from user command history incrementing the length of history by UpdateValue
 * @param {String} eventType  The event type
 * @returns {String} text - The command previouslyentered by the user.
 */
function getCommandFromHistory(eventType) {
  let commandHistoryLength = userCommandHistory.length;
  if (
    commandHistoryLength > 0 &&
    Math.abs(consecutiveSimilarEventCounter) == commandHistoryLength
  )
    return 10;

  let result =
    userCommandHistory[commandHistoryLength + consecutiveSimilarEventCounter];
  if (eventType == "ArrowUp") --consecutiveSimilarEventCounter;
  if (eventType == "ArrowDown") ++consecutiveSimilarEventCounter;
  return result;
}

/**This function listens for the 'Enter' event on the command line and calls appropriate commands.*/
function CommandListener(event) {
  let text = inputBox.value;
  let commandToBeDisplayed = "";
  if (event.key === "Enter") {
    updateCommandAndEventHistory(event.key, text);
    if (inputBox.value.trim() == "") {
      event.preventDefault();
      setTimeout(logCommandOnTerminal(" "), 200);
    } else {
      event.preventDefault(); // Prevent the default behavior (form submission, line break, etc.)
      setTimeout(logCommandOnTerminal(text), 200);
      runCommand(text);
    }
    previousCommandLineEvent = event.key;
    consecutiveSimilarEventCounter = 0;
  }

  /**This function pushes the new command to the array and updates event History */
  function updateCommandAndEventHistory(eventName, commandEntered) {
    previousCommandLineEvent = eventName;
    userCommandHistory.push(commandEntered);
  }

  if (event.key == "ArrowUp" || event.key == "ArrowDown") {
    let command = getCommandFromHistory(event.key);
    typeof command == "string" ? (inputBox.value = command) : null;
    previousCommandLineEvent = event.key;
  }
}
getCommandInputBox().addEventListener("keydown", CommandListener);
addEventListener("load", openIntroDialog);
