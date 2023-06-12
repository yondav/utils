import tw, { css, styled } from 'twin.macro';

const ToggleLabel = styled.label.attrs({ htmlFor: 'themeToggle' })(tw`flex items-center relative w-max cursor-pointer select-none`);
const ToggleInput = styled.input.attrs({ name: 'themeToggle', type: 'checkbox' })<{ isDark: boolean; variant?: 'vertical' | 'horizontal' }>(({ isDark, variant = 'horizontal' }) => css`
${tw`appearance-none transition-colors cursor-pointer rounded-full bg-neutral-300`}
${tw`focus:(outline-none ring-1 ring-yellow-500 ring-offset-2 ring-offset-neutral-500)`}

${variant === 'horizontal' && tw`w-8 h-4 after:(top-1/2 -translate-y-1/2)`}

${variant === 'vertical' && tw`w-4 h-8 after:(left-1/2 -translate-x-1/2)`}

&:after {
  content: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='0.875em' width='0.875em' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath fill='none' d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath d='${isDark ? 'M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z' : 'M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z'}'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  ${tw`w-5 h-5 absolute rounded-full transform transition-transform flex justify-center items-center bg-yellow-500 shadow-bar`}
}

&:focus {
  &:after {
    ${tw`outline-none ring-1 ring-blue-400 ring-offset-2 ring-offset-neutral-500`}
  }
}

&:checked {
  ${tw`focus:(outline-none ring-1 ring-blue-400 ring-offset-2 ring-offset-neutral-500)`}
  &:focus {
    &:after {
      ${tw`outline-none ring-1 ring-yellow-500 ring-offset-2 ring-offset-neutral-500`}
    }
  }
  &:after {
    ${variant === 'horizontal' && tw`translate-x-4`}
    ${variant === 'vertical' && tw`translate-y-4`}
    ${tw`bg-blue-500`}
  }
}
`);

const Toggle = {
  Lable: ToggleLabel,
  Input: ToggleInput,
};

export default Toggle;
