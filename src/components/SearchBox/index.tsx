import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Container } from './styles';

interface SearchBoxProps {
  value: string;
  onChange(inputValue: string): void;
  onSubmit(): void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange, onSubmit }) => {
  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <Container>
      <input placeholder="Buscar" value={value} onChange={handleInputText} />

      <button onClick={() => onSubmit()}>
        <AiOutlineSearch size={20} />
      </button>
    </Container>
  );
}

export default SearchBox;