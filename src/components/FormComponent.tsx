import { UserSignupSchema } from '@/types/User'
import React from 'react'

const FormComponent = ({
    children, 
    className
}:{
    children: any, 
    className?: string
}) => {
    const [data, setData] = React.useState<UserSignupSchema | null>(null)
    const [error, setError] = React.useState(null)

    const handleChange = (el: React.ChangeEvent<HTMLInputElement>)=>{
        setData((prev:any)=>{
            return{
                ...prev,
                [el.target.id]: el.target.value
            }
        })
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log("ENTER")
        }
      };

    React.useEffect(()=>{
        children.forEach((child:any)=>{
            setData((prev:any)=>{
                return{
                    ...prev,
                    [child.props.id]: ""
                }
            })

            if(child.props.required){
                setError((prevError: any)=>{
                    return {
                        ...prevError,
                        [child.props.id]: false
                    }
                })
            }
        })
    },[])

    const childrenWithHandlers = React.Children.map(children, (child, idx) => {
        return React.cloneElement(child, { 
            key: `form-input-${idx}`,
            onChange: handleChange, 
            onKeyDown: handleKeyPress
        });
    })
    
    console.log(error)

    return (<form className={`flex flex-col gap-4 ${className}`}>
            {childrenWithHandlers}
        </form>
    )
}

export default FormComponent