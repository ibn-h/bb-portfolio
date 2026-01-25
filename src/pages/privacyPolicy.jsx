import scrollToTop from "../hooks/scrollToTop";

import PrivacyPolicyHeader from "../components/privacyPolicyTitle";
import PrivacyRules from "../components/privacyRules";

function PrivacyPolicy() {
  scrollToTop();

  return (
    <div className="bg-white">
      <PrivacyPolicyHeader />
      <PrivacyRules />
    </div>
  );
}

export default PrivacyPolicy;
