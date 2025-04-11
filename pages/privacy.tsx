// pages/privacy.tsx
import TermsPage from '../components/TermsPage';
import privacyData from '../data/privacy.json'; // Adjust the path as needed

export default function Privacy() {
  return (
    <TermsPage
      title="개인정보 처리 방침"
      content={privacyData}
      iconUrl="/images/stamp-blue.png"
    />
  );
}