import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import Spinner from "../ui/Spinner"

const SubmitButton = ()=>{
    const { pending } = useFormStatus()

    return <Button className='flex gap-2' disabled={pending}   color='primary'>
        {pending ? <Spinner/> : "Submit"}
    </Button>
}

export default SubmitButton