import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils"; // تأكد إن عندك هذي الدالة أو استبدل بـ classnames

export default function CustomDropdownMenu({
  trigger,
  items = [],
  withDivider = false,
  align = "start", // أو "end"
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 bg-white text-black text-sm rounded-md shadow-md z-[100]"
        align={align}
      >
        {items.map((item, index) => (
          <DropdownMenuItem asChild key={index}>
            <Link
              to={item.to}
              className={cn(
                "flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer",
                withDivider &&
                  index < items.length - 1 &&
                  "border-b border-gray-200"
              )}
            >
              {item.icon && <span className="text-[#35AFA0]">{item.icon}</span>}
              <span>{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
