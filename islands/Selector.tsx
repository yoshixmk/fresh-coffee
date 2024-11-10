import { Button } from "../components/Button.tsx";
import { VNode } from "preact";
import type { Signal } from "@preact/signals";

type Props = {
  children: VNode;
  selection: Signal<number>;
  cassettes: string[];
};

export default function Selector({
  children,
  selection,
  cassettes,
}: Props) {
  const onSelect = () => {
    selection.value += 1;
    if (selection.value >= cassettes.length) {
      selection.value = 0;
    }
  };

  return (
    <Button onClick={onSelect}>
      {children}
    </Button>
  );
}
