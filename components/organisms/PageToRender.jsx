import ConsultContent from "./ConsultContent";
import DashboardContent from "./DashboardContent";

const PageToRender = ({ route }) => {
  console.log("r=", route);
  switch (route) {
    case "dashboard":
      return <DashboardContent />;
    case "consult":
      return <ConsultContent />;
  }
};

export default PageToRender;
