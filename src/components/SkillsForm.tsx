"use client";

import { useEffect } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { useResume } from "@/context/ResumeContext";
import { SkillFormValues } from "@/types/skills";

export default function SkillsForm() {
  const { resumeData, setResumeData } = useResume();

  const { control, register } = useForm<SkillFormValues>({
    defaultValues: {
      skills: resumeData.skills,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const skills = useWatch({
    control,
    name: "skills",
  });

  useEffect(() => {
    setResumeData((prev) => ({
      ...prev,
      skills: skills ?? [],
    }));
  }, [skills, setResumeData]);

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded space-y-2">
          <input
            className="w-full border p-2 rounded"
            placeholder="Skill (e.g. React, Node.js)"
            {...register(`skills.${index}.skillName`)}
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Level (e.g. Beginner, Intermediate, Advanced)"
            {...register(`skills.${index}.level`)}
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
            skillName: "",
            level: "",
          })
        }
      >
        + Add Skill
      </button>
    </div>
  );
}

