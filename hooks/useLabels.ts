"use client";

import { useEffect, useState } from "react";
import { Label } from "@/types/label";

export function useLabels() {
  const [labels, setLabels] = useState<Label[]>([]);

  // دریافت Labelها از localStorage
  useEffect(() => {
    const storedLabels = localStorage.getItem("labels");

    if (storedLabels) {
      setLabels(JSON.parse(storedLabels));
    }
  }, []);

  // ساخت Label
  const addLabel = (name: string, color: string) => {
    const newLabel: Label = {
      id: Date.now(),
      name,
      color,
    };

    const updatedLabels = [...labels, newLabel];

    setLabels(updatedLabels);

    localStorage.setItem(
      "labels",
      JSON.stringify(updatedLabels)
    );
  };

  // ویرایش Label
  const updateLabel = (
    id: number,
    name: string,
    color: string
  ) => {
    const updatedLabels = labels.map((label) =>
      label.id === id
        ? {
            ...label,
            name,
            color,
          }
        : label
    );

    setLabels(updatedLabels);

    localStorage.setItem(
      "labels",
      JSON.stringify(updatedLabels)
    );
  };

  // حذف Label
  const deleteLabel = (id: number) => {
    const updatedLabels = labels.filter(
      (label) => label.id !== id
    );

    setLabels(updatedLabels);

    localStorage.setItem(
      "labels",
      JSON.stringify(updatedLabels)
    );
  };

  return {
    labels,
    addLabel,
    updateLabel,
    deleteLabel,
  };
}