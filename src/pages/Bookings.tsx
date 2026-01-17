import { motion } from 'framer-motion';
import { AppLayout } from '@/components/layout/AppLayout';
import { FolkDivider } from '@/components/icons/FolkIcons';

interface Booking {
  id: string;
  artistName: string;
  artistImage: string;
  artistSkill: string;
  eventType: string;
  date: string;
  status: 'requested' | 'accepted' | 'completed' | 'cancelled';
  price: string;
}

const mockBookings: Booking[] = [
  {
    id: '1',
    artistName: 'Lakshmi Devi',
    artistImage: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=100&h=100&fit=crop',
    artistSkill: 'Madhubani Painter',
    eventType: 'Wedding',
    date: '2026-02-15',
    status: 'accepted',
    price: '₹32,000',
  },
  {
    id: '2',
    artistName: 'Ramesh Bhagat',
    artistImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop',
    artistSkill: 'Baul Singer',
    eventType: 'Festival',
    date: '2026-01-26',
    status: 'requested',
    price: '₹35,000',
  },
];

const statusConfig = {
  requested: { label: 'Requested', color: 'bg-turmeric/20 text-clay' },
  accepted: { label: 'Accepted', color: 'bg-primary/10 text-primary' },
  completed: { label: 'Completed', color: 'bg-muted text-muted-foreground' },
  cancelled: { label: 'Cancelled', color: 'bg-destructive/10 text-destructive' },
};

const Bookings = () => {
  return (
    <AppLayout>
      <div className="px-4 py-6 safe-top">
        <h1 className="font-display text-3xl text-foreground mb-2">My Bookings</h1>
        <p className="text-muted-foreground mb-6">Track your cultural experiences</p>

        <FolkDivider className="w-full h-4 text-primary/30 mb-6" />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          {/* Booking Items */}
          <div className="space-y-6">
            {mockBookings.map((booking, index) => {
              const status = statusConfig[booking.status];
              return (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-14"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 w-5 h-5 rounded-full border-4 border-background ${
                    booking.status === 'accepted' ? 'bg-primary' :
                    booking.status === 'requested' ? 'bg-turmeric' :
                    booking.status === 'completed' ? 'bg-muted-foreground' :
                    'bg-destructive'
                  }`} />

                  {/* Card */}
                  <div className="bg-card rounded-2xl p-4 shadow-soft border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={booking.artistImage}
                        alt={booking.artistName}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-muted/30"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg text-foreground truncate">
                          {booking.artistName}
                        </h3>
                        <p className="text-sm text-muted-foreground">{booking.artistSkill}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${status.color}`}>
                        {status.label}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">Event</p>
                        <p className="font-medium">{booking.eventType}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">Date</p>
                        <p className="font-medium">{new Date(booking.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">Price</p>
                        <p className="font-medium text-primary">{booking.price}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {mockBookings.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <span className="text-4xl">📅</span>
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">No Bookings Yet</h3>
            <p className="text-muted-foreground">Start exploring artists to book your first cultural experience</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Bookings;
