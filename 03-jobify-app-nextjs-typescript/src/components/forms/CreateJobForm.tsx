"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  customFormInputList,
  customFormSelectList,
  EnumJobMode,
  EnumJobStatus,
  EnumJobWorkPlace,
  formSchemaCreateAndEditJob,
  InferTypeCreateAndEditJob,
} from "./jobFormUtils";
import CustomFormInput from "./CustomFormInput";
import CustomFormSelect from "./CustomFormSelect";

export default function CreateJobForm() {
  const form = useForm<InferTypeCreateAndEditJob>({
    resolver: zodResolver(formSchemaCreateAndEditJob),
    defaultValues: {
      company: "",
      location: "",
      position: "",
      // country: "",
      status: EnumJobStatus.Pending,
      mode: EnumJobMode.FullTime,
      workplace: EnumJobWorkPlace.FullyOnSite,
    },
  });

  function onSubmit(values: InferTypeCreateAndEditJob) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted dark:bg-transparent rounded-md p-8 border"
      >
        <h2 className="capitalize font-semibold text-2xl mb-6">add job form</h2>
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

          {/* <br /> */}
          <Button type="submit" className="self-end capitalize">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
