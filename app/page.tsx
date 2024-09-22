import Header from "@/components/header/page";
import WelcomePage from "./welcome/page";
import Footer from "@/components/footer/page";

export default function App() {
  return (
    <div className="">
      <div className="w-screen xl:max-w-sm mx-auto pt-20 ">
        <WelcomePage />
      </div>
    </div>
  );
}
