import { AppLayout } from '@/components/layout/AppLayout';

const Settings = () => {
  return (
    <AppLayout>
      <div className="px-4 py-6 space-y-3">

        <h1 className="text-xl font-semibold mb-4">Settings</h1>

        {[
          'Change Password',
          'Notifications',
          'Theme',
          'Permissions',
          'Privacy Policy',
          'Terms of Service'
        ].map((item) => (
          <div
            key={item}
            className="p-3 border rounded-lg hover:bg-muted cursor-pointer"
          >
            {item}
          </div>
        ))}

      </div>
    </AppLayout>
  );
};

export default Settings;