import Todo from '@/components/Todo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/todos/')({
  component: Todo,
});
