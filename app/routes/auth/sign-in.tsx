import { createFileRoute } from '@tanstack/react-router';
import { SignInForm } from '@/components/form/sign-in-form';

export const Route = createFileRoute('/auth/sign-in')({
    component: SignIn,
});

function SignIn() {
    return (
        <div className='container'>
            <SignInForm />
        </div>
    );
}
