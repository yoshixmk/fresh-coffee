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

  const onPlay = () => {
    audioRef.current.play();
    audioRef.current.onended = () => {
      let speakText: string;
      if (isCostume(cassette.value)) {
        speakText = 'Samba!';
      }
      else {
        speakText = `${cassette.value}!`;
      }
      speak(speakText);
    }
  };

  return (
    <Button onClick={onPlay}>
      <audio src="/matsuken.mp3" ref={audioRef} />
      {children}
    </Button>
  );
}

const speak = (speakText: string) => {
  const speechSynthesisUtterance = new SpeechSynthesisUtterance(speakText);
  speechSynthesisUtterance.lang = 'en-US';
  speechSynthesis.speak(speechSynthesisUtterance);
}
