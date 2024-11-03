import { createFileRoute } from '@tanstack/react-router';
import { SignUpForm } from '@/components/form/sign-up-form';

export const Route = createFileRoute('/auth/sign-up')({
    component: SignUp,
});

function SignUp() {
    return (
        <div className='container'>
            <SignUpForm />
        </div>
    );
}
