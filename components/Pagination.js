import { useState } from "react";

export default function Pagination({ total, current, onPage }) {
  const [page, setPage] = useState(current);
  return (
    <div className="flex self-center font-mono text-lg text-prim-6 gap-1 items-center my-4 mb-6">
      <button
        className="mr-3 disabled:opacity-50 disabled:cursor-default"
        onClick={() => onPage(total - 1)}
        disabled={current <= 1}
      >
        <span className="mx-3">‹</span>
        <span>Prev</span>
      </button>
      <input
        className="w-10 text-center bg-transparent border border-prim-6 text-sm"
        value={page}
        onChange={(e) => {
          const re = /^[0-9\b]+$/;
          if (e.target.value === "" || re.test(e.target.value)) {
            setPage(e.target.value);
          }
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            if (!page) {
              setPage(current);
              return;
            }
            let safePage = page;
            if (page < 1) safePage = 1;
            if (page > total) safePage = total;
            if (safePage !== current) onPage(safePage);
          }
        }}
      />
      <span className="pb-px text-base">/ {total}</span>
      <button
        className="ml-3 disabled:opacity-50 disabled:cursor-default"
        onClick={() => onPage(total + 1)}
        disabled={current === total}
      >
        <span>Next</span>
        <span className="mx-3">›</span>
      </button>
    </div>
  );
}
