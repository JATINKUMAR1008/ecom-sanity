export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const query = await searchParams.query;
  return <div>Search page {query}</div>;
}
