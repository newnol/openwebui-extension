// options.js

// loading
chrome.storage.local.get(["savedTargetUrl", "savedIframeUrl"], (data) => {
  if (data.savedTargetUrl) document.getElementById("targetUrl").value = data.savedTargetUrl;
  if (data.savedIframeUrl) document.getElementById("iframeUrl").value = data.savedIframeUrl;
});

// save
document.getElementById("save").addEventListener("click", () => {
  const targetUrl = document.getElementById("targetUrl").value.trim();
  const iframeUrl = document.getElementById("iframeUrl").value.trim();

  chrome.storage.local.set({ 
    "savedTargetUrl": targetUrl, 
    "savedIframeUrl": iframeUrl 
  }, () => {

    chrome.runtime.sendMessage({ type: "RELOAD_SCRIPTS", newUrl: targetUrl });
    
    document.getElementById("status").textContent = "Config saved！";
    setTimeout(() => { document.getElementById("status").textContent = ""; }, 2000);
  });
});