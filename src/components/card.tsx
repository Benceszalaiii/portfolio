import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function GlowingCard({
  title,
  description,
  buttonTitle,
  className,
  href,
}: {
  href: string;
  title: string;
  description: string;
  buttonTitle: string;
  className?: string;
}) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter>
        <Button className="w-full" variant={"shine"} asChild>
          <Link href={href}>{buttonTitle}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
