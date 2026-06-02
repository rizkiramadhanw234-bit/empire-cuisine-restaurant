import parentsPackageImage from "../../public/assets/parents-day.jpg";
import Image from "next/image";

export default function PreviewPage() {
  return (
    <>
      <div>
        <Image src={parentsPackageImage} alt="parentsPackageImage" />
      </div>
    </>
  );
}
