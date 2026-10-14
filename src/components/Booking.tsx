import { useState, useSyncExternalStore, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { bookingUrl, contact } from '../site';
import SectionHeader from './SectionHeader';

const isoDate = (d: Date) => new Date(d.getTime() - d.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);

// Today's date on the client; undefined while prerendering so no build date is baked in.
const noop = () => () => {};
const useToday = () =>
  useSyncExternalStore(noop, () => isoDate(new Date()), () => undefined);

const fieldClass =
  'mt-2 block w-full min-w-0 rounded-lg border border-rule bg-paper px-4 py-2.5 font-normal text-ink transition-colors hover:border-ink-2 focus-visible:border-accent';

const Booking = () => {
  const { t, i18n } = useTranslation();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const today = useToday();
  const [guests, setGuests] = useState('2');
  const [guestsChosen, setGuestsChosen] = useState(false);
  const [error, setError] = useState(false);

  const action = bookingUrl(i18n.language);

  // Pass on only what the visitor actually filled in; with nothing filled in,
  // the button just opens the property page.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const hasDates = Boolean(checkIn && checkOut);
    if (Boolean(checkIn) !== Boolean(checkOut) || (hasDates && checkOut <= checkIn)) {
      setError(true);
      return;
    }

    const params = new URLSearchParams();
    if (hasDates) {
      params.set('checkin', checkIn);
      params.set('checkout', checkOut);
      params.set('no_rooms', '1');
      params.set('group_children', '0');
    }
    if (hasDates || guestsChosen) params.set('group_adults', guests);

    const query = params.toString();
    window.open(query ? `${action}?${query}` : action, '_blank', 'noopener');
  };

  return (
    <section id="booking" className="pt-20 pb-10">
      <div className="wrap">
        <SectionHeader title={t('booking.title')} subtitle={t('booking.lead')} />

        <form action={action} method="get" target="_blank" onSubmit={onSubmit} noValidate className="card mx-auto max-w-4xl p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,7rem)_auto] md:items-end">
            <label className="block font-medium text-ink-2">
              {t('booking.checkIn')}
              <input
                type="date"
                name="checkin"
                value={checkIn}
                min={today}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  setError(false);
                }}
                className={fieldClass}
              />
            </label>
            <label className="block font-medium text-ink-2">
              {t('booking.checkOut')}
              <input
                type="date"
                name="checkout"
                value={checkOut}
                min={checkIn || today}
                onChange={(e) => {
                  setCheckOut(e.target.value);
                  setError(false);
                }}
                aria-invalid={error}
                aria-describedby={error ? 'booking-error' : undefined}
                className={fieldClass}
              />
            </label>
            <label className="block font-medium text-ink-2">
              {t('booking.guests')}
              <select
                name="group_adults"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                  setGuestsChosen(true);
                }}
                className={fieldClass}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className="btn btn-primary">
              {t('hero.cta')}
              <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </div>

          {error && (
            <p id="booking-error" role="alert" className="mt-4 text-danger">
              {t('booking.invalidDates')}
            </p>
          )}
          <p className="mt-4 text-center text-sm text-ink-2">{t('booking.note')}</p>
        </form>

        <div className="mt-8 text-center text-ink-2">
          <p>{t('booking.questions')}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href={contact.phoneHref} className="inline-flex items-center gap-2 font-medium text-ink hover:text-accent-strong">
              <Phone size={18} className="text-accent" aria-hidden="true" />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="inline-flex min-w-0 items-center gap-2 font-medium text-ink hover:text-accent-strong">
              <Mail size={18} className="shrink-0 text-accent" aria-hidden="true" />
              <span className="break-all">{contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
