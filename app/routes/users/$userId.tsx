import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$userId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    params.userId
  }
})

function RouteComponent() {
  return 'Hello /users/$userId!'
}
