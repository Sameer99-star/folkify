import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';

const ProfileEdit = () => {
  const [form, setForm] = useState({
    name: '',
    username: '',
    phone: '',
    email: '',
    instagram: '',
  });

  return (
    <AppLayout>
      <div className="px-4 py-6 space-y-4">

        <h1 className="text-xl font-semibold">Personal Information</h1>

        {Object.keys(form).map((key) => (
          <input
            key={key}
            placeholder={key}
            className="w-full p-3 border rounded-lg"
            value={(form as any)[key]}
            onChange={(e) =>
              setForm({ ...form, [key]: e.target.value })
            }
          />
        ))}

        <Button className="w-full">Save Changes</Button>
      </div>
    </AppLayout>
  );
};

export default ProfileEdit;