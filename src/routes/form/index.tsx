import Form from "@/components/Form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/form/")({
    component: Form
});