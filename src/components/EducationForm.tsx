"use client";

import { useResume } from "@/context/ResumeContext";
import { EducationFormValues } from "@/types/educations";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { useWatch } from "react-hook-form";

export default function EducationForm() {
  const { resumeData, setResumeData } = useResume();

  const { control, register } = useForm<EducationFormValues>({
    defaultValues: {
      educations: resumeData.educations,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });

  const educations = useWatch({
    control,
    name: "educations",
  });

  useEffect(() => {
    setResumeData((prev) => ({
      ...prev,
      educations: educations ?? [],
    }));
  }, [educations, setResumeData]);

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded space-y-2">
          <input
            className="w-full border p-2 rounded"
            placeholder="School / College"
            {...register(`educations.${index}.school`)}
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Degree"
            {...register(`educations.${index}.degree`)}
          />

          <textarea
            className="w-full border p-2 rounded"
            placeholder="Description (optional)"
            rows={3}
            {...register(`educations.${index}.description`)}
          />

          <div className="flex gap-2">
            <input
              className="w-full border p-2 rounded"
              placeholder="Start Year"
              {...register(`educations.${index}.startYear`)}
            />

            <input
              className="w-full border p-2 rounded"
              placeholder="End Year"
              {...register(`educations.${index}.endYear`)}
            />
          </div>

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
            school: "",
            degree: "",
            description: "",
            startYear: "",
            endYear: "",
          })
        }
      >
        + Add Education
      </button>
    </div>
  );
}
