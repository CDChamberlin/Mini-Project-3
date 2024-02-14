const { createContext, useState, useContext } = require("react");

const FormContext = createContext()

export const FormProvider = ({children}) =>{
    const [formData, setFormData] = useState({})
    return (
        <FormContext.Provider value={{formData, setFormData}}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => useContext(FormContext)