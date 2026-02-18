"use client";

import { useEffect } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { useResume } from "@/context/ResumeContext";
import { ProjectFormValues } from "@/types/projects";

export default function ProjectsForm() {
  const { resumeData, setResumeData } = useResume();

  const { control, register } = useForm<ProjectFormValues>({
    defaultValues: {
      projects: resumeData.projects,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const projects = useWatch({
    control,
    name: "projects",
  });

  useEffect(() => {
    setResumeData((prev) => ({
      ...prev,
      projects: projects ?? [],
    }));
  }, [projects, setResumeData]);

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded space-y-2">
          <input
            className="w-full border p-2 rounded"
            placeholder="Project Title"
            {...register(`projects.${index}.title`)}
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Tech Stack (e.g. React, Node, MongoDB)"
            {...register(`projects.${index}.techStack`)}
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Company/Personal"
            {...register(`projects.${index}.companyProjectOrPersonal`)}
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Project Link"
            {...register(`projects.${index}.link`)}
          />

          <textarea
            className="w-full border p-2 rounded"
            placeholder="Project Description"
            rows={3}
            {...register(`projects.${index}.description`)}
          />

          <div className="flex gap-2">
            <input
              className="w-full border p-2 rounded"
              placeholder="Start Year"
              {...register(`projects.${index}.startDate`)}
            />

            <input
              className="w-full border p-2 rounded"
              placeholder="End Year"
              {...register(`projects.${index}.endDate`)}
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
            title: "",
            startDate: "",
            endDate: "",
            techStack: "",
            description: "",
            companyProjectOrPersonal: "Company Project",
            link: "",
          })
        }
      >
        + Add Project
      </button>
    </div>
  );
}
