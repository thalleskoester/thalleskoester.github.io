import styled from 'styled-components';

const Button = styled.button`
  padding: 7px 12px;
  margin-top: 2px;
  ${props => props.outline
          ? 'border 1px solid #888; color: #888;'
          : 'background-color: #888; color: var(--font-color-secondary);'
  };
  color: #fff;
  font-size: 0.9rem;
  text-align: center;
  text-shadow: 1px 1px #555;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
`;

const TransparentButton = styled(Button)`
  background-color: transparent;
  color: var(--font-color-primary);

  &:hover {
    color: var(--bg-color-quaternary);
  }
`;

const InfoButton = styled(Button)`
  ${props => props.outline
          ? 'border 1px solid var(--color-info); color: var(--color-info);'
          : 'background-color: var(--color-info); color: var(--font-color-secondary);'
  };
`;

const SuccessButton = styled(Button)`
  ${props => props.outline
          ? 'border 1px solid var(--color-success); color: var(--color-sucess);'
          : 'background-color: var(--color-success); color: var(--font-color-secondary);'
  };
`;

const WarningButton = styled(Button)`
  ${props => props.outline
          ? 'border 1px solid var(--color-warning);color: var(--color-warning);'
          : 'background-color: var(--color-warning);color: var(--font-color-secondary);'
  };
`;

const DangerButton = styled(Button)`
  ${props => props.outline
          ? 'border 1px solid var(--color-danger); color: var(--color-danger);'
          : 'background-color: var(--color-danger); color: var(--font-color-secondary);'
  };
`;

const ThemeButton = styled(Button)`
  ${props => props.outline
          ? 'border 1px solid var(--bg-color-tertiary); color: var(--bg-color-tertiary);'
          : 'background-color: var(--bg-color-tertiary); color: var(--font-color-secondary);'
  };

  &:hover, &:focus {
    ${props => props.outline
            ? 'border 1px solid var(--bg-color-quaternary); color: var(--bg-color-quaternary);'
            : 'background-color: var(--bg-color-quaternary);'
    };
  }
`;

export default Button;
export {TransparentButton, InfoButton, SuccessButton, WarningButton, DangerButton, ThemeButton};