import Conte from "@/components/Conte/page";
import Question from "@/components/Duvidas/page";
import WhoItWorks from "@/components/WhoItWorks/WhoItWorks";
import Simplify from "@/components/common/Simplify/Simplify";

export default function Home() {
  return (
    <div className="py-20 flex flex-col items-center w-full">
      <WhoItWorks />
      <Simplify />
      <Conte />
      <Question />
    </div>
  );
}
