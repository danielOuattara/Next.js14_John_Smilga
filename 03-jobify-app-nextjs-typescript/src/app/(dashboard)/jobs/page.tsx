import { getAllJobsAction } from "@/actions";
import { JobSearchForm, JobsList } from "@/components/jobs";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function JobsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["jobs", "", "all", 1],
    queryFn: () => getAllJobsAction({}),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <JobSearchForm />
      <JobsList />
    </HydrationBoundary>
  );
}
