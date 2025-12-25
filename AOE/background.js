// Note: If openPanelOnActionClick is true, this listener might not trigger in some versions
chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ tabId: tab.id }).catch((err) => {
    console.error("Failed to open side panel:", err);
  });
});

// Core registration function
async function registerDynamicScripts(targetUrl) {
  const bridgeId = "bridge-script";
  const mainId = "main-script";

  // 1. Unregister old scripts first (to prevent conflicts)
  try {
    const existingScripts = await chrome.scripting.getRegisteredContentScripts();
    const ids = existingScripts.map(s => s.id);
    if (ids.length > 0) {
      await chrome.scripting.unregisterContentScripts({ ids });
    }
  } catch (err) { console.error("Unregistration failed:", err); }

  // 2. Register new scripts
  try {
    await chrome.scripting.registerContentScripts([
      {
        id: bridgeId,
        js: ["content-bridge.js"],
        matches: [targetUrl],
        allFrames: true,
        runAt: "document_start"
      },
      {
        id: mainId,
        js: ["content-main.js"],
        matches: [targetUrl],
        allFrames: true,
        world: "MAIN",
        runAt: "document_start"
      }
    ]);
    console.log("Successfully registered scripts for URL:", targetUrl);
  } catch (err) {
    console.log("Registration failed:", err);
  }
}

// Listen for messages from options.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "RELOAD_SCRIPTS") {
    registerDynamicScripts(message.newUrl);
  }
});

// Auto-register based on last saved configuration when the extension starts
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get("savedTargetUrl", (data) => {
    if (data.savedTargetUrl) {
      registerDynamicScripts(data.savedTargetUrl);
    }
  });
});