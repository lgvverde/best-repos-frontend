import React, { useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import * as config from '../../config';

export default function LanguageSelect() {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector(state => state.languageSelectState.selectedLanguage);
    const [option, setOption] = useState(selectedLanguage);

    const handleChange = (selectedOption) => {
        dispatch({ type: 'LANGUAGE_CHANGED', selectedLanguage: selectedOption });
        setOption(selectedOption);
    }

    return (
        <>

            <Select
                value={option}
                onChange={handleChange}
                options={config.searchOptions}
                placeholder={"Selecione uma linguagem de programação."}
            />
        </>
    );
}
