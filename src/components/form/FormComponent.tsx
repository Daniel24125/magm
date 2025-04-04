import React from 'react'
import { Button } from '../ui/button'
import { useFetchData } from "@/utils/dataFetch"
import { TDataFetchConfigSchema } from '@/types/DataFetch'
// import { useErrorBoundary } from 'react-error-boundary'
import Spinner from '../ui/Spinner'
import FormHandler from './FormHandler'
import { Toaster } from '../ui/toaster'


const FormComponent = ({
    children, 
    className,
    submitText="Submit",
    fetcherConfig,
    successFn
}:{
    children: any, 
    fetcherConfig: TDataFetchConfigSchema,
    className?: string,
    submitText?: string,
    successFn?: any
}) => {
    const [data, setData] = React.useState({})
    const [error, setError] = React.useState({})
    const [submit, setSubmit] = React.useState(false)

    const initiateFormState = (child: any) =>{
        setData((prev:any)=>{
            return{
                ...prev,
                [child.props.id]: ""
            }
        })
    }

    const initiateErrorState = (child: any) =>{
        if(child.props.required){
            setError((prevError: any)=>{
                return {
                    ...prevError,
                    [child.props.id]: false
                }
            })
        }
    }

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
            onSubmit(null)
        }
      };

    React.useEffect(()=>{
        let childrenIsArray = Array.isArray(children)
        if(childrenIsArray){
            children.forEach((child:any)=>{
                initiateFormState(child)
                initiateErrorState(child)
            })
        }else{
            initiateFormState(children)
            initiateErrorState(children)
        }
    },[])

    const childrenWithHandlers = React.Children.map(children, (child, idx) => {
        return React.cloneElement(child, { 
            key: `form-input-${idx}`,
            onChange: handleChange, 
            onKeyDown: handleKeyPress
        });
    })
    
    const onSubmit = (e: null | React.SyntheticEvent)=>{
        if(e) e.preventDefault(); 
        
        if(!submit){
            let hasError = false
            Object.entries(error).forEach((entry: [string, any])=>{
                const [key, value] = entry
                hasError = value
            })
    
            if(!hasError){
                setSubmit(true)
            }
        }
    }

   

    return (
        <FormHandler
            className={className}
        >
            {childrenWithHandlers}
            <Toaster />
        </FormHandler>
    )
}

export const OnSubmitComponent = ({
    setServerErrorMessage, 
    setSubmit, 
    fetcherConfig,
    successFn
}:{
    setServerErrorMessage: any, 
    setSubmit: any, 
    fetcherConfig: TDataFetchConfigSchema,
    successFn: any
})=>{
    //@ts-ignore
    const {data, isLoading, error} = useFetchData(fetcherConfig, true)
    // const { showBoundary } = useErrorBoundary();

    React.useEffect(()=>{
        if(!isLoading){
            // if(error){
            //     showBoundary("Something went wrong while trying to sumit the form data!")
            //     return 
            // }
            if(data?.errorMessage){
                setServerErrorMessage(data.errorMessage)
            }else{
                if(successFn) successFn()
            }
            setSubmit(false)
        }
    },[isLoading])
   
    
    return <Spinner/>

}



export default FormComponent