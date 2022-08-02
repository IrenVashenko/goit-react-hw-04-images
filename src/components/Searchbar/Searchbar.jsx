import {
    Header,
    SearchForm,
    Button,
    SearchInput,
    ButtonLabel,
} from './Searchbar.styled';
import { BiSearch } from "react-icons/bi";

import { useState } from 'react';
import { toast } from 'react-toastify';

export const Searchbar = ({ onSubmit }) => {
    const [text, setText] = useState('');

    const handleInput = e => {
        setText(e.currentTarget.value.toLowerCase())
    };

    const onSubmitForm = e => {
        e.preventDefault();
        if (text.trim() === '') {
            toast.error("Please fill out something");
            return;
        }
        onSubmit(text);
        setText('');
    }

    return (
        <Header>
            <SearchForm onSubmit={onSubmitForm}>
                <Button type="submit">
                    <BiSearch />
                    <ButtonLabel></ButtonLabel>
                </Button>

                <SearchInput
                    type="text"
                    placeholder="Search images and photos"
                    onChange={handleInput}
                />
            </SearchForm>
        </Header>
    )
}