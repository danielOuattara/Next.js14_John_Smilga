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
  const router = useRouter();
  const pathname = usePathname();

  /* after redirecting, we fill the form with url search params data */
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "all";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchInput = formData.get("search") as string;
    const jobStatusSelect = formData.get("jobStatus") as string;

    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set("search", searchInput);
    urlSearchParams.set("jobStatus", jobStatusSelect);
    /* redirect to page with url search params data */
    router.push(`${pathname}?${urlSearchParams.toString()}`);
  };

  return (
    <form
      className="bg-muted dark:bg-transparent mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Search Jobs"
        name="search"
        defaultValue={search}
      />
      <Select name="jobStatus" defaultValue={jobStatus}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all" defaultValue={"all"}>
            all
          </SelectItem>
          {[
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
