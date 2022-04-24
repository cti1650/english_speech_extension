((window)=>{
  if ("speechSynthesis" in window) {
    // 発言を設定
    const uttr = new SpeechSynthesisUtterance();

    // テキストを設定
    uttr.text = window.getSelection().toString();

    // 言語を設定
    uttr.lang = "en-US";

    // 速度を設定
    uttr.rate = 0.5

    // 高さを設定
    uttr.pitch = 1.4

    // 音量を設定
    uttr.volume = 0.7

    // 英語に対応しているvoiceを設定
    const voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name == "Samantha") {
        uttr.voice = voices[i];
        break;
      }
    }

    // 発言を再生
    speechSynthesis.speak(uttr);
  }

})(window)