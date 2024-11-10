import { Signal, useSignal } from "@preact/signals";
import { Button } from "../../components/Button.tsx";
import Addend from "../../islands/Addend.tsx";
import Selector from "../../islands/Selector.tsx";

export default function Matsuken() {
  const cassettes = ["costume", "lemon"];
  const selection = useSignal(0);

  return (
    <div>
      <h1 class="text-4xl text-center">Hi, I'm Matsuken</h1>
      <div class="flex items-center justify-center">
        <span class="flex">
          <img
            src="/matsuken.webp"
            alt="Matsuken"
            class="h-32 w-32"
          />
          <p class="text-8xl">+</p>
          <Addend cassettes={cassettes} selection={selection} />
        </span>
      </div>
      <Operations selection={selection} cassette={cassettes} />
    </div>
  );
}

type OperationsProps = {
  selection: Signal<number>;
  cassette: string[];
};

const Operations = ({ selection, cassette }: OperationsProps) => {
  return (
    <div class="flex justify-center">
      <Selector selection={selection} cassettes={cassette}>
        <span className="flex">
          <ArrowIcon />Select
        </span>
      </Selector>
      <Button>
        <span class="flex">
          <MusicIcon />Play
        </span>
      </Button>
    </div>
  );
};

const MusicIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
      />
    </svg>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
};
