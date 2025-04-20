import Image from "next/image";

export default function ImageColumn({ row }) {
  const imageUrl = row.getValue("imageUrl");
  console.log(imageUrl);

  return (
    <div className="shrink-0">
      <Image
        src={imageUrl}
        width={500}
        height={500}
        className="w-10 h-10 rounded-full object-cover"
        alt="image"
      />
    </div>
  );
}
