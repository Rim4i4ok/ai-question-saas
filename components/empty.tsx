import Image from "next/image";

type EmptyProps = {
  label: string;
};

function Empty({ label }: EmptyProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center p-20">
      <div className="relative h-72 w-72">
        <Image alt="Empty" fill src="/empty.png" className="object-none" />
      </div>
      <p className="text-center text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export default Empty;
