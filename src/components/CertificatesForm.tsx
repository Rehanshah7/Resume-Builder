"use client";

import { useEffect } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { useResume } from "@/context/ResumeContext";
import { CertificateFormValues } from "@/types/certificates";

export default function CertificatesForm() {
  const { resumeData, setResumeData } = useResume();

  const { control, register } = useForm<CertificateFormValues>({
    defaultValues: {
      certificates: resumeData.certificates,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "certificates",
  });

  const certificates = useWatch({
    control,
    name: "certificates",
  });

  useEffect(() => {
    setResumeData((prev) => ({
      ...prev,
      certificates: certificates ?? [],
    }));
  }, [certificates, setResumeData]);

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded space-y-2">
          <input
            className="w-full border p-2 rounded"
            placeholder="Certificate Title"
            {...register(`certificates.${index}.title`)}
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Issuer / Organization"
            {...register(`certificates.${index}.issuer`)}
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Year"
            {...register(`certificates.${index}.year`)}
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
            issuer: "",
            year: "",
          })
        }
      >
        + Add Certificate
      </button>
    </div>
  );
}

