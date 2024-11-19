"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { EnumJobStatus } from "./utils/jobFormUtils";
import { FormEvent } from "react";

export default function SearchForm() {
  // usePathname;
  // useRouter;
  // useSearchParams;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const jobStatus = formData.get("jobStatus") as string;
    console.log(search, jobStatus);
  };

  return (
    <form
      className="bg-muted mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg"
      onSubmit={handleSubmit}
    >
      <Input type="text" placeholder="SearchJobs" name="search" />
      <Select name="jobStatus">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {[
            "all",
            ...Object.values(EnumJobStatus).map((jobStatus) => (
              <SelectItem key={jobStatus} value={jobStatus}>
                {jobStatus}
              </SelectItem>
            )),
          ]}
        </SelectContent>
      </Select>
      <Button type="submit">Search</Button>
    </form>
  );
}
