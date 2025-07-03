import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { useState } from "react"

const PaginationLinks = () => {
    const [num, setnum] = useState(0)
  return (
    <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious  href={`?page=${num-1}`} />
      </PaginationItem>
      <PaginationItem>
                  <PaginationLink  href="?page=1">{num + 1}</PaginationLink>
                  <PaginationLink href="?page=2">{num + 2}</PaginationLink>
                  <PaginationLink href="?page=3">{num + 3}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext  href={`?page=${num+1}`} />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  )
}

export default PaginationLinks