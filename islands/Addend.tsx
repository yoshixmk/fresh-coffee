import type { Signal } from "@preact/signals";
import { useComputed } from "https://esm.sh/v135/@preact/signals@1.2.2/X-ZS8q/denonext/signals.mjs";

type Props = {
  cassettes: string[];
  selection: Signal;
};

export default function Addend({ cassettes, selection }: Props) {
  const cassette = useComputed(() => {
    return cassettes[selection.value];
  });
  return (
    <img
      src={`/${cassette.value}.webp`}
      alt={`Matsuken ${cassette.value}`}
      class="h-32 w-32"
    >
    </img>
  );
}
