import { WixDataItem, WixDataQueryResult } from './types';

export interface PaginationOptions {
  limit?: number;
  skip?: number;
}

// Initial seed data for Meenakshi Pearl
const initialData: Record<string, WixDataItem[]> = {
  legalapprovals: [
    {
      _id: 'legal-1',
      approvalName: 'MPA Approved Layout',
      description: 'Fully approved by Malur Planning Authority (MPA) with sanctioned layout plan and DC conversion order.',
      issuingAuthority: 'Malur Planning Authority (MPA)',
      approvalDate: new Date('2024-03-15'),
      isVerified: true,
    },
    {
      _id: 'legal-2',
      approvalName: 'RERA Registered Project',
      description: 'Fully compliant and registered under Karnataka RERA ensuring complete buyer transparency and security.',
      issuingAuthority: 'Karnataka RERA Authority',
      approvalDate: new Date('2024-04-10'),
      isVerified: true,
    },
    {
      _id: 'legal-3',
      approvalName: '100% Clear Titles & Ownership',
      description: 'Freehold ownership with zero legal encumbrances, title deed verified by premier legal counsels.',
      issuingAuthority: 'Revenue Department of Karnataka',
      approvalDate: new Date('2024-01-20'),
      isVerified: true,
    },
    {
      _id: 'legal-4',
      approvalName: 'Leading Bank Loan Approvals',
      description: 'Pre-approved home & plot loan facilities from SBI, HDFC, ICICI, and Axis Bank with expedited sanctioning.',
      issuingAuthority: 'State Bank of India & Major Banks',
      approvalDate: new Date('2024-05-01'),
      isVerified: true,
    },
    {
      _id: 'legal-5',
      approvalName: 'KPTCL & BESCOM Clearance',
      description: 'Sanctioned power infrastructure with dedicated transformer yard, substations, and underground cabling.',
      issuingAuthority: 'Electricity Transmission Corp',
      approvalDate: new Date('2024-02-18'),
      isVerified: true,
    },
    {
      _id: 'legal-6',
      approvalName: 'Pollution Control Board NOC',
      description: 'Environmental compliance certificate with dedicated eco-friendly sewage treatment plant and drainage network.',
      issuingAuthority: 'State Pollution Control Board',
      approvalDate: new Date('2024-03-28'),
      isVerified: true,
    },
  ],

  plotconfigurations: [
    {
      _id: 'plot-1',
      plotName: 'Standard Villa Plot',
      dimensions: '30x50',
      areaSqFt: 1500,
      description: 'Perfect for modern 3 & 4 BHK independent duplex villas with private garden space and car porch.',
      availabilityStatus: 'Available',
      plotImage: 'https://static.wixstatic.com/media/cef78c_1ed0e26987f94f4da1faa6988026c93d~mv2.png?originWidth=1152&originHeight=768',
    },
    {
      _id: 'plot-2',
      plotName: 'Premium Luxury Plot',
      dimensions: '30x60',
      areaSqFt: 1800,
      description: 'Spacious layout tailored for grand luxury residences with expansive private lawns and multi-car parking.',
      availabilityStatus: 'Available',
      plotImage: 'https://static.wixstatic.com/media/cef78c_3afbc2ed677e4695a734f9bc4f870313~mv2.png?originWidth=1152&originHeight=768',
    },
    {
      _id: 'plot-3',
      plotName: 'Grand Executive Plot',
      dimensions: '40x60',
      areaSqFt: 2400,
      description: 'Prestigious corner and avenue-facing plots for bespoke custom architectural estate designs.',
      availabilityStatus: 'Available',
      plotImage: 'https://static.wixstatic.com/media/cef78c_3dec255cbbec4e8e8c3a0710bcec325c~mv2.png?originWidth=1152&originHeight=768',
    },
    {
      _id: 'plot-4',
      plotName: 'Bespoke Estate Plot',
      dimensions: 'Custom Sizes',
      areaSqFt: 3000,
      description: 'Exclusive plots for signature custom villas surrounded by lush green tree-lined boulevards.',
      availabilityStatus: 'Available',
      plotImage: 'https://static.wixstatic.com/media/cef78c_40c064e4ea754026bc4bf8f6b0b001d8~mv2.png?originWidth=1152&originHeight=768',
    },
  ],

  infrastructuredetails: [
    {
      _id: 'infra-1',
      featureName: '40ft & 30ft Wide Roads',
      featureDescription: 'Wide asphalted internal blacktop roads with paved walkways, concrete kerbs, and landscaped avenues.',
      featureIcon: 'https://static.wixstatic.com/media/cef78c_2ea08f0a07c646b9868be54e195758c5~mv2.png',
      displayOrder: 1,
      isAvailable: true,
    },
    {
      _id: 'infra-2',
      featureName: 'Underground Power Network',
      featureDescription: 'Concealed underground electric cabling with modern feeder pillars, eliminating dangling overhead cables.',
      featureIcon: 'https://static.wixstatic.com/media/cef78c_4c9e472ee6b046048dca249b6d8a7c26~mv2.png',
      displayOrder: 2,
      isAvailable: true,
    },
    {
      _id: 'infra-3',
      featureName: 'Dedicated Water Supply',
      featureDescription: '24/7 pressurized water supply via dedicated overhead water tank and individual water connections to each plot.',
      featureIcon: 'https://static.wixstatic.com/media/cef78c_3d1ef99eebfd4a1dbb14fc0cb30e70ca~mv2.png',
      displayOrder: 3,
      isAvailable: true,
    },
    {
      _id: 'infra-4',
      featureName: 'Underground Drainage & STP',
      featureDescription: 'Advanced underground sewage network with a centralized state-of-the-art Sewage Treatment Plant.',
      featureIcon: 'https://static.wixstatic.com/media/cef78c_cb78bda733fa4395b1285624ebf4bbcf~mv2.png',
      displayOrder: 4,
      isAvailable: true,
    },
    {
      _id: 'infra-5',
      featureName: 'Solar LED Streetlights',
      featureDescription: 'Energy-efficient automatic solar street lighting illuminating all avenues, intersections, and public parks.',
      featureIcon: 'https://static.wixstatic.com/media/cef78c_e63c072cfa15482ba6efba7c7fceec34~mv2.png',
      displayOrder: 5,
      isAvailable: true,
    },
    {
      _id: 'infra-6',
      featureName: 'Rainwater Harvesting',
      featureDescription: 'Integrated recharge pits along road networks ensuring sustainable groundwater conservation.',
      featureIcon: 'https://static.wixstatic.com/media/cef78c_92569e0fe7214cbda1be0f9bfe5a8d9b~mv2.png',
      displayOrder: 6,
      isAvailable: true,
    },
  ],

  projectamenities: [
    {
      _id: 'amenity-1',
      amenityName: 'Grand Clubhouse',
      description: 'Exclusive multi-level clubhouse with indoor games, banquet hall, luxury lounge, and co-working spaces.',
      galleryImage: 'https://static.wixstatic.com/media/cef78c_a54b38d356fa4ff68be75cbb6361a9bc~mv2.png',
      category: 'Clubhouse',
      displayOrder: 1,
    },
    {
      _id: 'amenity-2',
      amenityName: 'Resort-Style Swimming Pool',
      description: 'Crystal clear swimming pool with dedicated kids pool, loungers, sundeck, and changing rooms.',
      galleryImage: 'https://static.wixstatic.com/media/cef78c_6bc76ebfbfaf42c88cb376e6d1c448bb~mv2.png',
      category: 'Wellness',
      displayOrder: 2,
    },
    {
      _id: 'amenity-3',
      amenityName: 'Fully Equipped Fitness Centre',
      description: 'Air-conditioned gymnasium featuring state-of-the-art cardio and weight training equipment.',
      galleryImage: 'https://static.wixstatic.com/media/cef78c_5bbfa2163b2f4f2081f26f212260840b~mv2.png',
      category: 'Fitness',
      displayOrder: 3,
    },
    {
      _id: 'amenity-4',
      amenityName: 'Multi-Sport Outdoor Court',
      description: 'Championship-standard courts for badminton, basketball, and tennis with floodlights.',
      galleryImage: 'https://static.wixstatic.com/media/cef78c_003f56e9c4d9435b8cb404c0ae38d15c~mv2.png',
      category: 'Sports',
      displayOrder: 4,
    },
    {
      _id: 'amenity-5',
      amenityName: "Children's Adventure Play Zone",
      description: 'Safe rubber-matted play park with slides, swings, and climbing frames for kids.',
      galleryImage: 'https://static.wixstatic.com/media/cef78c_7d740eb61dd74406a4b7f433543d87a5~mv2.png',
      category: 'Kids',
      displayOrder: 5,
    },
    {
      _id: 'amenity-6',
      amenityName: 'Landscaped Zen & Floral Park',
      description: 'Aroma gardens, meditation gazebos, reflexology walking tracks, and serene seating alcoves.',
      galleryImage: 'https://static.wixstatic.com/media/cef78c_295b9d290b0a4e7faefaf38db3132fcb~mv2.png',
      category: 'Nature',
      displayOrder: 6,
    },
  ],

  gatedlivingbenefits: [
    {
      _id: 'gated-1',
      benefitTitle: '24/7 Multi-Tier Gated Security',
      benefitDescription: 'Guarded entry and exit pavilion with RFID boom barriers, CCTV surveillance across all streets, and perimeter compound wall.',
      benefitVisual: 'https://static.wixstatic.com/media/cef78c_40c064e4ea754026bc4bf8f6b0b001d8~mv2.png',
      displayOrder: 1,
      isActive: true,
    },
    {
      _id: 'gated-2',
      benefitTitle: '100% Vastu-Compliant Layout',
      benefitDescription: 'Every single plot and internal avenue is planned adhering to authentic principles of Vaastu Shastra to invite positive energy, health, and prosperity.',
      benefitVisual: 'https://static.wixstatic.com/media/cef78c_1ed0e26987f94f4da1faa6988026c93d~mv2.png',
      displayOrder: 2,
      isActive: true,
    },
    {
      _id: 'gated-3',
      benefitTitle: 'Lush Green Parks & Open Spaces',
      benefitDescription: 'Expansive open areas dedicated to lush tree-lined boulevards, landscaped gardens, water features, and jogging tracks.',
      benefitVisual: 'https://static.wixstatic.com/media/cef78c_295b9d290b0a4e7faefaf38db3132fcb~mv2.png',
      displayOrder: 3,
      isActive: true,
    },
    {
      _id: 'gated-4',
      benefitTitle: 'Ready-to-Register Clear Titles',
      benefitDescription: 'Complete legal scrutiny with DC conversion, MPA sanction, and individual e-Khata ready for instantaneous registration and immediate construction.',
      benefitVisual: 'https://static.wixstatic.com/media/cef78c_3afbc2ed677e4695a734f9bc4f870313~mv2.png',
      displayOrder: 4,
      isActive: true,
    },
  ],

  investmenthighlights: [
    {
      _id: 'inv-1',
      highlightTitle: 'High-Growth East Bangalore Corridor',
      highlightQuote: 'Situated right in the epicenter of the emerging Bangalore-Chennai Expressway and Malur industrial growth engine.',
      emphasizedPhrase: 'Exponential Capital Appreciation',
      displayOrder: 1,
      additionalContext: 'Strategic growth belt with continuous civic and industrial investments.',
    },
    {
      _id: 'inv-2',
      highlightTitle: 'Unbeatable Multi-Modal Connectivity',
      highlightQuote: 'Direct access to STRR (Satellite Town Ring Road), Hoskote tech corridor, Whitefield IT Hub, and Kempegowda Intl Airport.',
      emphasizedPhrase: 'Seamless Daily Commute',
      displayOrder: 2,
      additionalContext: '40 mins from Whitefield and 20 mins from Hoskote industrial hub.',
    },
    {
      _id: 'inv-3',
      highlightTitle: 'Grade-A Developer Credibility',
      highlightQuote: "Meenakshi Group's hallmark of on-time delivery, uncompromising construction quality, and absolute customer trust.",
      emphasizedPhrase: '30+ Years of Excellence',
      displayOrder: 3,
      additionalContext: 'Thousands of happy homeowners across prime Bengaluru locations.',
    },
    {
      _id: 'inv-4',
      highlightTitle: 'Immediate Construction & High Rental Yield',
      highlightQuote: 'With complete underground infrastructure, power, and water connections in place, you can build your dream villa immediately.',
      emphasizedPhrase: 'Ready to Build Today',
      displayOrder: 4,
      additionalContext: 'High rental and resale demand from nearby tech parks and industrial clusters.',
    },
  ],

  contactformsubmissions: [],
};

