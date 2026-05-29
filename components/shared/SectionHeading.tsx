// type SectionHeadingProps = {
//   eyebrow?: string;
//   title: string;
//   description?: string;
// };

// export default function SectionHeading({
//   eyebrow,
//   title,
//   description,
// }: SectionHeadingProps) {
//   return (
//     <div className="mx-auto mb-10 max-w-3xl text-center">
//       {eyebrow && (
//         <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
//           {eyebrow}
//         </p>
//       )}

//       <h1 className="text-3xl font-bold tracking-tight text-zinc-950 md:text-5xl">
//         {title}
//       </h1>

//       {description && (
//         <p className="mt-4 text-base leading-7 text-zinc-600 md:text-lg">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
}: SectionHeadingProps) {
  const HeadingTag = as;

  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          {eyebrow}
        </p>
      )}

      <HeadingTag className="text-3xl font-bold tracking-tight text-zinc-950 md:text-5xl">
        {title}
      </HeadingTag>

      {description && (
        <p className="mt-4 text-base leading-7 text-zinc-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}