export default function Loading() {
  return <Loader />;
}

export function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full size-24 border-b-2 border-blue-500" />
    </div>
  );
}
