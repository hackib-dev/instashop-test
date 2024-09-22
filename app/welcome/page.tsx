import Welcome from "@/components/Welcome/ssg/welcome";

const WelcomePage = async () => {
  const welcomeMessage = "Welcome";
  const theme = "The safest platform to shop from social media vendors";

  return <Welcome welcomeMessage={welcomeMessage} theme={theme} />;
};

export default WelcomePage;
