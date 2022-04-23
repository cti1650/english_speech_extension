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
    if (command === "en-speech") {
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          func: () => {
            console.log("hello");
            if ("speechSynthesis" in window) {
              // 発言を設定
              const uttr = new SpeechSynthesisUtterance();

              // テキストを設定
              uttr.text = window.getSelection().toString();

              // 言語を設定
              uttr.lang = "en-US";

              // 速度を設定
              uttr.rate = 0.8

              // 高さを設定
              uttr.pitch = 1.4

              // 音量を設定
              uttr.volume = 0.7

              // 英語に対応しているvoiceを設定
              // const voices = speechSynthesis.getVoices();
              // for (let i = 0; i < voices.length; i++) {
              //   if (voices[i].lang === "en-US") {
              //     uttr.voice = voices[i];
              //   }
              // }
              var voices = speechSynthesis.getVoices();
              voices.forEach(function(v, i){
                  if(v.name == "Samantha") uttr.voice = v;
              });

              // 発言を再生
              window.speechSynthesis.speak(uttr);
            }
          },
        },
        () => {}
      );
    }
  });
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "en_speech") {
      console.log(info);
      console.log(tab);
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          func: () => {
            console.log("hello");
            if ("speechSynthesis" in window) {
              // 発言を設定
              const uttr = new SpeechSynthesisUtterance();

              // テキストを設定
              uttr.text = window.getSelection().toString();

              // 言語を設定
              uttr.lang = "en-US";

              // 速度を設定
              uttr.rate = 0.8

              // 高さを設定
              uttr.pitch = 1.4

              // 音量を設定
              uttr.volume = 0.7

              // 英語に対応しているvoiceを設定
              // const voices = speechSynthesis.getVoices();
              // for (let i = 0; i < voices.length; i++) {
              //   if (voices[i].lang === "en-US") {
              //     uttr.voice = voices[i];
              //   }
              // }
              var voices = speechSynthesis.getVoices();
              voices.forEach(function(v, i){
                  if(v.name == "Samantha") uttr.voice = v;
              });

              // 発言を再生
              window.speechSynthesis.speak(uttr);
            }
          },
        },
        () => {}
      );
    }
  });
}
