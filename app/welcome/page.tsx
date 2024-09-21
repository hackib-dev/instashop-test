// app/welcome/page.tsx

import Welcome from "@/components/Welcome/ssg/welcome";

const WelcomePage = async () => {
  const welcomeMessage = "Welcome";
  const theme = "The safest platform to shop from social media vendors";

  return (
    <div>
      <Welcome welcomeMessage={welcomeMessage} theme={theme} />
    </div>
  );
};

export default WelcomePage;
