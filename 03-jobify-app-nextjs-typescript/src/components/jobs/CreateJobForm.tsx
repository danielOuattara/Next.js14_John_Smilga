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
import { CustomFormInput, CustomFormSelect } from "./index";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { createJobAction } from "@/actions";

export default function CreateJobForm() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

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

  const { mutate, isPending } = useMutation({
    mutationFn: (values: InferTypeCreateAndEditJob) => createJobAction(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });
      toast({ description: "job created" });
      router.push("/jobs");
      // form.reset();
    },
    onError: (error: Error) => {
      toast({ description: error.message });
    },
  });

  function onSubmit(values: InferTypeCreateAndEditJob) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    mutate(values);
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
          <Button
            type="submit"
            className="self-end capitalize"
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Add Job"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
