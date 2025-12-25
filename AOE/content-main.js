(function() {
  let OriginalFile = window.File;
  let textToUse = "";
  let textTitle = "";
  let isAskAi = false;

  // 1. replace the File func
  window.File = function(bits, name, options) {
    if (typeof name === 'string' && name.startsWith('Pasted_Text_') && isAskAi) {
      isAskAi=false;
      const cleanBlob = new Blob([textToUse], { type: 'text/plain' });
      return new OriginalFile([cleanBlob], name, options);
    }
    return new OriginalFile(bits, name, options);
  };

  // 2. listen the event from content-bridge.js
  window.addEventListener('START_PASTE_PROCESS', (e) => {
    textToUse = e.detail;
    textTitle = e.title;
    isAskAi = true;
    const el = document.querySelector('#chat-input');
    if (!el) return;

    el.focus();
    const baitText = textToUse.substring(0, 5) + " ".repeat(1000);
    const dataTransfer = new DataTransfer();
    dataTransfer.setData('text/plain', baitText);

    const event = new ClipboardEvent('paste', {
      clipboardData: dataTransfer,
      bubbles: true,
      cancelable: true,
      composed: true
    });
    el.dispatchEvent(event);
  });
})();