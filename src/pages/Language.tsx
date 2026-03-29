import { AppLayout } from '@/components/layout/AppLayout';

const languages = [
  'English', 'Hindi', 'Bengali', 'Tamil', 'Telugu',
  'Marathi', 'Gujarati', 'Punjabi', 'Kannada', 'Malayalam'
];

const Language = () => {
  return (
    <AppLayout>
      <div className="px-4 py-6">
        <h1 className="text-xl font-semibold mb-4">Select Language</h1>

        <div className="space-y-2">
          {languages.map((lang) => (
            <div
              key={lang}
              className="p-3 border rounded-lg cursor-pointer hover:bg-muted"
            >
              {lang}
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Language;