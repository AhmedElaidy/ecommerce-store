"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const router = useRouter()
  const items = useCart((state) => state.items);

  if (!isMounted) return null;


  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag />
        <span className="ml-2 text-sm font-medium text-white">
          {items?.length}
        </span>
      </Button>
    </div>
  );
}

export default NavbarActions;
