import React from 'react';
import { Card, CardHeader, CardContent } from '@kapwa/card';
import { OfficialBiography, BiographyProfile } from '@kapwa/official-biography';

type BiographySectionProps = {
  headerTitle: string;
  headerSubtitle?: string;
};

const biographyProfile: BiographyProfile = {
  name: 'Ferdinand Marcos Jr.',
  position: '17th President of the Republic of the Philippines',
  servingSince: 'Serving since June 30, 2022',
  profileImage:
    'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
  bannerImage:
    'https://images.pexels.com/photos/1714455/pexels-photo-1714455.jpeg',
  contactInfo: {
    office: 'Malacañang Palace, Manila',
    phone: '+63 (2) 8736 8645',
    email: 'op@president.gov.ph',
    website: 'www.president.gov.ph',
  },
  education: [
    {
      degree: 'Bachelor of Arts in Political Science',
      institution: 'University of Oxford',
      year: '1975',
    },
    {
      degree: 'Master in Business Administration',
      institution: 'Wharton School of Business',
      year: '1979',
    },
  ],
  biography: [
    'Ferdinand "Bongbong" Romualdez Marcos Jr. serves as the 17th President of the Philippines, assuming office on June 30, 2022. As the country\'s chief executive, he leads the implementation of laws and policies aimed at national development and public welfare.',
    'Prior to his presidency, he served in various government positions including as a Senator of the Philippines from 2010 to 2016, and as Governor of Ilocos Norte. His administration focuses on economic recovery, infrastructure development, and digital transformation of government services.',
  ],
  achievements: [
    'Led the implementation of digital transformation initiatives across government agencies',
    'Established international partnerships for economic cooperation',
    'Launched nationwide infrastructure development programs',
    'Reformed tax collection systems for improved efficiency',
  ],
};

const BiographySection: React.FC<BiographySectionProps> = ({
  headerTitle,
  headerSubtitle,
}: BiographySectionProps) => {
  return (
    <Card className='mb-2'>
      <CardHeader>
        <h2 className='text-2xl font-semibold'>{headerTitle}</h2>
        {headerSubtitle && <p className='text-gray-800'>{headerSubtitle}</p>}
      </CardHeader>
      <CardContent>
        <OfficialBiography
          profile={biographyProfile}
          contactCta={{
            text: 'Contact Office',
            onClick: () => {
              alert('Contact button clicked!');
            },
          }}
          websiteCta={{
            text: 'Visit Website',
            onClick: () => {
              window.open(biographyProfile.contactInfo.website, '_blank');
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export { BiographySection };
