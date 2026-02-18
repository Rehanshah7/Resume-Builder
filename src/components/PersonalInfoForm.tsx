"use client";

import { useForm } from "react-hook-form";
import { personalInfo } from "@/types/resume";
import { useResume } from "@/context/ResumeContext";
import { useEffect } from "react";

export default function PersonalInfoForm() {
  const { resumeData, setResumeData } = useResume();

  const { register, watch } = useForm<personalInfo>({
    defaultValues: resumeData.personalInfo,
  });

  useEffect(() => {
    const subscription = watch((values) => {
      setResumeData((prev) => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          ...values,
        },
      }));
    });

    return () => subscription.unsubscribe();
  }, [watch, setResumeData]);

  return (
    <form className="space-y-4">
      <input
        className="w-full border rounded p-2"
        placeholder="Full Name"
        {...register("fullName")}
      />

      <input
        className="w-full border rounded p-2"
        placeholder="Email"
        {...register("email")}
      />

      <input
        className="w-full border rounded p-2"
        placeholder="Phone"
        {...register("phone")}
      />

      <input
        className="w-full border rounded p-2"
        placeholder="LinkedIn URL"
        {...register("linkedin")}
      />

      <input
        className="w-full border rounded p-2"
        placeholder="Location"
        {...register("location")}
      />

      <textarea
        className="w-full border rounded p-2"
        placeholder="Professional Summary"
        rows={4}
        {...register("summary")}
      />
    </form>
  );
}
