//Funktion, die für das Abspielen der drei verschiedenen Audio-Dateien zuständig ist.
export function playSound(elementId) {
    const soundElement = document.querySelector<HTMLAudioElement>(elementId);
    soundElement?.play();
  }