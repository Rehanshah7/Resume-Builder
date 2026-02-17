"use client";

import { useEffect } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { useResume } from "@/context/ResumeContext";
import { AchievementFormValues } from "@/types/achievements";

export default function AchievementsForm() {
  const { resumeData, setResumeData } = useResume();

  const { control, register } = useForm<AchievementFormValues>({
    defaultValues: {
      achievements: resumeData.achievements,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "achievements",
  });

  const achievements = useWatch({
    control,
    name: "achievements",
  });

  useEffect(() => {
    setResumeData((prev) => ({
      ...prev,
      achievements: achievements ?? [],
    }));
  }, [achievements, setResumeData]);

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded space-y-2">
          <input
            className="w-full border p-2 rounded"
            placeholder="Achievement Title"
            {...register(`achievements.${index}.title`)}
          />

          <textarea
            className="w-full border p-2 rounded"
            placeholder="Description (optional)"
            rows={3}
            {...register(`achievements.${index}.description`)}
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Year (optional)"
            {...register(`achievements.${index}.year`)}
          />

          <button
            type="button"
            className="text-white text-sm bg-red-500 py-2 px-4 rounded mt-2 cursor-pointer"
            onClick={() => remove(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        className="px-4 py-2 border rounded"
        onClick={() =>
          append({
            id: uuid(),
            title: "",
            description: "",
            year: "",
          })
        }
      >
        + Add Achievement
      </button>
    </div>
  );
}

