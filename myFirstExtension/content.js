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
    document.body.style.backgroundColor =  "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  