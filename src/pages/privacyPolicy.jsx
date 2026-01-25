import { useEffect } from "react";
import PrivacyPolicyHeader from "../components/privacyPolicyTitle";
import PrivacyRules from "../components/privacyRules";
import { useLocation } from "react-router-dom";

function PrivacyPolicy() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.fromInternal) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-white">
      <PrivacyPolicyHeader />
      <PrivacyRules />
    </div>
  );
}

export default PrivacyPolicy;
