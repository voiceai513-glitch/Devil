"use client";

import { TextInput } from "@mantine/core";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <TextInput
      placeholder="Search name or location..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      radius="xl"
      size="md"
    />
  );
}       