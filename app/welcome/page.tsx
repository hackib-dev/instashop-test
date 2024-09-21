import Welcome from "@/components/Welcome/ssg/welcome";
import { WelcomePageProps } from "@/components/Welcome/types";

export const WelcomePage = ({ welcomeMessage, theme }: WelcomePageProps) => {
  return (
    <div>
      <Welcome welcomeMessage={welcomeMessage} theme={theme} />
    </div>
  );
};