// In-memory data store for local execution
const store: Record<string, WixDataItem[]> = { ...initialData };

function createQueryResult<T extends WixDataItem>(
  items: T[],
  totalCount: number,
  limit: number,
  skip: number
): WixDataQueryResult<T> {
  const currentPage = Math.floor(skip / limit);
  const totalPages = Math.ceil(totalCount / limit) || 1;

  return {
    items,
    totalCount,
    length: items.length,
    pageSize: limit,
    currentPage,
    totalPages,
    hasNext: () => (currentPage + 1) * limit < totalCount,
    hasPrev: () => currentPage > 0,
    next: async () => {
      const nextSkip = skip + limit;
      return createQueryResult(items.slice(nextSkip, nextSkip + limit), totalCount, limit, nextSkip);
    },
    prev: async () => {
      const prevSkip = Math.max(0, skip - limit);
      return createQueryResult(items.slice(prevSkip, prevSkip + limit), totalCount, limit, prevSkip);
    },
  };
}

export class BaseCrudService {
  static async getAll<T extends WixDataItem>(
    collectionId: string,
    options?: PaginationOptions
  ): Promise<WixDataQueryResult<T>> {
    const limit = options?.limit ?? 50;
    const skip = options?.skip ?? 0;

    const collection = (store[collectionId] || []) as T[];
    const paginatedItems = collection.slice(skip, skip + limit);

    return createQueryResult<T>(paginatedItems, collection.length, limit, skip);
  }

