// pages/terms.tsx
import TermsPage from '../components/TermsPage';
import termsData from '../data/terms.json'; // Adjust the path as needed

export default function Terms() {
  return (
    <TermsPage
      title="이용 약관"
      content={termsData}
      iconUrl="/images/stamp-grey.png"
    />
  );
}