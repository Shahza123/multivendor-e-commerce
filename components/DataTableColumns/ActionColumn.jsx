import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import DeleteBtn from "@/components/actions/DeleteBtn";
import Editbtn from "@/components/actions/Editbtn";
export default function ActionColumn({ row, title, endpoint, editEndPoint }) {
  const isActive = row.isActive;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only ">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black rounded-md">
        <DropdownMenuLabel className="border-b border-slate-600 py-2 text-center text-slate-50 hover:bg-slate-700">
          Actions
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="py-2 border-b border-slate-600 text-center text-slate-50 hover:bg-slate-700">
          <DeleteBtn title={title} endpoint={endpoint} />
        </DropdownMenuItem>
        <DropdownMenuItem className="py-2 text-center text-slate-50 hover:bg-slate-700">
          <Editbtn title={title} editEndpoint={editEndPoint} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
