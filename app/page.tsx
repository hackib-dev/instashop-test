import { WelcomePage } from "./welcome/page";
import { welcomeMessage, theme } from "./welcome/constants";

export default function App() {
  return (
    <div className="bg-slate-500 py-5">
      <div className="max-w-sm mx-auto">
        <WelcomePage welcomeMessage={welcomeMessage} theme={theme} />
      </div>
    </div>
  );
}
