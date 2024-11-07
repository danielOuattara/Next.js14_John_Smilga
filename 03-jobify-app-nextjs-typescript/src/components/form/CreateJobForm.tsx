"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  formSchemaCreateAndEditJob,
  EnumJobMode,
  EnumJobStatus,
  EnumJobWorkPlace,
  customFormInputList,
  customFormSelectList,
} from "./jobFormTypes";
import CustomFormInput from "./CustomFormInput";
import CustomFormSelect from "./CustomFormSelect";

export default function CreateJobForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchemaCreateAndEditJob>>({
    resolver: zodResolver(formSchemaCreateAndEditJob),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: EnumJobStatus.Pending,
      mode: EnumJobMode.FullTime,
      workplace: EnumJobWorkPlace.FullyOnSite,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchemaCreateAndEditJob>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-2xl mb-6">add job</h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          {customFormInputList.map((item) => (
            <CustomFormInput key={item} name={item} control={form.control} />
          ))}

          {customFormSelectList.map((item) => (
            <CustomFormSelect
              key={item.name}
              name={item.name}
              labelText={item.labelText}
              control={form.control}
              items={Object.values(item.items)}
            />
          ))}

          <Button type="submit" className="self-end">
            Create Job
          </Button>
        </div>
      </form>
    </Form>
  );
}
