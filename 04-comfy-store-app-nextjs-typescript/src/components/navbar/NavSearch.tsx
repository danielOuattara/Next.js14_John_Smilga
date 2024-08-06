"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";

export default function NavSearch() {
  const searchParams = useSearchParams();
  // console.log("searchParams = ", searchParams);

  const router = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || "",
  );
  // console.log("search = ", search);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.replace(`/products?${params.toString()}`);
  }, 300);

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams]);
  return (
    <Input
      type="search"
      placeholder="search for product..."
      className="max-w-xs dark:bg-muted "
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
}
