import type { Meta, StoryObj } from '@storybook/react';
import { OfficialBiography } from './index';
import type { BiographyProfile } from './index';

const meta: Meta<typeof OfficialBiography> = {
  title: 'Components/Biography/Official Biography',
  component: OfficialBiography,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    contactButtonText: {
      control: { type: 'text' },
      description: 'Text for the contact button',
    },
    websiteButtonText: {
      control: { type: 'text' },
      description: 'Text for the website button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof OfficialBiography>;

// Mock data for President
const presidentProfile: BiographyProfile = {
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
    'Before his presidency, he served as a Senator of the Philippines from 2010 to 2016, where he authored and co-authored several significant pieces of legislation focused on agriculture, infrastructure development, and social services.',
    'His political career also includes serving as Governor of Ilocos Norte from 1983 to 1986 and again from 1998 to 2007, and as Representative of the 2nd District of Ilocos Norte from 1992 to 1995 and 2007 to 2010.',
  ],
  achievements: [
    'Led the implementation of major infrastructure projects including the Mindanao Railway and Metro Manila Subway',
    'Championed agricultural modernization programs benefiting millions of Filipino farmers',
    'Strengthened diplomatic relations across Southeast Asia and the Pacific region',
    'Implemented comprehensive social welfare programs focusing on poverty reduction',
  ],
};

// Mock data for Senator
const senatorProfile: BiographyProfile = {
  name: 'Maria Santos',
  position: 'Senator of the Republic of the Philippines',
  servingSince: 'Serving since June 30, 2019',
  profileImage:
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  bannerImage:
    'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg',
  contactInfo: {
    office: 'Philippine Senate, Pasay City',
    phone: '+63 (2) 8552 6601',
    email: 'm.santos@senate.gov.ph',
    website: 'www.senate.gov.ph/senators/sen_bio/santos_bio.asp',
  },
  education: [
    {
      degree: 'Bachelor of Laws',
      institution: 'University of the Philippines',
      year: '2005',
    },
    {
      degree: 'Master of Laws',
      institution: 'Harvard Law School',
      year: '2008',
    },
  ],
  biography: [
    "Senator Maria Santos is a distinguished legislator known for her advocacy in education reform and women's rights. Since assuming office in 2019, she has been at the forefront of progressive legislation.",
    'Prior to her election to the Senate, Senator Santos served as a Congresswoman representing the 3rd District of Metro Manila from 2013 to 2019, where she focused on local governance and community development.',
    'Her legal expertise and commitment to public service have made her a respected voice in Philippine politics, particularly on issues of social justice and human rights.',
  ],
  achievements: [
    'Principal author of the Free College Education Act',
    'Champion of the Safe Spaces Act protecting women from harassment',
    'Led investigations on government transparency and accountability',
    'Established scholarship programs benefiting underprivileged students',
  ],
};

// Mock data for Mayor
const mayorProfile: BiographyProfile = {
  name: 'Roberto Cruz',
  position: 'Mayor of Quezon City',
  servingSince: 'Serving since June 30, 2020',
  profileImage:
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
  bannerImage:
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
  contactInfo: {
    office: 'Quezon City Hall, Quezon City',
    phone: '+63 (2) 8988 4242',
    email: 'mayor@quezoncity.gov.ph',
    website: 'quezoncity.gov.ph',
  },
  education: [
    {
      degree: 'Bachelor of Science in Public Administration',
      institution: 'University of the Philippines',
      year: '1998',
    },
    {
      degree: 'Master in Public Management',
      institution: 'Ateneo de Manila University',
      year: '2003',
    },
  ],
  biography: [
    'Mayor Roberto Cruz has dedicated his career to improving urban governance and the quality of life for Quezon City residents. His administration focuses on smart city initiatives, public health, and inclusive development.',
    'Before becoming mayor, he served as Vice Mayor from 2016 to 2020 and as a City Councilor from 2010 to 2016, earning recognition for his effective leadership in city planning and disaster preparedness.',
  ],
  achievements: [
    'Implemented comprehensive COVID-19 response program serving millions',
    'Launched smart traffic management system reducing congestion by 30%',
    'Established free WiFi zones across all public schools and parks',
    'Pioneered green building initiatives in government facilities',
  ],
};

// === STORIES ===

export const President: Story = {
  args: {
    profile: presidentProfile,
    contactButtonText: 'Contact Office',
    websiteButtonText: 'Visit Website',
  },
};

export const Senator: Story = {
  args: {
    profile: senatorProfile,
    contactButtonText: 'Contact Office',
    websiteButtonText: 'Visit Website',
  },
};

export const Mayor: Story = {
  args: {
    profile: mayorProfile,
    contactButtonText: 'Contact Office',
    websiteButtonText: 'Visit Website',
  },
};
