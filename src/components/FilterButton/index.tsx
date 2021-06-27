import React from 'react';

import { Container } from './styles';

interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({ isSelected = false, children, ...rest }) => {
  return <Container isSelected={isSelected} {...rest}>{children}</Container>;
}

export default FilterButton;