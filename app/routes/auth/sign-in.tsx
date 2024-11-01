import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '~/components/login-form'

export const Route = createFileRoute('/auth/sign-in')({
  component: SignIn,
})

function SignIn() {
  return (
    <div className="container">
      <LoginForm />
    </div>
  )
}
