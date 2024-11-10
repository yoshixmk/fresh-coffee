import { Button } from "../components/Button.tsx";
import { createRef, VNode } from "preact";
import type { Signal } from "@preact/signals";
import { useComputed } from "https://esm.sh/v135/@preact/signals@1.2.2/X-ZS8q/denonext/signals.mjs";
import { isCostume } from "../components/consts.ts";

type Props = {
  children: VNode;
  selection: Signal<number>;
  cassettes: string[];
};

export default function Player({
  children,
  selection,
  cassettes,
}: Props) {
  const audioRef = createRef();
  const cassette = useComputed(() => {
    return cassettes[selection.value];
  });
  initSpeakers();

  const onPlay = () => {
    audioRef.current.play();
    speak(cassette.value);
  };

  return (
    <Button onClick={onPlay}>
      <audio src="/matsuken.mp3" ref={audioRef} />
      {children}
    </Button>
  );
}

const initSpeakers = (): void => {
  // deno-lint-ignore no-window
  if (window.speechSynthesis) {
    speechSynthesis.getVoices();
  }
}

const speak = (text: string) => {
  const speechText = isCostume(text) ? 'Samba!' : `${text}`;
  const speechSynthesisUtterance = new SpeechSynthesisUtterance(`${speechText}!`);
  speechSynthesisUtterance.voice = window.speechSynthesis.getVoices()[42];
  speechSynthesisUtterance.lang = 'en-US';
  speechSynthesisUtterance.rate = 0.5;
  setTimeout(() => {
    speechSynthesis.speak(speechSynthesisUtterance);
  }, 2000);
}
