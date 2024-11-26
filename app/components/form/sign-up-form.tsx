'use client';
import { Link } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signUp } from '@/lib/auth/auth-client';
import { useToast } from '@/hooks/use-toast';

function randomString(length: number) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export function SignUpForm() {
    const { toast } = useToast();

    function createUser() {
        signUp.email(
            {
                name: randomString(8) as string,
                email: randomString(8) + '@example.com',
                password: randomString(12),
            },
            {
                onError: (error) => {
                    console.warn(error);
                    toast({
                        title: 'Error',
                        variant: 'destructive',
                        description: error.message,
                    })
                },
                onSuccess: () => {
                    toast({
                        title: 'Success',
                        color: 'green',
                        description: 'Account has been created!',
                    })
                },
            }
        );
    }

    return (
        <Card className='mx-auto max-w-sm'>
            <CardHeader>
                <CardTitle className='text-2xl'>Sign Up</CardTitle>
                <CardDescription>Enter your email below to sign up to an account</CardDescription>
            </CardHeader>
            <CardContent>
                <Button className='w-full' onClick={createUser}>
                    Sign Up
                </Button>
                <div className='mt-4 text-center text-sm'>
                    Already have an account?{' '}
                    <Link to='/auth/sign-in' className='underline'>
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
