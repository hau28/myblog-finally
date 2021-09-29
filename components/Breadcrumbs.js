export default function Breadcrumbs({ paths }) {
  return (
    <div className="font-playfair self-stretch bg-gray-1 py-4 px-6 sm:px-16 gap-2">
      <span className="hover:cursor-pointer text-prim-6 hover:opacity-75 transition-all">
        Home
      </span>
      {paths?.map((path, i) => (
        <>
          <span className="px-2">›</span>
          <span
            className={
              i === paths.length - 1
                ? ``
                : `hover:cursor-pointer text-prim-6 hover:opacity-75  transition-all`
            }
          >
            {path}
          </span>
        </>
      ))}
    </div>
  );
}
