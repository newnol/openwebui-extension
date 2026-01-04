// options.js

// loading
chrome.storage.local.get(["savedTargetUrl", "savedIframeUrl"], (data) => {
  if (data.savedTargetUrl) document.getElementById("targetUrl").value = data.savedTargetUrl;
  if (data.savedIframeUrl) document.getElementById("iframeUrl").value = data.savedIframeUrl;
});

// Helper to validate URL
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// Helper to ensure URL ends with slash if it's just a domain
function normalizeUrl(url) {
  if (!url.endsWith('/') && !url.includes('?')) {
    return url + '/';
  }
  return url;
}

// save
document.getElementById("save").addEventListener("click", () => {
  const status = document.getElementById("status");
  let targetUrl = document.getElementById("targetUrl").value.trim();
  let iframeUrl = document.getElementById("iframeUrl").value.trim();

  // Basic Validation
  if (!iframeUrl) {
    status.textContent = "Error: Open WebUI URL is required.";
    status.className = "status error";
    return;
  }

  // Auto-fix missing protocol
  if (!iframeUrl.startsWith('http://') && !iframeUrl.startsWith('https://')) {
    iframeUrl = 'https://' + iframeUrl;
  }
  
  if (!isValidUrl(iframeUrl)) {
    status.textContent = "Error: Invalid Open WebUI URL.";
    status.className = "status error";
    return;
  }

  // Auto-generate Target Match URL if empty
  if (!targetUrl) {
    try {
      const urlObj = new URL(iframeUrl);
      targetUrl = `${urlObj.origin}/*`;
      document.getElementById("targetUrl").value = targetUrl;
    } catch (e) {
      // ignore
    }
  }

  chrome.storage.local.set({ 
    "savedTargetUrl": targetUrl, 
    "savedIframeUrl": iframeUrl 
  }, () => {

    chrome.runtime.sendMessage({ type: "RELOAD_SCRIPTS", newUrl: targetUrl });
    
    status.textContent = "Configuration saved successfully!";
    status.className = "status success";
    
    setTimeout(() => { 
      status.className = "status"; 
    }, 3000);
  });
});