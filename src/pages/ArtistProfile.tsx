import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Heart, MapPin, Calendar, Clock } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StarIcon, VerifiedIcon, HeartIcon, FolkDivider, WedddingIcon, FestivalIcon, WorkshopIcon, PrivateEventIcon } from '@/components/icons/FolkIcons';
import { featuredArtists, eventTypes } from '@/data/mockData';

const eventIcons: Record<string, typeof WedddingIcon> = {
  wedding: WedddingIcon,
  festival: FestivalIcon,
  workshop: WorkshopIcon,
  private: PrivateEventIcon,
};

const ArtistProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedEventType, setSelectedEventType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const artist = featuredArtists.find((a) => a.id === id);

  if (!artist) {
    return (
      <AppLayout hideNav>
        <div className="flex items-center justify-center min-h-screen">
          <p>Artist not found</p>
        </div>
      </AppLayout>
    );
  }

  const handleBookNow = () => {
    setShowBooking(true);
    setBookingStep(1);
  };

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
    setTimeout(() => {
      setShowBooking(false);
      setBookingConfirmed(false);
      setBookingStep(1);
      setSelectedEventType(null);
      setSelectedDate(null);
    }, 3000);
  };

  return (
    <AppLayout hideNav>
      {/* Hero Image */}
      <div className="relative h-[45vh] min-h-[320px]">
        <img
          src={artist.coverImage || artist.image}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        
        {/* Navigation */}
        <div className="absolute top-0 inset-x-0 flex items-center justify-between p-4 safe-top">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full">
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full"
            >
              <HeartIcon size={20} filled={isSaved} className={isSaved ? 'text-destructive' : ''} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative -mt-16 bg-background rounded-t-3xl">
        <div className="px-5 pt-6 pb-24">
          {/* Artist Info */}
          <div className="flex items-start gap-4 mb-6">
            {/* Profile Image */}
            <div className="ornamental-frame w-24 h-24 flex-shrink-0">
              <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="font-display text-2xl text-foreground truncate">{artist.name}</h1>
                {artist.verified && (
                  <VerifiedIcon size={20} className="text-saffron flex-shrink-0" />
                )}
              </div>
              <p className="text-primary font-medium mb-2">{artist.skill}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{artist.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-2xl mb-6">
            <div className="flex-1 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <StarIcon size={18} filled className="text-saffron" />
                <span className="font-display text-xl">{artist.rating}</span>
              </div>
              <p className="text-xs text-muted-foreground">{artist.reviewCount} reviews</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex-1 text-center">
              <p className="font-display text-xl mb-1">{artist.experience.split(' ')[0]}</p>
              <p className="text-xs text-muted-foreground">Experience</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex-1 text-center">
              <p className="font-display text-xl mb-1">{artist.priceRange.split(' ')[0]}</p>
              <p className="text-xs text-muted-foreground">Starting</p>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="story" className="w-full">
            <TabsList className="w-full bg-muted/50 p-1 rounded-xl">
              <TabsTrigger value="story" className="flex-1 rounded-lg data-[state=active]:bg-background">
                Story
              </TabsTrigger>
              <TabsTrigger value="services" className="flex-1 rounded-lg data-[state=active]:bg-background">
                Services
              </TabsTrigger>
              <TabsTrigger value="gallery" className="flex-1 rounded-lg data-[state=active]:bg-background">
                Gallery
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1 rounded-lg data-[state=active]:bg-background">
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="mt-6">
              <h3 className="font-display text-lg text-foreground mb-3">Artist Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{artist.story}</p>
              
              <FolkDivider className="w-full h-4 text-primary/30 mb-6" />
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {artist.tags.map((tag) => (
                  <span key={tag} className="fabric-chip">{tag}</span>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="space-y-4">
                {artist.services.map((service) => (
                  <motion.div
                    key={service.id}
                    className="p-4 bg-muted/30 rounded-2xl border border-border"
                    whileHover={{ scale: 1.01 }}
                  >
                    <h4 className="font-display text-lg text-foreground mb-1">{service.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-primary font-semibold">{service.price}</span>
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="mt-6">
              {artist.gallery.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {artist.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      className="aspect-square rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>Gallery coming soon</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              {artist.reviews.length > 0 ? (
                <div className="space-y-4">
                  {artist.reviews.map((review) => (
                    <div key={review.id} className="p-4 bg-muted/30 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{review.userName}</span>
                        <div className="flex items-center gap-1">
                          <StarIcon size={14} filled className="text-saffron" />
                          <span className="text-sm">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No reviews yet</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Fixed Bottom CTA */}
        <div className="fixed bottom-0 inset-x-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border safe-bottom">
          <Button
            size="lg"
            className="w-full bg-gradient-terracotta hover:opacity-90"
            onClick={handleBookNow}
          >
            Book This Artist
          </Button>
        </div>
      </div>

      {/* Booking Bottom Sheet */}
      <AnimatePresence>
        {showBooking && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/50 z-50"
              onClick={() => !bookingConfirmed && setShowBooking(false)}
            />
            
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-50 bg-card rounded-t-3xl max-h-[90vh] overflow-auto"
            >
              <div className="bottom-sheet-handle" />
              
              <div className="px-6 pb-8">
                {bookingConfirmed ? (
                  /* Success State */
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="font-display text-2xl text-foreground mb-2">Booking Request Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      {artist.name} will respond within 24 hours
                    </p>
                    <div className="flex gap-3 justify-center">
                      <Button variant="outline" onClick={() => navigate('/bookings')}>
                        View Booking
                      </Button>
                      <Button onClick={() => navigate('/explore')}>
                        Explore More Artists
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  /* Booking Steps */
                  <>
                    {/* Progress */}
                    <div className="flex items-center gap-2 mb-6">
                      {[1, 2, 3, 4, 5].map((step) => (
                        <div
                          key={step}
                          className={`h-1 flex-1 rounded-full transition-colors ${
                            step <= bookingStep ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Step 1: Event Type */}
                    {bookingStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="font-display text-xl mb-2">What's the occasion?</h3>
                        <p className="text-sm text-muted-foreground mb-6">Select your event type</p>
                        
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {eventTypes.map((event) => {
                            const Icon = eventIcons[event.id];
                            return (
                              <motion.button
                                key={event.id}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                  setSelectedEventType(event.id);
                                  setBookingStep(2);
                                }}
                                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                                  selectedEventType === event.id
                                    ? 'border-primary bg-primary/5'
                                    : 'border-border hover:border-primary/50'
                                }`}
                              >
                                <Icon size={32} className="text-primary mb-2" />
                                <h4 className="font-medium mb-1">{event.name}</h4>
                                <p className="text-xs text-muted-foreground">{event.description}</p>
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Date & Location */}
                    {bookingStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="font-display text-xl mb-2">When and where?</h3>
                        <p className="text-sm text-muted-foreground mb-6">Select date and location</p>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <label className="block text-sm font-medium mb-2">Date</label>
                            <input
                              type="date"
                              value={selectedDate || ''}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              className="w-full p-3 bg-muted rounded-xl border border-border focus:border-primary focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Location</label>
                            <div className="flex items-center gap-2 p-3 bg-muted rounded-xl border border-border">
                              <MapPin className="w-5 h-5 text-muted-foreground" />
                              <input
                                type="text"
                                placeholder="Enter your city or venue"
                                className="flex-1 bg-transparent focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button variant="outline" onClick={() => setBookingStep(1)}>Back</Button>
                          <Button className="flex-1" onClick={() => setBookingStep(3)}>Continue</Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Event Details */}
                    {bookingStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="font-display text-xl mb-2">Tell us more</h3>
                        <p className="text-sm text-muted-foreground mb-6">Help the artist understand your needs</p>
                        
                        <div className="mb-6">
                          <label className="block text-sm font-medium mb-2">Event Description</label>
                          <textarea
                            placeholder="Describe your event, any specific requirements, themes, or preferences..."
                            rows={4}
                            className="w-full p-3 bg-muted rounded-xl border border-border focus:border-primary focus:outline-none resize-none"
                          />
                          <p className="text-xs text-muted-foreground mt-1 text-right">0/500 characters</p>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button variant="outline" onClick={() => setBookingStep(2)}>Back</Button>
                          <Button className="flex-1" onClick={() => setBookingStep(4)}>Continue</Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Price Reveal */}
                    {bookingStep === 4 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="font-display text-xl mb-2">Estimated Price</h3>
                        <p className="text-sm text-muted-foreground mb-6">Transparent pricing breakdown</p>
                        
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="bg-muted/50 rounded-2xl p-4 mb-6 overflow-hidden"
                        >
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Base Performance Fee</span>
                              <span>₹25,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Travel & Accommodation</span>
                              <span>₹5,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Materials (if applicable)</span>
                              <span>₹2,000</span>
                            </div>
                            <FolkDivider className="w-full h-2 text-primary/30" />
                            <div className="flex justify-between font-semibold text-lg">
                              <span>Total Estimate</span>
                              <span className="text-primary">₹32,000</span>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-3">
                            * Final price may vary based on specific requirements
                          </p>
                        </motion.div>
                        
                        <div className="flex gap-3">
                          <Button variant="outline" onClick={() => setBookingStep(3)}>Back</Button>
                          <Button className="flex-1" onClick={() => setBookingStep(5)}>Continue</Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 5: Confirm */}
                    {bookingStep === 5 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="font-display text-xl mb-2">Confirm Booking</h3>
                        <p className="text-sm text-muted-foreground mb-6">Review your booking details</p>
                        
                        <div className="bg-muted/50 rounded-2xl p-4 mb-6">
                          <div className="flex items-center gap-3 mb-4">
                            <img src={artist.image} alt={artist.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                              <p className="font-medium">{artist.name}</p>
                              <p className="text-sm text-muted-foreground">{artist.skill}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Event Type</span>
                              <span className="capitalize">{selectedEventType}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Date</span>
                              <span>{selectedDate || 'To be confirmed'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Estimated Total</span>
                              <span className="text-primary font-semibold">₹32,000</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button variant="outline" onClick={() => setBookingStep(4)}>Back</Button>
                          <motion.div className="flex-1">
                            <Button
                              className="w-full bg-gradient-terracotta"
                              onClick={handleConfirmBooking}
                            >
                              Confirm Booking
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AppLayout>
  );
};

export default ArtistProfile;
