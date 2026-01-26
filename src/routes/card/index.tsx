import Card from "@/components/Card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/card/")({
    component: Card
});