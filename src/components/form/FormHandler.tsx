import React from 'react'
import { Button } from '../ui/button'
import { handleSignup } from '@/actions/signup'
import { useFormStatus } from 'react-dom'
import Spinner from '../ui/Spinner'
import { useToast } from '@/hooks/use-toast'
import SubmitButton from './SubmitButton'
import { useRouter } from 'next/navigation'

const FormHandler = ({
    children,
    className
}:{
    children: React.ReactNode,
    className?: string
}) => {
    const { toast } = useToast()
    const router = useRouter()
    const handleSubmit = async (formData: FormData)=>{
        
        const error = await handleSignup(formData)
        
        toast({
            variant: error ? "destructive": "default",
            title: error ? "Uh oh! Something went wrong.": "Your registration was successfully submited",
            description: error,
            duration: 3000
        })

        if(!error) router.push("/auth/login")
    }
    
  return <form action={handleSubmit} className={`flex flex-col gap-4 ${className}`}>
    {children}

    <SubmitButton/>

</form>
}



export default FormHandler