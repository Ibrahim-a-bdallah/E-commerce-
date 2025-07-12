import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

export default function PaginationControls({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  if (totalPages <= 1) return null;

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show first, last, and around current
      pages.push(1);

      if (currentPage > 3) {
        pages.push("dots-left");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("dots-right");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  const PaginationPreviousHandler = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };
  const PaginationNextHandler = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo(0, 0);
  };

  return (
    <div className="mt-6 flex justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={PaginationPreviousHandler}
              className={
                currentPage === 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>

          {pageNumbers.map((page, index) => (
            <PaginationItem key={index} className="cursor-pointer">
              {typeof page === "number" ? (
                <PaginationLink
                  isActive={page === currentPage}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo(0, 0);
                  }}
                >
                  {page}
                </PaginationLink>
              ) : (
                <span className="px-2 text-gray-500 select-none">…</span>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={PaginationNextHandler}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
