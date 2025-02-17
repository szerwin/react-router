import { useState } from "react";

export const useForms = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    // Función para manejar cambios en los inputs
    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState, 
            [name]: value, // Actualiza el valor del campo modificado
        });
    };

    return {
        formState,
        onInputChange,
    };
};
