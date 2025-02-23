document.getElementById("changeColor").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: changeBackground
    });
  } else {
    console.error("No active tab found!");
  }
});

function changeBackground() {
  document.body.style.backgroundColor = "red";
}