  static async getById<T extends WixDataItem>(
    collectionId: string,
    itemId: string
  ): Promise<T | null> {
    const collection = (store[collectionId] || []) as T[];
    const item = collection.find((i) => i._id === itemId);
    return item ? ({ ...item } as T) : null;
  }

  static async create<T extends WixDataItem>(
    collectionId: string,
    item: Partial<T>
  ): Promise<T> {
    if (!store[collectionId]) {
      store[collectionId] = [];
    }

    const newItem = {
      _id: item._id || crypto.randomUUID(),
      _createdDate: new Date(),
      _updatedDate: new Date(),
      ...item,
    } as T;

    store[collectionId].push(newItem);
    return { ...newItem };
  }

  static async update<T extends WixDataItem>(
    collectionId: string,
    item: Partial<T> & { _id: string }
  ): Promise<T> {
    if (!store[collectionId]) {
      store[collectionId] = [];
    }

    const index = store[collectionId].findIndex((i) => i._id === item._id);
    if (index === -1) {
      throw new Error(`Item with id ${item._id} not found in collection ${collectionId}`);
    }

    const updatedItem = {
      ...store[collectionId][index],
      ...item,
      _updatedDate: new Date(),
    } as T;

    store[collectionId][index] = updatedItem;
    return { ...updatedItem };
  }

  static async delete(collectionId: string, itemId: string): Promise<boolean> {
    if (!store[collectionId]) return false;

    const initialLength = store[collectionId].length;
    store[collectionId] = store[collectionId].filter((i) => i._id !== itemId);
    return store[collectionId].length < initialLength;
  }
}
