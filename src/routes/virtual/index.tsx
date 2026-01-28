import Virtual from "@/components/Virtual";
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/virtual/")({
    component: Virtual
});