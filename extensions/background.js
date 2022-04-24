"use strict";

{
  chrome.runtime.onInstalled.addListener(() => {
    const MenuItems = [{ id: "en_speech", title: "Speech" }];
    MenuItems.forEach((item) => {
      chrome.contextMenus.create({ ...item, contexts: ["selection"] });
    });
  });
  chrome.commands.onCommand.addListener((command, tab) => {
    console.log(command);
    switch (command) {
      case "en-speech":
        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            files: ["js/normal.js"],
          },
          () => {}
        );
        break;
      case "en-speech-slow":
        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            files: ["js/slow.js"],
          },
          () => {}
        );
        break;
      case "en-speech-high":
        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            files: ["js/high.js"],
          },
          () => {}
        );
        break;
      default:
    }
  });
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
      case "en_speech":
        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            files: ["js/normal.js"],
          },
          () => {}
        );
        break;
      case "en_speech-slow":
        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            files: ["js/slow.js"],
          },
          () => {}
        );
        break;
      case "en_speech-high":
        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            files: ["js/high.js"],
          },
          () => {}
        );
        break;
      default:
    }
  });
}
