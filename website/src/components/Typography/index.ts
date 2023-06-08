import tw, { styled } from 'twin.macro';

const H1 = styled.h1(tw`font-mono font-base text-h1-sm md:text-h1-md lg:text-h1-lg`);
const H2 = styled.h2(tw`font-mono font-base text-h2-sm md:text-h2-md lg:text-h2-lg`);
const H3 = styled.h3(tw`font-body font-black text-h3-sm md:text-h3-md lg:text-h3-lg`);
const P = styled.p(tw`font-body font-base text-p-sm md:text-p-md lg:text-p-lg`);
const Overline = styled.p(tw`uppercase font-body font-semibold text-o-sm md:text-o-md lg:text-o-lg`);
const Helper = styled.p(tw`italic font-body font-light text-helper`);
const Code = styled.code(tw`font-mono text-code-sm md:text-code-md`);
const A = styled.a<{ inherit?: boolean; hover?: 'underline' | 'color' }>(({ inherit = true, hover = undefined }) => [
  tw`transition`,
  inherit ? tw`text-inherit` : tw`text-magenta-500`,
  hover === 'underline' && tw`hover:underline`,
  hover === 'color' && tw`hover:(text-yellow-500)`,
]);
const Ul = styled.ul(tw`p-0 m-5 border-l border-magenta-300 w-fit`);
const Li = styled.li`${tw`px-5 py-1 my-1 w-full hover:(bg-neutral-100)`}
&a {
  ${tw`w-full h-full`}
}`;
const Pre = styled.pre(tw`bg-neutral-100 p-5 rounded-lg shadow-bar sm:w-full md:max-w-3xl`);

export {
  H1,
  H2,
  H3,
  P,
  Overline,
  Helper,
  Code,
  A,
  Ul,
  Li,
  Pre
};
