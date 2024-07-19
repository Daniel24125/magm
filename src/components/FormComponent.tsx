import { UserSignupSchema } from '@/types/User'
import React from 'react'
import { Button } from './ui/button'
import { useFetchData } from '../../utils/dataFetch'
import { TDataFetchConfigSchema } from '@/types/DataFetch'
import Spinner from './design/Spinner'


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
    const [serverErrorMessage, setServerErrorMessage] = React.useState("")


    const handleChange = (el: React.ChangeEvent<HTMLInputElement>)=>{
        setServerErrorMessage("")
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
        <form onSubmit={onSubmit} className={`flex flex-col gap-4 ${className}`}>
            {childrenWithHandlers}
            <Button className='flex gap-2'  disabled={submit} color='primary'>
                {submit ? <OnSubmitComponent
                    setServerErrorMessage={setServerErrorMessage}
                    setSubmit={setSubmit}
                    fetcherConfig={{
                        ...fetcherConfig, 
                        body: {
                            ...fetcherConfig.body,
                            ...data
                        }
                    }}
                    successFn={successFn}
                />: submitText}
            </Button>
            <h6 className="text-red-500 text-xs">
                 {serverErrorMessage} 
            </h6>
        </form>
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
    const {data, isLoading, error} = useFetchData(fetcherConfig, true)
    
    React.useEffect(()=>{
        if(!isLoading){
            console.log(data)
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


export const OnGoogleSubmit = ()=>{
    const {data, isLoading, error} = useFetchData({
        url: "/api/user",
        method: "POST",
        body: {
            signupMethod: "google-oauth2"
        }
    }, true)

    console.log(data)
    return <Spinner/>


}

export default FormComponent