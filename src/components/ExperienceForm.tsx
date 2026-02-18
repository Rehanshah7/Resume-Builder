"use client";

import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { useEffect } from "react";
import { useResume } from "@/context/ResumeContext";
import { experience } from "@/types/resume";
import { v4 as uuid } from "uuid";

type ExperienceFormValues = {
  experiences: experience[];
};

export default function ExperienceForm() {
  const { resumeData, setResumeData } = useResume();

  const { control, register, watch, setValue } = useForm<ExperienceFormValues>({
    defaultValues: {
      experiences: resumeData.experiences || [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const watchedExperience = useWatch({
    control,
    name: "experiences",
  });

  useEffect(() => {
    setResumeData((prev) => ({
      ...prev,
      experiences: watchedExperience || [],
    }));
  }, [watchedExperience, setResumeData]);

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded space-y-2">
          <input
            className="w-full border p-2 rounded"
            placeholder="Job Title"
            {...register(`experiences.${index}.jobTitle`)}
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Company"
            {...register(`experiences.${index}.company`)}
          />

          <div className="flex gap-2">
            <input
              className="w-full border p-2 rounded"
              placeholder="Start Year"
              {...register(`experiences.${index}.startDate`)}
            />
            <input
              className="w-full border p-2 rounded"
              placeholder="End Year"
              disabled={watch(`experiences.${index}.endDate`) === "Present"}
              {...register(`experiences.${index}.endDate`)}
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={watch(`experiences.${index}.endDate`) === "Present"}
              onChange={(e) => {
                setValue(
                  `experiences.${index}.endDate`,
                  e.target.checked ? "Present" : "",
                );
              }}
            />
            Currently working here
          </label>

          <textarea
            className="w-full border p-2 rounded"
            placeholder="Work Description"
            rows={3}
            {...register(`experiences.${index}.description`)}
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
            jobTitle: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
          })
        }
      >
        + Add Experience
      </button>
    </div>
  );
}
