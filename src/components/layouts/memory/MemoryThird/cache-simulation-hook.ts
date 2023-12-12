import { useState } from "react";

const modifyMemory = (index: number, value: number) => (memory: number[]) => {
  memory[index] = value;

  return [...memory];
};

const allocateMemory = (size: number, index: number) => {
  const originalPosition = index % size;

  const mainPosition = index % 4;

  const baseModifier = 4 + mainPosition;

  const firstPositionModifier =
    (mainPosition > 0 ? +1 : 1) * (4 - baseModifier);

  const secondPositionModifier =
    (mainPosition > 1 ? +1 : 1) * (5 - baseModifier);

  const thirdPositionModifier =
    (mainPosition > 2 ? +1 : 1) * (6 - baseModifier);

  const fourthPositionModifier =
    (mainPosition > 3 ? +1 : 1) * (7 - baseModifier);

  return (memory: number[]) => {
    let modifiedMemory = modifyMemory(
      originalPosition + firstPositionModifier,
      index + firstPositionModifier
    )(memory);

    modifiedMemory = modifyMemory(
      originalPosition + secondPositionModifier,
      index + secondPositionModifier
    )(modifiedMemory);

    modifiedMemory = modifyMemory(
      originalPosition + thirdPositionModifier,
      index + thirdPositionModifier
    )(modifiedMemory);

    modifiedMemory = modifyMemory(
      originalPosition + fourthPositionModifier,
      index + fourthPositionModifier
    )(modifiedMemory);

    return modifiedMemory;
  };
};

export const useCacheSimulation = (l1Size = 4, l2Size = 8, mainSize = 16) => {
  const [l1Memory, setL1Memory] = useState<number[]>([]);
  const [l2Memory, setL2Memory] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [hits, setHits] = useState<number>(0);

  const [log, setLog] = useState<string>("");

  const fetchMemory = (index: number) => {
    if (index >= mainSize) return;

    setTotal((total) => total + 1);

    const l1Position = index % l1Size;

    const inL1 = l1Memory[l1Position] === index;

    if (inL1) {
      setHits((hits) => hits + 1);
      return setLog((log) => "L1 Hit" + "\n" + log);
    } else setLog((log) => "L1 Miss" + "\n" + log);

    setL1Memory(modifyMemory(l1Position, index));

    const l2Position = index % l2Size;

    console.log();

    const inL2 = l2Memory[l2Position] === index;

    if (inL2) {
      setHits((hits) => hits + 1);
      return setLog((log) => "L2 Hit" + "\n" + log);
    } else setLog((log) => "L2 Miss" + "\n" + log);

    setL2Memory(allocateMemory(l2Size, index));
  };

  const clearMemory = () => {
    setL1Memory([]);
    setL2Memory([]);
    setLog("");
  };

  return {
    hitRate: hits / total,
    log,
    l1Memory,
    l2Memory,
    fetchMemory,
    clearMemory,
  };
};
