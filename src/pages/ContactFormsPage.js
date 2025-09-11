import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import PartnershipForm from '../components/handlers/PartnershipForm';
import OrganisationForm from '../components/handlers/OrganisationForm';
import ClientForm from '../components/handlers/ClientForm';

export default function ContactFormsPage() {
  const location = useLocation();
  const type = useMemo(() => {
    const last = location.pathname.split('/').filter(Boolean).pop();
    return ['client', 'partnership', 'organisation'].includes(last) ? last : 'all';
  }, [location.pathname]);

  const titleMap = {
    client: 'Client Contact',
    partnership: 'Partnership Contact',
    organisation: 'Organisation Contact',
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {type === 'all' ? 'Contact Us' : titleMap[type]}
      </h2>

      <div className="space-y-8">
        {(type === 'client' || type === 'all') && (
          <section id="contact-client">
            {type === 'all' && (
              <h3 className="text-xl font-semibold mb-2">Client Contact</h3>
            )}
            <ClientForm />
          </section>
        )}

        {(type === 'partnership' || type === 'all') && (
          <section id="contact-partnership">
            {type === 'all' && (
              <h3 className="text-xl font-semibold mb-2">Partnership Contact</h3>
            )}
            <PartnershipForm />
          </section>
        )}

        {(type === 'organisation' || type === 'all') && (
          <section id="contact-organisation">
            {type === 'all' && (
              <h3 className="text-xl font-semibold mb-2">Organisation Contact</h3>
            )}
            <OrganisationForm />
          </section>
        )}
      </div>
    </div>
  );
}
// Removed ContactFormsPage per request. This file is intentionally left blank.
